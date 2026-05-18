import { getAllPhotoAlbumAction } from "@/app/actions/photo";
import { PHOTO_PAGE } from "@/lib/config/constant";
import PhotoAlbums from "@/lib/features/photos";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { SITE_CONFIG } from "@/lib/config/site-config";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const title = `${PHOTO_PAGE.name_bn} | Browse latest photos`;
  const description =
    "Browse all latest photos. Daily Adin is a modern, fast and SEO-friendly news portal";

  return {
    title,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/photos`,
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
