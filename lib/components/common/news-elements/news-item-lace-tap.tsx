import React from "react";
import Link from "next/link";
import { NewsItemType } from "@/lib/data"; // Temporary
import { ImageWithFallback } from "@/lib/components/image";
import { getRandomHighlightedText } from "@/lib/utils/helpers";

// Props
interface Props {
  newsItem: NewsItemType;
  titleSize?: "base" | "large" | "xlarge" | "3xl";
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

const NewsItemLaceTape = ({
  newsItem,
  titleSize = "base",
  bgColor,
}: Props) => {
  const highlighted = getRandomHighlightedText(newsItem.brief, 3);

  return (
    <Link href={"/"} className="relative block group h-full">
      <div
        className={`w-full h-full ${bgColor ? `bg-${bgColor}-100` : `bg-transparent`
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
        <div>
          <h4
            className={`px-2 py-2 
              ${titleSize === "3xl"
                ? "text-3xl"
                : titleSize === "xlarge"
                  ? "text-2xl"
                  : titleSize === "large"
                    ? "text-xl" : "text-[17px]"
              }
               group-hover:text-blue-700 font-semibold`}
          >
            {highlighted ? (
              <>
                {highlighted.before && <span>{highlighted.before} </span>}
                <span className="text-red-500">{highlighted.highlight}</span>
                {highlighted.after && <span> {highlighted.after}</span>}
              </>
            ) : (
              newsItem.title
            )}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default NewsItemLaceTape;
