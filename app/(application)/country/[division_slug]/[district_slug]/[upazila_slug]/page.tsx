import React from "react";
import { getContentsByUpazilaIdAction } from "@/app/actions/content";
import { getUpazilaBySlugAction, getUpazilasByDistrictIdAction } from "@/app/actions/upazila";
import UpazilaPage from "@/lib/features/country-category/upazila";
import { notFound } from "next/navigation";

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

    // Fetch upazila details with district,division
    const upazila = await getUpazilaBySlugAction(upazila_slug, 'district,division');

    if (!upazila) {
        notFound();
    }

    // Fetch upazilas and contents in parallel
    const [upazilas, contents] = await Promise.all([
        await getUpazilasByDistrictIdAction(upazila.district.id),
        getContentsByUpazilaIdAction(upazila.id, 1, 15) // Fetch contents for the upazila (Top section 5 contents, 10 items per page)
    ]);

    return <UpazilaPage upazila={upazila} upazilas={upazilas} contents={contents} />;
};

export default Page;
