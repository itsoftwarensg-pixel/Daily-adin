"use server";

import { apiRequest } from "@/lib/api/client";
import { APIEndpoint } from "@/lib/api/api-endpoints";

/**
 * Fetch archived contents based on optional search and filter parameters.
 *
 * This server action queries the archive endpoint and supports pagination,
 * date range filtering, and location/category-based filters.
 *
 * @param page - Page number for pagination
 * @param limit - Number of records per page
 * @param date_start - Start date for archive filtering (YYYY-MM-DD)
 * @param date_end - End date for archive filtering (YYYY-MM-DD)
 * @param category_id - Filter by category ID
 * @param division_id - Filter by division ID
 * @param district_id - Filter by district ID
 * @param upazila_id - Filter by upazila ID
 *
 * @returns A list of archived contents matching the provided filters
 */
export const getSearchArchiveAction = async (
  page?: number,
  limit?: number,
  date_start?: string,
  date_end?: string,
  category_id?: number,
  division_id?: number,
  district_id?: number,
  upazila_id?: number
) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.archive.getSearchArchive(
        page,
        limit,
        date_start,
        date_end,
        category_id,
        division_id,
        district_id,
        upazila_id
      ),
      method: "GET",
    });

    return apiResponse.data;
  } catch (error) {
    console.error("Failed to fetch archived contents:", error);

    return [];
  }
};
