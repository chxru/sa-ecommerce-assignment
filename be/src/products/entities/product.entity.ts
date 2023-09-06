import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ collection: 'products', timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  price: number;

  @Prop({ required: true, index: true })
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
