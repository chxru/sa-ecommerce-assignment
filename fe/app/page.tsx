"use client";

import { Fetcher } from "@/util/axios";
import { PaginatedProductQueryResponse } from "@saecom/types";
import { Pagination } from "flowbite-react";
import { FunctionComponent, useEffect, useState } from "react";
import useSWR from "swr";

const LIMIT = 10;

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
    if (!res?.data.metadata[0].total) {
      return;
    }

    const pages = Math.ceil((res?.data.metadata[0].total || LIMIT) / LIMIT);

    if (totalPages !== pages) {
      setTotalPages(pages);
    }
  }, [res, totalPages]);

  return (
    <main>
      <div className="flex flex-col h-screen w-full  mt-28 ml-8">
        <h1>Latest Arrivals</h1>

        <div className="flex flex-wrap mt-4 flex-col">
          {res?.data.data.map((product) => (
            <div
              key={product._id}
              className="flex flex-col items-center justify-center w-1/4"
            >
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}

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
