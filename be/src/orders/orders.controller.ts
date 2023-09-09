import { Controller, Post, Body, Request } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { IPlaceOrderForm } from '@saecom/types';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: IPlaceOrderForm, @Request() req) {
    return this.ordersService.create(createOrderDto, req.user.email);
  }
}
