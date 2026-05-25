import React from "react";
import { getCategoryBySlugAction } from "@/app/actions/category";
import { getContentsByCategoryIdAction } from "@/app/actions/content";
import CountryCategory from "@/lib/features/country-category";
import { getAllDivisionsAction } from "@/app/actions/division";
import { COUNTRY_PAGE } from "@/lib/config/constant";
import { notFound } from "next/navigation";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { SITE_CONFIG } from "@/lib/config/site-config";

// Generate dynamic metadata
export async function generateMetadata() {
  // return {
  //   title: `${COUNTRY_PAGE.name_bn} | The Daily Adin`,
  //   keywords: "daily-adin, adin, news, news-portal, content, article",
  //   description: "A modern, fast and SEO-friendly news portal",
  // };

  const category_slug = COUNTRY_PAGE.slug;

  const category = await getCategoryBySlugAction(category_slug);

  if (!category) {
    return { title: "Not Found | The Daily Adin" };
  }

  const title = category.meta_title || `${category.name} | The Daily Adin`;
  const description =
    category.meta_description;

  return {
    title,
    keywords: category.meta_keywords,
    description,
    openGraph: {
      images: category.photo || "",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: category.photo ? [category.photo] : [],
    },
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
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: category.name, item: `/${category_slug}` },
        ]}
      />

      <CountryCategory
        category={category}
        contents={contents}
        divisions={divisions}
      />
    </>
  );
};

export default Page;
