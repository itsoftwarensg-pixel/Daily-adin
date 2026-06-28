import React from "react";
import { getContentByIdAction } from "@/app/actions/content";
import DetailsPage from "@/lib/features/details";
import { notFound, redirect } from "next/navigation";
import { ArticleSchema, BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { stripHtmlToPlainText } from "@/lib/utils/helpers";
import { SITE_CONFIG } from "@/lib/config/site-config";

// Define the type for the params
interface Params {
  params: {
    category: string;
    id: number;
  };
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { id } = await params;

  // Fetch content details by id for SEO metadata
  const content = await getContentByIdAction(id);

  // -- Meta Title --
  const title = content.meta_title || `${content.heading} | দৈনিক এদিন`;
  
  // -- Meta description --
  const description =
    content.meta_description ||
    stripHtmlToPlainText(content.content_details) ||
    "দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";
  
  // -- Canonical URL --
    const fullUrl = content.full_url.startsWith("http")
    ? content.full_url
    : `${SITE_CONFIG.url}${content.full_url}`;

  // -- Keywords --
   const keywords =
    content.meta_keywords ||
    "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com";

  return {
    title,
    keywords,
    description,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      images: content.full_image_path || SITE_CONFIG.commonOgImage,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: content.full_image_path ? [content.full_image_path] : [SITE_CONFIG.commonOgImage],
    },
  };
}

const Page = async ({ params }: Params) => {
  const { id, category } = await params;

  // Fetch content details by id including category, tags, writer, next_ids (load more)
  const content = await getContentByIdAction(
    id,
    "next_ids,writer,tags,category"
  );

  if (!content || (Array.isArray(content) && content.length === 0)) {
    notFound();
  }

  // Redirect to correct category if alias doesn't match
  if (content.category.alias !== category) {
    redirect(`/${content.category.alias}/${content.id}`);
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          {
            name: content.category.name,
            item: `/${content.category.alias}`,
          },
          {
            name: content.heading,
            item: `${content.full_url}`,
          },
        ]}
      />
      <ArticleSchema
        headline={content.heading}
        image={content.full_image_path}
        url={content.full_url}
        datePublished={content.created_at}
        dateModified={content.updated_at || content.created_at}
        authorName={content.writer?.name_bn || "নিজস্ব প্রতিবেদক"}
        authorUrl={`/author/${content.writer?.slug || "staff"}`}
        description={content.meta_description || content.content_brief}
        articleSection={content.category.name}
        keywords={
          content.meta_keywords ||
          content.tags?.map((t: any) => t.name_bn).join(",")
        }
      />
      <DetailsPage contentDetails={content} category={content.category} />
    </>
  );
};

export default Page;
