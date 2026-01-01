import React from "react";
import HomePage from "@/lib/features/home-page";
import { getHomePageDataAction } from "@/app/actions/home";
import { HOME_PAGE_CHUNK_1 } from "@/lib/config/constant";
import { getAllDivisionsAction } from "@/app/actions/division";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: `Home | The Daily Adin`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "A modern, fast and SEO-friendly news portal",
  };
}

export const dynamic = "force-dynamic";

const RootHomePage = async () => {
  // Fetch home page data with included relations
  const homeData = await getHomePageDataAction(HOME_PAGE_CHUNK_1);

  const divisionList = await getAllDivisionsAction();

  return <HomePage initialHomeData={homeData} divisionList={divisionList} />;
};

export default RootHomePage;
