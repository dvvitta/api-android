import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/create-register.dto.js';
import { LoginDto } from './dto/create-login.dto.js';
import { ForgotPasswordDto } from './dto/create-forgot-password.dto.js';
import { ResetPasswordDto } from './dto/create-reset-password.dto.js';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    // POST /auth/register
    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    // POST /auth/login
    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    // POST /auth/forgot-password
    @Post('forgot-password')
    forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
        return this.authService.forgotPassword(forgotPasswordDto);
    }

    // PUT /auth/reset-password/:token
    @Put('reset-password/:token')
    resetPassword(
        @Param('token') token: string,
        @Body() resetPasswordDto: ResetPasswordDto,
    ) {
        return this.authService.resetPassword(
            token,
            resetPasswordDto,
        );
    }
}