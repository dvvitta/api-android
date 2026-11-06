import { Module } from '@nestjs/common';
import { CustomerAddressController } from './customer_address.controller.js';
import { CustomerAddressService } from './customer_address.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerAddress } from './entites/customer_address.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerAddress])],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
  exports: [TypeOrmModule],
})
export class CustomerAddressModule {}
