import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBookAuthorDto {
  @IsUUID()
  @IsNotEmpty()
  readonly bookId: string;

  @IsUUID()
  @IsNotEmpty()
  readonly authorId: string;
}