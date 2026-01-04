import Link from "next/link";
import { Suspense } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Loader from "@/lib/components/common/loader";
import Container from "@/lib/components/common/container";
import { PHOTO_PAGE } from "@/lib/config/constant";
import { PhotoItemType } from "@/lib/types/photo.page";
import PhotoLoadMoreContent from "@/lib/features/photos/contents";

// Define the props type
interface Props {
  data: {
    last_page: number;
    data: PhotoItemType[];
  };
}

const PhotoAlbums = ({ data }: Props) => {

  return (
    <div className="">
      <Container>
        <div className="mt-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Link
              href={`/photos`}
              className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
            >
              <span className="pl-4">{PHOTO_PAGE.name_bn || `ক্লিকস্মৃতি`}</span>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
        <div className="border-b pb-2 mt-0 mb-2 pl-[22px] overflow-x-auto"></div>

        {/* LoadMoreContent component */}
        <Suspense fallback={<Loader />}>
          <PhotoLoadMoreContent
            loadMoreContents={{
              contents: data.data,
              last_page: data.last_page,
            }}
          />
        </Suspense>
      </Container>
    </div>
  );
};

export default PhotoAlbums;
