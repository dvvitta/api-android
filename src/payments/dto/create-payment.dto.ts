import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, Min } from 'class-validator';

export class CreatePaymentDto {
  @IsUUID()
  @IsNotEmpty()
  readonly orderId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  readonly paymentMethod: string;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  readonly amount: number;

  @IsString()
  @IsOptional()
  @MaxLength(30)
  readonly status?: string;

  @IsDateString()
  @IsOptional()
  readonly paidAt?: Date;
}