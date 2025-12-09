import React from "react";
import { newsJson } from "@/lib/data";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import MediaLargeCard from "@/lib/components/common/news-elements/news-media-large";
import NewsMediaSmallCard from "@/lib/components/common/news-elements/news-media-small";

const HomeMedia = () => {
  return (
    <div className="py-8 bg-blue-50">
      <Container>
        <GradientHeader
          title="চিত্রলোক"
          color="blue"
          href="/"
          showReadMoreBtn={true}
        />

        <div className="grid grid-cols-12 gap-4">
          {/* Left */}
          <div className="col-span-6 space-y-5">
            {newsJson.slice(13, 16).map((newsItem, index) => (
              <NewsMediaSmallCard
                key={index}
                image={newsItem.image}
                title={newsItem.title}
                description={newsItem.description}
              />
            ))}
          </div>

          {/* Right */}
          <div className="col-span-6 space-y-5">
            {newsJson.slice(9, 10).map((newsItem, index) => (
              <MediaLargeCard
                key={index}
                image={newsItem.image}
                title={newsItem.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeMedia;
