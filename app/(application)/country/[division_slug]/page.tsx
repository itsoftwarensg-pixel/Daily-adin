import React from "react";
import { getContentsByDivisionIdAction } from "@/app/actions/content";
import { getDivisionBySlugAction } from "@/app/actions/division";
import DivisionPage from "@/lib/features/country-category/division";
import { notFound } from "next/navigation";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: `Division page | The Daily Adin`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "A modern, fast and SEO-friendly news portal",
  };
}

// Define the type for the params
interface Params {
  params: {
    division_slug: string;
  };
}

export const dynamic = "force-dynamic";

const Page = async ({ params }: Params) => {
  const { division_slug } = await params;

  // Fetch division details with districts
  const division = await getDivisionBySlugAction(division_slug, "districts");

  if (!division) {
    notFound();
  }

  // Fetch contents for the division (Top section 5 contents, 10 items per page)
  const contents = await getContentsByDivisionIdAction(division.id, 1, 15);

  return <DivisionPage division={division} contents={contents} />;
};

export default Page;
