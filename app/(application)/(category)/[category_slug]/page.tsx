import React from "react";
import CategoryPage from "@/lib/features/category";
import { getCategoryBySlugAction } from "@/app/actions/category";
import { getContentsByCategoryIdAction } from "@/app/actions/content";
import { Category } from "@/lib/types/category.page";

import { notFound } from "next/navigation";

// Define the type for the params
interface Params {
  params: Promise<{
    category_slug: string;
  }>;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { category_slug } = await params;

  const category = await getCategoryBySlugAction(category_slug);

  if (!category) {
    return {
      title: "Not Found | The Daily Adin",
    };
  }

  return {
    title: category.meta_title || `${category.name_bn} | The Daily Adin`,
    keywords:
      category.meta_keywords ||
      "daily-adin, adin, news, news-portal, content, article",
    description:
      category.meta_description ||
      "A modern, fast and SEO-friendly news portal",
    openGraph: {
      images: category.photo || "",
      title: category.meta_title || `${category.name_bn} | The Daily Adin`,
      description:
        category.meta_description ||
        "A modern, fast and SEO-friendly news portal",
    },
  };
}

const CategorySlugPage = async ({ params }: Params) => {
  const { category_slug } = await params;

  // Fetch category details with position_contents and subcategories
  const category = await getCategoryBySlugAction(
    category_slug,
    "subcategories,position_contents"
  );

  if (!category) {
    notFound();
  }

  return <CategoryPage category={category} />;
};

export default CategorySlugPage;
