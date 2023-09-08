import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";
import CardCarousel from "./card.carousel";

const cards = [
    {
      id: 1,
      name: 'Card 1',
      description: 'Description for Card 1',
      price:50.00,
      photoUrl:'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Card 2',
      description: 'Description for Card 2',
      price:50.00,
      photoUrl:'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Card 3',
      description: 'Description for Card 3',
      photoUrl:'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price:50.00
    },
  ];

  const ProductCarousel: React.FC = () => {
    return (
      <div className="container mx-auto mt-4">
        <CardCarousel cards={cards} interval={3000}  />
      </div>
    );
  };

export default ProductCarousel;