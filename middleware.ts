import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Allow the home route and static files from public/ directory
  if (pathname === '/' || pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico')) {
    return NextResponse.next();
  }

  // Redirect all other routes to `/`
  return NextResponse.redirect(new URL('/', request.url));
}
