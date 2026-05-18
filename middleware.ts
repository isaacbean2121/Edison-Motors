import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// UI-only mode: no login redirects — all pages are browsable
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
