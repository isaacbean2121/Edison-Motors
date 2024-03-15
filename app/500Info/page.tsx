"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from "../components/navbar";
import { Slide500 } from '../components/500Info/Slide500';
import { BuildYoursButton } from '../components/BuildYoursButton';
import { AnimatedElementBottom } from '../components/AnimatedElementBottom';
import {Footer} from "../components/Footer";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Full Page Scroll</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className='snap-y snap-mandatory overflow-hidden' style={{ scrollBehavior: 'smooth' }}>
        <section className="h-screen flex flex-col justify-between bg-no-repeat bg-cover bg-center relative snap-start"
                 style={{ backgroundImage: "url('https://nymaclqvkznzomxrgzwo.supabase.co/storage/v1/object/public/part_asset/500%20Info%201.jpg')" }}>
          <div className="absolute top-1/4 left-16"></div>

          <div className="absolute top-40 left-72">
            <p className="text-white font-bold text-5xl select-none hover:scale-125 duration-150">500 Series</p> 
          </div>

          <div className="flex justify-center absolute w-1/4 bottom-5 left-1/2 transform -translate-x-1/2">
            <BuildYoursButton />
          </div>

          <div className="w-full p-4 flex justify-center absolute bottom-20 bg-black opacity-80">
            <AnimatedElementBottom>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-52">
              <div className="text-center select-none hover:scale-125 duration-150">
                <p className="text-white font-bold">2 Drive Axles</p>
                <p className="text-white font-light">Tandem Drive</p>
              </div>

              <div className="text-center select-none hover:scale-125 duration-150">
                <p className="text-white font-bold">670 HP</p>
                <p className="text-white font-light">Max Power</p>
              </div>
              <div className="text-center select-none hover:scale-125 duration-150">
                <p className="text-white font-bold">26,000kg (57,400lbs)</p>
                <p className="text-white font-light">Gross Axle Rating</p>
              </div>
              <div className="text-center select-none hover:scale-125 duration-150">
                <p className="text-white font-bold">68,400 ft.lbs</p>
                <p className="text-white font-light">Peak Torque</p>
              </div>
            
            </div>
            </AnimatedElementBottom>
          </div>
        </section>
        <Slide500 />
      {/* First Section */}
      <section className="bg-[#222831]"> {/* The background color of the entire section */}
  <div className="py-12"> {/* Adjust padding and max width as needed */}

    {/* Row for the first image and text */}
    <div className="flex flex-col md:flex-row items-center gap-8 mb-12"> {/* Adds gap between items on larger screens */}
      {/* First Image Container */}
      <div className="md:flex-1 ml- snap-always snap-start">
        <img src="/assets/500Info/500 Info 3.jpg" alt="Axle Image" className="w-full h-auto shadow-lg" /> {/* shadow for depth */}
      </div>
    <AnimatedElementBottom>
      {/* Text Container */}
      <div className="md:flex-1 text-white p-10">
        <h2 className="text-3xl md:text-6xl font-bold mb-4">Tandem Drive E-axles</h2>
        <p className="text-xl md:text-4xl">
          Producing 670 HP and 68,400 ft.lbs of peak torque
        </p>
        {/* Additional text or elements here */}
      </div>
      </AnimatedElementBottom>
    </div>
    


    {/* Second Image Container */}
    <div className="w-full">
      <img src="/assets/500Info/500 Info 4.jpg" alt="Truck Image" className="w-full h-auto shadow-lg" /> {/* shadow for depth */}
    </div>

  </div>
</section>

<section className="bg-[#222831]"> {/* The background color of the entire section */}
  <div className="max-w-8xl mx-auto pt-2 pb-12 px-4 sm:px-6 lg:px-8"> {/* Minimally reduce top padding with pt-2 */}
   
       {/* Row for the text and the image */}
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-8">
      
      {/* Text Container */}
      <div className="flex-1 text-white p-5 pr-10 md:pr-20">
      <AnimatedElementBottom>
        <h1 className="text-4xl mb-4">Engineered for Service</h1>
        <p className="text-xl mb-4">Experience unparalleled ease of maintenance with our electric truck, 
        meticulously designed for rugged terrain and heavy loads. With attention to every detail, 
        including field-serviceable parts and transparent fault codes, we ensure seamless operations and quick repairs. 
        Get ready for effortless maintenance and uninterrupted performance.</p>
        </AnimatedElementBottom> 
        {/* Additional text or elements here */}
      </div>      
      {/* Image Container */}
      <div className="flex-1 p-0">
        <img src="assets\500Info\500 Info 5.jpg" alt="Engine Image" className="w-full h-auto shadow-lg" />
      </div>
    </div>
   


  </div>
</section>

<section className="bg-[#222831]"> {/* Background color of the entire section */}
  <div className="max-w-8xl mx-auto pt-2 pb-12 px-4 sm:px-6 lg:px-8"> {/* Minimally reduce top padding with pt-2 */}

    {/* Row for the image and the text */}
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-8">
      {/* Image Container */}
      <div className="flex-1 p-0">
        <img src="\assets\500Info\500 Info 8-1.jpg" alt="Engine Image" className="w-full h-auto shadow-lg" />
      </div>

      {/* Text Container */}
      <div className="flex-1 text-white p-5 pr-10 md:pr-20">
        <AnimatedElementBottom>
        <h1 className="text-4xl mb-4">Safety and Efficiency Redefined</h1>
        <p className="text-xl mb-4">With a seamlessly integrated steel cage providing ROPS protection, our cab prioritizes driver safety without compromising visibility. 
        Its unique design offers enhanced maneuverability in tight spaces and facilitates easy entry, while regenerative braking ensures safe, 
        efficient slowing.</p>
        </AnimatedElementBottom>
        {/* Additional text or elements here */}
      </div>
    </div>

  </div>
</section>

<section className="bg-[#222831]"> {/* The background color of the entire section */}
  <div className="max-w-8xl mx-auto pt-2 pb-12 px-4 sm:px-6 lg:px-8"> {/* Minimally reduce top padding with pt-2 */}

    {/* Row for the text and the image */}
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-8">
      {/* Text Container */}
      <div className="flex-1 text-white p-5 pr-10 md:pr-20">
        <AnimatedElementBottom>
        <h1 className="text-4xl mb-4">Introducing Edison's Legacy of Durability</h1>
        <p className="text-xl mb-4">Inspired by classic trucks enduring over 50 years, our mission is to craft an L series built to last. 
        Through meticulous study, we've ensured every part is easy to fix and replace, designed for simplicity.
         With over 400,000 vocational trucks produced annually, trust Edison for enduring quality.</p>
         </AnimatedElementBottom>
        {/* Additional text or elements here */}
      </div>

      {/* Image Container */}
      <div className="flex-1 p-0">
        <img src="\assets\500Info\500 Info 6.jpg" alt="Engine Image" className="w-full h-auto shadow-lg" />
      </div>
    </div>

  </div>
</section>

<section className="bg-[#222831]"> {/* Background color of the entire section */}
  <div className="max-w-8xl mx-auto pt-2 pb-12 px-4 sm:px-6 lg:px-8"> {/* Minimally reduce top padding with pt-2 */}

    {/* Row for the image and the text */}
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-8">
      {/* Image Container */}
      <div className="flex-1 p-0">
        <img src="\assets\500Info\500 Info 7.jpg" alt="Engine Image" className="w-full h-auto shadow-lg" />
      </div>

      {/* Text Container */}
      <div className="flex-1 text-white p-5 pr-10 md:pr-20">
        <AnimatedElementBottom>
        <h1 className="text-4xl mb-4">Introducing Edison's Tailored Solutions</h1>
        <p className="text-xl mb-4">Our team of experts in power systems collaborates with you and your bodybuilder to customize your EV truck fleet, 
        ensuring optimal performance and seamless integration. 
        From specing trucks to supporting drivers and mechanics, we provide comprehensive support every step of the way. 
        Additionally, our in-house electricians assess and install charging infrastructure, guaranteeing efficient operations from truck to shop. 
        Experience a new level of EV integration with Edison.</p>
        </AnimatedElementBottom>
        {/* Additional text or elements here */}
      </div>
    </div>

  </div>
</section>

<section className="bg-[#222831]">
  <div className="w-full">
    <div className="flex justify-center">
      <iframe 
        width="3500" 
        height="1000" 
        src="https://www.youtube.com/embed/an6e2Lh9u58" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
  </div>
</section>













      </main>
      <Footer/>
    </div>
  );
}
