import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './entities/product.entity';

// TODO: add images for each category
const images = {
  case: 'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  cpu: 'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  'external-hard-drive':
    'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  headphones:
    'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  'internal-hard-drive':
    'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  keyboard:
    'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  memory: 'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  monitor: 'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  motherboard:
    'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  mouse: 'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  'optical-drive':
    'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  'power-supply':
    'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  'sound-card':
    'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  speakers:
    'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  'thermal-paste':
    'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  ups: 'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
  webcam: 'https://www.nanotek.lk/uploads/product/1568-20201009113125-301.png',
};

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

    // add image property to products
    return products.map((product) => ({
      ...product,
      image: images[product.category],
    }));
  }

  async getCategories() {
    const categories: string[] = await this.productModel.distinct('category');

    return categories;
  }

  async paginatedQuery(page: number, limit: number, category?: string) {
    const products = await this.productModel.aggregate([
      {
        $match: {
          category: category ? category : { $exists: true },
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          price: 1,
          category: 1,
        },
      },
      {
        $facet: {
          metadata: [
            {
              $count: 'total',
            },
          ],
          data: [
            {
              $skip: (page - 1) * limit,
            },
            {
              $limit: limit,
            },
          ],
        },
      },
    ]);

    console.log(products);

    return {
      metadata: products[0].metadata[0],
      data: products[0].data.map((product) => ({
        ...product,
        image: images[product?.category],
      })),
    };
  }
}
