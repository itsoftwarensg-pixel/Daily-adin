/**
 * Returns a versioned URL by inserting a version segment (e.g., "v1") into the URL path.
 * If the URL already contains a version (e.g., "/v1/"), it returns the original URL unchanged.
 *
 * @param url - The original URL string.
 * @param version - The version string to insert (default is "v1").
 * @returns The URL with the version segment inserted, or the original URL if a version already exists.
 *
 */
export const versionedUrl = (url: string, version = "v1"): string => {
  // Check if the URL already contains a version number
  const versionRegex = /\/v\d\//;
  const hasVersion = versionRegex.test(url);

  if (hasVersion) {
    return url;
  }

  // If no version found, prepend v1 to the URL
  const urlSegments = url.split("/");
  urlSegments.splice(3, 0, version);
  return urlSegments.join("/");
};

/**
 * Truncate a string to a specified maximum length and add ellipsis if needed.
 * @param {string} value - The string to truncate.
 * @param {number} maxLength - The maximum length allowed.
 * @returns {string} - The truncated string with ellipsis (if truncated).
 */
export const truncateString = (value: string, maxLength: number): string => {
  if (typeof value !== "string") {
    return ""; // Return an empty string if the value is not a string
  }
  return value.length > maxLength
    ? `${value.substring(0, maxLength)}...`
    : value;
};

/**
 * Convert an enum object to an array of options with human-readable labels.
 * Useful for rendering enums in dropdowns or radio groups.
 *
 * @param enumObj - An object representing the enum (typically from TypeScript `enum`)
 * @returns An array of objects with `label` and `value` keys
 */
export function enumToOptions(enumObj: Record<string, string>) {
  return Object.values(enumObj).map((value) => ({
    label: value
      .split("_") // split on underscores
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each word
      .join(" "), // join words with spaces
    value,
  }));
}

/**
 * Safely retrieve a query parameter from a searchParams object.
 * Trims whitespace and ensures the return value is always a string.
 * If the parameter is not a valid string, returns the provided fallback value (converted to string),
 * or an empty string if no fallback is specified.
 *
 * @param searchParams - An object representing URL query parameters.
 * @param key - The key to extract from searchParams.
 * @param fallback - Optional fallback value (string, number, or boolean) to return if the key is missing or invalid.
 * @returns The query value as a trimmed string, or the fallback value as a string.
 */

export const getQueryParam = (
  searchParams: { [key: string]: string | string[] | undefined },
  key: string,
  fallback: string | number | boolean = ""
): string => {
  const value = searchParams[key];
  if (typeof value === "string") {
    return value.trim();
  }

  return String(fallback);
};

/**
 * Returns an object with a random snippet of the text highlighted.
 * @param text - The full string to highlight a part of
 * @param maxWords - Maximum number of words to highlight (default: 3)
 * @returns An object { before, highlight, after } or null if text is too short
 */
export const getRandomHighlightedText = (text: string, maxWords = 3) => {
  // Split the text into individual words
  const words = text.split(" ");

  // If there are too few words, no highlight is possible
  if (words.length <= 2) return null;

  // Pick a random starting index for the snippet
  const startIdx = Math.floor(Math.random() * (words.length - 2));

  // Determine the length of the snippet (min of maxWords or remaining words)
  const snippetLength = Math.min(maxWords, words.length - startIdx);

  // Extract the snippet to highlight
  const highlight = words.slice(startIdx, startIdx + snippetLength).join(" ");

  // Get the text before the highlighted snippet
  const before = words.slice(0, startIdx).join(" ");

  // Get the text after the highlighted snippet
  const after = words.slice(startIdx + snippetLength).join(" ");

  // Return the structured object
  return { before, highlight, after };
};
