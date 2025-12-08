import React from "react";
import Link from "next/link";
import { CiPlay1 } from "react-icons/ci";
import { newsJson } from "@/lib/data";
import { ImageWithFallback } from "../../image";

const LeadNewsItemVideoOverlay = () => {
  return (
    <>
      {newsJson.slice(17, 18).map((newsItem, index) => (
        <Link
          key={index}
          href={"/"}
          className="block group relative rounded-md overflow-hidden"
        >
          <div className="w-full aspect-[4/3] bg-white">
            <ImageWithFallback
              src={`${newsItem.image}`}
              height={600}
              width={900}
              alt={`${newsItem.title}`}
              className="w-full object-cover h-full rounded-md group-hover:rotate-[5deg] group-hover:scale-110 transition-all"
            />
          </div>
          <div className="absolute w-full h-full flex items-center justify-center bg-black/50 z-10 top-0">
            <CiPlay1
              size={96}
              color="white"
              className="group-hover:scale-110 transition-all"
            />
          </div>
        </Link>
      ))}
    </>
  );
};

export default LeadNewsItemVideoOverlay;
