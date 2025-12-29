import React from "react";
import { getCategoryBySlugAction } from "@/app/actions/category";
import { getContentsByCategoryIdAction } from "@/app/actions/content";
import AllBDNewsPage from "@/lib/features/all-bd-news";
import { getAllDivisionsAction } from "@/app/actions/division";
import { COUNTRY_PAGE } from "@/lib/config/constant";
import { notFound } from "next/navigation";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: `${COUNTRY_PAGE.name_bn} | The Daily Adin`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "A modern, fast and SEO-friendly news portal",
  };
}

export const dynamic = "force-dynamic";

const Page = async () => {
  const category_slug = COUNTRY_PAGE.slug;

  // Fetch category details with position_contents and all divisions in parallel
  const [category, divisions] = await Promise.all([
    getCategoryBySlugAction(category_slug, "position_contents"),
    getAllDivisionsAction(),
  ]);

  if (!category) {
    notFound();
  }

  // Fetch contents for the category (first page, 10 items per page)
  const contents = await getContentsByCategoryIdAction(category.id, 1, 10);

  return (
    <AllBDNewsPage
      category={category}
      contents={contents}
      divisions={divisions}
    />
  );
};

export default Page;
