import React from "react";
import PhotoDetails from "@/lib/features/photos/details";
import { getPhotoDetailsByIdAction } from "@/app/actions/photo";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { PHOTO_PAGE } from "@/lib/config/constant";

// Define the type for the params
interface Params {
  params: Promise<{
    id: number;
  }>;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { id } = await params;

  const content = await getPhotoDetailsByIdAction(id);

  const title = `${content.name} | The Daily Adin`;
  const description =
    content.description || "Browse latest photo albums on The Daily Adin";

  return {
    title,
    keywords:
      content.name || "daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/photos/${id}`,
    },
    openGraph: {
      images: content.feature_image ? content.feature_image : "",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: content.feature_image ? [content.feature_image] : [],
    },
  };
}

const Page = async ({ params }: Params) => {
  const { id } = await params;

  const content = await getPhotoDetailsByIdAction(id);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: PHOTO_PAGE.name_bn, item: "/photos" },
          { name: content.name, item: `/photos/${id}` },
        ]}
      />
      <PhotoDetails data={content} />
    </>
  );
};

export default Page;
