import React from "react";
import PhotoDetails from "@/lib/features/photos/details";
import { getPhotoDetailsByIdAction } from "@/app/actions/photo";

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
  const content = await getPhotoDetailsByIdAction(id);

  return {
    title: `${content.name} | The Daily Adin`,
    keywords:
      content.name || "daily-adin, adin, news, news-portal, content, article",
    description:
      content.description || "A modern, fast and SEO-friendly news portal",
    openGraph: {
      images: content.feature_image ? content.feature_image : "",
      title: `${content.name} | The Daily Adin`,
      description:
        content.description || "A modern, fast and SEO-friendly news portal",
    },
  };
}

const Page = async ({ params }: Params) => {
  const { id } = await params;

  // Fetch content photo details by photo id
  const content = await getPhotoDetailsByIdAction(id);

  return <PhotoDetails data={content} />;
};

export default Page;
