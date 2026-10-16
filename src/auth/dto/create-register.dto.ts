import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterDto {

    @IsNotEmpty({ message: 'Nama harus diisi' })
    readonly name: string;

    @IsNotEmpty({ message: 'email harus diisi' })
    @IsEmail({}, { message: 'format email harus @' })
    readonly email: string;

    @IsNotEmpty({ message: 'password harus diisi' })
    @MinLength(8, { message: 'password harus diisi minimal 8 karakter' })
    readonly password: string;

    readonly confirmPassword: string;
}