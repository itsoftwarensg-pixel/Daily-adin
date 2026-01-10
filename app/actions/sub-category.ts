"use server";

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";
import { cache } from "react";

/** ============================================================================
 * Sub Category related APIs
 * ============================================================================*/

/**
 * Fetch a sub-category by category slug and sub-category slug with included relations
 *
 * @param catSlug - The slug of the category to fetch
 * @param subCatSlug - The slug of the sub-category to fetch
 * @param include - Optional comma-separated list of relations to include. e.g. 'contents,subcategories'
 * @returns The sub-category data or null in case of an error
 */
export const getSubCategoryBySlugAction = cache(
  async (catSlug: string, subCatSlug: string, include?: string) => {
    try {
      const apiResponse = await apiRequest({
        url: APIEndpoint.subCategory.getBySlug(catSlug, subCatSlug, include),
        method: "GET",
      });

      return apiResponse.data || null;
    } catch (err) {
      console.error("Error fetching subcategory by slug:", err);
      return null;
    }
  }
);
