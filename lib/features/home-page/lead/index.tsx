import React from "react";
import Advertisement from "@/lib/components/common/advertisement";
import Container from "@/lib/components/common/container";
import LeadNewsItem from "@/lib/components/common/news-elements/lead-news-item";
import NewsItemBase from "@/lib/components/common/news-elements/news-item-base";
import { newsJson } from "@/lib/data";
import HomeLeadSidebar from "@/lib/features/home-page/lead/aside";
import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import HtmlContent from "@/lib/components/common/html-content";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";
import LatestPopularNews from "@/lib/components/common/news-elements/latest-popular";
import headerBanner from "@/public/images/header-banner.svg";

const HomeLead = () => {
  return (
    <div className="pt-4 pb-8">
      <Container>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3">
            <div className="grid grid-cols-5 gap-6">
              {/* Lead news - Left side */}
              <div className="col-span-2 space-y-2">
                {newsJson.slice(4, 9).map((newsItem, index) => (
                  <NewsItemBase key={index} newsItem={newsItem} bgColor="gray" />
                ))}
                <div className="relative overflow-hidden mt-3">
                  <ImageWithFallback
                    src={headerBanner}
                    width={500}
                    height={150}
                    alt="The Daily Adin Logo"
                    className="object-contain"
                  />
                </div>

              </div>

              {/* Lead news - Center */}
              <div className="col-span-3">
                <LeadNewsItem />

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {newsJson.slice(14, 16).map((newsItem, index) => (
                    <NewsItemBase key={index} newsItem={newsItem} bgColor="gray" />
                  ))}
                </div>
              </div>
            </div>

            {/* 3 contents. Lead below */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {newsJson.slice(40, 43).map((newsItem, idx) => (
                <Link href={"/"} key={idx} className="relative block group h-full">
                  <div
                    className={`w-full h-full bg-gray-100`}
                  >
                    <div className="w-full aspect-[16/9]">
                      <ImageWithFallback
                        src={`${newsItem.image}`}
                        height={600}
                        width={900}
                        alt={`${newsItem.title}`}
                        className="w-full object-cover h-full"
                      />
                    </div>
                    <div>
                      <h4
                        className={`px-2 pt-2 text-lg
                           group-hover:text-blue-700 font-normal`}
                      >
                        {newsItem.title}
                      </h4>
                      <HtmlContent html={newsItem.description} maxContent={100} className="p-2 text-gray-500" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* National, Politics */}
            <div className="grid grid-cols-2">
              {/* National */}
              <div className="space-y-2">
                <div className="pr-4">
                  <GradientHeader
                    title="জাতীয় সংবাদ"
                    color="red"
                    showReadMoreBtn
                    href="/"
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
                </div>
              </div>

              {/* Rajniti - Politics */}
              <div className="space-y-2 pl-4">
                <GradientHeader
                  href="/"
                  title="রাজনীতি"
                  color="purple"
                  showReadMoreBtn
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
              </div>
            </div>
          </div>

          {/* Sidebar - Rigt side */}
          <div className="col-span-1">
            <HomeLeadSidebar />

            {/* Latest - Popular */}
            <div className="my-4">
              <LatestPopularNews />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeLead;
