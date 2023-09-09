import { IProduct } from "./products.types";

export interface IPlaceOrderForm {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  province: string;
  zip: number;
  phoneNumber: number;
  products: IProduct[];
}
