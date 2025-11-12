/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerRepository } from "./customer.repository";
import { CustomerController } from "./customer.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity } from "./entities/customer.entity";

@Module(
    {
        imports: [TypeOrmModule.forFeature([CustomerEntity])],
        providers: [CustomerService, CustomerRepository],
        controllers: [CustomerController]
    }
)
export class CustomerModule { }