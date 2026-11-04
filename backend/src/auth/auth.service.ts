import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import * as argon2 from 'argon2';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto/register.dto.js';
;

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: RegisterDto) {
    const username = dto.username.trim();
    const email = dto.email.trim().toLowerCase();

    // Check whether the username or email already exists.
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new ConflictException('Email is already registered');
      }

      throw new ConflictException('Username is already taken');
    }

    // Hash the password securely.
    const passwordHash = await argon2.hash(dto.password, {
      type: argon2.argon2id,
    });

    try {
      const user = await this.prisma.user.create({
        data: {
          username,
          email,
          passwordHash,
          emailVerifiedAt: null,
        },
        select: { //return only the necessary fields to avoid exposing sensitive information
          id: true,
          username: true,
          email: true,
          createdAt: true,
        },
      });

      return {
        message: 'Registration successful. Please verify your email.',
        user,
      };
    } catch (error) {
      // Database uniqueness constraints protect against simultaneous requests.
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 'P2002' //Unique constraint failed. built in prisma error code for unique constraint violation
      ) {
        throw new ConflictException(
          'Username or email is already registered',
        );
      }

      throw error;
    }
  }
}