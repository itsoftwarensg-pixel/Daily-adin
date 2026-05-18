'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export default function AnalyticsTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window.gtag === 'function') {
            window.gtag('config', `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`, {
                page_path: pathname,
            });
        }
    }, [pathname]);

    return null;
}
