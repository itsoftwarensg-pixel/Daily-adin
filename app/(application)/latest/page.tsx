import { getAllContentsAction } from "@/app/actions/content";
import LatestContentPage from "@/lib/features/latest";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: `এদিনের সব | The Daily Adin`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "A modern, fast and SEO-friendly news portal",
  };
}

const Page = async () => {
  const response = await getAllContentsAction(1, 102);

  return (
    <LatestContentPage
      data={response}
    />
  );
};

export default Page;
