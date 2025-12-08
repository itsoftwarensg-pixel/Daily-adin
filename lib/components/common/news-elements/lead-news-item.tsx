import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NewsItemType, newsJson } from "@/lib/data"; // Temporary

// Props
interface Props {
  newsContent: NewsItemType | {};
}

const LeadNewsItem = () => {
  return (
    <>
      {newsJson.slice(7, 8).map((newsItem, index) => (
        <Link
          key={index}
          href={"/"}
          className="block group border-r border-l px-3"
        >
          <div className="w-full bg-white">
            <div className="w-full">
              <Image
                src={`${newsItem.image}`}
                height={600}
                width={900}
                alt={`${newsItem.title}`}
                className="w-full rounded"
              />
            </div>
            <div className="">
              <h4 className="mt-2 p-2 text-4xl group-hover:text-blue-700 font-semibol">
                {newsItem.brief}
              </h4>
              <p className="p-2 text-gray-400">
                {newsItem.description} {newsItem.description}{" "}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default LeadNewsItem;
