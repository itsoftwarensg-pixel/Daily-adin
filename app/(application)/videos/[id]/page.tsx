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

  const title = `${content.title} | দৈনিক এদিন - ভিডিও`;
  const description =
    stripHtmlToPlainText(content.description) ||
    "ভিডিও দেখুন। দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";

  return {
    title,
    keywords: "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/videos/${id}`,
    },
    openGraph: {
      type: "article",
      locale: "bn_BD",
      url: `${SITE_CONFIG.url}/videos/${id}`,
      images: [{ url: content.thumbnail || SITE_CONFIG.commonOgImage, width: 1200, height: 630, alt: title }],
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: content.thumbnail ? [content.thumbnail] : [SITE_CONFIG.commonOgImage],
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
