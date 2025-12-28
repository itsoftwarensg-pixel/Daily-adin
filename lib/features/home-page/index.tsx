import React from "react";
import HomeLead from "@/lib/features/home-page/lead";
import HomeMedia from "@/lib/features/home-page/media";
import HomeSports from "@/lib/features/home-page/sports";
import HomeCountry from "@/lib/features/home-page/country";
import HomeLaceTap from "@/lib/features/home-page/lace-tap";
import HomeInternational from "@/lib/features/home-page/international";
import HomeClickedMemories from "@/lib/features/home-page/clicked-memories";
import HomeCommercePantholokChoose from "@/lib/features/home-page/commerce";
import BreakingNews from "@/lib/components/common/breaking-news";
import HomeVideo from "@/lib/features/home-page/video";
import { HomePageContnetSection } from "@/lib/types/home.page";

// Props
interface Props {
  homeData: {
    'lead': HomePageContnetSection,
    'sports-news': HomePageContnetSection,
    'all-bd-news': HomePageContnetSection,
    'media-news': HomePageContnetSection,
    'lace-tap': HomePageContnetSection,
    'world-news': HomePageContnetSection,
    'video-news': HomePageContnetSection,
    'business-news': HomePageContnetSection,
    'clicked-memories': HomePageContnetSection,
  };
}

const HomePage = ({ homeData }: Props) => {
  return (
    <>
      <BreakingNews />
      <HomeLead homeData={homeData} />
      <HomeSports homeData={homeData} />
      <HomeCountry homeData={homeData} />
      <HomeMedia />
      <HomeLaceTap />
      <HomeInternational />
      <HomeVideo />
      <HomeCommercePantholokChoose />
      <HomeClickedMemories />
    </>
  );
};

export default HomePage;
