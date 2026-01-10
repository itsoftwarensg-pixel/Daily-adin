import React from "react";
import { getContentsByDistrictIdAction } from "@/app/actions/content";
import { getDistrictBySlugAction } from "@/app/actions/district";
import DistrictPage from "@/lib/features/country-category/district";
import { notFound } from "next/navigation";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: `District page | The Daily Adin`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "A modern, fast and SEO-friendly news portal",
  };
}

// Define the type for the params
interface Params {
  params: {
    division_slug: string;
    district_slug: string;
  };
}

const Page = async ({ params }: Params) => {
  const { division_slug, district_slug } = await params;

  // Fetch district details with upazilas,division
  const district = await getDistrictBySlugAction(
    district_slug,
    "upazilas,division"
  );

  if (!district || (Array.isArray(district) && district.length === 0)) {
    notFound();
  }

  // Fetch contents for the district (Top section 5 contents, 10 items per page)
  const contents = await getContentsByDistrictIdAction(district.id, 1, 15);

  return <DistrictPage district={district} contents={contents} />;
};

export default Page;
