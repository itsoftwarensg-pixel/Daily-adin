import React from "react";
import Link from "next/link";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import ImageWithFallback from "@/lib/components/image/ImageWithFallback";
import { HomePageContnetSection } from "@/lib/types/home.page";

// Props
interface Props {
    data: HomePageContnetSection | undefined;
}

const HomeSports = ({ data }: Props) => {
    const leadMainContent = data?.contents[0];              // Main lead news
    const leadLeftContents = data?.contents.slice(1, 3);    // Left side contents
    const leadRightContents = data?.contents.slice(3, 5);   // Right lead contents

    return (
        <div className="py-8 bg-red-50">
            <Container>
                <GradientHeader
                    // title={sportsContents?.name || "ক্রীড়ালোক"}
                    title={"ক্রীড়ালোক"}
                    color="red"
                    href={data?.url || "/"}
                    showReadMoreBtn={true}
                />
                <div className="grid grid-cols-6 md:grid-cols-12 gap-0 md:gap-4">
                    {/* Left */}
                    <div className="order-2 md:order-1 col-span-6 md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0 items-end space-y-2">
                        {leadLeftContents && leadLeftContents.length > 0 && leadLeftContents.map((newsItem, idx) => (
                            <div key={idx} className="h-auto">
                                <Link href={newsItem.full_url} className="relative block group h-full">
                                    <div className={`w-full h-full bg-red-100`}>
                                        <div className="w-full aspect-[16/9.5]">
                                            <ImageWithFallback
                                                src={newsItem.full_image_path}
                                                height={600}
                                                width={900}
                                                alt={`${newsItem.heading}`}
                                                className="w-full object-cover h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4 className={`px-2 py-2.5 text-[17px] md:text-xl border-l-4 border-red-600 group-hover:text-blue-700 font-semibold h-auto md:h-[72px]`}>
                                                {newsItem.heading}
                                            </h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Middle */}
                    <div className="order-1 md:order-2 col-span-6 space-y-4">
                        {leadMainContent &&
                            <div className="h-auto">
                                <Link href={leadMainContent.full_url} className="relative block group h-full">
                                    <div className={`w-full h-full bg-red-100`}>
                                        <div className="w-full aspect-[16/9]">
                                            <ImageWithFallback
                                                src={leadMainContent.full_image_path}
                                                height={600}
                                                width={900}
                                                alt={`${leadMainContent.heading}`}
                                                className="w-full object-cover h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4
                                                className={`px-2 py-2 h-auto md:h-[84px] overflow-hidden text-xl md:text-2xl group-hover:text-blue-700 font-semibold`}
                                            >
                                                {leadMainContent.heading}
                                            </h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        }

                        <Link href="/" className="block group bg-red-100 px-6 py-4">
                            <h4 className="m-0 text-3xl text-center text-red-700 group-hover:text-red-500">
                                দেখে নিন ২০২৬ ফুটবল বিশ্বকাপের সূচি
                            </h4>
                        </Link>
                    </div>

                    {/* Right */}
                    <div className="order-3 md:order-3 col-span-6 md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0 items-end space-y-2">
                        {leadRightContents && leadRightContents.length > 0 && leadRightContents.map((newsItem, idx) => (
                            <div key={idx} className="h-auto">
                                <Link href={newsItem.full_url} className="relative block group h-full">
                                    <div className={`w-full h-full bg-red-100`}>
                                        <div className="w-full aspect-[16/9.5]">
                                            <ImageWithFallback
                                                src={newsItem.full_image_path}
                                                height={600}
                                                width={900}
                                                alt={`${newsItem.heading}`}
                                                className="w-full object-cover h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4 className={`px-2 py-2.5 text-[17px] md:text-xl border-l-4 border-red-600 group-hover:text-blue-700 font-semibold h-auto md:h-[72px]`}>
                                                {newsItem.heading}
                                            </h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeSports;
