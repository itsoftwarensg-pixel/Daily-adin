"use server";

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Home Page APIs
 * ============================================================================*/

/**
 * Fetch home page data with included relations
 *
 * @param include - Optional comma-separated list of relations to include. e.g. `lead,scroll,trending_tag,special,recent,popular,national,politics`
 * @returns The home page data or an empty array in case of an error
 */
export const getHomePageDataAction = async (include?: string) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.home.getData(include),
      method: "GET",
    });

    return apiResponse.data || null;
  } catch (err) {
    console.error("Error fetching home page data:", err);
    return null;
  }
};
