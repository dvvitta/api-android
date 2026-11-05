import { IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateShipmentDto {
  @IsUUID()
  @IsNotEmpty()
  readonly orderId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly courier: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  readonly trackingNumber?: string;

  @IsString()
  @IsOptional()
  @MaxLength(30)
  readonly status?: string;

  @IsDateString()
  @IsOptional()
  readonly shippedAt?: Date;

  @IsDateString()
  @IsOptional()
  readonly deliveredAt?: Date;
}