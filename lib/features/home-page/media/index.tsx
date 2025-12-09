import React from "react";
import { newsJson } from "@/lib/data";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import MediaNewsItem from "@/lib/components/common/news-elements/media-news-item";
import MediaNewsBanner from "@/lib/components/common/news-elements/media-news-banner";

const HomeMedia = () => {
  return (
    <div className="py-8 bg-red-500 bg-opacity-5">
      <Container>
        <GradientHeader
          title="চিত্রলোক"
          color="red"
          href="/"
          showReadMoreBtn={true}
        />

        <div className="grid grid-cols-12 gap-4">
          {/* Left */}
          <div className="col-span-6 space-y-5">
            {newsJson.slice(13, 16).map((newsItem, index) => (
              <MediaNewsItem
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
              <MediaNewsBanner
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
