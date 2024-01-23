"use client"

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Head from 'next/head';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Only works with external links. No idea why. The assests work everywhere else so its not a problem with the routs. 
  const slideImages = [
    'https://i.imgflip.com/1pm297.jpg',
    '/assets/500 Info/500 Info 2-1.jpg',
    '/assets/500 Info/500 Info 2-2.jpg',
    '/assets/500 Info/500 Info 2-3.jpg',
    '/assets/500 Info/500 Info 2-4.jpg',
    '/assets/500 Info/500 Info 2-5.jpg',
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slideImages.length - 1;
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
        <section className="h-screen flex flex-col justify-between bg-no-repeat bg-cover bg-center relative"
                 style={{ backgroundImage: "url('/assets/500 Info/500 Info 1.jpg')" }}>
          <div className="absolute top-1/4 left-16"></div>

          <div className="w-full p-4 absolute bottom-0 bg-black bg-opacity-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center ml-12">
                <p className="text-white font-bold">2 Drive Axles</p>
                <p className="text-white font-light">Tandem Drive</p>
              </div>

              <div className="text-center">
                <p className="text-white font-bold">670 HP</p>
                <p className="text-white font-light">Max Power</p>
              </div>
              <div className="text-center">
                <p className="text-white font-bold">26,000kg (57,400lbs)</p>
                <p className="text-white font-light">Gross Axle Rating</p>
              </div>
              <div className="text-center">
                <p className="text-white font-bold">68,400 ft.lbs</p>
                <p className="text-white font-light">Peak Torque</p>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen w-full overflow-hidden relative">
          <div className='w-full h-full'>
            {/* Here we use the image from the slideImages array based on currentIndex */}
            <div style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
                 className='w-full h-full bg-no-repeat bg-center bg-cover'></div>

            <BsChevronCompactLeft onClick={prevSlide} size={30} className='absolute top-[50%] left-5 text-white'/>
            <BsChevronCompactRight onClick={nextSlide} size={30} className='absolute top-[50%] right-5 text-white'/>

            <div className='absolute bottom-4 w-full flex justify-center'>
              {slideImages.map((_, slideIndex) => (
                <RxDotFilled key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`mx-1 ${currentIndex === slideIndex ? 'text-blue-600' : 'text-white'}`} />
              ))}
            </div>
          </div>
        </section>
      {/* First Section */}
      <section className="bg-[#222831]"> {/* The background color of the entire section */}
  <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> {/* Adjust padding and max width as needed */}

    {/* Row for the first image and text */}
    <div className="flex flex-col md:flex-row items-center gap-8 mb-12"> {/* Adds gap between items on larger screens */}
      {/* First Image Container */}
      <div className="md:flex-1">
        <img src="/assets/500 Info/500 Info 3.jpg" alt="Axle Image" className="w-full h-auto shadow-lg" /> {/* shadow for depth */}
      </div>

      {/* Text Container */}
      <div className="md:flex-1 text-white">
        <h2 className="text-3xl md:text-6xl font-bold mb-4">Tandem Drive E-axles</h2>
        <p className="text-xl md:text-4xl">
          Producing 670 HP and 68,400 ft.lbs of peak torque
        </p>
        {/* Additional text or elements here */}
      </div>
    </div>

    {/* Second Image Container */}
    <div className="w-full">
      <img src="/assets/500 Info/500 Info 4.jpg" alt="Truck Image" className="w-full h-auto shadow-lg" /> {/* shadow for depth */}
    </div>

  </div>
</section>

<section className="bg-[#222831]"> {/* The background color of the entire section */}
  <div className="max-w-8xl mx-auto pt-2 pb-12 px-4 sm:px-6 lg:px-8"> {/* Minimally reduce top padding with pt-2 */}

    {/* Row for the text and the image */}
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-8">
      {/* Text Container */}
      <div className="flex-1 text-white p-5 pr-10 md:pr-20">
        <h2 className="text-3xl md:text-6xl font-bold mb-4">Easy to service so you can keep on trucking as soon as possible</h2>
        {/* Additional text or elements here */}
      </div>

      {/* Image Container */}
      <div className="flex-1 p-0">
        <img src="assets\500 Info\500 Info 5.jpg" alt="Engine Image" className="w-full h-auto shadow-lg" />
      </div>
    </div>

  </div>
</section>












      </main>
    </div>
  );
}
