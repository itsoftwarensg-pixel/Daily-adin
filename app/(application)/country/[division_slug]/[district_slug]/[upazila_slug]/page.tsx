import React from "react";
import { getContentsByUpazilaIdAction } from "@/app/actions/content";
import {
  getUpazilaByDistrictAndUpazilaSlugAction,
  getUpazilasByDistrictIdAction,
} from "@/app/actions/upazila";
import UpazilaPage from "@/lib/features/country-category/upazila";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { COUNTRY_PAGE } from "@/lib/config/constant";

// Define the type for the params
interface Params {
  params: Promise<{
    division_slug: string;
    district_slug: string;
    upazila_slug: string;
  }>;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { division_slug, district_slug, upazila_slug } = await params;
  const upazila = await getUpazilaByDistrictAndUpazilaSlugAction(
    district_slug,
    upazila_slug
  );

  if (!upazila) return { title: `Not Found | The Daily Adin` };

  const description =
    upazila.meta_description ||
    `${upazila.name_bn} উপজেলার সর্বশেষ সংবাদ ও আপডেট`;

  return {
    title: upazila.meta_title || `${upazila.name_bn} | The Daily Adin`,
    keywords:
      upazila.meta_keywords ||
      "daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/country/${division_slug}/${district_slug}/${upazila_slug}`,
    },
    openGraph: {
      images: upazila.photo || "",
      title: upazila.meta_title || `${upazila.name_bn} | The Daily Adin`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: upazila.meta_title || `${upazila.name_bn} | The Daily Adin`,
      description,
      images: upazila.photo ? [upazila.photo] : [],
    },
  };
}

const Page = async ({ params }: Params) => {
  const { division_slug, district_slug, upazila_slug } = await params;

  // Fetch upazila details with district,division
  const upazila = await getUpazilaByDistrictAndUpazilaSlugAction(
    district_slug,
    upazila_slug,
    "district,division"
  );

  if (!upazila || (Array.isArray(upazila) && upazila.length === 0)) {
    notFound();
  }

  // Fetch upazilas and contents in parallel
  const [upazilas, contents] = await Promise.all([
    await getUpazilasByDistrictIdAction(upazila.district.id),
    getContentsByUpazilaIdAction(upazila.id, 1, 15),
  ]);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: COUNTRY_PAGE.name_bn, item: "/country" },
          {
            name: upazila.division.name_bn,
            item: `/country/${division_slug}`,
          },
          {
            name: upazila.district.name_bn,
            item: `/country/${division_slug}/${district_slug}`,
          },
          {
            name: upazila.name_bn,
            item: `/country/${division_slug}/${district_slug}/${upazila_slug}`,
          },
        ]}
      />
      <UpazilaPage upazila={upazila} upazilas={upazilas} contents={contents} />
    </>
  );
};

export default Page;
