/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { PlaceOrder } from './dto/place-order.dto';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post('place')
    placeOrder(@Body() placeOrder: PlaceOrder): any {
        return this.orderService.placeOrder(placeOrder)
    }
}
