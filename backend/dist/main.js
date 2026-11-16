import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';
async function bootstrap() {
    console.log('[STARTUP] Starting NestJS');
    const app = await NestFactory.create(AppModule);
    console.log('[STARTUP] NestJS application created');
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.enableCors({
        origin: process.env.FRONTEND_URL || 'http://localhost:3000',
        credentials: true,
    });
    app.enableShutdownHooks();
    await app.listen(process.env.PORT ?? 4000);
    console.log('[STARTUP] NestJS is listening');
}
try {
    await bootstrap();
}
catch (error) {
    console.error('[STARTUP] NestJS startup failed:', error instanceof Error ? error.stack : error);
    throw error;
}
//# sourceMappingURL=main.js.map