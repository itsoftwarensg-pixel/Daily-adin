import React from "react";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";
import NewsItemVerticalOverlay from "@/lib/components/common/news-elements/news-item-verticalOverlay";
import { newsJson } from "@/lib/data"; // Temporary

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left */}
          <div className="space-y-2">
            {newsJson.slice(5, 6).map((newsItem, idx) => (
              <div key={idx} className="h-auto">
                <NewsItemVerticalOverlay
                  newsItem={newsItem}
                  titleSize="large"
                />
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {newsJson.slice(16, 20).map((newsItem, idx) => (
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
