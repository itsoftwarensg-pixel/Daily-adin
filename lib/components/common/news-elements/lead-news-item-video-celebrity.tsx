import React from "react";
import Link from "next/link";
import { CiPlay1 } from "react-icons/ci";
import { ImageWithFallback } from "../../image";
import { FaArrowRightLong } from "react-icons/fa6";
import HtmlContent from "@/lib/components/common/html-content";
import { StartProgramContent } from "@/lib/types/home.page";

interface Props {
  starProgramNewsContent: StartProgramContent;
}

const LeadNewsItemVideoCelebrity = ({
  starProgramNewsContent,

}: Props) => {

  const { identity, details, quote, video_link, photo_path } = starProgramNewsContent

  const children = (
    <div className="w-full grid grid-cols-2 gap-2 relative">
      <div className="w-full">
        <ImageWithFallback
          src={`${photo_path}`}
          height={600}  
          width={900}
          alt={`${identity}`}
          className="w-full rounded-md"
        />
      </div>
      <div className="p-2">
        <h4 className="text-green-600 text-lg">{identity}</h4>
        <HtmlContent html={details} className="text-sm" maxContent={160} />
      </div>

      <div className="absolute right-2 bottom-9 p-4 bg-white">
        <blockquote>&quot;{quote}&quot;</blockquote>
        {/* <small>{quoteFrom}</small> */}
      </div>

      {video_link &&
        <div
          className="absolute w-full h-full rounded-md flex items-center justify-center 
                bg-black/0 group-hover:bg-black/50 scale-110
                transition-colors duration-300 ease-in-out
                z-10 top-0"
        >
          <CiPlay1
            size={96}
            className="text-transparent group-hover:text-white scale-75 group-hover:scale-100 transition-all duration-300 ease-in-out"
          />
        </div>
      }

      {video_link &&
        <div className="absolute right-0 -bottom-0 text-white bg-amber-950 flex gap-2 items-center px-2 py-1.5 text-xs">
          <FaArrowRightLong />
          ভিডিও দেখুন
        </div>
      }
    </div>
  );


  if (video_link) {
    return (
      <Link
        href={video_link}
        className="block group relative rounded-md overflow-hidden bg-gray-100"
      >
        {children}
      </Link>
    );
  }

  return (
    <div className="block group relative rounded-md overflow-hidden bg-gray-100">
      {children}
    </div>
  );
};

export default LeadNewsItemVideoCelebrity;
