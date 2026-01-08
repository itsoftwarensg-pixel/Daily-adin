import React from "react";
import { getContentsByTopicIdAction } from "@/app/actions/content";
import { getTopicBySlugAction } from "@/app/actions/topic";
import TopicPage from "@/lib/features/topic";
import { notFound } from "next/navigation";

// Define the type for the params
interface Params {
    params: {
        slug: string;
    };
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
    const { slug } = await params;

    // Fetch topic information for SEO metadata
    const response = await getTopicBySlugAction(slug);

    return {
        title: `${response.meta_title || response.name} | The Daily Adin`,
        keywords: response.meta_keywords || "daily-adin, adin, news, news-portal, content, article",
        description: response.meta_description || "A modern, fast and SEO-friendly news portal",
        openGraph: {
            images: response.photo ? response.photo : "",
            title: `${response.meta_title} | The Daily Adin`,
            description: response.meta_description || "A modern, fast and SEO-friendly news portal",
        },
    };
}

const Page = async ({ params }: Params) => {
    const { slug } = await params;

    // Fetch topic by slug
    const topic = await getTopicBySlugAction(slug);

    if (!topic) {
        notFound();
    }

    // Fetch contents by topic id
    const data = await getContentsByTopicIdAction(topic.id, 1, 10);

    return (
        <TopicPage
            topic={topic}
            data={{
                last_page: data.last_page,
                data: data.data,
            }}
        />
    )
};

export default Page;
