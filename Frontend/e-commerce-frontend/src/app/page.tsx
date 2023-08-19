import ProductCard from "@/components/ProductCard"
import Carousel from "@/components/Carousel/Carousel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ProductCard/>
        <section>
          <Carousel/>
        </section>
    </main>
  )
}
