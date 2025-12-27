"use server"

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Bids - Service Request APIs
 * ============================================================================*/


/** 
 * Fetch Contents by category id with included relations 
 * 
 * @param id - The id of the category to fetch
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The category data or an empty array in case of an error
 */
export const getContentsByCategoryIdAction = async (id: number, page?: number, limit?: number) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.content.getByCategoryId(id, page, limit),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching contents by category id:", err);
        return [];
    }
};

/** 
 * Fetch Contents by sub-category id with included relations 
 * 
 * @param id - The id of the sub-category to fetch
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The category data or an empty array in case of an error
 */
export const getContentsBySubCategoryIdAction = async (id: number, page?: number, limit?: number) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.content.getBySubCategoryId(id, page, limit),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching contents by sub-category id:", err);
        return [];
    }
};