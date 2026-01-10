"use client";

import Advertisement from "@/lib/components/common/advertisement";
import LatestPopularNews from "@/lib/components/common/latest-popular";
import { ADVERTISE_TYPES } from "@/lib/config/constant";
import { ContentItem } from "@/lib/types/category.page";

interface Props {
  latestNews: ContentItem[];
  popularNews: ContentItem[];
}

const DetailsRightSidebarClient = ({ latestNews, popularNews }: Props) => {
  return (
    <div className="print:hidden">
      <div className="flex justify-center">
        <Advertisement
          width={300}
          height={300}
          imgSrc={ADVERTISE_TYPES.CONTENT_DETAILS_TOP_RIGHT}
        />
      </div>

      <div className="mt-4">
        <LatestPopularNews
          height={500}
          latestNews={latestNews}
          popularNews={popularNews}
        />
      </div>
    </div>
  );
};

export default DetailsRightSidebarClient;
