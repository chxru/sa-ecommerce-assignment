import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  async getRandomProducts(n: number) {
    const products: ProductDocument[] = await this.productModel.aggregate([
      { $sample: { size: n } },
      {
        $project: {
          _id: 1,
          name: 1,
          price: 1,
          category: 1,
        },
      },
    ]);

    return products;
  }

  async getCategories() {
    const categories: string[] = await this.productModel.distinct('category');

    return categories;
  }
}
