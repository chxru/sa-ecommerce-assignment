import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Public } from 'src/auth/auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Public()
  @Get('categories')
  getCategories() {
    return this.productsService.getCategories();
  }

  @Public()
  @Get('random/:n')
  getRandomProducts(@Param('n') n: string) {
    return this.productsService.getRandomProducts(+n);
  }
}
