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
 * @returns The home page data.
 * @throws when the API is unavailable or returns an invalid response. This is
 * intentionally allowed to reach Next.js' error boundary instead of replacing
 * the home page with an empty news feed.
 */
export const getHomePageDataAction = async (include?: string) => {
  const apiResponse = await apiRequest({
    url: APIEndpoint.home.getData(include),
    method: "GET",
    revalidate: 30,
    tags: ["news:home"],
  });

  return apiResponse.data || null;
};
