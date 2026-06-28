import React from "react";
import { getContentsByWriterIdAction } from "@/app/actions/content";
import { notFound } from "next/navigation";
import { getWriterBySlugAction } from "@/app/actions/writer";
import WriterDetails from "@/lib/features/writer/details";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { WRITER_PAGE } from "@/lib/config/constant";

// Define the type for the params
interface Params {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;

  const response = await getWriterBySlugAction(slug);

  const title = `${response.name} | দৈনিক এদিন`;
  const description =
    response.description || "দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";

  return {
    title,
    keywords: "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com, writer, author, writer list, author list, daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/author/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "bn_BD",
      url: `${SITE_CONFIG.url}/author/${slug}`,
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

  const writer = await getWriterBySlugAction(slug);

  if (!writer || (Array.isArray(writer) && writer.length === 0)) {
    notFound();
  }

  const data = await getContentsByWriterIdAction(writer.id, 1, 10);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: WRITER_PAGE.name_bn, item: "/author" },
          { name: writer.name, item: `/author/${slug}` },
        ]}
      />
      <WriterDetails
        writer={writer}
        data={{
          last_page: data.last_page,
          data: data.data,
        }}
      />
    </>
  );
};

export default Page;
