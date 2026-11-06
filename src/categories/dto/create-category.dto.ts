import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty({message:'Nama Kategori harus diisi'})
  @MaxLength(100, {message: 'Nama Kategori maksimal 100 karakter'})
  readonly nama: string;
}