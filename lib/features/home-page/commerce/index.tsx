import React from "react";
import Container from "@/lib/components/common/container";
import HomeContentBox from "@/lib/components/home-content-box";
import { HomePageContnetSection } from "@/lib/types/home.page";

// Props
interface Props {
    homeData: {
        'business-news'?: HomePageContnetSection,
        'national-news'?: HomePageContnetSection,
        'lifestyle'?: HomePageContnetSection,
    };
}

const HomeCommercePantholokChoose = ({ homeData }: Props) => {
    const { 'business-news': businessContents, 'national-news': nationalContents, 'lifestyle': lifestyleContents } = homeData;
    const businessNewsContents = businessContents?.contents || [];
    const nationalNewsContents = nationalContents?.contents || [];
    const lifestyleNewsContents = lifestyleContents?.contents || [];

    return (
        <div className="py-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* বাণিজ্য লোক */}
                    <HomeContentBox
                        contents={businessNewsContents}
                        // sectionHeaderTitle={businessContents?.name || `বাণিজ্য লোক`}
                        sectionHeaderTitle={`বাণিজ্য লোক`}
                        sectionHeaderColor="emerald"
                        sectionUrl={businessContents?.url || `/`}
                        showSectionReadMoreBtn
                    />

                    {/* পান্থলোক */}
                    <HomeContentBox
                        contents={nationalNewsContents}
                        // sectionHeaderTitle={nationalContents?.name || `পান্থলোক`}
                        sectionHeaderTitle={`পান্থলোক`}
                        sectionHeaderColor="gray"
                        sectionUrl={nationalContents?.url || `/`}
                        showSectionReadMoreBtn
                    />

                    {/* বাছাইকৃত */}
                    <HomeContentBox
                        contents={lifestyleNewsContents}
                        // sectionHeaderTitle={lifestyleContents?.name || `বাছাইকৃত`}
                        sectionHeaderTitle={`বাছাইকৃত`}
                        sectionHeaderColor="indigo"
                        sectionUrl={lifestyleContents?.url || `/`}
                        showSectionReadMoreBtn
                    />
                </div>
            </Container>
        </div>
    );
};

export default HomeCommercePantholokChoose;
