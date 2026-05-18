import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import Script from 'next/script';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { Noto_Serif_Bengali } from "next/font/google";
import { Bounce, ToastContainer } from "react-toastify";
import AnalyticsTracker from "@/lib/components/google/analytics-tracker";
import { SITE_CONFIG } from "@/lib/config/site-config";

const noto_serif = Noto_Serif_Bengali({
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daily Adin",
  description: `Daily Adin is a trusted news portal delivering the latest updates, breaking news, and in-depth analysis from around the world. Stay informed with timely articles, expert insights, and comprehensive coverage on politics, business, technology, culture, and more.`,
};

interface PropsType {
  children: ReactNode;
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.alternateName,
  url: SITE_CONFIG.url,
};

export default function RootLayout({ children }: PropsType) {
  return (
    <html lang="bn">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* START Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />

        <Script id='google-analytics'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID});
          `}
        </Script>
        {/* END Google Analytics */}

      </head>
      <body className={`${noto_serif.className} antialiased`}>

        {/* To track page views for each route change */}
        <AnalyticsTracker />

        <main>
          <div className="w-full">{children}</div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
            style={{
              zIndex: 9999999,
            }}
          />
        </main>
      </body>
    </html>
  );
}
