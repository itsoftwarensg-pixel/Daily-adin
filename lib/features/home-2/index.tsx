import React from "react";
import BreakingNews from "@/lib/components/common/breaking-news";
import HomeLead from "@/lib/features/home-2/lead";
import HomeMedia from "@/lib/features/home-2/media";
import HomeSports from "@/lib/features/home-2/sports";
import HomeCountry from "@/lib/features/home-2/country";
import HomeLaceTap from "@/lib/features/home-2/lace-tap";
import HomeInternational from "@/lib/features/home-2/international";
import HomeClickedMemories from "@/lib/features/home-2/clicked-memories";
import HomeCommercePantholokChoose from "@/lib/features/home-2/commerce";

const HomePage2 = () => {
  return (
    <>
      <BreakingNews />
      <HomeLead />
      <HomeSports />
      <HomeCountry />
      <HomeMedia />
      <HomeLaceTap />
      <HomeInternational />
      <HomeClickedMemories />
      <HomeCommercePantholokChoose />
    </>
  );
};

export default HomePage2;
