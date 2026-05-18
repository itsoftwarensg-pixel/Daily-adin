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

  const title = `${response.name} | The Daily Adin`;
  const description =
    response.description || "A modern, fast and SEO-friendly news portal";

  return {
    title,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/author/${slug}`,
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
