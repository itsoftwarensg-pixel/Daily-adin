import React from "react";
import { getContentsByUpazilaIdAction } from "@/app/actions/content";
import { getUpazilaBySlugAction, getUpazilasByDistrictIdAction } from "@/app/actions/upazila";
import UpazilaPage from "@/lib/features/all-bd-news/upazila";

// Generate dynamic metadata
export async function generateMetadata() {
    return {
        title: `Upazila page | The Daily Adin`,
        keywords: "daily-adin, adin, news, news-portal, content, article",
        description: "A modern, fast and SEO-friendly news portal",
    };
}

// Define the type for the params
interface Params {
    params: {
        division_slug: string;
        district_slug: string;
        upazila_slug: string;
    }
}

const Page = async ({ params }: Params) => {
    const { division_slug, district_slug, upazila_slug } = await params;

    // Fetch upazila details with contents,district,division
    const upazila = await getUpazilaBySlugAction(upazila_slug, 'contents,district,division');

    // Fetch upazillas by district id
    const upazilas = await getUpazilasByDistrictIdAction(upazila.district.id);

    // Fetch contents for the upazila (first page, 10 items per page)
    const contents = await getContentsByUpazilaIdAction(upazila.id, 1, 10);

    return <UpazilaPage upazila={upazila} upazilas={upazilas} contents={contents} />;
};

export default Page;
