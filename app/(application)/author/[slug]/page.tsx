import React from "react";
import { getContentsByWriterIdAction } from "@/app/actions/content";
import { notFound } from "next/navigation";
import { getWriterBySlugAction } from "@/app/actions/writer";
import WriterDetails from "@/lib/features/writer/details";

// Define the type for the params
interface Params {
  params: {
    slug: string;
  };
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;

  // Fetch writer/author information for SEO metadata
  const response = await getWriterBySlugAction(slug);

  return {
    title: `${response.name} | The Daily Adin`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description:
      response.description || "A modern, fast and SEO-friendly news portal",
    openGraph: {
      images: response.photo ? response.photo : "",
      title: `${response.name} | The Daily Adin`,
      description:
        response.description || "A modern, fast and SEO-friendly news portal",
    },
  };
}

const Page = async ({ params }: Params) => {
  const { slug } = await params;

  // Fetch writer/author by slug
  const writer = await getWriterBySlugAction(slug);

  if (!writer || (Array.isArray(writer) && writer.length === 0)) {
    notFound();
  }

  // Fetch contents by writer id
  const data = await getContentsByWriterIdAction(writer.id, 1, 10);

  return (
    <WriterDetails
      writer={writer}
      data={{
        last_page: data.last_page,
        data: data.data,
      }}
    />
  );
};

export default Page;
