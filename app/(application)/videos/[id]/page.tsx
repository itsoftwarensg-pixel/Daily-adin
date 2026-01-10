import React from "react";
import { getVideoDetailsByIdAction } from "@/app/actions/video";
import VideoDetails from "@/lib/features/videos/details";
import { notFound } from "next/navigation";

// Define the type for the params
interface Params {
  params: {
    id: number;
  };
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { id } = await params;

  // Fetch content details by id for SEO metadata
  const content = await getVideoDetailsByIdAction(id);

  return {
    title: `${content.title} | The Daily Adin`,
    keywords:
      content.title || "daily-adin, adin, news, news-portal, content, article",
    description:
      content.description || "A modern, fast and SEO-friendly news portal",
    openGraph: {
      images: content.thumbnail ? content.thumbnail : "",
      title: `${content.title} | The Daily Adin`,
      description:
        content.description || "A modern, fast and SEO-friendly news portal",
    },
  };
}

const Page = async ({ params }: Params) => {
  const { id } = await params;

  // Fetch content video details by video id
  const videoDetails = await getVideoDetailsByIdAction(id);

  if (
    !videoDetails ||
    (Array.isArray(videoDetails) && videoDetails.length === 0)
  ) {
    notFound();
  }

  return <VideoDetails videoDetails={videoDetails} />;
};

export default Page;
