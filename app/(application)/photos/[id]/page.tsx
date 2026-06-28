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

  const title = `${content.name} | দৈনিক এদিন - ক্লিকস্মৃতি`;
  const description =
    content.description || "দৈনিক এদিন - এর সকল ক্লিকস্মৃতি একসাথে দেখুন। দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";

  return {
    title,
    keywords:
      content.name + ", ক্লিকস্মৃতি, দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com, photos, photo, album, browse photos, daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/photos/${id}`,
    },
    openGraph: {
      type: "article",
      locale: "bn_BD",
      images: [{ url: content.feature_image || SITE_CONFIG.commonOgImage, width: 1200, height: 630, alt: title }],
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: content.feature_image ? [content.feature_image] : [SITE_CONFIG.commonOgImage],
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
