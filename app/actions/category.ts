"use server";

import { apiRequest } from "@/lib/api/client";
import { APIEndpoint } from "@/lib/api/api-endpoints";

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
      url: APIEndpoint.division.getAll(),
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
 * @returns The category data or an empty array in case of an error
 */
export const getCategoryByIdAction = async (id: number, include?: string) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.category.getById(id, include),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching category by id:", err);
    return [];
  }
};

/**
 * Fetch a category by category slug with included relations
 *
 * @param slug - The slug of the category to fetch
 * @param include - Optional comma-separated list of relations to include. e.g. 'position_contents,subcategories'
 * @returns The category data or an empty array in case of an error
 */
export const getCategoryBySlugAction = async (
  slug: string,
  include?: string
) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.category.getBySlug(slug, include),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching category by slug:", err);
    return [];
  }
};
