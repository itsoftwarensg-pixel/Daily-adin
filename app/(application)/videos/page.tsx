import { getAllVideosAction } from "@/app/actions/video";
import VideoNews from "@/lib/features/videos";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { VIDEO_PAGE } from "@/lib/config/constant";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const title = `${VIDEO_PAGE.name_bn} | দৈনিক এদিন - ভিডিও`;
  const description = "ভিডিও দেখুন। দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";

  return {
    title,
    keywords: "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/videos`,
    },
    openGraph: {
      type: "website",
      locale: "bn_BD",
      url: `${SITE_CONFIG.url}/videos`,
      images: [{ url: SITE_CONFIG.commonOgImage, width: 1200, height: 630, alt: title }],
      title,
      description,
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
