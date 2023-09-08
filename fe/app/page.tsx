"use client";

import ProductCard from "@/components/productcard/productcard.component";
import { Fetcher } from "@/util/axios";
import { PaginatedProductQueryResponse } from "@saecom/types";
import { Pagination } from "flowbite-react";
import { FunctionComponent, useEffect, useState } from "react";
import useSWR from "swr";

const LIMIT = 9;

const HomePage: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data: res, isLoading } = useSWR<PaginatedProductQueryResponse>(
    `/products/page/${currentPage}/limit/${LIMIT}`,
    Fetcher.get,
    {
      revalidateOnFocus: false,
    }
  );

  useEffect(() => {
    if (!res?.data.metadata.total) {
      return;
    }

    const pages = Math.ceil((res?.data.metadata.total || LIMIT) / LIMIT);

    if (totalPages !== pages) {
      setTotalPages(pages);
    }
  }, [res, totalPages]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="flex flex-col h-screen w-full  mt-24 ml-8">
        <h1 className="text-2xl font-bold">Latest Arrivals</h1>

        <div className="flex flex-wrap mt-4 flex-row">
          {res?.data.data.map((product) => (
            <ProductCard
              key={product._id}
              deviceName={product.name}
              price={product.price}
              productImage={product.image}
            />
          ))}
        </div>

        <div className="flex w-full justify-center">
          <Pagination
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
            totalPages={totalPages}
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
