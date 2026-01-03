import React from "react";
import Container from "@/lib/components/common/container";
import HomeContentBox from "@/lib/components/home-content-box";
import { HomePageContnetSection } from "@/lib/types/home.page";

// Props
interface Props {
    data: {
        leisfita: HomePageContnetSection | undefined;
        campus: HomePageContnetSection | undefined;
        tourism: HomePageContnetSection | undefined;
    }
}

const HomeLaiceFitaPantholokCampus = ({ data }: Props) => {
    const leisfitaNewsContents = data.leisfita?.contents || [];
    const campusNewsContents = data.campus?.contents || [];
    const tourismNewsContents = data.tourism?.contents || [];

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
                        sectionUrl={data.leisfita?.url || `/`}
                        showSectionReadMoreBtn
                        transparentReadMoreBtn={true}
                    />

                    {/* পান্থলোক */}
                    <HomeContentBox
                        contents={tourismNewsContents}
                        // sectionHeaderTitle={tourismContents?.name || `পান্থলোক`}
                        sectionHeaderTitle={`পান্থলোক`}
                        sectionHeaderColor="gray"
                        sectionUrl={data.tourism?.url || `/`}
                        showSectionReadMoreBtn
                        transparentReadMoreBtn={true}
                    />

                    {/* ক্যাম্পাস */}
                    <HomeContentBox
                        contents={campusNewsContents}
                        // sectionHeaderTitle={campusContents?.name || `ক্যাম্পাস`}
                        sectionHeaderTitle={`ক্যাম্পাস`}
                        sectionHeaderColor="indigo"
                        sectionUrl={data.campus?.url || `/`}
                        showSectionReadMoreBtn
                        transparentReadMoreBtn={true}
                    />
                </div>
            </Container>
        </div>
    );
};

export default HomeLaiceFitaPantholokCampus;
