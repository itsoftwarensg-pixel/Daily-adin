import React from "react";
import Container from "@/lib/components/common/container";
import ClickedMemoryItem from "@/lib/components/common/news-elements/clicked-memory-item";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import { HomePagePhotoAlbumSection } from "@/lib/types/home.page";

// Props
interface Props {
    homeData: {
        'photo': HomePagePhotoAlbumSection,
    };
}

const HomeClickedMemories = ({ homeData }: Props) => {
    const { 'photo': photoContents } = homeData;
    const photoAlbums = photoContents?.contents.slice(0, 6); // First 6 clicked memories

    return (
        <div className="py-8">
            <Container>
                <GradientHeader
                    // title={photoContents?.name || "ক্লিক স্মৃতি"}
                    title="ক্লিক স্মৃতি"
                    color="red"
                    href={photoContents.url || "/"}
                    showReadMoreBtn={true}
                />

                <div className="grid grid-cols-3 gap-6 mt-6">
                    {photoAlbums && photoAlbums.length > 0 && photoAlbums.map((newsItem, idx) => (
                        <div key={idx} className="h-auto">
                            <ClickedMemoryItem
                                newsItem={newsItem}
                                variant="memory"
                                bgColor="gray"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default HomeClickedMemories;
