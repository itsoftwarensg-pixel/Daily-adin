import Advertisement from "@/lib/components/common/advertisement";
import LatestPopular from "@/lib/features/latest-popular";

const DetailsRightSidebar = async () => {
  return (
    <div className="print:hidden">
      <div className="flex justify-center">
        <Advertisement width={300} height={300} />
      </div>

      <div className="mt-4">
        <LatestPopular />
      </div>
    </div>
  );
};

export default DetailsRightSidebar;
