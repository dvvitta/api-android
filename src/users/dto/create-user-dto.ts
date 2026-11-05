import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(150)
  readonly email: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  readonly phone?: string;
}