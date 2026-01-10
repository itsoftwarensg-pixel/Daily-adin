"use server";

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * District APIs
 * ============================================================================*/

/**
 * Fetch a district by district slug with included relations
 *
 * @param slug - The slug of the district to fetch
 * @param include - Optional comma-separated list of relations to include. e.g. 'contents,upazilas,division'
 * @returns The district data or an empty array in case of an error
 */
export const getDistrictBySlugAction = async (
  slug: string,
  include?: string
) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.district.getBySlug(slug, include),
      method: "GET",
    });

    return apiResponse.data || null;
  } catch (err) {
    console.error("Error fetching district by slug:", err);
    return null;
  }
};

/**
 * Fetches all upazilas that belong to a specific district.
 *
 * @param districtId - The unique ID of the district for which districts will be retrieved
 * @returns A promise that resolves to an array of districts.
 *          Returns an empty array if the request fails.
 */
export const getUpazilasByDistrictIdAction = async (districtId: number) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.district.getUpazilasByDistrictId(districtId),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching upazilas by district id:", err);
    return [];
  }
};
