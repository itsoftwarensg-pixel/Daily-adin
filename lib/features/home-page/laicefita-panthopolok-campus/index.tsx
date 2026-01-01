import React from "react";
import Container from "@/lib/components/common/container";
import HomeContentBox from "@/lib/components/home-content-box";
import { HomePageContnetSection } from "@/lib/types/home.page";

// Props
interface Props {
    homeData: {
        'leisfita'?: HomePageContnetSection,
        'campus'?: HomePageContnetSection,
        'tourism'?: HomePageContnetSection,
    };
}

const HomeLaiceFitaPantholokCampus = ({ homeData }: Props) => {
    const { 'leisfita': leisfitaContents, 'campus': campusContents, 'tourism': tourismContents } = homeData;
    const leisfitaNewsContents = leisfitaContents?.contents || [];
    const campusNewsContents = campusContents?.contents || [];
    const tourismNewsContents = tourismContents?.contents || [];

    return (
        <div className="py-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* লেইসফিতা */}
                    <HomeContentBox
                        contents={leisfitaNewsContents}
                        // sectionHeaderTitle={leisfitaContents?.name || `লেইসফিতা`}
                        sectionHeaderTitle={`লেইসফিতা`}
                        sectionHeaderColor="emerald"
                        sectionUrl={leisfitaContents?.url || `/`}
                        showSectionReadMoreBtn
                        transparentReadMoreBtn={true}
                    />

                    {/* পান্থলোক */}
                    <HomeContentBox
                        contents={tourismNewsContents}
                        // sectionHeaderTitle={tourismContents?.name || `পান্থলোক`}
                        sectionHeaderTitle={`পান্থলোক`}
                        sectionHeaderColor="gray"
                        sectionUrl={tourismContents?.url || `/`}
                        showSectionReadMoreBtn
                        transparentReadMoreBtn={true}
                    />

                    {/* ক্যাম্পাস */}
                    <HomeContentBox
                        contents={campusNewsContents}
                        // sectionHeaderTitle={campusContents?.name || `ক্যাম্পাস`}
                        sectionHeaderTitle={`ক্যাম্পাস`}
                        sectionHeaderColor="indigo"
                        sectionUrl={campusContents?.url || `/`}
                        showSectionReadMoreBtn
                        transparentReadMoreBtn={true}
                    />
                </div>
            </Container>
        </div>
    );
};

export default HomeLaiceFitaPantholokCampus;
