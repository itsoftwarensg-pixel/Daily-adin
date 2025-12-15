import React from "react";
import CategoryIndex from "@/lib/features/category";

// Generate dynamic metadata
export async function generateMetadata() {
    return {
        title: `Category | The Daily Adin`,
        keywords: "daily-adin, adin, news, news-portal, content, article",
        description: "A modern, fast and SEO-friendly news portal",
    };
}

const RootHomePage = () => {
    return <CategoryIndex />;
};

export default RootHomePage;
