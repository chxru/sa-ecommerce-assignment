import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
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
}
