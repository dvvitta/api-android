import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Title harus diisi' })
  @IsString({ message: 'Title harus berupa teks' })
  readonly title: string;

  @IsNotEmpty({ message: 'ISBN harus diisi' })
  @IsString({ message: 'ISBN harus berupa teks' })
  readonly isbn: string;

  @IsNotEmpty({ message: 'Published Year harus diisi' })
  @IsInt({ message: 'Published year harus berupa angka bulat' })
  readonly publishedYear: number;

  @IsOptional()
  @IsBoolean({ message: 'isAvailable harus berupa boolean' })
  readonly isAvailable?: boolean;

  @IsNotEmpty({ message: 'Price harus diisi' })
  @IsNumber({}, { message: 'Price harus berupa angka' })
  @Min(0, { message: 'Price tidak boleh bernilai negatif' })
  readonly price: number;

  @IsNotEmpty({ message: 'Stock harus diisi' })
  @IsInt({ message: 'Stock harus berupa angka bulat' })
  @Min(0, { message: 'Stock tidak boleh bernilai negatif' })
  readonly stock: number;

  @IsOptional()
  @IsUUID('all', { message: 'Category ID harus berupa UUID yang valid' })
  readonly categoryId?: string;

  @IsOptional()
  @IsUUID('all', { message: 'Publisher ID harus berupa UUID yang valid' })
  readonly publisherId?: string;
}