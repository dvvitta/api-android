import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesServices: CategoriesService) {}

  // mencari semua data kategori
  @Get()
  findAll() {
    return this.categoriesServices.findAll();
  }

  // mencari data kategoroi berdasarkan id
  @Get(':id')
  show(@Param('id') id: string) {
    return this.categoriesServices.findOne(id);
  }

  // menambahkan data kategori baru
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesServices.create(createCategoryDto);
  }

  // mengubah data kategori berdasarkan id
  @Put(':id')
  updateData(
    @Param('id') id: string,
    @Body() updateCategoryDto: CreateCategoryDto,
  ) {
    // panggil service update data
    return this.categoriesServices.update(id, updateCategoryDto);
  }

  // categories.controller.ts
  @Delete(':id')
  async deleteData(@Param('id') id: string) {
    return await this.categoriesServices.deleteData(id);
  }
}
