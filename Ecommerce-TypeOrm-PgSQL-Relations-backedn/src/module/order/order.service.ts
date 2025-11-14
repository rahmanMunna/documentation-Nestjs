/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PlaceOrder } from './dto/place-order.dto';
import { CreateOrderDTO } from './dto/createOrder.dto';
import { OrderRepo } from './order.repository';
// import { OrderItemEntity } from './entities/order-item.entity';
import { OrderItemRepo } from './order-item.repository';
import { IOrder } from './interfaces/order.interface';
import { CreateOrderItemDTO } from './dto/createOrderItem.dto';

@Injectable()
export class OrderService {

    constructor(private readonly orderRepo: OrderRepo, private readonly orderItemRepo: OrderItemRepo) { }

    async placeOrder(placeOrder: PlaceOrder): Promise<any> {
        const { products } = placeOrder;
        const { total } = placeOrder;

        const createOrder: CreateOrderDTO = {
            total: total,
        }
        const createdOrder: IOrder = await this.orderRepo.create(createOrder);

        const createOrderItems: CreateOrderItemDTO[] = [];

        for (const p of products) {
            createOrderItems.push({
                qty: p.qty,
                price: p.price,
                product: p,
                order: createdOrder
            })
        }

        const result = await this.orderItemRepo.create(createOrderItems);


        return result;

    }
}
