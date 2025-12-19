import React from "react";
import Link from "next/link";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";
import NewsItemVerticalOverlay from "@/lib/components/common/news-elements/news-item-verticalOverlay";
import { newsJson } from "@/lib/data"; // Temporary
import { ImageWithFallback } from "@/lib/components/image";

const HomeInternational = () => {
  return (
    <div className="py-8 bg-purple-50">
      <Container>
        <GradientHeader
          title="দূরলোক"
          color="purple"
          href="/"
          showReadMoreBtn={true}
        />

        <div className="grid grid-cols-12 gap-6">
          {/* Left */}
          <div className="col-span-3">
            <div className="space-y-4">
              {newsJson.slice(11, 13).map((newsItem, idx) => (
                <div key={idx} className="h-auto">
                  <NewsItemVertical newsItem={newsItem} titleSize="large" />
                </div>
              ))}
            </div>
          </div>

          {/* Middle */}
          <div className="col-span-6">
            {newsJson.slice(13, 14).map((newsItem, idx) => (
              <div key={idx} className="h-auto">
                <Link href={"/"} className="relative block group h-full">
                  <div className={`w-full h-full`}>
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
                        className={`py-2 text-2xl group-hover:text-blue-700 font-semibold`}
                      >
                        {newsItem.description}
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="col-span-3">
            <div className="space-y-4">
              {newsJson.slice(16, 18).map((newsItem, idx) => (
                <div key={idx} className="h-auto">
                  <NewsItemVertical newsItem={newsItem} titleSize="large" />
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
