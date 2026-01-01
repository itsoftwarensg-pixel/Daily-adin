import Link from "next/link";
import Container from "@/lib/components/common/container";
import { VIDEO_PAGE } from "@/lib/config/constant";
import { IoIosArrowForward } from "react-icons/io";
import LatestPopular from "../latest-popular";
import NoContentFound from "@/lib/components/no-content-found";
import { VideoItemType } from "@/lib/types/video.page";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXFill, RiWhatsappLine } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";

// Props
interface Props {
    videoDetails: VideoItemType;
}

const VideoDetails = ({ videoDetails }: Props) => {
    return (
        <div className="">
            <Container>
                <div className="mt-4">
                    <>
                        <div className="flex items-center gap-2 overflow-x-auto">
                            <Link
                                href={`/${VIDEO_PAGE.slug}`}
                                className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
                            >
                                <span className="pl-4">{VIDEO_PAGE.name_bn || `ভিডিও`}</span>
                                <IoIosArrowForward />
                            </Link>
                        </div>
                    </>
                </div>
                <div className="border-b pb-2 mt-0 mb-2 pl-[22px] overflow-x-auto"></div>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
                    <div className="col-span-1 lg:col-auto">
                        {videoDetails && videoDetails.embed_code ? (
                            <>
                                {/* YouTube Video */}
                                <div className="relative w-full h-0 pb-[56.25%] mb-5">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${videoDetails.embed_code}`}
                                        title={videoDetails.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                <h1 className="text-2xl lg:text-4xl font-semibold border-b pb-4 mb-4">{videoDetails.title}</h1>

                                {/* Social sharable links */}
                                <div className="flex gap-1 mb-4 md:mb-8">
                                    <GrFacebookOption
                                        size={36}
                                        className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border"
                                    />
                                    <RiTwitterXFill
                                        size={36}
                                        className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border"
                                    />
                                    <RiWhatsappLine
                                        size={36}
                                        className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border"
                                    />
                                    <MdContentCopy
                                        size={36}
                                        className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border"
                                    />
                                    <FiPrinter
                                        size={36}
                                        className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border"
                                    />
                                </div>
                            </>
                        ) : (
                            <NoContentFound />
                        )}
                    </div>

                    <div className="col-span-1 lg:col-auto">
                        <div className="flex justify-center">
                            <img
                                src="https://tpc.googlesyndication.com/simgad/11473454279542623205"
                                alt=""
                            />
                        </div>

                        {/* Latest - Popular */}
                        <div className="my-4">
                            <LatestPopular />
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default VideoDetails;
