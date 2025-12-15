import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "../../image";
import { NewsItemType, newsJson } from "@/lib/data"; // Temporary
import HtmlContent from "@/lib/components/common/html-content";

// Props
interface Props {
  newsContent: NewsItemType | {};
}

const LeadNewsItem = () => {
  return (
    <>
      {newsJson.slice(45, 46).map((newsItem, index) => (
        <Link
          key={index}
          href={"/"}
          className="block group mb-4"
        >
          <div className="w-full bg-white">
            <div className="w-full">
              <ImageWithFallback
                src={`${newsItem.image}`}
                height={600}
                width={900}
                alt={`${newsItem.title}`}
                className="w-full"
              />
            </div>
            <div className="">
              <h4 className="mt-2 p-2 text-4xl group-hover:text-blue-700 font-semibol">
                {newsItem.title}
              </h4>
              <HtmlContent html={newsItem.description} maxContent={200} className="p-2 text-gray-500" />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default LeadNewsItem;
