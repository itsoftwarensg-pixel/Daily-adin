import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";

// Props
interface Props {
  newsItem: any;
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

const NewsItemVerticalOverlay = ({
  newsItem,
  titleSize = "base",
  bgColor,
}: Props) => {
  return (
    <>
      <Link href={"/"} className="block group h-full">
        <div
          className={` w-full h-full ${bgColor ? `bg-${bgColor}-100` : `bg-transparent`
            }`}
        >
          <div className="w-full">
            <ImageWithFallback
              src={`${newsItem.image}`}
              height={600}
              width={900}
              alt={`${newsItem.title}`}
              className="w-full object-cover"
            />
          </div>
          <h4
            className={`py-3 text-black ${titleSize === "large" ? "text-3xl" : "text-md"
              } group-hover:text-blue-600 font-semibold`}
          >
            {newsItem.brief}
          </h4>
        </div>

      </Link>
    </>
  );
};

export default NewsItemVerticalOverlay;
