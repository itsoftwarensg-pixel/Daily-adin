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
  //   title: `${COUNTRY_PAGE.name_bn} | দৈনিক এদিন`,
  //   keywords: "daily-adin, adin, news, news-portal, content, article",
  //   description: "দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।",
  // };

  const category_slug = COUNTRY_PAGE.slug;

  const category = await getCategoryBySlugAction(category_slug);

  if (!category) {
    return { title: "Not Found | দৈনিক এদিন" };
  }

  const title = category.meta_title || `${category.name} | দৈনিক এদিন`;
  const description =
    category.meta_description || "দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";

  return {
    title,
    keywords: category.meta_keywords || "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/country`,
    },
    openGraph: {
      type: "website",
      locale: "bn_BD",
      images: [{ url: category.photo || SITE_CONFIG.commonOgImage, width: 1200, height: 630, alt: title }],
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
