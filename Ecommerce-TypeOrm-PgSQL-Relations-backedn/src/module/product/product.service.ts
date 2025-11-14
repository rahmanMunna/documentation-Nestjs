/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { CreateProduct } from './dto/createProduct.dto';
import { ProductRepo } from './product.repository';

@Injectable()
export class ProductService {

    constructor(private readonly productRepo: ProductRepo) { }
    async add(product: CreateProduct): Promise<ProductEntity> {
        return this.productRepo.add(product);
    }

    async getAll(): Promise<ProductEntity[]> {
        return this.productRepo.getAll();
    }

    async getById(id: number): Promise<ProductEntity | null> {
        return this.productRepo.getById(id);
    }
}
