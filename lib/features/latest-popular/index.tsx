import { getLastestPopularDataAction } from "@/app/actions/content";
import LatestPopularNews from "@/lib/components/common/latest-popular";
import { Suspense } from "react";

const LatestPopular = async () => {
  const data = await getLastestPopularDataAction();
  return (
    <Suspense>
      <LatestPopularNews
        height={500}
        latestNews={data?.recent?.contents || []}
        popularNews={data?.popular?.contents || []}
      />
    </Suspense>
  );
};

export default LatestPopular;
