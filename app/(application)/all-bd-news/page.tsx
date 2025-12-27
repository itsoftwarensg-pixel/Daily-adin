import React from "react";
import { getCategoryBySlugAction } from "@/app/actions/category";
import { getContentsByCategoryIdAction } from "@/app/actions/content";
import AllBDNewsPage from "@/lib/features/all-bd-news";
import { getAllDivisionsAction } from "@/app/actions/division";
import { COUNTRY_PAGE } from "@/lib/config/constant";

// Generate dynamic metadata
export async function generateMetadata() {
    return {
        title: `Category | The Daily Adin`,
        keywords: "daily-adin, adin, news, news-portal, content, article",
        description: "A modern, fast and SEO-friendly news portal",
    };
}


const Page = async () => {
    const category_slug = COUNTRY_PAGE.slug;

    // Fetch category details with position_contents
    const category = await getCategoryBySlugAction(category_slug, 'position_contents');

    // Fetch all divisions
    const divisions = await getAllDivisionsAction();

    // Fetch contents for the category (first page, 10 items per page)
    const contents = await getContentsByCategoryIdAction(category.id, 1, 10);

    return <AllBDNewsPage category={category} contents={contents} divisions={divisions} />;
};

export default Page;
