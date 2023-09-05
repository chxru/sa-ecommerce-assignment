export interface ProductCategoriesResponse {
  data: string[];
}

export interface PaginatedProductQueryResponse {
  metadata: {
    total: number;
  }[];
  data: {
    _id: string;
    name: string;
    price: number | null;
    category: string;
  }[];
}
