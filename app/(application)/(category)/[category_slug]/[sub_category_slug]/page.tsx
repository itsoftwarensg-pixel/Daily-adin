import React from "react";
import SubCategoryPage from "@/lib/features/sub-category";
import { getCategoryBySlugAction } from "@/app/actions/category";
import { getContentsBySubCategoryIdAction } from "@/app/actions/content";
import { getSubCategoryBySlugAction } from "@/app/actions/sub-category";
import { notFound, redirect } from "next/navigation";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: `Sub Category | The Daily Adin`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "A modern, fast and SEO-friendly news portal",
  };
}

// Define the type for the params
interface Params {
  params: {
    category_slug: string;
    sub_category_slug: string;
  };
}

export const dynamic = "force-dynamic";

const Page = async ({ params }: Params) => {
  const { category_slug, sub_category_slug } = await params;

  const [category, subCategory] = await Promise.all([
    getCategoryBySlugAction(category_slug, "subcategories"),
    getSubCategoryBySlugAction(sub_category_slug, "category"),
  ]);

  if (!subCategory) {
    notFound();
  }

  if (subCategory.category.alias !== category_slug) {
    redirect(`/${subCategory.category.alias}/${sub_category_slug}`);
  }

  const contents = await getContentsBySubCategoryIdAction(
    subCategory.id,
    1,
    15 // 5 for Top section, 10 for Load more section
  );

  return (
    <SubCategoryPage
      subCategory={subCategory}
      category={category}
      contents={contents}
    />
  );
};

export default Page;
