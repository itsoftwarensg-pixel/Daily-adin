"use server";

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Ramadan APIs
 * ============================================================================*/

/**
 * Fetch ramadan data
 *
 * @returns The ramadan data or an empty array in case of an error
 */
export const getRamadanDataAction = async () => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.ramadan.getData(),
      method: "GET",
    });

    return apiResponse || null;
  } catch (err) {
    console.error("Error fetching ramadan data:", err);
    return null;
  }
};
