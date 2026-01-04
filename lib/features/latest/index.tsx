import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Container from "@/lib/components/common/container";
import NoContentFound from "@/lib/components/no-content-found";
import { ContentItemType } from "@/lib/types/latest.page";
import NewsItemLatest from "@/lib/components/common/news-elements/news-item-latest";

// Props
interface PropsType {
    data: {
        from: number;
        per_page: number;
        current_page: number;
        last_page: number;
        to: number;
        total: number;
        data: ContentItemType[];
    };
}

const LatestContentPage = ({ data }: PropsType) => {
    // Latest contents array
    const contents = data.data;

    return (
        <div className="my-4">
            <Container>
                {/* Section title */}
                <div className="flex items-center gap-2 pb-4">
                    <Link
                        href="/latest"
                        className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
                    >
                        <span className="pl-4">এদিনের সব</span>
                        <IoIosArrowForward />
                    </Link>
                </div>

                {/* Latest content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 border-t pt-4">
                    {contents && contents.length > 0 ? (
                        contents.map((newsItem) => (
                            <NewsItemLatest
                                key={newsItem.id}
                                newsItem={newsItem}
                            />
                        ))
                    ) : (
                        <NoContentFound />
                    )}
                </div>
            </Container>
        </div>
    );
};

export default LatestContentPage;
