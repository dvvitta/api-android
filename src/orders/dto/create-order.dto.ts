import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, Min } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @IsNotEmpty()
  readonly customerId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  readonly orderNumber: string;

  @IsString()
  @IsOptional()
  @MaxLength(30)
  readonly status?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  readonly totalAmount?: number;
}