import React from "react";
import { getContentsByDivisionIdAction } from "@/app/actions/content";
import { getDivisionBySlugAction } from "@/app/actions/division";
import DivisionPage from "@/lib/features/country-category/division";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { COUNTRY_PAGE } from "@/lib/config/constant";

// Define the type for the params
interface Params {
  params: Promise<{
    division_slug: string;
  }>;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { division_slug } = await params;
  const division = await getDivisionBySlugAction(division_slug);

  if (!division) return { title: `Not Found | The Daily Adin` };

  const description =
    division.meta_description ||
    `${division.name_bn} বিভাগের সর্বশেষ সংবাদ ও আপডেট`;

  return {
    title: division.meta_title || `${division.name_bn} | The Daily Adin`,
    keywords:
      division.meta_keywords ||
      "daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/country/${division_slug}`,
    },
    openGraph: {
      images: division.photo || "",
      title: division.meta_title || `${division.name_bn} | The Daily Adin`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: division.meta_title || `${division.name_bn} | The Daily Adin`,
      description,
      images: division.photo ? [division.photo] : [],
    },
  };
}

export const dynamic = "force-dynamic";

const Page = async ({ params }: Params) => {
  const { division_slug } = await params;

  // Fetch division details with districts
  const division = await getDivisionBySlugAction(division_slug, "districts");

  if (!division || (Array.isArray(division) && division.length === 0)) {
    notFound();
  }

  // Fetch contents for the division (Top section 5 contents, 10 items per page)
  const contents = await getContentsByDivisionIdAction(division.id, 1, 15);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: COUNTRY_PAGE.name_bn, item: "/country" },
          { name: division.name_bn, item: `/country/${division_slug}` },
        ]}
      />
      <DivisionPage division={division} contents={contents} />
    </>
  );
};

export default Page;
