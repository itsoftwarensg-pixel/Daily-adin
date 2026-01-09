import Link from "next/link";
import { Suspense } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Loader from "@/lib/components/common/loader";
import Container from "@/lib/components/common/container";
import { VideoItemType } from "@/lib/types/video.page";
import VideoLoadMoreContent from "@/lib/features/videos/contents";
import { VIDEO_PAGE } from "@/lib/config/constant";

// Define the props type
interface Props {
  videos: {
    last_page: number;
    data: VideoItemType[];
  };
}

const VideoNews = ({ videos }: Props) => {

  return (
    <div className="">
      <Container>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <Link
              href={`/videos`}
              className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
            >
              <span className="pl-4">{VIDEO_PAGE.name_bn || `ভিডিও`}</span>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
        <div className="border-b pb-2 mt-0 mb-2 pl-[22px] overflow-x-auto"></div>

        {/* LoadMoreContent component */}
        <Suspense fallback={<Loader />}>
          <VideoLoadMoreContent
            loadMoreContents={{
              contents: videos.data,
              last_page: videos.last_page,
            }}
          />
        </Suspense>
      </Container>
    </div>
  );
};

export default VideoNews;
