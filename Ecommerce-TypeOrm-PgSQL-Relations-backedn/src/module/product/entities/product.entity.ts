/* eslint-disable prettier/prettier */

import { OrderItemEntity } from "src/module/order/entities/order-item.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'int' })
    qty: number;

    @Column({ type: 'float' })
    price: number;

    @Column({ type: 'float' })
    discount: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    addedAt: Date;

    @OneToMany(() => OrderItemEntity, orderItem => orderItem.product)
    orderItems: OrderItemEntity[]
}