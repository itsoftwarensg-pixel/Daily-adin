import ArchivePage from "@/lib/features/archive";
import { getSearchArchiveAction } from "@/app/actions/archive";
import { getAllCategoriesAction } from "@/app/actions/category";
import { getAllDivisionsAction } from "@/app/actions/division";
import { SITE_CONFIG } from "@/lib/config/site-config";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: `আর্কাইভ | The Daily Adin`,
    keywords: "daily-adin, adin, news, archive, সংবাদ আর্কাইভ",
    description:
      "The Daily Adin-এর সংবাদ আর্কাইভ। তারিখ, বিভাগ ও বিভাগ অনুযায়ী সংবাদ খুঁজুন।",
    alternates: {
      canonical: `${SITE_CONFIG.url}/archive`,
    },
    openGraph: {
      title: `আর্কাইভ | The Daily Adin`,
      description:
        "The Daily Adin-এর সংবাদ আর্কাইভ। তারিখ, বিভাগ ও বিভাগ অনুযায়ী সংবাদ খুঁজুন।",
    },
    twitter: {
      card: "summary",
      title: `আর্কাইভ | The Daily Adin`,
      description:
        "The Daily Adin-এর সংবাদ আর্কাইভ। তারিখ, বিভাগ ও বিভাগ অনুযায়ী সংবাদ খুঁজুন।",
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
