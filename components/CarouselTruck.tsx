import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Card, CardContent } from "@/components/ui/card"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React from 'react';

export default function CarouselTruck({ img }: { img: string }) {

  console.log("image is " + img);

  const [slides, setSlides] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (img) {
      setSlides([img]);
    }
  }, [img]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide, // Swipe left to go to the next slide
    onSwipedRight: prevSlide, // Swipe right to go to the previous slide
  });

  return (
    <div className='max-w-[1400px] h-screen w-full m-auto pt-16 relative group '>
      <div
        {...swipeHandlers}
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className='w-full h-full bg-center bg-cover duration-500 bg-gray-300'
      ></div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center'>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-blue-500' : ''}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}