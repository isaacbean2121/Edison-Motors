"use client"

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Head from 'next/head';

export default function Home() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    
    // for some reason the slider does not work with the local assets, only exteral links. 

    // const slides = [
    //   {
    //     url: '/assets/500 Info/500 Info 2-1.jpg',
    //   },
    //   {
    //     url: '/assets/500 Info/500 Info 2-2.jpg',
    //   },
    //   {
    //     url: '/assets/500 Info/500 Info 2-3.jpg',
    //   },
    //   {
    //     url: '/assets/500 Info/500 Info 2-4.jpg',
    //   },
    //   {
    //     url: '/assets/500 Info/500 Info 2-5.jpg',
    //   },
    // ];
    

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div>
  <Head>
    <title>Full Page Scroll</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main>
  <section 
            className="h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/500 Info/500 Info 1.jpg')" }}
          >
            <h1 className="text-white text-5xl">Page 1</h1>
        </section>


    <section className="h-screen w-full overflow-hidden relative">
      {/* Full-screen Slider */}
      <div className='w-full h-full'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full bg-no-repeat bg-center bg-cover'
        ></div>

        {/* Left Arrow */}
        <BsChevronCompactLeft onClick={prevSlide} size={30} className='absolute top-[50%] left-5 text-white'/>

        {/* Right Arrow */}
        <BsChevronCompactRight onClick={nextSlide} size={30} className='absolute top-[50%] right-5 text-white'/>

        {/* Dots */}
        <div className='absolute bottom-4 w-full flex justify-center'>
          {slides.map((_, slideIndex) => (
            <RxDotFilled key={slideIndex} onClick={() => goToSlide(slideIndex)} className='mx-1 text-white'/>
          ))}
        </div>
      </div>
    </section>

    <section className="h-screen flex items-center justify-center bg-green-500">
      <h1 className="text-white text-5xl">Page 3</h1>
    </section>
  </main>
</div>

  );
}
