"use server";

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";
import { cache } from "react";

/** ============================================================================
 * Sub Category related APIs
 * ============================================================================*/

/**
 * Fetch a sub-category by sub-category slug with included relations
 *
 * @param slug - The slug of the sub-category to fetch
 * @param include - Optional comma-separated list of relations to include. e.g. 'contents,subcategories'
 * @returns The sub-category data or null in case of an error
 */
export const getSubCategoryBySlugAction = cache(
  async (slug: string, include?: string) => {
    try {
      const apiResponse = await apiRequest({
        url: APIEndpoint.subCategory.getBySlug(slug, include),
        method: "GET",
      });

      return apiResponse.data;
    } catch (err) {
      console.error("Error fetching category by slug:", err);
      return null;
    }
  }
);
