/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProductRepo as ProductService } from './product.repository';
import { CreateProduct } from './dto/createProduct.dto';
import { ProductEntity } from './entities/product.entity';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post('add')
    async add(@Body() product: CreateProduct): Promise<ProductEntity> {
        return this.productService.add(product);
    }

    @Get('get')
    async getAll(): Promise<ProductEntity[]> {
        return this.productService.getAll();
    }

    @Get('get/:id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<ProductEntity | null> {
        return this.productService.getById(id);
    }
}
