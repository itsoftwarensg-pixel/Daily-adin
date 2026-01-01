import React from "react";
import Link from "next/link";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import { ImageWithFallback } from "@/lib/components/image";
import { HomePageContnetSection } from "@/lib/types/home.page";
import NewsItem from "@/lib/features/home-page/international/news-item";

// Props
interface Props {
    homeData: {
        'international': HomePageContnetSection,
    };
}

const HomeInternational = ({ homeData }: Props) => {
    const { 'international': worldContents } = homeData;
    const leadMainContent = worldContents?.contents[0];              // Main lead news
    const leadLeftContents = worldContents?.contents.slice(1, 3);    // Left side contents
    const leadRightContents = worldContents?.contents.slice(3, 5);   // Right lead contents

    return (
        <div className="py-8 bg-purple-50">
            <Container>
                <GradientHeader
                    // title={worldContents?.name || "দূরলোক"}
                    title="দূরলোক"
                    color="purple"
                    href={worldContents.url || "/"}
                    showReadMoreBtn={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4">
                    {/* Left */}
                    <div className="col-span-1 md:col-span-3 order-2 md:order-1">
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-2 space-y-0 md:space-y-4">
                            {leadLeftContents && leadLeftContents.length > 0 && leadLeftContents.map((newsItem, idx) => (
                                <div key={idx} className="h-auto">
                                    <NewsItem newsItem={newsItem} titleSize="large" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Middle */}
                    <div className="col-span-1 md:col-span-6 order-1 md:order-2">
                        {leadMainContent &&
                            <div className="h-auto">
                                <Link href={leadMainContent.full_url} className="relative block group h-full">
                                    <div className={`w-full h-full`}>
                                        <div className="w-full aspect-[16/9]">
                                            <ImageWithFallback
                                                src={`${leadMainContent.full_image_path}`}
                                                height={600}
                                                width={900}
                                                alt={`${leadMainContent.heading}`}
                                                className="w-full object-cover h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4
                                                className={`py-2 text-xl md:text-2xl group-hover:text-blue-700 font-semibold`}
                                            >
                                                {leadMainContent.heading}
                                            </h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        }
                    </div>

                    {/* Right */}
                    <div className="col-span-1 md:col-span-3 order-3 md:order-3">
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-2 space-y-0 md:space-y-4">
                            {leadRightContents && leadRightContents.length > 0 && leadRightContents.map((newsItem, idx) => (
                                <div key={idx} className="h-auto">
                                    <NewsItem newsItem={newsItem} titleSize="large" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeInternational;
