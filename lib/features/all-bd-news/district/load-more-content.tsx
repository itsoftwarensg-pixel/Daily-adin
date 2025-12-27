"use client"
import Link from "next/link";
import { useState } from "react";
import { ContentItem } from "@/lib/types/category.page";
import { getContentsByDistrictIdAction } from "@/app/actions/content";
import HtmlContent from "@/lib/components/common/html-content";
import { ImageWithFallback } from "@/lib/components/image";
import { LiaSpinnerSolid } from "react-icons/lia";

interface Props {
    loadMoreContents: {
        contents: ContentItem[];
        last_page: number;
    };
    districtId: number;
}

const DistrictPageLoadMoreContent = ({ loadMoreContents, districtId }: Props) => {
    // States variables
    const [loading, setLoading] = useState(false);
    const [contents, setContents] = useState<ContentItem[]>(loadMoreContents.contents);
    const [page, setPage] = useState(1);
    const recordsPerPage = 10;
    const lastPage = loadMoreContents.last_page;

    const fetchContents = async () => {
        setLoading(true);
        const data = await getContentsByDistrictIdAction(districtId, page, recordsPerPage);
        // Append new contents to existing contents
        setContents((prev) => [...prev, ...data.data]);

        setPage(page + 1);
        setLoading(false);
    };

    return (
        <div className="flex flex-col gap-4">
            {contents.map((newsItem, idx) => (
                <div key={idx} className="border-b pb-4">
                    <Link href={"/"} className="group flex flex-row gap-3">
                        <div className="w-36 lg:w-80 shrink-0">
                            <div className="w-full aspect-[16/9]">
                                <ImageWithFallback
                                    src={`${newsItem.full_image_path}`}
                                    height={600}
                                    width={900}
                                    alt={`${newsItem.heading}`}
                                    className="w-full object-cover h-full"
                                />
                            </div>
                        </div>
                        <div className="flex-grow px-2">
                            <h4
                                className={`pt-2 text-xl group-hover:text-blue-700 font-semibold`}
                            >
                                {newsItem.heading}
                            </h4>
                            <HtmlContent html={newsItem.description} maxContent={300} className="py-1 text-gray-400" />
                        </div>
                    </Link>
                </div>
            ))}

            {page < lastPage && (
                <div className="text-[24px] inline-flex items-center justify-center h-20 font-normal py-4 ">
                    <button
                        onClick={fetchContents}
                        className="text-white text-lg bg-red-600 px-4 py-2 flex items-center justify-center gap-4 hover:bg-red-500 rounded-sm">
                        {loading && <LiaSpinnerSolid className="text-white animate-spin" />}
                        <span>আরও দেখুন</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default DistrictPageLoadMoreContent;