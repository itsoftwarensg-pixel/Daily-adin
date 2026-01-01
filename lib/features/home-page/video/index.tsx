import React from "react";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import VideoItem from "@/lib/components/common/news-elements/video-item";
import { HomePageVideoSection } from "@/lib/types/home.page";
import { VIDEO_PAGE } from "@/lib/config/constant";

// Props
interface Props {
    homeData: {
        'video': HomePageVideoSection,
    };
}

const HomeVideo = ({ homeData }: Props) => {
    const { 'video': videoContents } = homeData;
    const contents = videoContents?.contents.slice(0, 8); // First 8 clicked memories
    return (
        <div className="py-0 md:py-8">
            <Container>
                <GradientHeader
                    // title={videoContents?.name || "ভিডিও"}
                    title={VIDEO_PAGE.name_bn}
                    color="red"
                    href={`/${VIDEO_PAGE.slug}`}
                    showReadMoreBtn={true}
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                    {contents && contents.length > 0 && contents.map((videoItem, idx) => (
                        <div key={idx} className="h-full">
                            <VideoItem
                                videoItem={videoItem}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default HomeVideo;
