"use client";

import CarouselTruck from "@/components/CarouselTruck";
import ScrollConfigurator from "@/components/ScrollConfigurator";
import { Progress } from "@/components/ui/progress";
import {
  getCarouselImages,
  getTruckPreviewImage,
} from "@/lib/truck-carousel-images";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TruckBuild() {
  const searchParams = useSearchParams();
  const truckId = searchParams?.get("truckId") ?? "500";
  const [slides, setSlides] = useState<string[]>(() =>
    getCarouselImages(truckId)
  );
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fallback = getCarouselImages(truckId);

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/slides?truckId=${truckId}`);
        if (response.ok) {
          const responseData = await response.json();
          const urls = responseData
            .map((row: { image?: string }) => row?.image)
            .filter(Boolean) as string[];
          if (urls.length > 0) {
            setSlides(urls);
            return;
          }
        }
      } catch {
        // use fallback
      }
      setSlides(fallback);
    };

    fetchData().finally(() => setLoading(false));
  }, [truckId]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <Progress value={progress} className="w-[60%]" />
      </div>
    );
  }

  const truck = {
    name: `Truck ${truckId}`,
    img: slides[0] ?? getTruckPreviewImage(truckId),
    id: truckId,
  };

  return (
    <div className="flex min-h-screen flex-col bg-black pt-16 md:flex-row">
      <div className="w-full md:w-2/3">
        <CarouselTruck slides={slides} />
      </div>
      <div className="w-full md:w-1/3">
        <ScrollConfigurator truck={truck} />
      </div>
    </div>
  );
}
