'use client'
import React, { useState, useEffect } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
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
    <div className="flex justify-center items-center space-x-4">
      <div className="max-w-xs p-4 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{cards[currentIndex].title}</h2>
        <p className="mt-2">{cards[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default CardCarousel;
