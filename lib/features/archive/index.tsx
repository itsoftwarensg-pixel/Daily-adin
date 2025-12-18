"use client"
import React from "react";
import Container from "@/lib/components/common/container";
import NewsItemArchive from "@/lib/components/common/news-elements/news-item-archive";
import { newsJson } from "@/lib/data";
import { IoIosArrowForward } from "react-icons/io";

const ArchivePage = () => {
    // Local state variables
    const [records, setRecords] = React.useState(12);

    // Handle load more content
    const handleMore = () => {
        setRecords(records + 12);
    }

    return (
        <div className="my-4">
            <Container>
                {/* Section title */}
                <div className="text-xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center mb-4">
                    <span className="pl-4">{`আর্কাইভ`}</span>
                    <IoIosArrowForward />
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                    {newsJson.slice(0, records).map((newsItem, index) => (
                        <NewsItemArchive
                            key={index}
                            newsItem={newsItem}
                        />
                    ))}
                </div>

                {/* Load more button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleMore}
                        className="text-white text-lg bg-red-600 px-4 py-2 flex items-center justify-center gap-4 hover:bg-red-500 rounded-sm">
                        {/* <LiaSpinnerSolid className="text-white animate-spin" /> */}
                        <span>আরও দেখুন</span>
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default ArchivePage;