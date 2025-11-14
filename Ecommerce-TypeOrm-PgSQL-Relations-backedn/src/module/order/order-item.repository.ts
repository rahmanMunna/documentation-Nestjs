/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrderItemEntity } from "./entities/order-item.entity";
import { CreateOrderItemDTO } from "./dto/createOrderItem.dto";

@Injectable()
export class OrderItemRepo {
    constructor(@InjectRepository(OrderItemEntity) private readonly repo: Repository<OrderItemEntity>) { }

    async create(createOrderItems: CreateOrderItemDTO[]): Promise<OrderItemEntity[]> {
        const o = this.repo.create(createOrderItems);
        return await this.repo.save(o);
    }
}