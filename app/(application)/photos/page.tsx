import { getAllPhotoAlbumAction } from "@/app/actions/photo";
import { PHOTO_PAGE } from "@/lib/config/constant";
import PhotoAlbums from "@/lib/features/photos";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { SITE_CONFIG } from "@/lib/config/site-config";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const title = `${PHOTO_PAGE.name_bn} | দৈনিক এদিন - ক্লিকস্মৃতি`;
  const description =
    "দৈনিক এদিন - এর সকল ক্লিকস্মৃতি একসাথে দেখুন। দৈনিক এদিন — বাংলাদেশের বিশ্বস্ত অনলাইন সংবাদ পোর্টাল। জাতীয়, রাজনীতি, আন্তর্জাতিক, ব্যবসা, স্বাস্থ্য, খেলাধুলা ও বিনোদনের সর্বশেষ সংবাদ পড়ুন।";

  return {
    title,
    keywords: "ক্লিকস্মৃতি, দৈনিক এদিন, daily adin, বাংলা সংবাদ, বাংলাদেশ সংবাদ, Bangladesh news, Bangla news, online newspaper Bangladesh, জাতীয় সংবাদ, রাজনীতি, আন্তর্জাতিক সংবাদ, ব্যবসা বাণিজ্য, স্বাস্থ্য সংবাদ, ক্রীড়া সংবাদ, ই-পেপার, dailyadin.com, photos, photo, album, browse photos, daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/photos`,
    },
    openGraph: {
      type: "website",
      locale: "bn_BD",
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
  const response = await getAllPhotoAlbumAction(1, 12);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: PHOTO_PAGE.name_bn, item: "/photos" },
        ]}
      />
      <PhotoAlbums data={response} />
    </>
  );
};

export default Page;
