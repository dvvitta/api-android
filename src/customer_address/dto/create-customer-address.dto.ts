import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateCustomerAddressDto {
  @IsUUID()
  @IsNotEmpty()
  readonly customerId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  readonly recipientName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  readonly postalCode: string;
}