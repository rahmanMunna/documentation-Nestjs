/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./entities/product.entity";
import { CreateProduct } from "./dto/createProduct.dto";
import { Repository } from "typeorm";

@Injectable()
export class ProductRepo {
    constructor(@InjectRepository(ProductEntity) private readonly repo: Repository<ProductEntity>) { }

    async add(product: CreateProduct): Promise<ProductEntity> {
        const p = this.repo.create(product);
        return await this.repo.save(p);
    }

    async getAll(): Promise<ProductEntity[]> {
        return await this.repo.find();
    }

    async getById(id: number): Promise<ProductEntity | null> {
        return await this.repo.findOneBy({ id: id });
    }



}