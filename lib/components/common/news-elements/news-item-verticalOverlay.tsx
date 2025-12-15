import React from "react";
import Link from "next/link";
import { NewsItemType } from "@/lib/data"; // Temporary
import { ImageWithFallback } from "@/lib/components/image";

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

const NewsItemVerticalOverlay = ({ newsItem, titleSize = "base", bgColor }: Props) => {
    return (
        <>
            <Link href={"/"} className="block group h-full">
                <div
                    className={`relative w-full h-full ${bgColor ? `bg-${bgColor}-100` : `bg-transparent`
                        }`}
                >
                    <div className="w-full aspect-[16/10]">
                        <ImageWithFallback
                            src={`${newsItem.image}`}
                            height={600}
                            width={900}
                            alt={`${newsItem.title}`}
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/0 bottom-0 right-0 z-10"></div>
                    <div className="absolute w-full bottom-0 left-0 p-4 z-10">
                        <h4
                            className={`px-2 py-1 text-white ${titleSize === "large" ? "text-3xl" : "text-md"
                                } group-hover:underline font-semibol`}
                        >
                            {newsItem.brief}
                        </h4>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default NewsItemVerticalOverlay;
