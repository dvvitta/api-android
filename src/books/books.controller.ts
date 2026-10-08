import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Controller('books') // @ is decorator
export class BooksController {
    constructor(private readonly booksService: BooksService) {}
    // menampilkan data
    @Get()
    findAll(){
        return this.booksService.findAll();
    }

    // menyimpan data
    @Post()
    simpanData(@Body() createBookDto: CreateBookDto) {
        return this.booksService.simpanData(createBookDto);
    }
    

    // Mengupdate data
    @Put(':id')
    updateData(@Param('id') id: string, @Body() createBookDto: CreateBookDto) : String{
        this.booksService.updateData(+id, createBookDto);
        return `Mengupdate data buku dengan id ${id}`;
    }

    // Menghapus data
    @Delete(':id')
    hapusData(@Param('id') id: string) : String{
        this.booksService.hapusData(+id);
        return `Menghapus data buku dengan id ${id}`;
    }

}

