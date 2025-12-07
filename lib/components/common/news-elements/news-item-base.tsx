import React from "react";
import { NewsItemType, newsJson } from "@/lib/data"; // Temporary
import Image from "next/image";
import Link from "next/link";

// Props
interface Props {
    newsContent: NewsItemType | {};
}

const NewsItemBase = () => {
    const newsItem = newsJson[0];
    return (
        <>
            {newsJson.slice(4, 8).map((newsItem, index) => (
                <Link
                    key={index}
                    href={'/'}
                    className="block group"
                >
                    <div className="w-full grid grid-cols-5 items-center justify-center bg-white gap-2">
                        <div className="col-span-2">
                            <Image
                                src={`${newsItem.image}`}
                                height={300}
                                width={400}
                                alt={`${newsItem.title}`}
                            />
                        </div>
                        <div className="col-span-3">
                            <h4 className="p-2 group-hover:text-blue-700">{newsItem.brief}</h4>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default NewsItemBase;
