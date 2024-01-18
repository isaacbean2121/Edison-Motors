"use client"

import Head from 'next/head';
import React, { useState } from 'react';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Head>
        <title>Full Page Scroll</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="h-screen flex items-center justify-center bg-blue-500">
          <h1 className="text-white text-5xl">Page 1</h1>
        </section>
        <section className="h-screen flex items-center justify-center bg-red-500">
          <div className="slideshow-container">
            <button onClick={prevSlide}>Previous</button>
            <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
            <button onClick={nextSlide}>Next</button>
          </div>
        </section>
        <section className="h-screen flex items-center justify-center bg-green-500">
          <h1 className="text-white text-5xl">Page 3</h1>
        </section>
      </main>
    </div>
  );
}
