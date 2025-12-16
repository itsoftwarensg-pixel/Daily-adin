import React from "react";
import HomeLead from "@/lib/features/home-page/lead";
import HomeMedia from "@/lib/features/home-page/media";
import HomeSports from "@/lib/features/home-page/sports";
import HomeCountry from "@/lib/features/home-page/country";
import HomeLaceTap from "@/lib/features/home-page/lace-tap";
import HomeLeadBelow from "@/lib/features/home-page/lead-below";
import HomeInternational from "@/lib/features/home-page/international";
import HomeClickedMemories from "@/lib/features/home-page/clicked-memories";
import HomeCommercePantholokChoose from "@/lib/features/home-page/commerce";
import BreakingNews from "@/lib/components/common/breaking-news";

const HomePage = () => {
  return (
    <>
      <BreakingNews />
      <HomeLead />
      {/* <HomeLeadBelow /> */}
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

export default HomePage;
