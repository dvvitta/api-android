import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-register.dto.js';
import { LoginDto } from './dto/create-login.dto.js';
import { ForgotPasswordDto } from './dto/create-forgot-password.dto.js';
import { ResetPasswordDto } from './dto/create-reset-password.dto.js';
import { Users } from './entities/auth-entity.js';

@Injectable()
export class AuthService {
  // Menyimpan data user sementara 
  private users: Users[] = [];

  // regis
  register(registerDto: RegisterDto): Users | string {
    // Cek password dan confirm password
    if (registerDto.password !== registerDto.confirmPassword) {
      return 'Password dan confirm password tidak sama';
    }

    // Cek apakah email sudah terdaftar
    const existingUser = this.users.find(
      user => user.email === registerDto.email,
    );

    if (existingUser) {
      return 'Email sudah terdaftar';
    }

    // Membuat user baru
    const newUser: Users = {
      id: this.users.length + 1,
      name: registerDto.name,
      email: registerDto.email,
      password: registerDto.password,
    };

    // Simpan ke array
    this.users.push(newUser);

    return newUser;
  }

  // Login
  login(loginDto: LoginDto): string {
    const user = this.users.find(
      user =>
        user.email === loginDto.email &&
        user.password === loginDto.password,
    );

    if (!user) {
      return 'Login gagal: email atau password salah';
    }

    return `Login berhasil, selamat datang ${user.name}`;
  }

  // Forgot pw
  forgotPassword(forgotPasswordDto: ForgotPasswordDto): string {
    const user = this.users.find(
      user => user.email === forgotPasswordDto.email,
    );

    if (!user) {
      return 'Email tidak ditemukan';
    }

    return 'Link reset password dikirim';
  }

  // Reset pw
  resetPassword(
    token: string,
    resetPasswordDto: ResetPasswordDto,
  ): string {
    // Cek password baru
    if (
      resetPasswordDto.newPassword !==
      resetPasswordDto.confirmNewPassword
    ) {
      return 'Password dan confirm password tidak sama';
    }

    return 'Password berhasil direset';
  }
}