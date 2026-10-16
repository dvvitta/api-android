import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
    @IsNotEmpty({ message: 'email harus diisi' })
    @IsEmail({}, { message: 'format email harus @' })
    readonly email: string;

    @IsNotEmpty({ message: 'password harus diisi' })
    @MinLength(8, { message: 'panjang password minimal 8 karakter' })
    readonly password: string;
}