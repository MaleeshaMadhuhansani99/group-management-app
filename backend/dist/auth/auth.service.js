var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, Injectable, } from '@nestjs/common';
import * as argon2 from 'argon2';
import { PrismaService } from '../prisma/prisma.service.js';
;
let AuthService = class AuthService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(dto) {
        const username = dto.username.trim();
        const email = dto.email.trim().toLowerCase();
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
                select: {
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
        }
        catch (error) {
            if (typeof error === 'object' &&
                error !== null &&
                'code' in error &&
                error.code === 'P2002') {
                throw new ConflictException('Username or email is already registered');
            }
            throw error;
        }
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map