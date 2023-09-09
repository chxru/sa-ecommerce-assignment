import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './entities/product.entity';

const images = {
  case: 'https://www.gamestreet.lk/images/products/4694.jpg',
  cpu: 'https://www.gamestreet.lk/images/products/1836.jpg',
  'external-hard-drive': 'https://www.gamestreet.lk/images/products/4756.jpg',
  headphones: 'https://www.gamestreet.lk/images/products/5332.jpg',
  'internal-hard-drive': 'https://www.gamestreet.lk/images/products/4514.jpg',
  keyboard: 'https://www.gamestreet.lk/images/products/570.jpg',
  memory: 'https://www.gamestreet.lk/images/products/3805.jpg',
  monitor: 'https://www.gamestreet.lk/images/products/5438.jpg',
  motherboard: 'https://www.gamestreet.lk/images/products/4499.jpg',
  mouse: 'https://www.gamestreet.lk/images/products/3736.jpg',
  'optical-drive': 'https://www.gamestreet.lk/images/products/3879.jpg',
  'power-supply': 'https://www.gamestreet.lk/images/products/4067.jpg',
  'sound-card':
    'https://www.sense.lk/images/uploads/product/2022/11/2022112509213501.png.png',
  speakers: 'https://www.gamestreet.lk/images/products/4438.jpg',
  'thermal-paste':
    'https://redtech.lk/wp-content/uploads/2021/05/Cooler-Master-MASTERGEL-PRO-Flat-Injector-2.png',
  ups: 'https://www.nanotek.lk/uploads/product/2193-20230817153054-ROG-Loki-SFX-L-750W-Platinum.png',
  webcam:
    'https://www.nanotek.lk/uploads/product/2097-20220105121814-c270-gallery-1.png',
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
      {
        $match: {
          price: {
            $ne: null,
          },
        },
      },
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

    // get total number of products
    const total = await this.productModel.countDocuments();

    // add image property to products
    const data = products.map((product) => ({
      ...product,
      image: images[product.category],
    }));

    return {
      metadata: {
        total,
      },
      data,
    };
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

  async searchProduct(
    query: string,
    page: number,
    limit: number,
    category?: string,
  ) {
    const aggregateQuery: any[] = [
      {
        $search: {
          index: 'product_name_idx',
          text: {
            query,
            path: 'name',
          },
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
    ];

    if (category) {
      // add category filter as the second step
      aggregateQuery.splice(1, 0, {
        $match: {
          category,
        },
      });
    }

    const result = await this.productModel.aggregate(aggregateQuery);

    return {
      metadata: result[0].metadata[0],
      data: result[0].data.map((product) => ({
        ...product,
        image: images[product?.category],
      })),
    };
  }
}
