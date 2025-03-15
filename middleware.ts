import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	if (pathname === '/' || pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico')) {
		return NextResponse.next();
	}

	return NextResponse.redirect(new URL('/', request.url));
}
