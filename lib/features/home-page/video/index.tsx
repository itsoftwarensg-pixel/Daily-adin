"use client";

import { useState } from "react";
import Container from "@/lib/components/common/container";
import VideoGallery from "@/lib/components/common/video-gallery";
import { getAllVideosAction } from "@/app/actions/video";
import { HomePageVideoSection } from "@/lib/types/home.page";
import { VideoItemType } from "@/lib/types/video.page";

// Props
interface Props {
    data: HomePageVideoSection | undefined;
}

const HomeVideo = ({ data }: Props) => {
    const initialVideos = (data?.contents ?? []).slice(0, 8) as VideoItemType[];
    const [videos, setVideos] = useState<VideoItemType[]>(initialVideos);
    const [activeCategory, setActiveCategory] = useState(0);
    const [loading, setLoading] = useState(false);

    if (!initialVideos.length) return null;

    const categories = [
        { id: 0, label: "সর্বশেষ" },
        { id: 1, label: "নিউজ" },
        { id: 2, label: "বিশ্ব" },
        { id: 3, label: "বিনোদন" },
    ];

    const selectCategory = async (categoryId: number) => {
        if (loading || categoryId === activeCategory) return;

        setActiveCategory(categoryId);
        setLoading(true);
        try {
            const response = await getAllVideosAction(1, 8, categoryId || undefined);
            if (Array.isArray(response?.data)) {
                setVideos(response.data);
            }
        } catch {
            // Keep the currently displayed videos if the category request fails.
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white py-8 sm:py-10">
            <Container>
                <VideoGallery
                    videos={videos}
                    showAllLink
                    headerActions={
                        <div className="flex flex-wrap items-center gap-1.5" aria-label="ভিডিও ক্যাটাগরি">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() => void selectCategory(category.id)}
                                    disabled={loading}
                                    aria-pressed={activeCategory === category.id}
                                    className={`min-h-9 rounded-md px-3 py-1.5 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-wait disabled:opacity-60 ${
                                        activeCategory === category.id
                                            ? "bg-white text-red-700 shadow-sm"
                                            : "bg-black/10 text-white hover:bg-black/20"
                                    }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    }
                />
            </Container>
        </div>
    );
};

export default HomeVideo;

// Previous implementation retained for reference (inactive).
// import React from "react";
// import Container from "@/lib/components/common/container";
// import GradientHeader from "@/lib/components/common/section-headers/gradient";
// import VideoItem from "@/lib/components/common/news-elements/video-item";
// import { HomePageVideoSection } from "@/lib/types/home.page";
// import { VIDEO_PAGE } from "@/lib/config/constant";
//
// // Props
// interface Props {
//     data: HomePageVideoSection | undefined;
// }
//
// const HomeVideo = ({ data }: Props) => {
//     const contents = data?.contents.slice(0, 8); // First 8 clicked memories
//     return (
//         <div className="py-0 md:py-8">
//             <Container>
//                 <GradientHeader
//                     // title={data?.name || "ভিডিওঘর"}
//                     title={VIDEO_PAGE.name_bn}
//                     color="red"
//                     href={`/${VIDEO_PAGE.slug}`}
//                     showReadMoreBtn={true}
//                 />
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
//                     {contents && contents.length > 0 && contents.map((videoItem, idx) => (
//                         <div key={idx} className="h-full">
//                             <VideoItem
//                                 videoItem={videoItem}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     );
// };
//
// export default HomeVideo;
//
