"use client";

import Carousel from "@/components/Carousel/Carousel";
import ProductCard from "@/components/ProductCard";
import { useUserStore } from "@/store/user.store";
import { FunctionComponent } from "react";

const HomePage: FunctionComponent = () => {
  const store = useUserStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductCard />
      <section className="ml-[16rem] pr-[8rem] mt-[-4rem] flex flex-col">
        <div className="">
          <Carousel />
          <Carousel />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
