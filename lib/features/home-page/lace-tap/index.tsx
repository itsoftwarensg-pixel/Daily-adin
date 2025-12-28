import React from "react";
import { newsJson } from "@/lib/data"; // Temporary
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import NewsItemLaceTape from "@/lib/components/common/news-elements/news-item-lace-tap";
import { HomePageContnetSection } from "@/lib/types/home.page";

// Props
interface Props {
    homeData: {
        'lifestyle': HomePageContnetSection,
    };
}

const HomeLaceTap = ({ homeData }: Props) => {
    const { 'lifestyle': lifestyleContents } = homeData;
    const leadMainContent = lifestyleContents?.contents[0];              // Main lead news
    const subLeadContents = lifestyleContents?.contents.slice(1, 5);     // 4 sub lead contents

    return (
        <div className="py-8 ">
            <Container>
                <GradientHeader
                    // title={entertainmentContents?.name || "লেইসফিতা"}
                    title="লেইসফিতা"
                    color="red"
                    href={lifestyleContents.url || "/"}
                    showReadMoreBtn={true}
                />

                <div className="grid grid-cols-12 gap-6">
                    {/* Lead */}
                    <div className="col-span-6 space-y-2">
                        {leadMainContent &&
                            <div className="h-full">
                                <NewsItemLaceTape
                                    newsItem={leadMainContent}
                                    titleSize="xlarge"
                                    bgColor="gray"
                                />
                            </div>
                        }
                    </div>

                    <div className="col-span-1 flex justify-center">
                        <div className="w-[3px] h-full bg-gray-5" />
                    </div>

                    {/* 4 Sub lead contents */}
                    <div className="col-span-5  space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {subLeadContents && subLeadContents.length > 0 && subLeadContents.map((newsItem, index) => (
                                <div key={index} className="h-auto">
                                    <NewsItemLaceTape
                                        newsItem={newsItem}
                                        titleSize="large"
                                        bgColor="gray"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeLaceTap;
