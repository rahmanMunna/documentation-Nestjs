/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CustomerEntity } from "./entities/customer.entity";
import { CreateCustomerDTO } from "./dto/createCustomer.dto";

@Injectable()
export class CustomerRepository {
    constructor(@InjectRepository(CustomerEntity) private readonly customerRepo: Repository<CustomerEntity>) { }

    async add(createCustomerDTO: CreateCustomerDTO): Promise<CustomerEntity> {
        const newCustomer = this.customerRepo.create(createCustomerDTO);
        return await this.customerRepo.save(newCustomer);
    }
}