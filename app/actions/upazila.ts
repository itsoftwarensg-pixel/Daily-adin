"use server"

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Upazila APIs
 * ============================================================================*/

/** 
 * Fetch Upazilas by district id with included relations 
 * 
 * @param districtId - The id of the district to fetch
 * @returns The upazila data or an empty array in case of an error
 */
export const getUpazilasByDistrictIdAction = async (districtId: number) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.upazila.getAll(districtId),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching upazilas by district id:", err);
        return [];
    }
};

/**
 * Fetch a upazila by district slug and upazila slug with included relations
 *
 * @param districtSlug - The slug of the district
 * @param upazilaSlug - The slug of the upazila to fetch
 * @param include - Optional comma-separated list of relations to include. e.g. 'district,division,contents'
 * @returns The upazila data or null in case of an error
 */
export const getUpazilaByDistrictAndUpazilaSlugAction = async (districtSlug: string, upazilaSlug: string, include?: string) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.upazila.getByDistrictSlugAndUpazilaSlug(districtSlug, upazilaSlug, include),
            method: "GET",
        });

        return apiResponse.data || null;

    } catch (err) {
        console.error("Error fetching upazila by district and upazila slug:", err);
        return null;
    }
};

/**
 * Fetch a upazila by upazila slug with included relations
 *
 * @param slug - The slug of the upazila to fetch
 * @param include - Optional comma-separated list of relations to include. e.g. 'district,division,contents'
 * @returns The upazila data or an empty array in case of an error
 */
export const getUpazilaBySlugAction = async (slug: string, include?: string) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.upazila.getBySlug(slug, include),
            method: "GET",
        });

        return apiResponse.data || null;

    } catch (err) {
        console.error("Error fetching upazila by slug:", err);
        return null;
    }
};