"use server";

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";

/** ============================================================================
 * Election APIs
 * ============================================================================*/

/**
 * Fetch election data
 *
 * @returns The election data or an empty array in case of an error
 */
export const getElectionDataAction = async () => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.election.getData(),
      method: "GET",
    });

    return apiResponse || null;
  } catch (err) {
    console.error("Error fetching election data:", err);
    return null;
  }
};
