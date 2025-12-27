"use server"

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * District APIs
 * ============================================================================*/

/** 
 * Fetch a district by district slug with included relations 
 * 
 * @param slug - The slug of the district to fetch
 * @param include - Optional comma-separated list of relations to include. e.g. 'contents,upazilas,division'
 * @returns The district data or an empty array in case of an error
 */
export const getDistrictBySlugAction = async (slug: string, include?: string) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.disctrict.getBySlug(slug, include),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching district by slug:", err);
        return [];
    }
};