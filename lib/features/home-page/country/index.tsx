import React from "react";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";
import { newsJson } from "@/lib/data"; // Temporary
import { BiSearchAlt2 } from "react-icons/bi";
import Link from "next/link";
import ImageWithFallback from "@/lib/components/image/ImageWithFallback";
import HtmlContent from "@/lib/components/common/html-content";

const HomeCountry = () => {
  return (
    <div className="py-8">
      <Container>
        <GradientHeader
          title="প্রান্তলোক"
          color="green"
          href="/"
          showReadMoreBtn={true}
        />
        {/* আমার এলাকার খবর  */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-4 items-center">
            <span className="h-4 w-4 bg-red-600"></span>
            <h4 className="text-2xl">আমার এলাকার খবর </h4>
          </div>
          <div className="flex gap-6">
            <select
              className="block w-full border rounded px-4 py-3 bg-white
                     active:ring-0 focus:ring-0 focus:ring-blue-0 focus:border-blue-0"
            >
              <option value={""}>বিভাগ</option>
              <option value={""}>Dhaka</option>
              <option value={""}>Rajshahi</option>
              <option value={""}>Chittagong</option>
            </select>
            <select
              className="block w-full border rounded px-4 py-3 bg-white
                     active:ring-0 focus:ring-0 focus:ring-blue-0 focus:border-blue-0"
            >
              <option value={""}>জেলা</option>
              <option value={""}>Dhaka</option>
              <option value={""}>Rajshahi</option>
              <option value={""}>Chittagong</option>
            </select>
            <select
              className="block w-full border rounded px-4 py-3 bg-white
                     active:ring-0 focus:ring-0 focus:ring-blue-0 focus:border-blue-0"
            >
              <option value={""}>উপজেলা</option>
              <option value={""}>Dhaka</option>
              <option value={""}>Rajshahi</option>
              <option value={""}>Chittagong</option>
            </select>

            <button className="flex gap-4 px-8 py-2 items-center text-white rounded bg-red-400 hover:bg-red-500">
              <BiSearchAlt2 size={22} />
              খুঁজুন
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left */}
          <div className="space-y-2 h-full">
            {newsJson.slice(59, 60).map((newsItem, idx) => (
              <div key={idx} className="h-full">
                <Link href={"/"} className="relative block group h-full">
                  <div className={`w-full h-full bg-gray-100`}>
                    <div className="w-full aspect-[16/9]">
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
                        className={`px-2 pt-3 text-3xl group-hover:text-blue-700 font-semibold`}
                      >
                        {newsItem.title}
                      </h4>
                      <HtmlContent html={newsItem.brief} maxContent={160} className="pt-1 px-2 text-gray-500" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {newsJson.slice(55, 59).map((newsItem, idx) => (
                <div key={idx} className="h-auto">
                  <NewsItemVertical
                    newsItem={newsItem}
                    bgColor="gray"
                    titleSize="large"
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

export default HomeCountry;
