import React from "react";
import Link from "next/link";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import ImageWithFallback from "@/lib/components/image/ImageWithFallback";
import HtmlContent from "@/lib/components/common/html-content";
import { HomePageContnetSection } from "@/lib/types/home.page";
import { COUNTRY_PAGE } from "@/lib/config/constant";
import ContentNewsVerticalItem from "@/lib/components/content-item-vertical";
import HomeCountryFilter from "@/lib/features/home-page/country/filter";

// Props
interface Props {
    homeData: {
        [COUNTRY_PAGE.slug]?: HomePageContnetSection,
    };
}

const HomeCountry = ({ homeData }: Props) => {
    const { [COUNTRY_PAGE.slug]: countryContents } = homeData;
    const leadMainContent = countryContents?.contents[0];               // Main lead news
    const subLeadContents = countryContents?.contents.slice(1, 7);      // 6 Sub lead contents

    return (
        <div className="py-8">
            <Container>
                <GradientHeader
                    // title={countryContents?.name || "প্রান্তলোক"}
                    title="প্রান্তলোক"
                    color="green"
                    href={countryContents?.url || "/"}
                    showReadMoreBtn={true}
                />

                {/* আমার এলাকার খবর  */}
                <div className="hidden md:block">
                    <HomeCountryFilter />
                </div>

                {/* Contents */}
                <div className="grid grid-cols-1 md:grid-cols-12 space-y-2 md:space-y-0 gap-0 md:gap-4">
                    {/* Lead content */}
                    <div className="col-span-1 md:col-span-5 space-y-2 h-full">
                        {leadMainContent &&
                            <div className="h-full">
                                <Link href={leadMainContent.full_url} className="relative block group h-full">
                                    <div className={`w-full h-full bg-gray-100`}>
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
                                                className={`px-2 pt-2 text-xl md:text-2xl group-hover:text-blue-700 font-semibold`}
                                            >
                                                {leadMainContent.heading}
                                            </h4>
                                            <div className="hidden md:block">
                                                <HtmlContent
                                                    html={leadMainContent.description}
                                                    maxContent={160}
                                                    className="pt-1 px-2 text-gray-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        }
                    </div>

                    {/* 6 Sub lead contents*/}
                    <div className="col-span-2 md:col-span-7 space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                            {subLeadContents && subLeadContents.length > 0 && subLeadContents.map((newsItem, idx) => (
                                <div key={idx} className="h-auto">
                                    <ContentNewsVerticalItem
                                        newsItem={newsItem}
                                        bgColor="gray"
                                        titleSize="large"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeCountry;
