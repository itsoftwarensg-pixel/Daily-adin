import React from "react";
import Link from "next/link";
import Container from "@/lib/components/common/container";
import { ImageWithFallback } from "@/lib/components/image";
import Opinion from "@/lib/features/home-page/lead/Opinion";
import HomeLeadSidebar from "@/lib/features/home-page/lead/aside";
import LatestPopularNews from "@/lib/components/common/latest-popular";
import LeadNewsItem from "@/lib/components/common/news-elements/lead-news-item";
import { HomePageContnetSection } from "@/lib/types/home.page";
import HomeContentBox from "@/lib/components/home-content-box";

// Props
interface Props {
    homeData: {
        'lead': HomePageContnetSection,
        'national-news'?: HomePageContnetSection,
        'political-news'?: HomePageContnetSection,
        'recent'?: HomePageContnetSection,
        'popular'?: HomePageContnetSection,
    };
}

const HomeLead = ({ homeData }: Props) => {
    const { lead: leadContents, 'national-news': nationalContents, 'political-news': politicalContents, 'recent': recentContents, 'popular': popularContents } = homeData;

    const leadNewsContents = leadContents?.contents || [];
    const nationalNewsContents = nationalContents?.contents || [];
    const politicalNewsContents = politicalContents?.contents || [];
    const recentNewsContents = recentContents?.contents || [];
    const popularNewsContents = popularContents?.contents || [];

    const leadMainContent = leadNewsContents[0];              // Main lead news
    const leadLeftContents = leadNewsContents.slice(1, 6);    // Left side contents
    const leadBelowContents = leadNewsContents.slice(6, 12);  // Below lead contents

    return (
        <div className="pt-4 pb-8">
            <Container>
                <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-3">
                        <div className="grid grid-cols-5 gap-6">
                            {/* Lead news - Left side */}
                            <div className="col-span-2 space-y-2">
                                {leadLeftContents && leadLeftContents.length > 0 && leadLeftContents.map((newsItem, index) => (
                                    <Link
                                        key={index}
                                        href={`${newsItem.full_url}`}
                                        className="block group overflow-hidden"
                                    >
                                        <div
                                            className={`w-full grid grid-cols-5 items-center justify-center bg-gray-100 gap-2 overflow-hidden`}
                                        >
                                            <div className="col-span-2 aspect-[16/10]">
                                                <ImageWithFallback
                                                    src={`${newsItem.full_image_path}`}
                                                    height={300}
                                                    width={400}
                                                    alt={`${newsItem.heading}`}
                                                    className="w-full object-cover h-full"
                                                />
                                            </div>
                                            <div className="col-span-3">
                                                <h4 className="p-2 group-hover:text-blue-700 text-[17px] font-semibold">{newsItem.heading}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Lead news - Center */}
                            <div className="col-span-3">
                                <LeadNewsItem content={leadMainContent} />
                            </div>
                        </div>

                        {/* 6 contents. Lead below */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {leadBelowContents && leadBelowContents.length > 0 && leadBelowContents.map((newsItem, index) => (
                                <Link
                                    href={`${newsItem.full_url}`}
                                    key={index}
                                    className="relative block group h-full"
                                >
                                    <div className={`w-full h-full bg-gray-100`}>
                                        <div className="w-full aspect-[16/9]">
                                            <ImageWithFallback
                                                src={`${newsItem.full_image_path}`}
                                                height={600}
                                                width={900}
                                                alt={`${newsItem.heading}`}
                                                className="w-full object-cover h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4
                                                className={`px-2 pt-2 text-lg group-hover:text-blue-700 font-semibold`}
                                            >
                                                {newsItem.heading}
                                            </h4>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* National, Politics */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* National */}
                            <HomeContentBox
                                contents={nationalNewsContents}
                                sectionHeaderTitle={nationalContents?.name || `জাতীয় সংবাদ`}
                                sectionHeaderColor="red"
                                sectionUrl={nationalContents?.url || `/`}
                                showSectionReadMoreBtn
                                transparentReadMoreBtn={true}
                            />


                            {/* Rajniti - Politics */}
                            <HomeContentBox
                                contents={politicalNewsContents}
                                sectionHeaderTitle={politicalContents?.name || `রাজনীতি`}
                                sectionHeaderColor="purple"
                                sectionUrl={politicalContents?.url || `/`}
                                showSectionReadMoreBtn
                                transparentReadMoreBtn={true}
                            />
                        </div>
                    </div>

                    {/* Sidebar - Rigt side */}
                    <div className="col-span-1">
                        <HomeLeadSidebar />

                        {/* Latest - Popular */}
                        <div className="my-4">
                            <LatestPopularNews height={400} latestNews={recentNewsContents} popularNews={popularNewsContents} />
                        </div>

                        {/* Advertisement */}
                        <div className="flex justify-center mb-4">
                            <img src="https://tpc.googlesyndication.com/simgad/11473454279542623205" alt="" />
                        </div>

                        {/* Opinion */}
                        <Opinion />
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default HomeLead;
