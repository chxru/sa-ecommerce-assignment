"use client";

import { useCartStore } from "@/store/cart.store";
import { Fetcher } from "@/util/axios";
import { IProduct } from "@saecom/types";
import { Button } from "flowbite-react";
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

        <table className="table-auto mt-8">
          <tbody>
            {Object.entries(data.data)
              .filter(
                (p) =>
                  p[0] !== "image" &&
                  p[0] !== "name" &&
                  p[0] !== "price" &&
                  p[0] !== "_id"
              )
              .map(([key, value]) => (
                <tr key={key}>
                  <td className="border px-4 py-2">
                    {key.split("_").join(" ")}
                  </td>
                  <td className="border px-4 py-2">{value}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <Button
          className="mt-8"
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
