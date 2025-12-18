import React from "react";
import Link from "next/link";
import { NewsItemType } from "@/lib/data"; // Temporary
import ImageWithFallback from "@/lib/components/image/ImageWithFallback";
import { TodayDate } from "@/lib/utils/helpers";

// Props
interface Props {
  newsItem: NewsItemType;
}

const NewsItemArchive = ({ newsItem }: Props) => {
  if (!newsItem) {
    return null;
  }

  return (
    <>
      <Link href={"/"} className="block group overflow-hidden">
        <div className={`w-full grid grid-cols-5 justify-center gap-4 overflow-hidden`}>
          <div className="col-span-2 aspect-[16/10]">
            <ImageWithFallback
              src={`${newsItem.image}`}
              height={300}
              width={400}
              alt={`${newsItem.title}`}
              className="w-full object-cover h-full"
            />
          </div>
          <div className="col-span-3">
            <h4 className="pb-1 group-hover:text-blue-700 text-[17px] font-semibold">{newsItem.title}</h4>
            <p className="text-sm text-gray-500">{TodayDate()}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewsItemArchive;
