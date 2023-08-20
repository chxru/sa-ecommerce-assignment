'use client'

import CarouselCard from '@/components/Carousel/CarouselCard';

import list from '@/data/productDetails';
export default function Home() {

    return (
      <div className='p-24 flex flex-col'>
          {
            list.map((item, index) => {
              return (<div className='mt-2 mb-2'>
                  <CarouselCard/>
              </div>)
            })
          }
      </div>
    )
  }
  