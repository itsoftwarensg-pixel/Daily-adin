"use server";

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Utils APIs
 * ============================================================================*/

/**
 * Fetch Bangla date, month, year and day.
 * @returns English and Bangle date, month, year and day. e.g. সোমবার, ২৯ ডিসেম্বর ২০২৫, ১৫ পৌষ ১৪৩২
 */
export const getBnDateTimeAction = async () => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.utils.getBnDateTime(),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching Bangla date time:", err);
    return null;
  }
};
