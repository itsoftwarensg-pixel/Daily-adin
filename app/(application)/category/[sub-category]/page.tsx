import React from "react";
import SubCategoryIndex from "@/lib/features/sub-category";

// Generate dynamic metadata
export async function generateMetadata() {
    return {
        title: `Sub Category | The Daily Adin`,
        keywords: "daily-adin, adin, news, news-portal, content, article",
        description: "A modern, fast and SEO-friendly news portal",
    };
}

const RootHomePage = () => {
    return <SubCategoryIndex />;
};

export default RootHomePage;
