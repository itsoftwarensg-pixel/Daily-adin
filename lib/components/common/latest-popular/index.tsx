"use client";

import Link from "next/link";
import { useState } from "react";
import NewsItemLatestPopular from "@/lib/components/common/news-elements/news-item-latest-popular";
import { ContentItem } from "@/lib/types/category.page";

type Tab = "latest" | "popular";

interface NewsTabsProps {
  latestNews: ContentItem[];
  popularNews: ContentItem[];
  height?: number;
}

export default function LatestPopularNews({
  latestNews,
  popularNews,
  height = 630,
}: NewsTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("latest");

  return (
    <div className="bg-red-50 overflow-hidden">
      {/* Tabs Header */}
      <div className="sticky top-0 bg-white z-10 mb-2">
        <div className="flex">
          <button
            onClick={() => setActiveTab("latest")}
            className={`px-4 py-3.5 w-1/2 text-center ${
              activeTab === "latest"
                ? "bg-red-600 text-white"
                : "bg-gray-300 hover:text-gray-800"
            }`}
          >
            সর্বশেষ সংবাদ
          </button>

          <button
            onClick={() => setActiveTab("popular")}
            className={`px-4 py-3.5 w-1/2 text-center ${
              activeTab === "popular"
                ? "bg-red-600 text-white"
                : "bg-gray-300 hover:text-gray-800"
            }`}
          >
            সর্বাধিক পঠিত
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className={`overflow-y-auto`} style={{ maxHeight: `${height}px` }}>
        {activeTab === "latest" && (
          <div>
            {latestNews && latestNews.length > 0 && latestNews.slice(0, 10).map((newsItem, index) => (
              <div key={index} className="px-2">
                <NewsItemLatestPopular newsItem={newsItem} />
              </div>
            ))}
          </div>
        )}
        {activeTab === "popular" && (
          <div>
            {popularNews && popularNews.length > 0 && popularNews.slice(0, 10).map((newsItem, index) => (
              <div key={index} className="px-2">
                <NewsItemLatestPopular newsItem={newsItem} />
              </div>
            ))}
          </div>
        )}

      </div>
      <Link
        href={'/latest'}
        className="text-center block text-red-700 bg-red-100 py-2 hover:bg-red-200"
      >
        এদিনের সব
      </Link>
    </div>
  );
}
