import React from "react";
import Container from "@/lib/components/common/container";
import ClickedMemoryItem from "@/lib/components/common/news-elements/clicked-memory-item";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import { HomePagePhotoAlbumSection } from "@/lib/types/home.page";

// Props
interface Props {
    data: HomePagePhotoAlbumSection | undefined;
}

const HomeClickedMemories = ({ data }: Props) => {
    const photoAlbums = data?.contents.slice(0, 6); // First 6 clicked memories

    return (
        <div className="py-8">
            <Container>
                <GradientHeader
                    // title={data?.name || "ক্লিকস্মৃতি"}
                    title="ক্লিকস্মৃতি"
                    color="red"
                    href={data?.url || "/"}
                    showReadMoreBtn={true}
                />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4">
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
