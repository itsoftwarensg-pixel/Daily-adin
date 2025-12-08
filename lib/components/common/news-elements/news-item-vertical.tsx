import React from "react";
import Link from "next/link";
import { NewsItemType } from "@/lib/data"; // Temporary
import { ImageWithFallback } from "../../image";

// Props
interface Props {
  newsItem: NewsItemType;
  titleSize?: "base" | "large";
  bgColor?:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose";
}

const NewsItemVertical = ({ newsItem, titleSize = "base", bgColor }: Props) => {
  return (
    <>
      <Link href={"/"} className="block group h-full">
        <div
          className={`w-full h-full ${
            bgColor ? `bg-${bgColor}-100` : `bg-transparent`
          }`}
        >
          <div className="w-full aspect-[16/9]">
            <ImageWithFallback
              src={`${newsItem.image}`}
              height={600}
              width={900}
              alt={`${newsItem.title}`}
              className="w-full object-cover h-full"
            />
          </div>
          <div className="">
            <h4
              className={`px-2 py-3 ${
                titleSize === "large" ? "text-lg" : "text-md"
              } group-hover:text-blue-700 font-semibol`}
            >
              {newsItem.brief}
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewsItemVertical;
