import React from "react";
import SubCategoryPage from "@/lib/features/sub-category";
import { getCategoryBySlugAction } from "@/app/actions/category";
import { getContentsBySubCategoryIdAction } from "@/app/actions/content";
import { getSubCategoryBySlugAction } from "@/app/actions/sub-category";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { notFound, redirect } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { stripHtmlToPlainText } from "@/lib/utils/helpers";

// Define the type for the params
interface Params {
  params: Promise<{
    category_slug: string;
    sub_category_slug: string;
  }>;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
  const { category_slug, sub_category_slug } = await params;
  const subCategory = await getSubCategoryBySlugAction(
    category_slug,
    sub_category_slug,
    "category"
  );

  if (!subCategory) return { title: `Not Found | The Daily Adin` };

  const title =
    subCategory.meta_title ||
    `${subCategory.name_bn || subCategory.name} | The Daily Adin`;
  const description =
    subCategory.meta_description ||
    stripHtmlToPlainText(subCategory.description);

  return {
    title,
    keywords:
      subCategory.meta_keywords ||
      "daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${category_slug}/${sub_category_slug}`,
    },
    openGraph: {
      images: subCategory.photo || "",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: subCategory.photo ? [subCategory.photo] : [],
    },
  };
}

export const dynamic = "force-dynamic";

const Page = async ({ params }: Params) => {
  const { category_slug, sub_category_slug } = await params;

  const [category, subCategory] = await Promise.all([
    getCategoryBySlugAction(category_slug, "subcategories"),
    getSubCategoryBySlugAction(category_slug, sub_category_slug, "category"),
  ]);

  if (
    !subCategory ||
    (Array.isArray(subCategory) && subCategory.length === 0)
  ) {
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
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: category.name, item: `/${category_slug}` },
          {
            name: subCategory.name_bn || subCategory.name,
            item: `/${category_slug}/${sub_category_slug}`,
          },
        ]}
      />
      <SubCategoryPage
        subCategory={subCategory}
        category={category}
        contents={contents}
      />
    </>
  );
};

export default Page;
