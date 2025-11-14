/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { CustomerRepository } from "./customer.repository";
import { CreateCustomerDTO } from "./dto/createCustomer.dto";
import { CustomerEntity } from "./entities/customer.entity";
import { UpdateCustomerDTO } from "./dto/updateCustomer.dto";
// Crud_Demo_1090
@Injectable()
export class CustomerService {
    constructor(private readonly customerRepo: CustomerRepository) { }

    async add(createCustomerDTO: CreateCustomerDTO): Promise<CustomerEntity> {
        // Write the business logics
        // check if email already exists, hash password, etc.
        return await this.customerRepo.add(createCustomerDTO);
    }
    async getAll(): Promise<CustomerEntity[]> {
        return await this.customerRepo.getAll();
    }
    async getById(id: number): Promise<CustomerEntity> {
        return await this.customerRepo.getById(id);
    }
    async update(cid: number, updateCustomer: UpdateCustomerDTO): Promise<object> {
        const customer = await this.customerRepo.update(cid, updateCustomer);
        const { id, name } = customer;
        return { id, name };
    }
    async delete(id: number): Promise<string> {
        return await this.customerRepo.delete(id);
    }
    async getAllName(): Promise<CustomerEntity[]> {
        return await this.customerRepo.getAllName();
    }
    async getAllActiveOneMonthSubscription(): Promise<CustomerEntity[]> {
        return await this.customerRepo.getAllActiveOneMonthSubscription();
    }
    async getNamesByDescendingOrder(): Promise<CustomerEntity[]> {
        return await this.customerRepo.getNamesByDescendingOrder();
    }
    async searchByName(searched: string): Promise<CustomerEntity[]> {
        return await this.customerRepo.searchByName(searched);
    }
}   