import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
    private books: Book[] = [{
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        isbn: '978-0-7432-7356-5',
        publishedYear: 1925,
        isAvailable: true
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        isbn: '978-0-06112-008-4',
        publishedYear: 1960,
        isAvailable: false
    }
];

//logic menampilkan data

findAll(): Book[]{
    return this.books;

}

// simpan datra
    simpanData(createBookDto: CreateBookDto): Book {
        // simpan data ke database atau array
        const newBook: Book = {
            id: this.books.length + 1,
            title: createBookDto.title,
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            publishedYear: createBookDto.publishedYear,
            isAvailable: true
        };
        this.books.push(newBook);
        return newBook;
    }
// update data
    updateData(id: number, createBookDto: CreateBookDto): Book {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error(`Book with id ${id} not found`);
        }
        const updatedBook: Book = {
            ...this.books[bookIndex],
            title: createBookDto.title,
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            publishedYear: createBookDto.publishedYear,
        };
        this.books[bookIndex] = updatedBook;
        return updatedBook;
    }

// hapus data
    hapusData(id: number): void {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error(`Book with id ${id} not found`);
        }
        this.books.splice(bookIndex, 1);
    }}
