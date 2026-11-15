"use server";

import { APIEndpoint } from "@/lib/api/api-endpoints";
import { apiRequest } from "@/lib/api/client";
import { convertToBanglaDate } from "@/lib/utils/helpers";

function localHeaderDate() {
  const now = new Date();
  const weekday = new Intl.DateTimeFormat("bn-BD", { weekday: "long", timeZone: "Asia/Dhaka" }).format(now);
  return `${weekday}, ${convertToBanglaDate(now)}`;
}

/** ============================================================================
 * Utils APIs
 * ============================================================================*/

/**
 * Fetch Bangla date, month, year and day.
 * @returns English and Bangle date, month, year and day. e.g. সোমবার, ২৯ ডিসেম্বর ২০২৫, ১৫ পৌষ ১৪৩২
 */
export const getBnDateTimeAction = async () => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.utils.getBnDateTime(),
      method: "GET",
      revalidate: 30,
    });

    // Previous: return apiResponse.data;
    // A Bangla calendar month never has day zero. Correct malformed API dates
    // without changing the endpoint or the backend publishing workflow.
    const value = apiResponse.data;
    if (typeof value !== "string" || /(?:^|,)\s*[০0]\s+\S+\s+[০-৯0-9]+\s*$/.test(value)) {
      return localHeaderDate();
    }
    return value;
  } catch (err) {
    console.error("Error fetching Bangla date time:", err);
    // Previous: return null;
    return localHeaderDate();
  }
};

/**
 * Fetch Navbar Menu items.
 * @returns array
 */
export const getMenuAction = async () => {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.utils.getMenu(),
      method: "GET",
      revalidate: 300,
    });

    return apiResponse.data;
  } catch (err) {
    console.error("Error fetching menus:", err);
    return null;
  }
};
