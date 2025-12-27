import React from "react";
import { getContentsByDivisionIdAction } from "@/app/actions/content";
import { getDivisionBySlugAction } from "@/app/actions/division";
import DivisionPage from "@/lib/features/all-bd-news/division";

// Generate dynamic metadata
export async function generateMetadata() {
    return {
        title: `Division page | The Daily Adin`,
        keywords: "daily-adin, adin, news, news-portal, content, article",
        description: "A modern, fast and SEO-friendly news portal",
    };
}

// Define the type for the params
interface Params {
    params: {
        division_slug: string;
    }
}

const Page = async ({ params }: Params) => {
    const { division_slug } = await params;

    // Fetch division details with contents and districts
    const division = await getDivisionBySlugAction(division_slug, 'contents,districts');

    // Fetch contents for the division (first page, 10 items per page)
    const contents = await getContentsByDivisionIdAction(division.id, 1, 10);

    return <DivisionPage division={division} contents={contents} />;
};

export default Page;
