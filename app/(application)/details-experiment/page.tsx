import React from "react";
import DetailsExperiment from "@/lib/features/details-experiment";

// Generate dynamic metadata
export async function generateMetadata() {
    return {
        title: `Details | The Daily Adin`,
        keywords: "daily-adin, adin, news, news-portal, content, article",
        description: "A modern, fast and SEO-friendly news portal",
    };
}

const RootDetailsExperimentPage = () => {
    return <DetailsExperiment />;
};

export default RootDetailsExperimentPage;
