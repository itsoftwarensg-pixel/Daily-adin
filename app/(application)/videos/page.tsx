import { getAllVideosAction } from "@/app/actions/video";
import VideoNews from "@/lib/features/videos";

export const dynamic = "force-dynamic";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: `ভিডিও | Watch all latest videos | Live video`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "Watch all latest videos | Live video. Daily Adin is a modern, fast and SEO-friendly news portal",
    openGraph: {
      images: "", // TODO:: Add image
      title: `ভিডিও | Watch all latest videos | Live video`,
      description: "Watch all latest videos | Live video. Daily Adin is a modern, fast and SEO-friendly news portal",
    },
  };
}

const Page = async () => {
  const videos = await getAllVideosAction(1, 12);

  return <VideoNews videos={videos} />;
};

export default Page;
