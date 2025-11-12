/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { CustomerRepository } from "./customer.repository";
import { CreateCustomerDTO } from "./dto/createCustomer.dto";
import { CustomerEntity } from "./entities/customer.entity";

@Injectable()
export class CustomerService {
    constructor(private readonly customerRepo: CustomerRepository) { }

    async add(createCustomerDTO: CreateCustomerDTO): Promise<CustomerEntity> {
        // Write the business logics
        // check if email already exists, hash password, etc.
        return await this.customerRepo.add(createCustomerDTO);
    }
}   