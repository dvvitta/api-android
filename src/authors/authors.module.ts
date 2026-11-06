import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller.js';
import { AuthorsService } from './authors.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/authors.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Author])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
  exports: [TypeOrmModule],
})
export class AuthorsModule {}
