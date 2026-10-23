import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    // fungsi untuk akses ke database
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>

    ){}

//logic menampilkan data

async findAll(): Promise<Book[]>{
    return await this.bookRepository.find()
    order:{createdAt: 'DESC'}

}

// simpan datra
    async simpanData(createBookDto: CreateBookDto): Promise<Book> {
        // simpan data ke database atau array
       const newBook = this.bookRepository.create(createBookDto);

       return await this.bookRepository.save(newBook);
    }
// // update data
//     async updateData(id: number, createBookDto: CreateBookDto): Book {
//         const bookIndex = this.books.findIndex(book => book.id === id);
//         if (bookIndex === -1) {
//             throw new Error(`Book with id ${id} not found`);
//         }
//         const updatedBook: Book = {
//             ...this.books[bookIndex],
//             title: createBookDto.title,
//             author: createBookDto.author,
//             isbn: createBookDto.isbn,
//             publishedYear: createBookDto.publishedYear,
//         };
//         this.books[bookIndex] = updatedBook;
//         return updatedBook;
//     }

// // hapus data
//     hapusData(id: number): void {
//         const bookIndex = this.books.findIndex(book => book.id === id);
//         if (bookIndex === -1) {
//             throw new Error(`Book with id ${id} not found`);
//         }
//         this.books.splice(bookIndex, 1);
    // }
}
