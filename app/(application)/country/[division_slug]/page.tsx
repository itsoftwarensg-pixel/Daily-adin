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

  if (!division) return { title: `Not Found | দৈনিক এদিন` };

  const title = division.meta_title || `${division.name_bn} | দৈনিক এদিন`;
  const description =
    division.meta_description ||
    `${division.name_bn} বিভাগের সর্বশেষ সংবাদ ও আপডেট`;

  return {
    title,
    keywords:
      division.meta_keywords || "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/country/${division_slug}`,
    },
    openGraph: {
      type: "website",
      locale: "bn_BD",
      url: `${SITE_CONFIG.url}/country/${division_slug}`,
      images: [{ url: division.photo || SITE_CONFIG.commonOgImage, width: 1200, height: 630, alt: title }],
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: division.photo ? [division.photo] : [SITE_CONFIG.commonOgImage],
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
