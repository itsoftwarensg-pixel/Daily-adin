"use client";

import Link from "next/link";
import { ApplicationHeaderClient } from "@/lib/components/layout/header/client";
import ApplicationFooter from "@/lib/components/layout/footer";
import { ScrollToTopButton } from "@/lib/components/layout/ui";
import Container from "@/lib/components/common/container";

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center py-20 px-4">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative mb-8">
            <h1 className="text-9xl font-black text-gray-100 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                পৃষ্ঠাটি পাওয়া যায়নি
              </h2>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি। সম্ভবত এটি
            মুছে ফেলা হয়েছে বা আপনার টাইপ করা ঠিকানায় কোনো ভুল ছিল।
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              হোম পেজে ফিরে যান
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-8 py-4 border-2 border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              আগের পৃষ্ঠায় ফিরে যান
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
}
