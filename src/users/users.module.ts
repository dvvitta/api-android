import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity.js';
import { CustomerAddress } from '../customer_address/entites/customer_address.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([User, CustomerAddress])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
