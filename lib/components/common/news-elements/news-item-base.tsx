import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsItemType } from "@/lib/data"; // Temporary

// Props
interface Props {
    newsItem: NewsItemType;
    bgColor?:
    | "slate" | "gray" | "zinc" | "neutral" | "stone"
    | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald"
    | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple"
    | "fuchsia" | "pink" | "rose";
}

const NewsItemBase = ({ newsItem, bgColor }: Props) => {
    return (
        <>
            <Link
                href={'/'}
                className="block group overflow-hidden"
            >
                <div className={`w-full grid grid-cols-5 items-center justify-center ${bgColor ? `bg-${bgColor}-100` : `bg-transparent`} gap-2 overflow-hidden`}>
                    <div className="col-span-2 aspect-[16/10]">
                        <Image
                            src={`${newsItem.image}`}
                            height={300}
                            width={400}
                            alt={`${newsItem.title}`}
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="col-span-3">
                        <h4 className="p-2 group-hover:text-blue-700">{newsItem.brief}</h4>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default NewsItemBase;
