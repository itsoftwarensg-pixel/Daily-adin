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
 * Fetch Contents by division id with included relations 
 * 
 * @param id - The id of the division to fetch
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The division data or an empty array in case of an error
 */
export const getContentsByDivisionIdAction = async (id: number, page?: number, limit?: number) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.content.getByDivisionId(id, page, limit),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching contents by division id:", err);
        return [];
    }
};