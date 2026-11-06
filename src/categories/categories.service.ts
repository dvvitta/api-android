import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/catagories-entity.js';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto.js';

@Injectable()
export class CategoriesService {
    remove(id: string) {
        throw new Error('Method not implemented.');
    }
    findById(id: string) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category> 
    ){}

    // menampilkan semua data kategori 
    async findAll(): Promise<Category[]> {
        return await this.categoryRepository.find({
            order:{createdAt:'DESC'}
        });
    }

    // menampilkan data berdasarkan id
      async findOne(id: string): Promise<Category> {
        // cari kategori berdasarkan id
        const category = await this.categoryRepository.findOneBy({ id });

        // jika tdk ada
        if (!category) {
          throw new NotFoundException(`Kategori ${id} tidak ditemukan`);
        }
        // jika data kategori ditemukan
        return category;
      }

    // menyimpan data kategori baru
    async create(category: CreateCategoryDto): Promise<Category> {
        const newCategory = this.categoryRepository.create(category);

        return await this.categoryRepository.save(newCategory);
    }

    // mengubah data kategori berdasarkan id
    async update(id: string, updateCategory: CreateCategoryDto): Promise<Category> {
        // cek dulu datanya kategori ada atau tdk
        const category = await this.findOne(id);

        // gabungkan perubahannya
        const updatedCategory = this.categoryRepository.merge(category, updateCategory);

        // simpan / update data
        return await this.categoryRepository.save(updatedCategory);
      }

    // menghapus data kategori berdasarkan id 
    async deleteData(id: string): Promise<{message: string, deletedId: string}>{
        await this.findOne(id)

        await this.categoryRepository.softDelete(id)

        return {
            message:  `Data ${id} berhasil dihapus`,
            deletedId: id
        };
    }
}
