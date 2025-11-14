/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { CustomerEntity } from "./entities/customer.entity";
import { CreateCustomerDTO } from "./dto/createCustomer.dto";
import { UpdateCustomerDTO } from "./dto/updateCustomer.dto";

@Injectable()
export class CustomerRepository {
    constructor(@InjectRepository(CustomerEntity) private readonly customerRepo: Repository<CustomerEntity>) { }

    async add(createCustomerDTO: CreateCustomerDTO): Promise<CustomerEntity> {
        const newCustomer = this.customerRepo.create(createCustomerDTO);
        return await this.customerRepo.save(newCustomer);
    }

    async getAll(): Promise<CustomerEntity[]> {
        return await this.customerRepo.find();
    }

    async getById(id: number): Promise<CustomerEntity> {
        const result = await this.customerRepo.findOneBy({ id: id });

        if (!result) {
            throw new NotFoundException(`Customer id : ${id} - not found`);
        }
        return result;

    }

    async update(id: number, updateCustomer: UpdateCustomerDTO): Promise<CustomerEntity> {
        await this.customerRepo.update(id, updateCustomer);
        return this.getById(id);
    }

    async delete(id: number): Promise<string> {
        await this.customerRepo.delete(id);
        return `customer - ${id} has been deleted`;
    }

    async getAllName(): Promise<CustomerEntity[]> {
        return await this.customerRepo.find({
            select: {
                name: true
            }
        })
    }

    async getAllActiveOneMonthSubscription(): Promise<CustomerEntity[]> {
        // and
        return await this.customerRepo.find({
            where: {
                subscriptionMonth: 1,
                isActive: true,
            },

        })


        // or
        // where:
        // [
        //     { subscriptionMonth: 1, },
        //     { isActive: true, }
        // ]

    }

    async getNamesByDescendingOrder(): Promise<CustomerEntity[]> {
        return await this.customerRepo.find({
            order: {
                name: 'DESC',
                id: 'DESC'
            },
        })
    }

    async searchByName(searched: string): Promise<CustomerEntity[]> {
        return await this.customerRepo.find({
            where: {
                name: Like(`%${searched}%`)
            }
        })
    }
}