import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePublisherDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly address?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  readonly phone?: string;
}