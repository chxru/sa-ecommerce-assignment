"use client";
import React, { useState, useEffect } from "react";

interface Card {
  id: number;
  name: string;
  description: string;
  price: number;
  photoUrl: string;
}

interface CardCarouselProps {
  cards: Card[];
  interval: number; // Time interval in milliseconds
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [cards.length, interval]);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={cards[currentIndex].photoUrl}
        alt={cards[currentIndex].name}
        className="w-full h-32 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{cards[currentIndex].name}</h2>
      <p className="text-gray-600 mb-2">{cards[currentIndex].description}</p>
      <p className="text-green-600 font-semibold">{`$${cards[
        currentIndex
      ].price.toFixed(2)}`}</p>
    </div>
  );
};

export default CardCarousel;
