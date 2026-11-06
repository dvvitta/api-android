import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublishersService } from './publishers.service.js';
import { PublishersController } from './publishers.controller.js';
import { Publisher } from './entities/publishers.entity.js'; // Sesuaikan nama filenya

@Module({
  imports: [TypeOrmModule.forFeature([Publisher])], 
  controllers: [PublishersController],
  providers: [PublishersService],
  exports: [TypeOrmModule],
})
export class PublishersModule {}