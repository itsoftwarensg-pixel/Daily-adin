import React from "react";
import { getVideoDetailsByIdAction } from "@/app/actions/video";
import VideoDetails from "@/lib/features/videos/details";
import { BreadcrumbSchema, VideoObjectSchema } from "@/lib/components/seo/schemas";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { VIDEO_PAGE } from "@/lib/config/constant";
import { stripHtmlToPlainText } from "@/lib/utils/helpers";

// Define the type for the params
interface Params {
  params: Promise<{
    id: number;
  }>;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { id } = await params;

  const content = await getVideoDetailsByIdAction(id);

  const title = `${content.title} | The Daily Adin`;
  const description =
    stripHtmlToPlainText(content.description) ||
    "Watch latest videos on The Daily Adin";

  return {
    title,
    keywords:
      content.title || "daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/videos/${id}`,
    },
    openGraph: {
      images: content.thumbnail ? content.thumbnail : "",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: content.thumbnail ? [content.thumbnail] : [],
    },
  };
}

const Page = async ({ params }: Params) => {
  const { id } = await params;

  const videoDetails = await getVideoDetailsByIdAction(id);

  if (
    !videoDetails ||
    (Array.isArray(videoDetails) && videoDetails.length === 0)
  ) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: VIDEO_PAGE.name_bn, item: "/videos" },
          { name: videoDetails.title, item: `/videos/${id}` },
        ]}
      />
      <VideoObjectSchema
        name={videoDetails.title}
        description={stripHtmlToPlainText(videoDetails.description)}
        thumbnailUrl={videoDetails.thumbnail}
        uploadDate={videoDetails.created_at}
        pageUrl={`${SITE_CONFIG.url}/videos/${id}`}
      />
      <VideoDetails videoDetails={videoDetails} />
    </>
  );
};

export default Page;
