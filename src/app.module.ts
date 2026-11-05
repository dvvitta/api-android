import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Joi from 'joi';

// 1. IMPORT SEMUA ENTITAS
import { User } from './users/entity/user.entity.js';
import { Book } from './books/entities/book-entity.js';
import { Category } from './categories/entities/catagories-entity.js';
import { Publisher } from './publishers/entities/publishers.entity.js';
import { Author } from './authors/entities/authors.entity.js';
import { BookAuthor } from './book_authors/entities/book_authors.entity.js';
import { Order } from './orders/entities/orders.entity.js';
import { OrderItem } from './order_items/entities/order_items.entity.js';
import { Payment } from './payments/entities/payments.entity.js';
import { Shipment } from './shipments/entities/shipments.entity.js';
import { CustomerAddress } from './customer_address/entites/customer_address.entity.js';

// Modul-modul
import { BooksModule } from './books/books.module.js';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { CategoriesModule } from './categories/categories.module.js';
import { PublishersModule } from './publishers/publishers.module.js';
import { CustomerAddressModule } from './customer_address/customer_address.module.js';
import { AuthorsModule } from './authors/authors.module.js';
import { BookAuthorsModule } from './book_authors/book_authors.module.js';
import { OrdersModule } from './orders/orders.module.js';
import { OrderItemsModule } from './order_items/order_items.module.js';
import { PaymentsModule } from './payments/payments.module.js';
import { ShipmentsModule } from './shipments/shipments.module.js';
import { LogMiddlewareMiddleware } from './middleware/log-middleware/log-middleware.middleware.js';

@Module({
  imports: [
    BooksModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        NODE_ENV: Joi.string().valid('development', 'staging', 'production').default('development'),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().default(5432),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),

        // DAFTARKAN SEMUA ENTITAS DI SINI:
        entities: [
          User,
          Book,
          Category,
          Publisher,
          Author,
          BookAuthor,
          Order,
          OrderItem,
          Payment,
          Shipment,
          CustomerAddress,
        ],

        synchronize: true, // Auto-generate semua tabel ke PostgreSQL
      }),
    }),
    UsersModule,
    CategoriesModule,
    PublishersModule,
    CustomerAddressModule,
    AuthorsModule,
    BookAuthorsModule,
    OrdersModule,
    OrderItemsModule,
    PaymentsModule,
    ShipmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddlewareMiddleware).forRoutes('*');
  }
}