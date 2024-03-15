"use client"

import { AnimatedElementRight } from '../components/AnimatedElementRight';
import { AnimatedElementLeft } from '../components/AnimatedElementLeft';
import { GoPaperAirplane } from "react-icons/go";
import { ListOne } from '../components/RetroFitKit/ListOne';
import { ListTwo } from '../components/RetroFitKit/ListTwo';
import { ListThree } from '../components/RetroFitKit/ListThree';
import { ListFour } from '../components/RetroFitKit/ListFour';
import { Footer } from '../components/Footer';

export default function Home() {
    return(
        <div className='flex flex-col bg-[#222831]'>
            <img src="/assets/LandingPage/front.jpg" alt="Picture of Edison Truck" />
            <div className="h-screen bg-no-repeat bg-cover bg-center flex justify-center" style={{backgroundImage: "url(/assets/LandingPage/LandingPage1.jpg)"}}>
                <h1 className='mt-16 text-black text-5xl'>Variety of Specs</h1>              
            </div>
            <div className="grid grid-rows-3 h-3/6">
                <div className="w-full bg-gradient-to-b from-gray-500 via-gray-800 to-black"></div>
                <div className="flex flex-col items-center justify-center text-white bg-black space-y-4">
                    <AnimatedElementRight>
                        <h1 className='flex justify-center pb-3 text-4xl border-b-2 w-screen text-center' >500 HP - 4x4 or 350 HP - 2x4</h1>
                    </AnimatedElementRight>
                    <AnimatedElementLeft>
                        <h2 className='flex justify-center pb-3 text-2xl border-b-2 w-screen text-center'>6,000 KG Axle Load</h2>
                    </AnimatedElementLeft>
                    <AnimatedElementRight>
                        <h2 className='flex justify-center pb-3 text-2xl border-b-2 w-screen text-center'>60-90 KWh LiFePO Batter</h2>                    
                    </AnimatedElementRight>
                </div>
                <div className="w-full h-full bg-gradient-to-t from-gray-400 via-gray-800 to-black"></div>
            </div>
            <div className="h-screen bg-no-repeat bg-cover bg-center flex justify-center" style={{backgroundImage: "url(/assets/LandingPage/LandingPage2.jpg)"}}>
                <h1 className='mt-16 text-black text-5xl'>Enroute...</h1>              
            </div>
            <ListOne />
            <ListTwo/>
            <ListThree/>
            <ListFour/>
            <Footer />
        </div>
    )
}
