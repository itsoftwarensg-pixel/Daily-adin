import { getAllWritersAction } from "@/app/actions/writer";
import { WRITER_PAGE } from "@/lib/config/constant";
import WriterList from "@/lib/features/writer/list";
import { SITE_CONFIG } from "@/lib/config/site-config";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const title = `${WRITER_PAGE.name_bn} | Writer List`;
  const description =
    "Writer List. Daily Adin is a modern, fast and SEO-friendly news portal";

  return {
    title,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/author`,
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
  const response = await getAllWritersAction(1, 20);

  return <WriterList data={response} />;
};

export default Page;
