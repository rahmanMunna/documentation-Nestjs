/* eslint-disable prettier/prettier */
import { IOrder } from "../interfaces/order.interface";
import { IProduct } from "../interfaces/product.interface";

export class CreateOrderItemDTO {
    qty: number;
    price: number
    order: IOrder;
    product: IProduct;
}