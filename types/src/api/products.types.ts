export interface ProductCategoriesResponse {
  data: string[];
}

export type IProduct = {
  _id: string;
  name: string;
  price: number | null;
  category: string;
  image: string;
};
export interface PaginatedProductQueryResponse {
  data: {
    metadata: {
      total: number;
    };
    data: IProduct[];
  };
}
