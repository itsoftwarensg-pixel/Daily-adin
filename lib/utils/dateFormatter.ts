import { format } from "date-fns";

export const DATE_FORMAT_1 = "yyyy-MM-dd";

/**
 * Formats a Date object to DATE_FORMAT_1 string.
 * Returns null if the input is null or invalid.
 *
 * @param date - Date object or null
 * @returns string in DATE_FORMAT_1 format or null
 */
export const formatDate1 = (date: Date | null): string | null => {
  if (!date) return null;
  try {
    return format(date, DATE_FORMAT_1);
  } catch (error) {
    console.error("Invalid date provided to formatDateToYMD:", date);
    return null;
  }
};
