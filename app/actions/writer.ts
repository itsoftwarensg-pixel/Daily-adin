"use server"

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Writer APIs
 * ============================================================================*/

/** 
 * Fetch all writers
 * 
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The writer data or an empty array in case of an error
 */
export const getAllWritersAction = async (page: number, limit: number) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.writer.getAll(page, limit),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching all writer information", err);
        return [];
    }
};

/** 
 * Fetch writer by slug
 * 
 * @param slug - writer slug
 * @returns The writer data or an empty array in case of an error
 */
export const getWriterBySlugAction = async (slug: string) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.writer.getBySlug(slug),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching writer information", err);
        return [];
    }
};