import * as argon2 from 'argon2';
import { OAuth2Client } from 'google-auth-library';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto/register.dto.js';
import {
  ConflictException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto/login.dto.js';
import { GoogleLoginDto } from './dto/login.dto/google-login.dto.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  private readonly googleClient = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
  );

  async register(dto: RegisterDto) {
    const username = dto.username.trim().toLowerCase();

    // Check whether username already exists.
    const existingUser = await this.prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      throw new ConflictException('Username is already taken');
    }

    // Hash password.
    const passwordHash = await argon2.hash(dto.password, {
      type: argon2.argon2id,
    });

    try {
      const user = await this.prisma.user.create({
        data: {
          username,
          email: null,
          passwordHash,
          googleId: null,
          emailVerifiedAt: null,
        },
        select: {
          id: true,
          username: true,
          createdAt: true,
        },
      });

      return {
        message: 'Registration successful',
        user,
      };
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Username is already taken');
      }

      throw error;
    }
  }

  async login(dto: LoginDto) {
    const identifier = dto.identifier.trim().toLowerCase();

    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ username: identifier }],
      },
    });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await argon2.verify(
      user.passwordHash,
      dto.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      username: user.username,
    });

    return {
      accessToken,
      user: {
        id: user.id,
        username: user.username,
        // email: user.email,
        name: user.name,
        image: user.image,
      },
    };
  }

  async googleLogin(dto: GoogleLoginDto) {
    const clientId = process.env.GOOGLE_CLIENT_ID;

    if (!clientId) {
      throw new Error('GOOGLE_CLIENT_ID is not configured');
    }

    // 1. Verify Google ID token.
    let payload;

    try {
      const ticket = await this.googleClient.verifyIdToken({
        idToken: dto.credential,
        audience: clientId,
      });

      payload = ticket.getPayload();
    } catch {
      throw new UnauthorizedException('Invalid Google credential');
    }

    if (
      !payload ||
      !payload.sub ||
      !payload.email ||
      payload.email_verified !== true
    ) {
      throw new UnauthorizedException(
        'Google account email could not be verified',
      );
    }

    const googleId = payload.sub;
    const email = payload.email.toLowerCase();

    // 2. First, find an account already linked to this Google ID.
    let user = await this.prisma.user.findUnique({
      where: { googleId },
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        image: true,
      },
    });

    // 3. If not found, search using the Google email.
    if (!user) {
      const existingUser = await this.prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        // Link Google to the existing account.
        user = await this.prisma.user.update({
          where: { id: existingUser.id },
          data: {
            googleId,
            emailVerifiedAt: existingUser.emailVerifiedAt ?? new Date(),
            name: existingUser.name ?? payload.name ?? null,
            image: existingUser.image ?? payload.picture ?? null,
          },
          select: {
            id: true,
            username: true,
            email: true,
            name: true,
            image: true,
          },
        });
      } else {
        // 4. Create a new Google account.
        user = await this.prisma.user.create({
          data: {
            username: email,
            email,
            passwordHash: null,
            googleId,
            emailVerifiedAt: new Date(),
            name: payload.name ?? null,
            image: payload.picture ?? null,
          },
          select: {
            id: true,
            username: true,
            email: true,
            name: true,
            image: true,
          },
        });
      }
    }

    // 5. Generate application JWT.
    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      username: user.username,
      email: user.email,
    });

    return {
      accessToken,
      user,
    };
  }
}
