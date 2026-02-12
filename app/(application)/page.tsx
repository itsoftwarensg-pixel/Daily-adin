import React from "react";
import HomePage from "@/lib/features/home-page";
import { getHomePageDataAction } from "@/app/actions/home";
import { HOME_PAGE_CHUNK_1 } from "@/lib/config/constant";
import { getAllDivisionsAction } from "@/app/actions/division";

import {
  OrganizationSchema,
  LocalBusinessSchema,
  BreadcrumbSchema,
} from "@/lib/components/seo/schemas";
import { getElectionDataAction } from "@/app/actions/election";

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

  const electionData = await getElectionDataAction();

  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }]} />
      <HomePage initialHomeData={homeData} divisionList={divisionList} electionData={electionData} />
    </>
  );
};

export default RootHomePage;
