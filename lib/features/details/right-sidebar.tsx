import LatestPopularNews from "@/lib/components/common/latest-popular";

const DetailsRightSidebar = () => {
    return (
        <div>
            <div className="flex justify-center">
                <img src="https://tpc.googlesyndication.com/simgad/11473454279542623205" alt="logo" />
            </div>

            <div className="mt-4">
                <LatestPopularNews height={500} />
            </div>
        </div>
    )
}

export default DetailsRightSidebar;