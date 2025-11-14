/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CreateCustomerDTO } from "./dto/createCustomer.dto";
import { CustomerEntity } from "./entities/customer.entity";
import { UpdateCustomerDTO } from "./dto/updateCustomer.dto";

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Post('add')
    async add(@Body() createCustomerDTO: CreateCustomerDTO): Promise<CustomerEntity> {
        return await this.customerService.add(createCustomerDTO);
    }
    @Get('all')
    async getAll(): Promise<CustomerEntity[]> {
        return await this.customerService.getAll();
    }

    @Get('names')
    async getAllName(): Promise<CustomerEntity[]> {
        return await this.customerService.getAllName();
    }
    @Get('one-month-subscription')
    async getAllActiveOneMonthSubscription(): Promise<CustomerEntity[]> {
        return await this.customerService.getAllActiveOneMonthSubscription();
    }
    @Get('getNameByDec')
    async getNamesByDescendingOrder(): Promise<CustomerEntity[]> {
        return this.customerService.getNamesByDescendingOrder();
    }
    @Get('search')
    async searchByName(@Query('name') searched: string): Promise<CustomerEntity[]> {
        return await this.customerService.searchByName(searched);
    }
    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<CustomerEntity> {
        console.log(typeof (id))
        return await this.customerService.getById(id);
    }
    @Put('update/:id')
    async update(@Param('id', ParseIntPipe) cid: number, @Body() updateCustomer: UpdateCustomerDTO): Promise<object> {
        return await this.customerService.update(cid, updateCustomer);

    }
    @Delete('delete/:id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
        return await this.customerService.delete(id);
    }



}