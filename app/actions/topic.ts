"use server"

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Topic APIs
 * ============================================================================*/

/** 
 * Fetch topic by slug
 * 
 * @param slug - topic slug
 * @returns The topic data or an empty array in case of an error
 */
export const getTopicBySlugAction = async (slug: string) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.topic.getBySlug(slug),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching topic information", err);
        return [];
    }
};