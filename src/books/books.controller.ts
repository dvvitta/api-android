import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service.js';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Controller('books') // @ is decorator
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  // menampilkan data
  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  // menyimpan data
  @Post()
  simpanData(@Body() createBookDto: CreateBookDto) {
    return this.booksService.simpanData(createBookDto);
  }

  // menampilkan data berdasarkan id
  @Get(':id')
  show(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  // // Mengupdate data
  @Put(':id')
  updateData(@Param('id') id: string, @Body() CreateBookDto: CreateBookDto) {
    // panggil service update data
    return this.booksService.updateData(id, CreateBookDto);
  }

  // // Menghapus data
  @Delete(':id')
  deleteData(@Param('id') id: string){
     return this.booksService.deleteData(id);
  }
}
