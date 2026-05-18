import { NextRequest, NextResponse } from "next/server";
import { getCarouselImages } from "@/lib/truck-carousel-images";

export async function GET(request: NextRequest) {
  const truckId = request.nextUrl.searchParams.get("truckId") ?? "500";
  const images = getCarouselImages(truckId);

  return NextResponse.json(images.map((image) => ({ image })));
}
