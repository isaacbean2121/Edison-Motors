"use client"
import CarouselTruck from "@/components/CarouselTruck"
import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Progress } from "@/components/ui/progress"


import ScrollConfigurator from "@/components/ScrollConfigurator"
import { useSearchParams } from "next/navigation"

export default function TruckBuild({}) {
 // you gotta fix the truck id to be int number and not any

 const [img, setImg] = useState<string | null>(null);

    const searchParams = useSearchParams();
    let truckId: string | null = null;
    if (searchParams) {
    truckId = searchParams.get('truckId');
    }
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
      }, [])

      
    useEffect(() => {
        const fetchData = async () => {
          if (truckId) {
            setLoading(true);
            try {
              const response = await fetch(`http://localhost:8000/api/slides?truckId=${truckId}`);
              if (!response.ok) {
                throw new Error('Failed to fetch options');
              }
              const responseData = await response.json();
              console.log(responseData);
              if (responseData.length > 0 && responseData[0].image) {
                setImg(responseData[0].image);
              } else {
                setImg(null);
              }
            } catch (error: any) {
              console.error('Error fetching options:', error.message);
            } finally {
              setLoading(false);
            }
          }
        };
        console.log(truckId);
        if (truckId) {
          fetchData();
        } else {
          setImg(null);
        }
      }, [truckId]);
      if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
            <Progress value={progress} className="w-[60%]" />
            </div>
        );
      }
      
      if (img && truckId) {
        const truck = {
          name: 'Truck name',
          img: img,
          id: truckId,
        };
    
    return (
        <div className="flex flex-row">
            <div className="w-2/3">
            <CarouselTruck img={img} />
            </div>
            <div className='w-1/3'>
            <ScrollConfigurator truck={truck} />
            </div>
        </div>
    );
    }
    return ;
}