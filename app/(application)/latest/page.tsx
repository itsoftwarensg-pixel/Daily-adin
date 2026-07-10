import { getAllContentsAction } from "@/app/actions/content";
import LatestContentPage from "@/lib/features/latest";
import { SITE_CONFIG } from "@/lib/config/site-config";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const title = `এদিনের সব | দৈনিক এদিন`;
  const description =
    "দৈনিক এদিন - এর সর্বশেষ সকল সংবাদ একসাথে পড়ুন। দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";

  return {
    title,
    keywords: "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/latest`,
    },
    openGraph: {
      type: "website",
      locale: "bn_BD",
      url: `${SITE_CONFIG.url}/latest`,
      images: [{ url: SITE_CONFIG.commonOgImage, width: 1200, height: 630, alt: title }],
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_CONFIG.commonOgImage],
    },
  };
}

const Page = async () => {
  const response = await getAllContentsAction(1, 102);

  return <LatestContentPage data={response} />;
};

export default Page;
