/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderEntity } from "./entities/order.entity";
import { Repository } from "typeorm";
import { CreateOrderDTO } from "./dto/createOrder.dto";

@Injectable()
export class OrderRepo {
    constructor(@InjectRepository(OrderEntity) private readonly repo: Repository<OrderEntity>) { }

    async create(order: CreateOrderDTO): Promise<OrderEntity> {
        const createdOrder = this.repo.create(order);
        return await this.repo.save(createdOrder);
    }
}