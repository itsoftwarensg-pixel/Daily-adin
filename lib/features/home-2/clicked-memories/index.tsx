import React from "react";
import Link from "next/link";
import { newsJson } from "@/lib/data"; // Temporary
import Container from "@/lib/components/common/container";
import ClickedMemoryItem from "@/lib/components/common/news-elements/clicked-memory-item";
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
        <div className="grid grid-cols-12 gap-6 mt-6">
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
          <div className="col-span-5 space-y-5">
            {newsJson.slice(8, 10).map((newsItem, index) => (
              <ClickedMemoryItem
                key={index}
                newsItem={newsItem}
                variant="clicked"
                height="160px"
              />
            ))}
            <Link
              href={'/'}
              className="text-[24px] flex items-center justify-center bg-gray-3 w-full h-20 font-normal py-4 hover:bg-gray-200"
            >সব কালেকশন দেখুন
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeClickedMemories;
