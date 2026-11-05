import { Module } from '@nestjs/common';
import { CustomerAddressController } from './customer_address.controller.js';
import { CustomerAddressService } from './customer_address.service.js';

@Module({
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService]
})
export class CustomerAddressModule {}
