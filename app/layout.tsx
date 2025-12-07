import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={`${inter.className} antialiased`}>
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
