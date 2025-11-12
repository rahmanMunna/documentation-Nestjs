/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CustomerModule } from './module/users/customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CustomerModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '5850',
      database: 'crudV1',
      autoLoadEntities: true,
      synchronize: true
    }
  )],
  controllers: [],
  providers: [],
})
export class AppModule { }
