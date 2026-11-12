"use server";

import { apiRequest } from "@/lib/api/client";
import { APIEndpoint } from "@/lib/api/api-endpoints";

import { cache } from "react";

/** ============================================================================
 * Category related APIs
 * ============================================================================*/

/**
 * Fetch all categories
 *
 * @returns The categories data or an empty array in case of an error
 */
export const getAllCategoriesAction = async () => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.category.getAll(),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
};

/**
 * Fetch a category by category id with included relations
 *
 * @param id - The id of the category to fetch
 * @param include - Optional comma-separated list of relations to include. e.g. 'position_contents,subcategories'
 * @returns The category data or null in case of an error
 */
export const getCategoryByIdAction = cache(
  async (id: number, include?: string) => {
    try {
      const apiResponse = await apiRequest({
        url: APIEndpoint.category.getById(id, include),
        method: "GET",
      });

      return apiResponse.data || null;
    } catch (err) {
      console.error("Error fetching category by id:", err);
      return null;
    }
  }
);

/**
 * Fetch a category by category slug with included relations
 *
 * @param slug - The slug of the category to fetch
 * @param include - Optional comma-separated list of relations to include. e.g. 'position_contents,subcategories'
 * @returns The category data or null in case of an error
 */
export const getCategoryBySlugAction = cache(
  async (slug: string, include?: string) => {
    try {
      const apiResponse = await apiRequest({
        url: APIEndpoint.category.getBySlug(slug, include),
        method: "GET",
        revalidate: 30,
      });

      return apiResponse.data || null;
    } catch (err) {
      console.error("Error fetching category by slug:", err);
      return null;
    }
  }
);
