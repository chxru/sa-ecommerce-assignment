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

  @Public()
  @Get('page/:page/limit/:limit')
  getPaginatedProducts(
    @Param('page') page: string,
    @Param('limit') limit: string,
  ) {
    return this.productsService.paginatedQuery(+page, +limit);
  }

  @Public()
  @Get('page/:page/limit/:limit/category/:category')
  getPaginatedProductsByCategory(
    @Param('page') page: string,
    @Param('limit') limit: string,
    @Param('category') category: string,
  ) {
    return this.productsService.paginatedQuery(+page, +limit, category);
  }

  @Public()
  @Get('search/:query/page/:page/limit/:limit')
  searchProducts(
    @Param('query') query: string,
    @Param('page') page: string,
    @Param('limit') limit: string,
  ) {
    return this.productsService.searchProduct(query, +page, +limit);
  }

  @Public()
  @Get('search/:query/page/:page/limit/:limit/category/:category')
  searchProductsByCategory(
    @Param('query') query: string,
    @Param('page') page: string,
    @Param('limit') limit: string,
    @Param('category') category: string,
  ) {
    return this.productsService.searchProduct(query, +page, +limit, category);
  }
}
