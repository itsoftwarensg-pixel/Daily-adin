import React from "react";
import Link from "next/link";
import Container from "@/lib/components/common/container";
import { ImageWithFallback } from "@/lib/components/image";
import Opinion from "@/lib/features/home-page/lead/Opinion";
import LatestPopularNews from "@/lib/components/common/latest-popular";
import LeadNewsItem from "@/lib/components/common/news-elements/lead-news-item";
import { HomeLiveVideoSection, HomePageContnetSection, HomePageStarProgramSection } from "@/lib/types/home.page";
import HomeContentBox from "@/lib/components/home-content-box";
import LeadVideoHeader from "@/lib/components/common/section-headers/lead-video-header";
import LeadNewsItemVideoOverlay from "@/lib/components/common/news-elements/lead-news-item-video-overlay";
import LeadNewsItemVideoCelebrity from "@/lib/components/common/news-elements/lead-news-item-video-celebrity";

// Props
interface Props {
    homeData: {
        lead: HomePageContnetSection,
        national?: HomePageContnetSection,
        politics?: HomePageContnetSection,
        recent?: HomePageContnetSection,
        popular?: HomePageContnetSection,
        home_video: HomeLiveVideoSection,
        star_program?: HomePageStarProgramSection;
        opinion?: HomePageContnetSection;
    };
}

const HomeLead = ({ homeData }: Props) => {
    const {
        lead: leadContents,
        national: nationalContents,
        politics: politicalContents,
        recent: recentContents,
        popular: popularContents,
        home_video: homeVideoContents,
        star_program: starProgramContent,
        opinion: opinionContents

    } = homeData;

    const leadNewsContents = leadContents?.contents || [];
    const nationalNewsContents = nationalContents?.contents || [];
    const politicalNewsContents = politicalContents?.contents || [];
    const recentNewsContents = recentContents?.contents || [];
    const popularNewsContents = popularContents?.contents || [];
    const homeTopVideoNewsContents = homeVideoContents?.contents || [];
    const opinionNewsContents = opinionContents?.contents || [];
    const starProgramNewsContent = starProgramContent?.contents;


    const leadMainContent = leadNewsContents[0];              // Main lead news
    const leadLeftContents = leadNewsContents.slice(1, 6);    // Left side contents
    const leadBelowContents = leadNewsContents.slice(6, 12);  // Below lead contents

    return (
        <div className="pt-4 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6">
                    <div className="col-span-3 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            {/* Lead news - Left side */}
                            <div className="order-2 md:order-1 md:col-span-2 space-y-2">
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
                            <div className="order-1 md:order-2 md:col-span-3">
                                <LeadNewsItem content={leadMainContent} />
                            </div>
                        </div>

                        {/* 6 contents. Lead below */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-6 mt-2 md:mt-0">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <div className="space-y-6">
                            {/* এদিন জনপ্রিয় - Home Video */}
                            {homeTopVideoNewsContents && homeTopVideoNewsContents.length > 0 &&
                                <div className="space-y-3">
                                    <LeadVideoHeader title="এদিন জনপ্রিয়" />
                                    <LeadNewsItemVideoOverlay video={homeTopVideoNewsContents[0]} />
                                </div>
                            }

                            {/* তারকা আসছেন যিনি - Star Program */}
                            {starProgramNewsContent &&
                                <div className="space-y-3">
                                    <LeadVideoHeader
                                        title="তারকা আসছেন যিনি"
                                        href={starProgramNewsContent.video_link ? starProgramNewsContent.video_link : "/"}
                                    />
                                    <LeadNewsItemVideoCelebrity
                                        title={`${starProgramNewsContent.identity}`}
                                        content={`${starProgramNewsContent.details}`}
                                        quote={`${starProgramNewsContent.quote}`}
                                        quoteFrom=""
                                        href={starProgramNewsContent.video_link}
                                    />
                                </div>
                            }
                        </div>

                        {/* Latest - Popular */}
                        <div className="my-4">
                            <LatestPopularNews height={400} latestNews={recentNewsContents} popularNews={popularNewsContents} />
                        </div>

                        {/* Advertisement */}
                        <div className="flex justify-center mb-4">
                            <img src="https://tpc.googlesyndication.com/simgad/11473454279542623205" alt="" />
                        </div>

                        {/* Opinion */}
                        {opinionNewsContents && opinionNewsContents.length > 0 &&
                            <Opinion opinionNewsContent={opinionNewsContents[0]} />
                        }
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default HomeLead;
