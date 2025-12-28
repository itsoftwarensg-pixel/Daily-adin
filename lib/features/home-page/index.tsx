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
import { HomePageContnetSection, HomePagePhotoAlbumSection, HomePageVideoSection } from "@/lib/types/home.page";

// Props
interface Props {
  homeData: {
    'lead': HomePageContnetSection,
    'recent': HomePageContnetSection,
    'sports-news': HomePageContnetSection,
    'all-bd-news': HomePageContnetSection,
    'entertainment-news': HomePageContnetSection,
    'world-news': HomePageContnetSection,
    'video': HomePageVideoSection,
    'business-news': HomePageContnetSection,
    'lifestyle': HomePageContnetSection, // lace tap
    'photo': HomePagePhotoAlbumSection, // clicked memories
  };
}

const HomePage = ({ homeData }: Props) => {
  return (
    <>
      <BreakingNews />
      <HomeLead homeData={homeData} />
      <HomeSports homeData={homeData} />
      <HomeCountry homeData={homeData} />
      <HomeMedia homeData={homeData} />
      <HomeLaceTap homeData={homeData} />
      <HomeInternational homeData={homeData} />
      <HomeVideo homeData={homeData} />
      <HomeCommercePantholokChoose homeData={homeData} />
      <HomeClickedMemories homeData={homeData} />
    </>
  );
};

export default HomePage;
