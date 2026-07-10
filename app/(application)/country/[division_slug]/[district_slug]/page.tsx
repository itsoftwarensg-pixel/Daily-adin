import React from "react";
import { getContentsByDistrictIdAction } from "@/app/actions/content";
import { getDistrictBySlugAction } from "@/app/actions/district";
import DistrictPage from "@/lib/features/country-category/district";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { COUNTRY_PAGE } from "@/lib/config/constant";

// Define the type for the params
interface Params {
  params: Promise<{
    division_slug: string;
    district_slug: string;
  }>;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { division_slug, district_slug } = await params;
  const district = await getDistrictBySlugAction(district_slug);

  if (!district) return { title: `Not Found | দৈনিক এদিন` };

  const title = district.meta_title || `${district.name_bn} | দৈনিক এদিন`;
  const description =
    district.meta_description ||
    `${district.name_bn} জেলার সর্বশেষ সংবাদ ও আপডেট`;

  return {
    title,
    keywords:
      district.meta_keywords || "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/country/${division_slug}/${district_slug}`,
    },
    openGraph: {
      type: "website",
      locale: "bn_BD",
      url: `${SITE_CONFIG.url}/country/${division_slug}/${district_slug}`,
      images: [{ url: district.photo || SITE_CONFIG.commonOgImage, width: 1200, height: 630, alt: title }],
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: district.photo ? [district.photo] : [SITE_CONFIG.commonOgImage],
    },
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

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: COUNTRY_PAGE.name_bn, item: "/country" },
          {
            name: district.division.name_bn,
            item: `/country/${division_slug}`,
          },
          {
            name: district.name_bn,
            item: `/country/${division_slug}/${district_slug}`,
          },
        ]}
      />
      <DistrictPage district={district} contents={contents} />
    </>
  );
};

export default Page;
