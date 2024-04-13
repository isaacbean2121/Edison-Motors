"use client";

import React from 'react';




export default function Hero({ title, subtitle, image, buttonBuild, buttonLearn}: { title: string, subtitle: string, image: string, buttonBuild?: any, buttonLearn: any}) {

 

  return (
    <div className='h-screen snap-start bg-no-repeat bg-cover bg-center flex flex-col justify-between' 
         style={{ backgroundImage: `url(${image})` }}>

      {/* Top content of the hero section */}
      <div className=" flex  ml-10 justify-start pt-28 px-4 text-center">
        <h1 className="text-5xl font-bold text-black">{title}</h1>
        {/* <p className="text-xl mt-4 text-white">{subtitle}</p> */}
      </div>

      {/* Buttons at the bottom */}
      <div className='flex justify-center pb-10'>
        
        <div className="bg-black text-white px-4 py-2 rounded mr-4 hover:scale-110 duration-150">
          {buttonBuild}
        </div>
        <div className='bg-white text-black px-4 py-2 rounded hover:scale-110 duration-150'>
          {buttonLearn}
        </div>
      </div>

    </div>
  );
}
