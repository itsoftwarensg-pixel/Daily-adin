import { getAllPhotoAlbumAction } from "@/app/actions/photo";
import { PHOTO_PAGE } from "@/lib/config/constant";
import PhotoAlbums from "@/lib/features/photos";

export const dynamic = "force-dynamic";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: `${PHOTO_PAGE.name_bn} | Browse all latest photos`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "Browse all latest photos. Daily Adin is a modern, fast and SEO-friendly news portal",
    openGraph: {
      images: "", // TODO:: Add image
      title: `${PHOTO_PAGE.name_bn} | Browse all latest photos`,
      description: "Browse all latest photos. Daily Adin is a modern, fast and SEO-friendly news portal",
    },
  };
}

const Page = async () => {
  const response = await getAllPhotoAlbumAction(1, 12);

  return <PhotoAlbums data={response} />;
};

export default Page;
