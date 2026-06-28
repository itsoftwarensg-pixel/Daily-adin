import React from "react";
import CategoryPage from "@/lib/features/category";
import { getCategoryBySlugAction } from "@/app/actions/category";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config/site-config";

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
    return { title: "Not Found | দৈনিক এদিন" };
  }

  const title = category.meta_title || `${category.name} | দৈনিক এদিন`;
  const description =
    category.meta_description || "দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";

  return {
    title,
    keywords:
      category.meta_keywords ||
      "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${category_slug}`,
    },
    openGraph: {
      images: category.photo || SITE_CONFIG.commonOgImage,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: category.photo ? [category.photo] : [SITE_CONFIG.commonOgImage],
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

  if (!category || (Array.isArray(category) && category.length === 0)) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: category.name, item: `/${category_slug}` },
        ]}
      />
      <CategoryPage category={category} />
    </>
  );
};

export default CategorySlugPage;
