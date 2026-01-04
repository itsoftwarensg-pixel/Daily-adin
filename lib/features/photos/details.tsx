import Link from "next/link";
import Container from "@/lib/components/common/container";
import { PHOTO_PAGE } from "@/lib/config/constant";
import { IoIosArrowForward } from "react-icons/io";
import LatestPopular from "../latest-popular";
import NoContentFound from "@/lib/components/no-content-found";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXFill, RiWhatsappLine } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";
import HtmlContent from "@/lib/components/common/html-content";
import Advertisement from "@/lib/components/common/advertisement";
import { PhotoItemType } from "@/lib/types/photo.page";
import { ImageWithFallback } from "@/lib/components/image";

// Props
interface Props {
    data: PhotoItemType;
}

const PhotoDetails = ({ data }: Props) => {
    return (
        <div className="">
            <Container>
                <div className="mt-4">
                    <>
                        <div className="flex items-center gap-2 overflow-x-auto">
                            <Link
                                href={`/${PHOTO_PAGE.slug}`}
                                className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
                            >
                                <span className="pl-4">{PHOTO_PAGE.name_bn || `ক্লিকস্মৃতি`}</span>
                                <IoIosArrowForward />
                            </Link>
                        </div>
                    </>
                </div>
                <div className="border-b pb-2 mt-0 mb-2 pl-[22px] overflow-x-auto"></div>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
                    <div className="col-span-1 lg:col-auto">
                        {data ? (
                            <>
                                {/* ====== START Album/Cover information =====*/}
                                <div className="mb-4 border-b">
                                    <h1 className="text-2xl lg:text-4xl font-semibold pt-2 pb-2">{data.name}</h1>

                                    {/* Social sharable links */}
                                    <div className="flex items-center justify-between gap-4 bg-gray-50 rounded-lg p-5">
                                        <div className="">
                                            {/* Publish/updated time */}
                                            <div className="text-gray-500">
                                                <p>{data?.created_at_bangla}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            <GrFacebookOption
                                                size={36}
                                                className="p-2 bg-white hover:bg-gray-100 cursor-pointer rounded text-black border"
                                            />
                                            <RiTwitterXFill
                                                size={36}
                                                className="p-2 bg-white hover:bg-gray-100 cursor-pointer rounded text-black border"
                                            />
                                            <RiWhatsappLine
                                                size={36}
                                                className="p-2 bg-white hover:bg-gray-100 cursor-pointer rounded text-black border"
                                            />
                                            <MdContentCopy
                                                size={36}
                                                className="p-2 bg-white hover:bg-gray-100 cursor-pointer rounded text-black border"
                                            />
                                            <FiPrinter
                                                size={36}
                                                className="p-2 bg-white hover:bg-gray-100 cursor-pointer rounded text-black border"
                                            />
                                        </div>
                                    </div>

                                    {/* Album image and Photographer */}
                                    <div>
                                        {/* Album image */}
                                        <div className="w-full aspect-[16/9] mt-4">
                                            <ImageWithFallback
                                                src={`${data.feature_image}`}
                                                height={600}
                                                width={900}
                                                alt={`${data.name}`}
                                                className="w-full object-cover h-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="border p-2">
                                        {/* Description */}
                                        {data.description &&
                                            <p className="text-black text-lg">
                                                {data.description}
                                            </p>
                                        }
                                        {/* Photographer */}
                                        {data?.photographer_name &&
                                            <div className="text-gray-500 italic text-md">
                                                <span>
                                                    {data.photographer_name}
                                                </span>
                                            </div>
                                        }
                                    </div>

                                    {/* Description */}
                                    {data.description &&
                                        <p className="text-black text-lg mb-3">
                                            {data.description}
                                        </p>
                                    }
                                </div>
                                {/* ====== END Album/Cover information =====*/}


                                {/* ====== START related others photos =====*/}
                                {data.contents && data.contents.length > 0 &&
                                    data.contents.map((content, idx) => (
                                        <div key={idx} className="mb-4">
                                            {/* Photos and Photographer */}
                                            <div>
                                                {/* Photo */}
                                                <div className="w-full aspect-[16/9] mt-4">
                                                    <ImageWithFallback
                                                        src={`${content.image}`}
                                                        height={600}
                                                        width={900}
                                                        alt={`${content.caption}`}
                                                        className="w-full object-cover h-full"
                                                    />
                                                </div>

                                            </div>

                                            <div className="border p-2">
                                                {/* Description */}
                                                {content.caption &&
                                                    <p className="text-black text-lg">
                                                        {content.caption}
                                                    </p>
                                                }
                                                {/* Photographer */}
                                                {content?.photographer &&
                                                    <div className="text-gray-500 italic text-md">
                                                        <span>
                                                            {content.photographer}
                                                        </span>
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                    ))}
                                {/* ====== END related others photos =====*/}
                            </>
                        ) : (
                            <NoContentFound />
                        )}
                    </div>

                    <div className="col-span-1 lg:col-auto">
                        <div className="flex justify-center">
                            <Advertisement width={300} height={300} />
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

export default PhotoDetails;
