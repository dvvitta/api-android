import { Module } from '@nestjs/common';
import { ShipmentsController } from './shipments.controller.js';
import { ShipmentsService } from './shipments.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from './entities/shipments.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Shipment])],
  controllers: [ShipmentsController],
  providers: [ShipmentsService],
  exports: [TypeOrmModule],
})
export class ShipmentsModule {}
