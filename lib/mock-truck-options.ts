import { getTruckPreviewImage } from "./truck-carousel-images";

function option(id: number, name: string) {
  return {
    id,
    created_at: new Date().toISOString(),
    name,
    customize_option_id: id,
    description: null,
    price: 0,
    asset: "",
  };
}

function wrap(data: ReturnType<typeof option>[]) {
  return {
    error: null,
    data,
    count: data.length,
    status: 200,
    statusText: "OK",
  };
}

export function buildMockTruckOptions() {
  return {
    lights: wrap([option(1, "LED Headlights"), option(2, "Standard Halogen")]),
    steeringWheel: wrap([option(1, "Leather"), option(2, "Standard")]),
    mirrors: wrap([option(1, "Heated"), option(2, "Standard")]),
    fifthWheel: wrap([option(1, "Sliding"), option(2, "Fixed")]),
    pto: wrap([option(1, "Enabled"), option(2, "None")]),
    battery_pack: wrap([option(1, "Extended Range"), option(2, "Standard")]),
    generator_pack: wrap([option(1, "High Output"), option(2, "Standard")]),
    frame_rail: wrap([option(1, "Heavy Duty"), option(2, "Standard")]),
    wheelbase: wrap([option(1, "Long"), option(2, "Standard")]),
  };
}

export const TRUCK_PREVIEW_IMAGES: Record<string, string> = {
  "500": getTruckPreviewImage("500"),
  "750": getTruckPreviewImage("750"),
  "10": getTruckPreviewImage("500"),
};
