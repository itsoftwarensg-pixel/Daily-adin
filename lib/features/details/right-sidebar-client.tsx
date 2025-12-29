"use client";

import LatestPopularNews from "@/lib/components/common/latest-popular";
import { ContentItem } from "@/lib/types/category.page";

interface Props {
  latestNews: ContentItem[];
  popularNews: ContentItem[];
}

const DetailsRightSidebarClient = ({ latestNews, popularNews }: Props) => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="https://tpc.googlesyndication.com/simgad/11473454279542623205"
          alt="logo"
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
