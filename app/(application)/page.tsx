import React from "react";
import HomePage from "@/lib/features/home-page";
import { getHomePageDataAction } from "@/app/actions/home";
import { HOME_PAGE_CHUNK_1 } from "@/lib/config/constant";
import { getAllDivisionsAction } from "@/app/actions/division";

import { SITE_CONFIG } from "@/lib/config/site-config";

// // Generate dynamic metadata
export async function generateMetadata() {
  const title = `দৈনিক এদিন`;
  const description = "দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";

  return {
    title,
    keywords: "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}`,
    },
    openGraph: {
      type: "website",
      locale: "bn_BD",
      url: SITE_CONFIG.url,
      images: [{ url: SITE_CONFIG.commonOgImage, width: 1200, height: 630, alt: title }],
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_CONFIG.commonOgImage],
    },
  };
}

// Public news data is refreshed in the background every 30 seconds.
export const revalidate = 30;

const RootHomePage = async () => {
  const [homeData, divisionList] = await Promise.all([
    getHomePageDataAction(HOME_PAGE_CHUNK_1),
    getAllDivisionsAction(),
  ]);

  return (
    <HomePage
      ramadanDays={[]}
      ramadanDivisionOffsets={[]}
      initialHomeData={homeData ?? {}}
      divisionList={divisionList}
    // electionData={electionData}
    />
  );
};

export default RootHomePage;
