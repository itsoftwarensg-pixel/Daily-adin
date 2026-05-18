import { getAllContentsAction } from "@/app/actions/content";
import LatestContentPage from "@/lib/features/latest";
import { SITE_CONFIG } from "@/lib/config/site-config";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const title = `এদিনের সব | The Daily Adin`;
  const description =
    "The Daily Adin-এর সর্বশেষ সকল সংবাদ একসাথে পড়ুন।";

  return {
    title,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/latest`,
    },
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

const Page = async () => {
  const response = await getAllContentsAction(1, 102);

  return <LatestContentPage data={response} />;
};

export default Page;
