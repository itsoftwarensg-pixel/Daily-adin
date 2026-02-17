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
import HtmlContent from "@/lib/components/common/html-content";

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
    <div className="mt-4">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
          <div className="col-span-1 lg:col-auto">
            <div className="border-b pb-2 mb-4">
              <div className="flex flex-col gap-2">
                <h4
                  className="text-2xl text-red-600 font-bold flex gap-2 items-center"
                >
                  <span>{topic.name}</span>
                </h4>
              </div>
            </div>

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
