"use client";

import { useState } from "react";
import { NewsItemType, newsJson } from "@/lib/data";
import NewsItemLatestPopular from "@/lib/components/common/news-elements/news-item-latest-popular";

type Tab = "latest" | "popular";

interface NewsTabsProps {
    latestNews?: NewsItemType[];
    popularNews?: NewsItemType[];
    height?: number
}

export default function LatestPopularNews({ latestNews, popularNews, height = 630 }: NewsTabsProps) {
    const [activeTab, setActiveTab] = useState<Tab>("latest");

    return (
        <div className="bg-red-50 overflow-hidden">
            {/* Tabs Header */}
            <div className="sticky top-0 bg-white z-10 mb-2">
                <div className="flex">
                    <button
                        onClick={() => setActiveTab("latest")}
                        className={`px-4 py-3.5 w-1/2 text-center ${activeTab === "latest"
                            ? "bg-red-600 text-white"
                            : "bg-gray-300 hover:text-gray-800"
                            }`}
                    >
                        সর্বশেষ সংবাদ
                    </button>

                    <button
                        onClick={() => setActiveTab("popular")}
                        className={`px-4 py-3.5 w-1/2 text-center ${activeTab === "popular"
                            ? "bg-red-600 text-white"
                            : "bg-gray-300 hover:text-gray-800"
                            }`}
                    >
                        সর্বাধিক পঠিত
                    </button>
                </div>
            </div>

            {/* Scrollable Content */}
            <div
                className={`overflow-y-auto`}
                style={{ maxHeight: `${height}px` }}
            >
                {activeTab === "latest" &&
                    <div>
                        {newsJson.slice(1, 10).map((newsItem, index) => (
                            <div key={index} className="px-2">
                                <NewsItemLatestPopular newsItem={newsItem} />
                            </div>
                        ))}
                    </div>
                }
                {activeTab === "popular" &&
                    <div>
                        {newsJson.slice(11, 20).map((newsItem, index) => (
                            <div key={index} className="px-2">
                                <NewsItemLatestPopular newsItem={newsItem} />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}
