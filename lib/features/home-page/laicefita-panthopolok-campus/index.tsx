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

const HomeLaiceFitaPantholokCampus = ({ homeData }: Props) => {
    const { 'business-news': businessContents, 'national-news': nationalContents, 'lifestyle': lifestyleContents } = homeData;
    const businessNewsContents = businessContents?.contents || [];
    const nationalNewsContents = nationalContents?.contents || [];
    const lifestyleNewsContents = lifestyleContents?.contents || [];

    return (
        <div className="py-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* লেইসফিতা */}
                    <HomeContentBox
                        contents={businessNewsContents}
                        // sectionHeaderTitle={businessContents?.name || `লেইসফিতা`}
                        sectionHeaderTitle={`লেইসফিতা`}
                        sectionHeaderColor="emerald"
                        sectionUrl={businessContents?.url || `/`}
                        showSectionReadMoreBtn
                        transparentReadMoreBtn={true}
                    />

                    {/* পান্থলোক */}
                    <HomeContentBox
                        contents={nationalNewsContents}
                        // sectionHeaderTitle={nationalContents?.name || `পান্থলোক`}
                        sectionHeaderTitle={`পান্থলোক`}
                        sectionHeaderColor="gray"
                        sectionUrl={nationalContents?.url || `/`}
                        showSectionReadMoreBtn
                        transparentReadMoreBtn={true}
                    />

                    {/* ক্যাম্পাস */}
                    <HomeContentBox
                        contents={lifestyleNewsContents}
                        // sectionHeaderTitle={lifestyleContents?.name || `ক্যাম্পাস`}
                        sectionHeaderTitle={`ক্যাম্পাস`}
                        sectionHeaderColor="indigo"
                        sectionUrl={lifestyleContents?.url || `/`}
                        showSectionReadMoreBtn
                        transparentReadMoreBtn={true}
                    />
                </div>
            </Container>
        </div>
    );
};

export default HomeLaiceFitaPantholokCampus;
