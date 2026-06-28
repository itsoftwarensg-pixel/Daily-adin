import ArchivePage from "@/lib/features/archive";
import { getSearchArchiveAction } from "@/app/actions/archive";
import { getAllCategoriesAction } from "@/app/actions/category";
import { getAllDivisionsAction } from "@/app/actions/division";
import { SITE_CONFIG } from "@/lib/config/site-config";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const title = `আর্কাইভ | দৈনিক এদিন`;
  const description = "দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";

  return {
    title,
    keywords: "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/archive`,
    },
    openGraph: {
      images: SITE_CONFIG.commonOgImage,
      title,
      description
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [SITE_CONFIG.commonOgImage],
    },
  };
}

const Page = async () => {
  const divisionListRequest = getAllDivisionsAction();
  const categoryListRequest = getAllCategoriesAction();
  const archiveSearchResultRequest = getSearchArchiveAction(1, 12);

  const [divisionList, categoryList, archiveSearchResult] = await Promise.all([
    divisionListRequest,
    categoryListRequest,
    archiveSearchResultRequest,
  ]);

  return (
    <ArchivePage
      divisionList={divisionList}
      categoryList={categoryList}
      archiveSearchResult={archiveSearchResult}
    />
  );
};

export default Page;
