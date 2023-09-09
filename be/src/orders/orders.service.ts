import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IPlaceOrderForm } from '@saecom/types';
import { ServerClient } from 'postmark';

const GenerateHTMLInvoice = (order: IPlaceOrderForm) => {
  const invoice = `
    <h1>Invoice</h1>
    <h2>Order #${Math.floor(Math.random() * 100000)}</h2>
    <h3>Order Details</h3>
    <ul>
      ${order.products.map((p) => `<li>${p.name} ${p.price}</li>`)}
    </ul>
    <h3>Payment Details</h3>
    <ul>
      <li>Method: Cash on Delivery</li>
      <li>Total: ${order.products.reduce(
        (acc, curr) => acc + curr.price,
        0,
      )}</li>
    </ul>
    <h3>Shipping Details</h3>
    <ul>
      <li>${order.firstName} ${order.lastName}</li>
      <li>${order.address}</li>
      <li>${order.city}, ${order.province} ${order.zip}</li>
      <li>${order.phoneNumber}</li>
    </ul>
  `;

  return invoice;
};

const GenerateTextInvoice = (order: IPlaceOrderForm) => {
  const invoice = `
    Invoice
    Order #${Math.floor(Math.random() * 100000)}
    Order Details
    ${order.products.map((p) => `${p.name} ${p.price}`)}
    Payment Details
    Method: Cash on Delivery
    Total: ${order.products.reduce((acc, curr) => acc + curr.price, 0)}
    Shipping Details
    ${order.firstName} ${order.lastName}
    ${order.address}
    ${order.city}, ${order.province} ${order.zip}
    ${order.phoneNumber}
  `;

  return invoice;
};

@Injectable()
export class OrdersService {
  private client: ServerClient;

  constructor() {
    this.client = new ServerClient(process.env.POSTMARK_API_KEY);
  }

  async create(createOrderDto: IPlaceOrderForm, email: string) {
    if (!email) {
      return new UnauthorizedException();
    }

    await this.client.sendEmail({
      From: 'invoice@truesigndev.one',
      HtmlBody: GenerateHTMLInvoice(createOrderDto),
      TextBody: GenerateTextInvoice(createOrderDto),
      To: email,
      Subject: 'Invoice',
    });
    return {
      message: 'Order placed successfully',
    };
  }
}
