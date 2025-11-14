/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Customers')
export class CustomerEntity {

    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name: string;

    @Column({ name: 'password', type: 'varchar', length: 12 })
    password: string;

    @Column({ name: 'isActive', type: 'bool', default: true })
    isActive: boolean;

    @Column({ name: 'createdAt', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ name: 'subscription_month', type: 'int' , default : 1})
    subscriptionMonth : number;

}