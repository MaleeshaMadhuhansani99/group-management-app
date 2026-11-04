import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto/register.dto.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        message: string;
        user: {
            username: string | null;
            email: string;
            id: string;
            createdAt: Date;
        };
    }>;
}
