import React from "react";
import { getContentByIdAction } from "@/app/actions/content";
import DetailsPage from "@/lib/features/details";
import { redirect } from "next/navigation";

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

  return {
    title: content.meta_title || `${content.heading} | The Daily Adin`,
    keywords:
      content.meta_keywords ||
      "daily-adin, adin, news, news-portal, content, article",
    description:
      content.meta_description || "A modern, fast and SEO-friendly news portal",
    openGraph: {
      images: content.full_image_path || "",
      title: content.meta_title || `${content.heading} | The Daily Adin`,
      description:
        content.meta_description ||
        "A modern, fast and SEO-friendly news portal",
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

  // Redirect to correct category if alias doesn't match
  if (content.category.alias !== category) {
    redirect(`/${content.category.alias}/${content.id}`);
  }

  return <DetailsPage contentDetails={content} category={content.category} />;
};

export default Page;
