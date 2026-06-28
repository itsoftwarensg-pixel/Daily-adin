import React from "react";
import { getContentsByTopicIdAction } from "@/app/actions/content";
import { getTopicBySlugAction } from "@/app/actions/topic";
import TopicPage from "@/lib/features/topic";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config/site-config";

// Define the type for the params
interface Params {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;

  const response = await getTopicBySlugAction(slug);

  const title = `${response.meta_title || response.name} | দৈনিক এদিন`;
  const description =
    response.meta_description || "দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";

  return {
    title,
    keywords:
      response.meta_keywords ||
      "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/topic/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "bn_BD",
      images: [{ url: response.photo || SITE_CONFIG.commonOgImage, width: 1200, height: 630, alt: title }],
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: response.photo ? [response.photo] : [SITE_CONFIG.commonOgImage],
    },
  };
}

const Page = async ({ params }: Params) => {
  const { slug } = await params;

  const topic = await getTopicBySlugAction(slug);

  if (!topic || (Array.isArray(topic) && topic.length === 0)) {
    notFound();
  }

  const data = await getContentsByTopicIdAction(topic.id, 1, 10);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: topic.meta_title || topic.name, item: `/topic/${slug}` },
        ]}
      />
      <TopicPage
        topic={topic}
        data={{
          last_page: data.last_page,
          data: data.data,
        }}
      />
    </>
  );
};

export default Page;
