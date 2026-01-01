import React from "react";
import Link from "next/link";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import { ImageWithFallback } from "@/lib/components/image";
import HtmlContent from "@/lib/components/common/html-content";
import { HomePageContnetSection } from "@/lib/types/home.page";

// Props
interface Props {
    homeData: {
        'entertainment': HomePageContnetSection,
    };
}

const HomeMedia = ({ homeData }: Props) => {
    const { 'entertainment': entertainmentContents } = homeData;
    const leadMainContent = entertainmentContents?.contents[0];              // Main lead news
    const subLeadContents = entertainmentContents?.contents.slice(1, 4);     // 3 sub lead contents

    return (
        <div className="py-8 bg-red-500 bg-opacity-5">
            <Container>
                <GradientHeader
                    // title={entertainmentContents?.name || "চিত্রলোক"}
                    title="চিত্রলোক"
                    color="red"
                    href={entertainmentContents.url || "/"}
                    showReadMoreBtn={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
                    {/* Left */}
                    <div className="order-2 md:order-1 col-span-6 space-y-2 md:space-y-4">
                        {subLeadContents && subLeadContents.length > 0 && subLeadContents.map((newsItem, index) => (
                            <div
                                key={index}
                                className="bg-red-100 border-l-[12px] border-red-500"
                            >
                                <Link href={newsItem.full_url} className="group block overflow-hidden">
                                    <div className="grid grid-cols-5 gap-2 items-center">
                                        <div className="col-span-2 aspect-[16/9]">
                                            <ImageWithFallback
                                                src={newsItem.full_image_path}
                                                width={140}
                                                height={250}
                                                alt={newsItem.heading}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="col-span-3 group-hover:text-blue-700 px-2">
                                            <h4 className="text-[17px] md:text-xl mb-2 font-semibold">{newsItem.heading}</h4>
                                            <div className="hidden md:block">
                                                <HtmlContent className="text-gray-600" html={newsItem.description} maxContent={100} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Right */}
                    <div className="order-1 md:order-2 col-span-6 space-y-5">
                        {leadMainContent &&
                            <Link href={`${leadMainContent.full_url}`} className="relative group block overflow-hidden">
                                <div className="aspect-[16/11] w-full">
                                    <ImageWithFallback
                                        src={leadMainContent.full_image_path}
                                        width={450}
                                        height={750}
                                        alt={leadMainContent.heading}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <h2 className="absolute left-5 bottom-5 text-white text-xl md:text-3xl font-semibold group-hover:underline z-20">
                                    {leadMainContent.heading}
                                </h2>

                                <div className="absolute w-full h-1/2 bg-gradient-to-t from-red-500 to-black/0 bottom-0 right-0 z-10"></div>
                            </Link>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeMedia;
