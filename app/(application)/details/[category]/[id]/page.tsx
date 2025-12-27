import React from "react";
import DetailsIndex from "@/lib/features/details";

// Generate dynamic metadata
export async function generateMetadata() {
    return {
        title: `Details | The Daily Adin`,
        keywords: "daily-adin, adin, news, news-portal, content, article",
        description: "A modern, fast and SEO-friendly news portal",
    };
}

const RootHomePage = () => {
    return <DetailsIndex />;
};

export default RootHomePage;
