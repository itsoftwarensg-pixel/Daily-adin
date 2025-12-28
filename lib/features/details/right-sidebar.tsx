import LatestPopular from "@/lib/features/latest-popular";

const DetailsRightSidebar = async () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="https://tpc.googlesyndication.com/simgad/11473454279542623205"
          alt="logo"
        />
      </div>

      <div className="mt-4">
        <LatestPopular />
      </div>
    </div>
  );
};

export default DetailsRightSidebar;
