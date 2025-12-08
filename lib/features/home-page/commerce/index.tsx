import React from "react";
import Container from "@/lib/components/common/container";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";
import BottomMoreButton from "@/lib/components/common/section-headers/bottom-more";
import SectionHeaderBase from "@/lib/components/common/section-headers/base";
import { newsJson } from "@/lib/data"; // Temporary

const HomeCommercePantholokChoose = () => {
    return (
        <div className="py-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* বাণিজ্য লোক */}
                    <div className="space-y-2">
                        <SectionHeaderBase
                            title="বাণিজ্য লোক"
                            color="red"
                            href="/"
                            showReadMoreBtn={true}
                        />
                        {/* News contents */}
                        <div className="space-y-2">
                            {/* First item (large) */}
                            {newsJson.slice(8, 9).map((newsItem, idx) => (
                                <NewsItemVertical
                                    key={idx}
                                    titleSize="large"
                                    newsItem={newsItem}
                                />
                            ))}

                            {/* Next two items in a 2-column grid */}
                            <div className="grid grid-cols-2 gap-2">
                                {newsJson.slice(3, 5).map((newsItem, idx) => (
                                    <NewsItemVertical
                                        key={idx}
                                        newsItem={newsItem}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Read more */}
                        <BottomMoreButton
                            href="/"
                            color="red"
                            className="bg-red-700"
                        />
                    </div>

                    {/* পান্থলোক */}
                    <div className="space-y-2">
                        <SectionHeaderBase
                            title="পান্থলোক"
                            color="gray"
                        />
                        {/* News contents */}
                        <div className="space-y-2">
                            {/* First item (large) */}
                            {newsJson.slice(19, 20).map((newsItem, idx) => (
                                <NewsItemVertical
                                    key={idx}
                                    titleSize="large"
                                    newsItem={newsItem}
                                />
                            ))}

                            {/* Next two items in a 2-column grid */}
                            <div className="grid grid-cols-2 gap-2">
                                {newsJson.slice(13, 15).map((newsItem, idx) => (
                                    <NewsItemVertical
                                        key={idx}
                                        newsItem={newsItem}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Read more */}
                        <BottomMoreButton
                            href="/"
                            color="gray"
                            className="bg-gray-700"
                        />
                    </div>

                    {/* বাছাইকৃত */}
                    <div className="space-y-2">
                        <SectionHeaderBase
                            title="বাছাইকৃত"
                            color="indigo"
                        />
                        {/* News contents */}
                        <div className="space-y-2">
                            {/* First item (large) */}
                            {newsJson.slice(1, 2).map((newsItem, idx) => (
                                <NewsItemVertical
                                    key={idx}
                                    titleSize="large"
                                    newsItem={newsItem}
                                />
                            ))}

                            {/* Next two items in a 2-column grid */}
                            <div className="grid grid-cols-2 gap-2">
                                {newsJson.slice(6, 8).map((newsItem, idx) => (
                                    <NewsItemVertical
                                        key={idx}
                                        newsItem={newsItem}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Read more */}
                        <BottomMoreButton
                            href="/"
                            color="indigo"
                            className="bg-indigo-700"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeCommercePantholokChoose;
