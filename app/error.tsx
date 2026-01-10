"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ApplicationHeaderClient } from "@/lib/components/layout/header/client";
import ApplicationFooter from "@/lib/components/layout/footer";
import { ScrollToTopButton } from "@/lib/components/layout/ui";
import Container from "@/lib/components/common/container";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen">
      <ApplicationHeaderClient />

      <main className="flex-grow flex items-center py-20 px-4 bg-gray-50/50">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-8 lg:p-12 bg-white rounded-3xl border border-gray-100">
            <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              কোথাও ভুল হয়েছে!
            </h1>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              দুঃখিত, অ্যাপ্লিকেশন লোড করার সময় সমস্যা হয়েছে। অনুগ্রহ করে
              পুনরায় চেষ্টা করুন বা পরে ফিরে আসুন। আপনার ইন্টারনেট কানেকশন চেক
              করুন।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => reset()}
                className="w-full sm:w-auto px-10 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:bg-black transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                পুনরায় চেষ্টা করুন
              </button>
              <Link
                href="/"
                className="w-full sm:w-auto px-10 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
              >
                হোম পেজে ফিরে যান
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <ApplicationFooter />
      <ScrollToTopButton />
    </div>
  );
}
