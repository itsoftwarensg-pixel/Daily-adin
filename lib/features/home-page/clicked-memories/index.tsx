import React from "react";
import { newsJson } from "@/lib/data";
import Container from "@/lib/components/common/container";
import ClickedMemoryItemNew from "@/lib/components/common/news-elements/clicked-memory-item-new";
import GradientHeader from "@/lib/components/common/section-headers/gradient";

const HomeClickedMemories = () => {
  return (
    <div className="py-8">
      <Container>
        <GradientHeader
          title="ক্লিক স্মৃতি"
          color="red"
          href="/"
          showReadMoreBtn={true}
        />
        <div className="grid grid-cols-3 gap-6 mt-6">
          {newsJson.slice(11, 17).map((newsItem, idx) => (
            <div key={idx} className="h-auto">
              <ClickedMemoryItemNew
                newsItem={newsItem}
                variant="memory"
                bgColor="gray"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomeClickedMemories;
