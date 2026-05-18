/** Local carousel images from /public/assets (Supabase storage is unavailable). */

function asset(path: string) {
  return path.split("/").map(encodeURIComponent).join("/");
}

export const CAROUSEL_IMAGES_500 = [
  asset("/assets/500Info/500 Info 2-1.jpg"),
  asset("/assets/500Info/500 Info 2-2.jpg"),
  asset("/assets/500Info/500 Info 2-3.jpg"),
  asset("/assets/500Info/500 Info 2-4.jpg"),
  asset("/assets/500Info/500 Info 2-5.jpg"),
];

export const CAROUSEL_IMAGES_750 = [
  asset("/assets/750Info/750 Info 2-1.jpg"),
  asset("/assets/750Info/750 Info 1.jpg"),
  asset("/assets/750Info/750 Info 3.PNG"),
];

export const HERO_IMAGE_500 = asset("/assets/500Info/500Info1.jpg");
export const HERO_IMAGE_750 = asset("/assets/750Info/750 Info 2-1.jpg");

export function getCarouselImages(truckId: string): string[] {
  if (truckId === "750") return CAROUSEL_IMAGES_750;
  return CAROUSEL_IMAGES_500;
}

export function getTruckPreviewImage(truckId: string): string {
  if (truckId === "750") return CAROUSEL_IMAGES_750[0];
  return CAROUSEL_IMAGES_500[0];
}
