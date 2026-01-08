import { getAllWritersAction } from "@/app/actions/writer";
import { WRITER_PAGE } from "@/lib/config/constant";
import WriterList from "@/lib/features/writer/list";

export const dynamic = "force-dynamic";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: `${WRITER_PAGE.name_bn} | Writer List`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "Writer List. Daily Adin is a modern, fast and SEO-friendly news portal",
    openGraph: {
      images: "", // TODO:: Add image
      title: `${WRITER_PAGE.name_bn} | Writer List`,
      description: "Writer List. Daily Adin is a modern, fast and SEO-friendly news portal",
    },
  };
}

const Page = async () => {
  const response = await getAllWritersAction(1, 20);

  return <WriterList data={response} />;
};

export default Page;
