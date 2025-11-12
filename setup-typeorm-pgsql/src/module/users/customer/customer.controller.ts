/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CreateCustomerDTO } from "./dto/createCustomer.dto";
import { CustomerEntity } from "./entities/customer.entity";

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Post('add')
    async add(@Body() createCustomerDTO: CreateCustomerDTO): Promise<CustomerEntity> {
        return await this.customerService.add(createCustomerDTO);
    }
}