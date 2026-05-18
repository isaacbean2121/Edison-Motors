import { NextRequest, NextResponse } from "next/server";
import { buildMockTruckOptions } from "@/lib/mock-truck-options";

export async function GET(request: NextRequest) {
  const truckId = request.nextUrl.searchParams.get("truckId");

  if (!truckId || !["500", "750", "10"].includes(truckId)) {
    return NextResponse.json({ error: "Unknown truckId" }, { status: 400 });
  }

  return NextResponse.json(buildMockTruckOptions());
}
