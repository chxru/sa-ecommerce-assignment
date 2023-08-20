'use client';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import './embla.css'

export default function Carousel(){

    const SLIDE_COUNT = 5
    const slides = Array.from(Array(SLIDE_COUNT).keys());
    const options: EmblaOptionsType = {};
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
    
    return (
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <span>{index + 1}</span>
                  </div>
                  <img
                    className="embla__slide__img"
                    src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg"
                    alt="Your alt text"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}