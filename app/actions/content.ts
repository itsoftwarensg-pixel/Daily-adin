"use server";

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Contents APIs
 * ============================================================================*/

/**
 * Fetch All Contents
 *
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The all contents data or an empty array in case of an error
 */
export const getAllContentsAction = async (
  page?: number,
  limit?: number
) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.content.getAll(page, limit),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching contents:", err);
    return [];
  }
};

/**
 * Fetch Content details by content id with included relations
 *
 * @param id - The id of the content to fetch
 * @returns The category data or an empty array in case of an error
 */
export const getContentByIdAction = async (id: number, include?: string) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.content.getById(id, include),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching content by content id:", err);
    return [];
  }
};

/**
 * Fetch Contents by category id with included relations
 *
 * @param id - The id of the category to fetch
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The category data or an empty array in case of an error
 */
export const getContentsByCategoryIdAction = async (
  id: number,
  page?: number,
  limit?: number
) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.content.getByCategoryId(id, page, limit),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching contents by category id:", err);
    return [];
  }
};

/**
 * Fetch Contents by sub-category id with included relations
 *
 * @param id - The id of the sub-category to fetch
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The category data or an empty array in case of an error
 */
export const getContentsBySubCategoryIdAction = async (
  id: number,
  page?: number,
  limit?: number
) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.content.getBySubCategoryId(id, page, limit),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching contents by sub-category id:", err);
    return [];
  }
};

/**
 * Fetch Contents by division id with included relations
 *
 * @param id - The id of the division to fetch
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The division data or an empty array in case of an error
 */
export const getContentsByDivisionIdAction = async (
  id: number,
  page?: number,
  limit?: number
) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.content.getByDivisionId(id, page, limit),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching contents by division id:", err);
    return [];
  }
};

/**
 * Fetch Contents by district id with included relations
 *
 * @param id - The id of the district to fetch
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The district data or an empty array in case of an error
 */
export const getContentsByDistrictIdAction = async (
  id: number,
  page?: number,
  limit?: number
) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.content.getByDistrictId(id, page, limit),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching contents by district id:", err);
    return [];
  }
};

/**
 * Fetch Contents by upazila id with included relations
 *
 * @param id - The id of the upazila to fetch
 * @param page - Optional page number for pagination
 * @param limit - Optional limit of items per page
 * @returns The upazila data or an empty array in case of an error
 */
export const getContentsByUpazilaIdAction = async (
  id: number,
  page?: number,
  limit?: number
) => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.content.getByUpazilaId(id, page, limit),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching contents by upazila id:", err);
    return [];
  }
};

/**
 * Fetch latest popular data
 *
 * @returns The content data or an empty array in case of an error
 */
export const getLastestPopularDataAction = async () => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.content.getLatestPopular(),
      method: "GET",
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching latest popular data:", err);
    return [];
  }
};
