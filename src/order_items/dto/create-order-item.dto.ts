import { IsInt, IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';

export class CreateOrderItemDto {
  @IsUUID()
  @IsNotEmpty()
  readonly orderId: string;

  @IsUUID()
  @IsNotEmpty()
  readonly bookId: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  readonly quantity: number;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  readonly subtotal: number;
}