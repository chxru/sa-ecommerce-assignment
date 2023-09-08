"use client";

import { Fetcher } from "@/util/axios";
import { PaginatedProductQueryResponse } from "@saecom/types";
import { FunctionComponent, useEffect, useState } from "react";
import useSWR from "swr";
import ProductCard from "../productcard/productcard.component";
import { Pagination } from "flowbite-react";

const LIMIT = 9;

interface PaginatedViewerProps {
  category?: string;
  random?: boolean;
}

const GenerateURL = (page: number, props: PaginatedViewerProps) => {
  if (props.random) {
    return `/products/random/${LIMIT}`;
  }

  if (props.category) {
    return `/products/page/${page}/limit/${LIMIT}/category/${props.category}`;
  }

  return `/products/page/${page}/limit/${LIMIT}`;
};

const PaginatedViewer: FunctionComponent<PaginatedViewerProps> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data: res, isLoading } = useSWR<PaginatedProductQueryResponse>(
    GenerateURL(currentPage, props),
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
    <>
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
    </>
  );
};

export default PaginatedViewer;
