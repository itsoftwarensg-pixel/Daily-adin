"use server"

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Photo APIs
 * ============================================================================*/

/** 
 * Fetch all videos
 * 
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The videos data or an empty array in case of an error
 */
export const getAllPhotoAlbumAction = async (
    page: number,
    limit: number
) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.photo.getAllAlbums(page, limit),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching videos", err);
        return [];
    }
};

/** 
 * Fetch a photo details
 * 
 * @param id - The slug of the photo to fetch
 * @returns The photo data or an empty array in case of an error
 */
export const getPhotoDetailsByIdAction = async (id: number) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.photo.getAlbumById(id),
            method: "GET",
        });

        return apiResponse.data || null;

    } catch (err) {
        console.error("Error fetching photo", err);
        return null;
    }
};