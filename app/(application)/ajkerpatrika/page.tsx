import React from "react";
import { getCategoryBySlugAction } from "@/app/actions/category";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { AJKER_PATRIKA_PAGE } from "@/lib/config/constant";
import { getContentsByCategoryIdAction } from "@/app/actions/content";
import AjkerPatrikaCategory from "@/lib/features/ajkerpartika-category";

// Define the type for the params
interface Params {
    params: Promise<{
        category_slug: string;
    }>;
}

// Generate dynamic metadata
export async function generateMetadata() {
    const category_slug = AJKER_PATRIKA_PAGE.slug;

    const category = await getCategoryBySlugAction(category_slug);

    if (!category) {
        return { title: "Not Found | The Daily Adin" };
    }

    const title = category.meta_title || `${category.name} | The Daily Adin`;
    const description =
        category.meta_description || "A modern, fast and SEO-friendly news portal";

    return {
        title,
        keywords:
            category.meta_keywords ||
            "daily-adin, adin, news, news-portal, content, article",
        description,
        alternates: {
            canonical: `${SITE_CONFIG.url}/${category_slug}`,
        },
        openGraph: {
            images: category.photo || "",
            title,
            description,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: category.photo ? [category.photo] : [],
        },
    };
}

const CategorySlugPage = async () => {
    const category_slug = AJKER_PATRIKA_PAGE.slug;

    // Fetch category details with position_contents and subcategories
    const category = await getCategoryBySlugAction(category_slug);

    if (!category || (Array.isArray(category) && category.length === 0)) {
        notFound();
    }

    // Fetch contents for the category (first page, 10 items per page)
    const contents = await getContentsByCategoryIdAction(category.id, 1, 10);

    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", item: "/" },
                    { name: category.name, item: `/${category_slug}` },
                ]}
            />

            <AjkerPatrikaCategory category={category} contents={contents} />
        </>
    );
};

export default CategorySlugPage;
