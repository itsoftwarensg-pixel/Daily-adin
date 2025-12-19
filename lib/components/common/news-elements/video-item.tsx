import React from "react";
import Link from "next/link";
import { NewsItemType } from "@/lib/data"; // Temporary
import { ImageWithFallback } from "@/lib/components/image";
import { FaPlay } from "react-icons/fa6";

// Props
interface Props {
  newsItem: NewsItemType;
}

const VideoItem = ({ newsItem }: Props) => {
  return (
    <Link
      href={"/"}
      className="block group overflow-hidden h-full rounded"
    >
      <div className="relative overflow-hidden h-full">
        <div className="w-full relative aspect-[16/9] bg-white overflow-hidden">
          <ImageWithFallback
            src={`${newsItem.image}`}
            height={600}
            width={900}
            alt={`${newsItem.title}`}
            className="w-full object-cover h-full group-hover:scale-110 transition-all"
          />
          <div className="absolute w-full h-full flex items-center justify-center
           bg-black/50 opacity-0 group-hover:opacity-100 transition-all top-0" />
          <div className="absolute animate-pulse opacity-100 group-hover:opacity-100 gap-2 
          flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           group-hover:scale-110 transition-all bg-red-600 text-white text-xs p-4 z-10 rounded-full">
            <FaPlay size={18} className="group-hover:scale-110 transition-all" />
          </div>
        </div>
        <h4 className="border-l-[6px] border-red-600 text-white h-full text-lg p-2 
        bg-gradient-to-b from-red-600 to-black group-hover:from-red-700 
         group-hover:to-red-500 font-semibold text-center">{newsItem.title}</h4>
      </div>
    </Link>
  );
};

export default VideoItem;
