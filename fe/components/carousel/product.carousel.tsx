import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";
import CardCarousel from "./card.carousel";

const cards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for Card 1',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for Card 2',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description for Card 3',
    },
  ];

  const ProductCarousel: React.FC = () => {
    return (
      <div className="container mx-auto mt-4">
        <CardCarousel cards={cards} interval={3000} />
      </div>
    );
  };

export default ProductCarousel;