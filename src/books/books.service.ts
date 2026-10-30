import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  // fungsi untuk akses ke database
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  //logic menampilkan data

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
    order: {
      createdAt: 'DESC';
    }
  }

  // simpan datra
  async simpanData(createBookDto: CreateBookDto): Promise<Book> {
    // simpan data ke database atau array
    const newBook = this.bookRepository.create(createBookDto);

    return await this.bookRepository.save(newBook);
  }

  // menampilkan data berdasarkan id
  async findOne(id: string): Promise<Book> {
    // cari buku berdasarkn id
    const book = await this.bookRepository.findOneBy({ id });

    // jika tdk ada
    if (!book) {
      throw new NotFoundException(`Buku ${id} tidak ditemukan`);
    }
    // jika data buku ditemukan
    return book;
  }

  //   update data
  async updateData(id: string, createBookDto: CreateBookDto): Promise<Book> {
    // cek dulu datanya buku ada atau tdk
    const book = await this.findOne(id);

    // gabungkan perubahannya
    const updateBook = await this.bookRepository.merge(book, createBookDto);

    // simpan / update data
    return await this.bookRepository.save(updateBook);
  }

  //   menghapus data
  async deleteData(id: string): Promise<{message: string, deletedId: string}>{
    await this.findOne(id)

    await this.bookRepository.softDelete(id)

    return {
        message:  `Data ${id} berhasil dihapus`,
        deletedId: id
    }
  }
}
