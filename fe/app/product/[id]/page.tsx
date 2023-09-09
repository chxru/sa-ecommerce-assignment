"use client";

import { useCartStore } from "@/store/cart.store";
import { Fetcher } from "@/util/axios";
import { IProduct } from "@saecom/types";
import { Button, Table } from "flowbite-react";
import { FunctionComponent } from "react";
import useSWR from "swr";

type ApiResponse = {
  data: IProduct;
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: FunctionComponent<ProductPageProps> = (props) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const { data, isLoading } = useSWR<ApiResponse>(
    `/products/${props.params.id}`,
    Fetcher.get,
    {
      revalidateOnFocus: false,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Product not found</div>;
  }

  if (!data.data) {
    return <div>Product not found</div>;
  }

  return (
    <main className="mt-24 ml-8 flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2">
        <img src={data?.data.image} alt="product" />
      </div>
      <div className="w-full md:w-1/2 md:ml-8 md:mt-8">
        <h1 className="text-4xl font-bold">{data.data.name}</h1>
        <p className="text-2xl font-bold">$ {data.data.price}</p>

        <Table className="mt-8">
          <Table.Head>
            <Table.HeadCell>Specification</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {Object.entries(data.data)
              .filter(
                (p) =>
                  p[0] !== "image" &&
                  p[0] !== "name" &&
                  p[0] !== "price" &&
                  p[0] !== "_id"
              )
              .map(([key, value]) => (
                <Table.Row
                  key={key}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {key.split("_").join(" ")}
                  </Table.Cell>
                  <Table.Cell>{value}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>

        <Button
          className="mt-16"
          onClick={() => {
            addToCart(data.data);
          }}
        >
          Add to cart
        </Button>
      </div>
    </main>
  );
};

export default ProductPage;
