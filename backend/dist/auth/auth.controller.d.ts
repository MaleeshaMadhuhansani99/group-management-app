import type { Response } from 'express';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto/register.dto.js';
import { LoginDto } from './dto/login.dto/login.dto.js';
import { GoogleLoginDto } from './dto/login.dto/google-login.dto.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    private setAuthCookie;
    register(dto: RegisterDto): Promise<{
        message: string;
        user: {
            id: string;
            username: string | null;
            createdAt: Date;
        };
    }>;
    login(dto: LoginDto, response: Response): Promise<{
        message: string;
        user: {
            id: string;
            username: string | null;
            name: string | null;
            image: string | null;
        };
    }>;
    googleLogin(dto: GoogleLoginDto, response: Response): Promise<{
        message: string;
        user: {
            id: string;
            username: string | null;
            email: string | null;
            name: string | null;
            image: string | null;
        };
    }>;
}
