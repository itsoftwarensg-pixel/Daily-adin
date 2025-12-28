import React from "react";
import Link from "next/link";
import { TodayDate } from "@/lib/utils/helpers";
import { ArchiveType } from "@/lib/types/archive.types";
import ImageWithFallback from "@/lib/components/image/ImageWithFallback";

interface Props {
    newsItem: ArchiveType;
}

const NewsItemArchive = ({ newsItem }: Props) => {
    if (!newsItem) {
        return null;
    }

    return (
        <>
            <Link href={"/"} className="block group overflow-hidden">
                <div
                    className={`w-full grid grid-cols-5 justify-center gap-4 overflow-hidden`}
                >
                    <div className="col-span-2 aspect-[16/10]">
                        <ImageWithFallback
                            src={newsItem.full_image_path}
                            height={300}
                            width={400}
                            alt={`${newsItem.heading}`}
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="col-span-3">
                        <h4 className="pb-1 group-hover:text-blue-700 text-[17px] font-semibold">
                            {newsItem.heading}
                        </h4>
                        <p className="text-sm text-gray-500">{newsItem.created_at_bangla}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default NewsItemArchive;
