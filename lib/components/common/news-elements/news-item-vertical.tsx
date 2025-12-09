import React from "react";
import Link from "next/link";
import { playVideo } from "../../icons";
import { NewsItemType } from "@/lib/data"; // Temporary
import { ImageWithFallback } from "@/lib/components/image";

// Props
interface Props {
  newsItem: NewsItemType;
  showVideoLink?: boolean;
  largeVideoIcon?: boolean;
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

const NewsItemVertical = ({
  newsItem,
  showVideoLink = false,
  largeVideoIcon = false,
  titleSize = "base",
  bgColor,
}: Props) => {
  const getHighlightedText = () => {
    const text = newsItem.brief;
    if (!showVideoLink) return text;

    const words = text.split(" ");
    if (words.length <= 2) return text; // too short to highlight

    // Pick a random start index for the snippet
    const startIdx = Math.floor(Math.random() * (words.length - 2));
    const snippetLength = Math.min(3, words.length - startIdx); // 2-3 words
    const snippet = words.slice(startIdx, startIdx + snippetLength).join(" ");

    // Split text into three parts: before, highlight, after
    const before = words.slice(0, startIdx).join(" ");
    const after = words.slice(startIdx + snippetLength).join(" ");

    return { before, highlight: snippet, after };
  };

  const highlighted = getHighlightedText();

  return (
    <>
      <Link href={"/"} className="relative block group h-full">
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
                titleSize === "large" ? "text-xl" : "text-md"
              } group-hover:text-blue-700 font-normal`}
            >
              {showVideoLink && typeof highlighted === "object" ? (
                <>
                  {highlighted.before && <span>{highlighted.before} </span>}
                  <span className="text-red-500">{highlighted.highlight}</span>
                  {highlighted.after && <span> {highlighted.after}</span>}
                </>
              ) : (
                newsItem.brief
              )}
            </h4>
          </div>
        </div>

        {showVideoLink && (
          <Link
            href="#"
            className="absolute gap-3 flex items-center gap top-0 left-0 bg-red-600 text-white text-xs px-2 py-1"
          >
            <ImageWithFallback
              src={playVideo}
              width={largeVideoIcon ? 24 : 15}
              height={largeVideoIcon ? 24 : 15}
              alt="play-video"
            />
            <p
              className={`${
                largeVideoIcon ? "text-md" : "text-[10px]"
              } text-white font-normal`}
            >
              ভিডিও দেখুন
            </p>
          </Link>
        )}
      </Link>
    </>
  );
};

export default NewsItemVertical;
