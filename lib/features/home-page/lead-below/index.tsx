import React from "react";
import { newsJson } from "@/lib/data"; // Temporary
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import LatestPopularNews from "@/lib/components/common/news-elements/latest-popular";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";

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
