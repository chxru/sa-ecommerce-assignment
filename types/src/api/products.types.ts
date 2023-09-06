export interface ProductCategoriesResponse {
  data: string[];
}

export interface PaginatedProductQueryResponse {
  data: {
    metadata: {
      total: number;
    }[];
    data: {
      _id: string;
      name: string;
      price: number | null;
      category: string;
    }[];
  };
}
