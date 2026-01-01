import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    /** =========================
       * VIDEO ROUTES
       * ========================= */
    // /videos/123 → allow (do nothing)
    const videoDetails = /^\/videos\/[0-9]+$/;
    if (videoDetails.test(pathname)) {
        return NextResponse.next();
    }

    /** =========================
       * CONTENT / NEWS ROUTES
       * ========================= */
    /**details url check */
    const rgxWithSubcategory = new RegExp(/^\/[a-z-]+\/[a-z-]+\/[0-9]+$/);
    const rgxWithoutSubcategory = new RegExp(/^\/[a-z-]+\/[0-9]+$/);
    if (rgxWithSubcategory.test(pathname)) {
        const paths = pathname.split('/');
        return NextResponse.redirect(new URL('/' + paths[1] + '/' + paths[3], request.url), 301);
    }

    if (rgxWithoutSubcategory.test(pathname)) {
        return NextResponse.rewrite(new URL('/details' + pathname, request.url));
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};