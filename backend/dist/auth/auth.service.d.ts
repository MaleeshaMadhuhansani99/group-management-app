import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto/register.dto.js';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto/login.dto.js';
import { GoogleLoginDto } from './dto/login.dto/google-login.dto.js';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    private readonly googleClient;
    register(dto: RegisterDto): Promise<{
        message: string;
        user: {
            id: string;
            username: string | null;
            createdAt: Date;
        };
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            username: string | null;
            name: string | null;
            image: string | null;
        };
    }>;
    googleLogin(dto: GoogleLoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            username: string | null;
            email: string | null;
            name: string | null;
            image: string | null;
        };
    }>;
}
