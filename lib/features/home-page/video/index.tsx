import React from "react";
import { newsJson } from "@/lib/data"; // Temporary
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import VideoItem from "@/lib/components/common/news-elements/video-item";

const HomeVideo = () => {
  return (
    <div className="py-8">
      <Container>
        <GradientHeader
          title="ভিডিও"
          color="red"
          href="/"
          showReadMoreBtn={true}
        />
        <div className="grid grid-cols-4 gap-2 mt-2">
          {newsJson.slice(39, 47).map((newsItem, idx) => (
            <div key={idx} className="h-full">
              <VideoItem
                newsItem={newsItem}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomeVideo;
