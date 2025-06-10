import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value;
  const pathname = req.nextUrl.pathname;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname.startsWith("/dashboard") && role !== "Manager") {
    return NextResponse.redirect(new URL("/products", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/products"],
};
