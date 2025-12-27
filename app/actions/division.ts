"use server"

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Division APIs
 * ============================================================================*/


/** 
 * Fetch all divisions
 * 
 * @returns The divisions data or an empty array in case of an error
 */
export const getAllDivisionsAction = async () => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.division.getAll(),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching divisions:", err);
        return [];
    }
};

/** 
 * Fetch a division by division slug with included relations 
 * 
 * @param slug - The slug of the division to fetch
 * @param include - Optional comma-separated list of relations to include. e.g. 'contents,disctricts'
 * @returns The division data or an empty array in case of an error
 */
export const getDivisionBySlugAction = async (slug: string, include?: string) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.division.getBySlug(slug, include),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching division by slug:", err);
        return [];
    }
};