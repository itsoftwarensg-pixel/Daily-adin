"use server"

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Video APIs
 * ============================================================================*/

/** 
 * Fetch all videos
 * 
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The videos data or an empty array in case of an error
 */
export const getAllVideosAction = async (
    page: number,
    limit: number
) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.video.getAll(page, limit),
            method: "GET",
        });

        return apiResponse.data;

    } catch (err) {
        console.error("Error fetching videos", err);
        return [];
    }
};

/** 
 * Fetch a video details
 * 
 * @param id - The slug of the video to fetch
 * @returns The video data or an empty array in case of an error
 */
export const getVideoDetailsByIdAction = async (id: number) => {
    try {
        const apiResponse = await apiRequest({
            url: APIEndpoint.video.getById(id),
            method: "GET",
        });

        return apiResponse.data || null;

    } catch (err) {
        console.error("Error fetching video", err);
        return null;
    }
};