import Link from "next/link";
import { Suspense } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Loader from "@/lib/components/common/loader";
import Container from "@/lib/components/common/container";
import { ADVERTISE_TYPES, LOAD_MORE_TYPES } from "@/lib/config/constant";
import { Topic, TopicContentItem } from "@/lib/types/topic.page";
import Advertisement from "@/lib/components/common/advertisement";
import LatestPopular from "@/lib/features/latest-popular";
import LoadMoreContent from "@/lib/components/load-more-content";

// Define the props type
interface Props {
  topic: Topic;
  data: {
    last_page: number;
    data: TopicContentItem[];
  };
}

const TopicPage = ({ topic, data }: Props) => {

  return (
    <div className="">
      <Container>
        <div className="mt-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Link
              href={topic.full_url}
              className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
            >
              <span className="pl-4">{topic.name}</span>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
        <div className="border-b pb-2 mt-0 mb-2 pl-[22px] overflow-x-auto"></div>

        <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
          <div className="col-span-1 lg:col-auto">
            {/* LoadMoreContent component */}
            <Suspense fallback={<Loader />}>
              <LoadMoreContent
                id={topic.id}
                type={LOAD_MORE_TYPES.TOPIC}
                loadMoreContents={{
                  contents: data.data,
                  last_page: data.last_page, // Assuming 1 for now, will be updated with actual last_page from API
                }}
              />
            </Suspense>
          </div>

          <div className="col-span-1 lg:col-auto">
            <div className="flex justify-center">
              <Advertisement
                width={300}
                height={300}
                imgSrc={ADVERTISE_TYPES.VIDEO_DETAILS_TOP_RIGHT}
              />
            </div>

            {/* Latest - Popular */}
            <div className="my-4">
              <LatestPopular />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopicPage;
