import React from "react";
import SubCategoryPage from "@/lib/features/sub-category";
import { getCategoryByIdAction, getCategoryBySlugAction } from "@/app/actions/category";
import { getContentsBySubCategoryIdAction } from "@/app/actions/content";
import { getSubCategoryBySlugAction } from "@/app/actions/sub-category";

// Generate dynamic metadata
export async function generateMetadata() {
    return {
        title: `Sub Category | The Daily Adin`,
        keywords: "daily-adin, adin, news, news-portal, content, article",
        description: "A modern, fast and SEO-friendly news portal",
    };
}

// Define the type for the params
interface Params {
    params: {
        category_slug: string;
        sub_category_slug: string;
    }
}

const Page = async ({ params }: Params) => {
    const { category_slug, sub_category_slug } = await params;

    console.log('======== sub_category_slug: ', params);

    // Fetch category with subcategories
    const category = await getCategoryBySlugAction(category_slug, 'subcategories');

    // Fetch sub-category contents and category
    const subCategory = await getSubCategoryBySlugAction(sub_category_slug, 'contents');
    // console.log('======== subCategory Data: ', category);

    // Fetch contents for the sub-category (first page, 10 items per page)
    const contents = await getContentsBySubCategoryIdAction(subCategory.id, 1, 10);

    return (
        <SubCategoryPage
            subCategory={subCategory}
            category={category}
            contents={contents}
        />
    )
};

export default Page;
