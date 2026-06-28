import React, { ReactNode } from "react";
import { ScrollToTopButton } from "@/lib/components/layout/ui";
import ApplicationFooter from "@/lib/components/layout/footer";
import ApplicationHeader from "@/lib/components/layout/header";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: "দৈনিক এদিন",
    keywords: "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com",
    description: "দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।",
  };
}

interface Props {
  children: Readonly<ReactNode>;
}

export default function AppLayout({ children }: Props) {
  return (
    <div>
      <ApplicationHeader />
      <main className="pb-4">{children}</main>
      <ApplicationFooter />

      {/* Floating scroll-to-top button */}
      <ScrollToTopButton />
    </div>
  );
}
