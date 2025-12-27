import React from "react";
import { getCategoryByIdAction } from "@/app/actions/category";
import { getContentByIdAction } from "@/app/actions/content";
import DetailsPage from "@/lib/features/details";

// Define the type for the params
interface Params {
    params: {
        id: number;
    }
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
    const { id } = await params;

    // Fetch content details by id for SEO metadata
    const content = await getContentByIdAction(id);

    return {
        title: content.meta_title || `${content.heading} | The Daily Adin`,
        keywords: content.meta_keywords || "daily-adin, adin, news, news-portal, content, article",
        description: content.meta_description || "A modern, fast and SEO-friendly news portal",
        openGraph: {
            images: content.full_image_path || '',
            title: content.meta_title || `${content.heading} | The Daily Adin`,
            description: content.meta_description || "A modern, fast and SEO-friendly news portal",
        }
    };
}

const Page = async ({ params }: Params) => {
    const { id } = await params;

    // Fetch content details by id
    const content = await getContentByIdAction(id);

    // Fetch category
    const category = await getCategoryByIdAction(content.category_id);

    return <DetailsPage contentDetails={content} category={category} />;
};

export default Page;
