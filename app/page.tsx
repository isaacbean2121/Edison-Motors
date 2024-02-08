import React from 'react';
import Hero from '../components/Hero'
import five from '../public/assets/LandingPage/LandingPage2.jpg';
import seven from '../public/assets/LandingPage/LandingPage3.jpg';
import front from '../public/assets/LandingPage/front.jpg';
import fivetandem from '../public/assets/500Info/500Info1.jpg';

export default function Home() {
  return (
    <div className='snap-y snap-mandatory h-screen overflow-auto' style={{ scrollBehavior: 'smooth' }}>
      <Hero
        title=""
        subtitle="Explore our range of products"
        image={front.src} 
      />
      <Hero 
        title="500 Series"
        subtitle="Explore our range of products"
        image={five.src} 
      />
      <Hero 
        title="750 Series"
        subtitle="Explore our range of products"
        image={seven.src} 
      />
      <Hero 
        title="500 Series - Tandem Drive"
        subtitle="Explore our range of products"
        image={fivetandem.src} 
      />

    </div>
  );
}
