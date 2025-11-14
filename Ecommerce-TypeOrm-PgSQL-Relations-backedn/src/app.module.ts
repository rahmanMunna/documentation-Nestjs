/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CustomerModule } from './module/users/customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './module/product/product.module';
import { OrderModule } from './module/order/order.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CustomerModule, TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: "5850",
        database: "crudV1",
        autoLoadEntities: true,
        synchronize: true
      }
    ),
    ProductModule,
    OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
