import { getAllVideosAction } from "@/app/actions/video";
import VideoNews from "@/lib/features/videos";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { VIDEO_PAGE } from "@/lib/config/constant";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const title = `${VIDEO_PAGE.name_bn} | Watch latest videos`;
  const description =
    "Watch all latest videos. Daily Adin is a modern, fast and SEO-friendly news portal";

  return {
    title,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/videos`,
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
  const videos = await getAllVideosAction(1, 12);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: VIDEO_PAGE.name_bn, item: "/videos" },
        ]}
      />
      <VideoNews videos={videos} />
    </>
  );
};

export default Page;
