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

  const title = `${response.meta_title || response.name} | The Daily Adin`;
  const description =
    response.meta_description || "A modern, fast and SEO-friendly news portal";

  return {
    title,
    keywords:
      response.meta_keywords ||
      "daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/topic/${slug}`,
    },
    openGraph: {
      images: response.photo ? response.photo : "",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: response.photo ? [response.photo] : [],
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
