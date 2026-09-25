import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('books') // @ is decorator
export class BooksController {
    // menampilkan data
    @Get()
    findAll() : string{
        return 'Menampilkan semua data buku';
    }

    // menyimpan data
    @Post()
    SimpanData() : String{
        return 'Menyimpan data buku';   
    }

    // Mengupdate data
    @Put(':id')
    UpdateData(@Param('id') id: string) : String{
        return `Mengupdate data buku dengan id ${id}`;
    }

    // Menghapus data
    @Delete(':id')
    HapusData(@Param('id') id: string) : String{
        return `Menghapus data buku dengan id ${id}`;
    }

}

