import React from "react";
import CategoryPage from "@/lib/features/category";
import { getCategoryBySlugAction } from "@/app/actions/category";
import { getContentsByCategoryIdAction } from "@/app/actions/content";
import { Category } from "@/lib/types/category.page";

// Define the type for the params
interface Params {
    params: {
        category_slug: string;
    }
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Params) {
    const { category_slug } = await params;

    const category: Category = await getCategoryBySlugAction(category_slug);

    return {
        title: category.meta_title || `${category.name_bn} | The Daily Adin`,
        keywords: category.meta_keywords || "daily-adin, adin, news, news-portal, content, article",
        description: category.meta_description || "A modern, fast and SEO-friendly news portal",
        openGraph: {
            images: category.photo || '',
            title: category.meta_title || `${category.name_bn} | The Daily Adin`,
            description: category.meta_description || "A modern, fast and SEO-friendly news portal",
        }
    };
}



const RootHomePage = async ({ params }: Params) => {
    const { category_slug } = await params;

    // Fetch category details with position_contents and subcategories
    const category = await getCategoryBySlugAction(category_slug, 'subcategories,position_contents');
    // console.log('======== Category Data: ', category);

    // Fetch contents for the category (first page, 10 items per page)
    const contents = await getContentsByCategoryIdAction(category.id, 1, 10);

    return <CategoryPage category={category} contents={contents} />;
};

export default RootHomePage;
