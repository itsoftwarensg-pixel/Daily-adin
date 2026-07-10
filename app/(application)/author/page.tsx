import { getAllWritersAction } from "@/app/actions/writer";
import { WRITER_PAGE } from "@/lib/config/constant";
import WriterList from "@/lib/features/writer/list";
import { SITE_CONFIG } from "@/lib/config/site-config";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const title = `${WRITER_PAGE.name_bn} | লেখক তালিকা`;
  const description =
    "লেখক তালিকা। দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল";

  return {
    title,
    keywords: "দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com, writer, author, writer list, author list, daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/author`,
    },
    openGraph: {
      type: "website",
      locale: "bn_BD",
      url: `${SITE_CONFIG.url}/author`,
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
  const response = await getAllWritersAction(1, 20);

  return <WriterList data={response} />;
};

export default Page;
