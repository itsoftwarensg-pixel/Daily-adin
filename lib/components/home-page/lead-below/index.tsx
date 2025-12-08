import React from "react";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";
import { newsJson } from "@/lib/data";
import BottomMoreButton from "@/lib/components/common/section-headers/bottom-more";
import LatestPopularNews from "@/lib/components/common/news-elements/latest-popular";

const HomeLeadBelow = () => {
    return (
        <div className="py-8">
            <Container>
                <div className="grid grid-cols-12 gap-4">
                    {/* National, Politics */}
                    <div className="col-span-9">
                        <div className="grid grid-cols-2">
                            {/* National */}
                            <div className="space-y-2">
                                <div className="pr-4">
                                    <GradientHeader
                                        title="জাতীয় সংবাদ"
                                        color="red"
                                        href="/"
                                        showReadMoreBtn={true}
                                    />
                                </div>

                                {/* News contents */}
                                <div className="space-y-2 pr-4 border-r">
                                    {/* First item (large) */}
                                    {newsJson.slice(8, 9).map((newsItem, idx) => (
                                        <NewsItemVertical
                                            key={idx}
                                            titleSize="large"
                                            newsItem={newsItem}
                                            bgColor="gray"
                                        />
                                    ))}

                                    {/* Next two items in a 2-column grid */}
                                    <div className="grid grid-cols-2 gap-2">
                                        {newsJson.slice(9, 11).map((newsItem, idx) => (
                                            <NewsItemVertical
                                                key={idx}
                                                newsItem={newsItem}
                                                bgColor="gray"
                                            />
                                        ))}
                                    </div>

                                    {/* Read more */}
                                    <BottomMoreButton
                                        href="/"
                                        color="red"
                                        className="bg-red-200"
                                    />
                                </div>
                            </div>

                            {/* Rajniti - Politics */}
                            <div className="space-y-2 pl-4">
                                <GradientHeader
                                    title="রাজনীতি"
                                    color="purple"
                                    href="/"
                                    showReadMoreBtn={true}
                                />
                                {/* News contents */}
                                <div className="space-y-2">
                                    {/* First item (large) */}
                                    {newsJson.slice(18, 19).map((newsItem, idx) => (
                                        <NewsItemVertical
                                            key={idx}
                                            titleSize="large"
                                            newsItem={newsItem}
                                            bgColor="gray"
                                        />
                                    ))}

                                    {/* Next two items in a 2-column grid */}
                                    <div className="grid grid-cols-2 gap-2">
                                        {newsJson.slice(13, 15).map((newsItem, idx) => (
                                            <NewsItemVertical
                                                key={idx}
                                                newsItem={newsItem}
                                                bgColor="gray"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Read more */}
                                <BottomMoreButton
                                    href="/"
                                    color="purple"
                                    className="bg-purple-200"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Latest - Popular */}
                    <div className="col-span-3">
                        <LatestPopularNews />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeLeadBelow;
