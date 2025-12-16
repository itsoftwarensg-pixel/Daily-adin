import React from "react";
import Link from "next/link";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";
import NewsItemBase from "@/lib/components/common/news-elements/news-item-base";
import { newsJson } from "@/lib/data"; // Temporary
import ImageWithFallback from "@/lib/components/image/ImageWithFallback";

const HomeSports = () => {
  return (
    <div className="py-8 bg-red-50">
      <Container>
        <GradientHeader
          title="ক্রীড়া লোক"
          color="red"
          href="/"
          showReadMoreBtn={true}
        />
        <div className="grid grid-cols-12 gap-4">
          {/* Left */}
          <div className="col-span-4 space-y-4 pr-4">
            {newsJson.slice(5, 9).map((newsItem, index) => (
              <Link
                key={index}
                href={"/"}
                className="block group overflow-hidden bg-red-100"
              >
                <div
                  className={`w-full grid grid-cols-5 items-center justify-center
                                        gap-2 overflow-hidden`}
                >
                  <div className="col-span-2 aspect-[16/12]">
                    <ImageWithFallback
                      src={`${newsItem.image}`}
                      height={300}
                      width={400}
                      alt={`${newsItem.title}`}
                      className="w-full object-cover h-full"
                    />
                  </div>
                  <div className="col-span-3">
                    <h4 className="px-2 group-hover:text-blue-700 text-lg font-semibold">
                      {newsItem.brief}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Middle */}
          <div className="col-span-5 space-y-4">
            {newsJson.slice(12, 13).map((newsItem, idx) => (
              <div key={idx} className="h-auto">
                <Link href={"/"} className="relative block group h-full">
                  <div className={`w-full h-full bg-red-100`}>
                    <div className="w-full aspect-[16/11]">
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
                        className={`px-2 py-2 max-h-[84px] overflow-hidden text-2xl group-hover:text-blue-700 font-semibold`}
                      >
                        {newsItem.description}
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            <Link href="/" className="block group bg-red-100 px-6 py-4">
              <h4 className="m-0 text-3xl text-center group-hover:text-red-700">
                দেখে নিন ২০২৬ টি–টোয়েন্টি বিশ্বকাপের সূচি
              </h4>
            </Link>
          </div>

          {/* Right */}
          <div className="col-span-3 space-y-4 pl-4">
            {newsJson.slice(13, 15).map((newsItem, idx) => (
              <div key={idx} className="h-auto">
                <Link href={"/"} className="relative block group h-full">
                  <div className={`w-full h-full bg-red-100`}>
                    <div className="w-full aspect-[16/9.5]">
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
                        className={`px-2 py-2.5 text-xl border-l-4 border-red-600
                                                 group-hover:text-blue-700 font-semibold`}
                      >
                        {newsItem.brief}
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeSports;
