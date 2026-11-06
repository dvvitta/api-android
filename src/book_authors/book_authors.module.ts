import { Module } from '@nestjs/common';
import { BookAuthorsController } from './book_authors.controller.js';
import { BookAuthorsService } from './book_authors.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookAuthor } from './entities/book_authors.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([BookAuthor])],
  controllers: [BookAuthorsController],
  providers: [BookAuthorsService],
  exports: [TypeOrmModule],
})
export class BookAuthorsModule {}
