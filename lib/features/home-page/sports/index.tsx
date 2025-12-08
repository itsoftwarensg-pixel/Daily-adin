import React from "react";
import Link from "next/link";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";
import NewsItemBase from "@/lib/components/common/news-elements/news-item-base";
import { newsJson } from "@/lib/data"; // Temporary

const HomeSports = () => {
    return (
        <div className="py-8 bg-red-50">
            <Container>
                <GradientHeader
                    title="ক্রীড়া লোক"
                    color="red"
                    href="/"
                    showReadMoreBtn={true}
                />
                <div className="grid grid-cols-12 gap-4">
                    {/* Left */}
                    <div className="col-span-3 space-y-2">
                        {newsJson.slice(4, 9).map((newsItem, index) => (
                            <NewsItemBase key={index} newsItem={newsItem} />
                        ))}
                    </div>

                    {/* Middle */}
                    <div className="col-span-6 space-y-2">
                        {newsJson.slice(17, 18).map((newsItem, idx) => (
                            <div key={idx} className="h-auto">
                                <NewsItemVertical
                                    newsItem={newsItem}
                                    titleSize="large"
                                    bgColor="red"
                                />
                            </div>
                        ))}

                        <Link href="/" className="block group bg-red-100 px-6 py-3">
                            <h4 className="m-0 text-3xl text-center group-hover:text-red-700">দেখে নিন ২০২৬ টি–টোয়েন্টি বিশ্বকাপের সূচি</h4>
                        </Link>
                    </div>

                    {/* Right */}
                    <div className="col-span-3 space-y-4">
                        {newsJson.slice(13, 15).map((newsItem, idx) => (
                            <div key={idx} className="h-auto">
                                <NewsItemVertical
                                    newsItem={newsItem}
                                    bgColor="red"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeSports;
