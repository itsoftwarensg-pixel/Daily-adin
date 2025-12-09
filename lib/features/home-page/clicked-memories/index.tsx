import React from "react";
import { newsJson } from "@/lib/data";
import Container from "@/lib/components/common/container";
import Advertisement from "@/lib/components/common/advertisement";
import ClickedMemoryItem from "@/lib/components/common/news-elements/clicked-memory-item";

const HomeClickedMemories = () => {
  return (
    <div className="py-8 my-12">
      <Container>
        <div className="flex items-center gap-4 mb-11">
          <div className="w-4 h-12 bg-[#3C3C3C]" />
          <p className="text-[32px] font-normal text-primaryRed">
            ক্লিক স্মৃতি{" "}
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {/* Left */}
          <div className="col-span-7 space-y-2">
            {newsJson.slice(10, 11).map((newsItem, idx) => (
              <div key={idx} className="h-auto">
                <ClickedMemoryItem
                  newsItem={newsItem}
                  variant="memory"
                  bgColor="gray"
                />
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="col-span-5 space-y-4">
            {newsJson.slice(8, 10).map((newsItem, index) => (
              <ClickedMemoryItem
                key={index}
                newsItem={newsItem}
                variant="clicked"
                height="190px"
              />
            ))}
            <Advertisement
              height={"90"}
              label="সব কালেকশন দেখুন "
              className="text-[24px] font-normal py-4"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeClickedMemories;
