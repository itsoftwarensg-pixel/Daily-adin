import React from "react";
import { newsJson } from "@/lib/data"; // Temporary
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";
import NewsItemLaceTape from "@/lib/components/common/news-elements/news-item-lace-tap";

const HomeLaceTap = () => {
  return (
    <div className="py-8 ">
      <Container>
        <GradientHeader
          title="লেইসফিতা"
          color="red"
          href="/"
          showReadMoreBtn={true}
        />

        <div className="grid grid-cols-12 gap-6">
          {/* Left */}
          <div className="col-span-6 space-y-2">
            {newsJson.slice(11, 12).map((newsItem, idx) => (
              <div key={idx} className="h-full">
                <NewsItemLaceTape
                  newsItem={newsItem}
                  titleSize="xlarge"
                  bgColor="gray"
                />
              </div>
            ))}
          </div>

          <div className="col-span-1 flex justify-center">
            <div className="w-[3px] h-full bg-gray-5" />
          </div>

          {/* Right */}
          <div className="col-span-5  space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {newsJson.slice(6, 10).map((newsItem, idx) => (
                <div key={idx} className="h-auto">
                  <NewsItemLaceTape
                    newsItem={newsItem}
                    titleSize="large"
                    bgColor="gray"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeLaceTap;
