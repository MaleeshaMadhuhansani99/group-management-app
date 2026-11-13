var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as argon2 from 'argon2';
import { OAuth2Client } from 'google-auth-library';
import { PrismaService } from '../prisma/prisma.service.js';
import { ConflictException, Injectable, UnauthorizedException, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    async register(dto) {
        const username = dto.username.trim().toLowerCase();
        const existingUser = await this.prisma.user.findUnique({
            where: { username },
        });
        if (existingUser) {
            throw new ConflictException('Username is already taken');
        }
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
        }
        catch (error) {
            if (typeof error === 'object' &&
                error !== null &&
                'code' in error &&
                error.code === 'P2002') {
                throw new ConflictException('Username is already taken');
            }
            throw error;
        }
    }
    async login(dto) {
        const identifier = dto.identifier.trim().toLowerCase();
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [{ username: identifier }],
            },
        });
        if (!user || !user.passwordHash) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await argon2.verify(user.passwordHash, dto.password);
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
                name: user.name,
                image: user.image,
            },
        };
    }
    async googleLogin(dto) {
        const clientId = process.env.GOOGLE_CLIENT_ID;
        if (!clientId) {
            throw new Error('GOOGLE_CLIENT_ID is not configured');
        }
        let payload;
        try {
            const ticket = await this.googleClient.verifyIdToken({
                idToken: dto.credential,
                audience: clientId,
            });
            payload = ticket.getPayload();
        }
        catch {
            throw new UnauthorizedException('Invalid Google credential');
        }
        if (!payload ||
            !payload.sub ||
            !payload.email ||
            payload.email_verified !== true) {
            throw new UnauthorizedException('Google account email could not be verified');
        }
        const googleId = payload.sub;
        const email = payload.email.toLowerCase();
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
        if (!user) {
            const existingUser = await this.prisma.user.findUnique({
                where: { email },
            });
            if (existingUser) {
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
            }
            else {
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
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map