/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";
import { ProductEntity } from "src/module/product/entities/product.entity";

@Entity('order_items')
export class OrderItemEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    qty: number;

    @Column({ type: 'float' })
    price: number

    @ManyToOne(() => OrderEntity, order => order.items, { onDelete: 'CASCADE' })
    order: OrderEntity;

    @ManyToOne(() => ProductEntity, product => product.orderItems, { eager: true })
    product: ProductEntity;

}