/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItemEntity } from "./order-item.entity";

@Entity('orders')
export class OrderEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ type: 'float' })
    total: number;

    @OneToMany(() => OrderItemEntity, orderItem => orderItem.order)
    items: OrderItemEntity[]

}