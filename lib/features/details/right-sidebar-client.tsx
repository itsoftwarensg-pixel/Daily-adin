"use client";

import { Suspense, use } from "react";
import Advertisement from "@/lib/components/common/advertisement";
import LatestPopularNews from "@/lib/components/common/latest-popular";
import { ADVERTISE_TYPES } from "@/lib/config/constant";
import { ContentItem } from "@/lib/types/category.page";

export interface LatestPopularData {
  recent?: { contents?: ContentItem[] };
  popular?: { contents?: ContentItem[] };
}

function SidebarNews({ data }: { data: Promise<LatestPopularData> }) {
  const news = use(data);
  return (
    <LatestPopularNews
      height={500}
      latestNews={news?.recent?.contents ?? []}
      popularNews={news?.popular?.contents ?? []}
    />
  );
}

const DetailsRightSidebarClient = ({ data }: { data: Promise<LatestPopularData> }) => {
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
        <Suspense fallback={null}>
          <SidebarNews data={data} />
        </Suspense>
      </div>
    </div>
  );
};

export default DetailsRightSidebarClient;
