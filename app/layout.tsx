import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import { Inter } from "next/font/google";
import { Tiro_Bangla } from 'next/font/google' // TODO:: Yet font is not finalized
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const tiro_bangla = Tiro_Bangla({ // TODO:: Yet font is not finalized
  weight: ['400'], // choose available weights
  subsets: ['latin', "bengali"], // Bangla subset is required
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Daily Adin",
  description: `Daily Adin is a trusted news portal delivering the latest updates, breaking news, and in-depth analysis from around the world. Stay informed with timely articles, expert insights, and comprehensive coverage on politics, business, technology, culture, and more.`,
};

interface PropsType {
  children: ReactNode;
}

export default function RootLayout({ children }: PropsType) {
  return (
    <html lang="en">
      <body className={`${tiro_bangla.className} antialiased`}>
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
