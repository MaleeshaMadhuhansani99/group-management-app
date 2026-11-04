import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto/register.dto.js';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
