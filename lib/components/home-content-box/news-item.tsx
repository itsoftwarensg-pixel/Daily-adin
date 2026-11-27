import PublishedTime from "@/lib/components/common/published-time";
import React from "react";
import Link from "@/lib/components/common/site-link";
import { ImageWithFallback } from "@/lib/components/image";
import { HomePageContentItem } from "@/lib/types/home.page";

// Props
interface Props {
    newsItem: HomePageContentItem;
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

const HomeContentBoxNewsItem = ({
    newsItem,
    titleSize = "base",
    bgColor,
}: Props) => {

    return (
        <Link href={newsItem.full_url} className="group block h-full overflow-hidden rounded-md border border-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-700">
            {/* The previous card used a square edge and a 3.5rem headline minimum with padding inside the clamp. */}
            <div className={`w-full h-full ${bgColor === "gray" ? "bg-gray-50" : bgColor ? `bg-${bgColor}-100` : "bg-transparent"}`}>
                <div className="w-full aspect-[16/9]">
                    <ImageWithFallback
                        src={`${newsItem.full_image_path}`}
                        height={600}
                        width={900}
                        alt={`${newsItem.heading}`}
                        className="w-full object-cover h-full"
                    />
                </div>
                <div className="px-3 py-2.5">
                    <h4 className={`line-clamp-2 min-h-[2lh] !leading-[1.4]
                                    ${titleSize === "3xl"
                            ? "text-3xl"
                            : titleSize === "xlarge"
                                ? "text-2xl"
                                : titleSize === "large"
                                    ? "text-xl" : "text-[17px]"
                        } font-semibold text-black group-hover:text-red-700`}
                    >
                        {newsItem.sub_heading &&
                            <span className="inline-flex items-center gap-1 mr-1">
                                <span className="text-red-500">{newsItem.sub_heading}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block"></span>
                            </span>
                        }
                        {newsItem.heading}
                    </h4>
                    <PublishedTime date={newsItem.created_at} className="mt-1" />
                </div>
            </div>
        </Link>
    );
};

export default HomeContentBoxNewsItem;
