import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value
  const role = request.cookies.get('role')?.value

  // Public routes
  const publicPaths = ['/login']

  // If user is already logged in, redirect away from login
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // If accessing a protected route and not logged in
  if (!token && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Role-based restriction example: storekeeper blocked from dashboard
  if (pathname.startsWith('/dashboard') && role !== 'manager') {
    return NextResponse.redirect(new URL('/products', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/products/:path*',
    '/login',
    '/',
  ],
}
