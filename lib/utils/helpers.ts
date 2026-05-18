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
 * Strip HTML tags and entities from a rich-text string and return plain text.
 * Suitable for generating meta descriptions from HTML content.
 */
export const stripHtmlToPlainText = (html: string, maxLength = 155): string => {
  if (!html || typeof html !== "string") return "";
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
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

/**
 * Builds a URL query string from an object of parameters.
 *
 * - Automatically excludes parameters that are `undefined` or empty strings
 * - Encodes both keys and values to ensure URL safety
 * - Returns an empty string if no valid query parameters exist
 *
 * @param params - An object containing query parameters as key-value pairs
 * @returns A formatted query string starting with `?`, or an empty string if no parameters are valid
 *
 */
export const buildQueryString = (
  params: Record<string, string | number | undefined>
) => {
  const query = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== "")
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&");

  return query ? `?${query}` : "";
};

// ============ Start: Date, Month, Year ===========
const bnMonths = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

// Convert en number into bangla number
const toBanglaNumber = (num: number) =>
  num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[+d]);

// Displays today's date in Bangla format (bn-BD locale)
// Example output: আজ ২৪ নভেম্বর ২০২৫
// Uses browser/JS Date API for dynamic rendering
export const TodayDate = () => {
  const d = new Date();

  const day = toBanglaNumber(d.getDate());
  const month = bnMonths[d.getMonth()];
  const year = toBanglaNumber(d.getFullYear());

  return ` ${day} ${month} ${year}`;
};

// Displays year. e.g. 2025
export const CurrentYear = () => {
  const y = new Date();
  return toBanglaNumber(y.getFullYear());
};
// ============ END: Date, Month, Year ===========

// ========================== Start Bangla Date Time Helper ===========================
// ======== Bangla Date Converter ========

// Bangla calendar months
const BN_MONTHS = [
  "বৈশাখ",
  "জ্যৈষ্ঠ",
  "আষাঢ়",
  "শ্রাবণ",
  "ভাদ্র",
  "আশ্বিন",
  "কার্তিক",
  "অগ্রহায়ণ",
  "পৌষ",
  "মাঘ",
  "ফাল্গুন",
  "চৈত্র",
];

// Standard month lengths (Falgun may change in leap year)
const BN_MONTH_DAYS = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29, 30];

// Convert number to Bangla digits (plain, no commas)
const toBnNumber = (num: number) =>
  num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[+d]);

// Check Gregorian leap year
const isLeapYear = (year: number) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Get Bangla calendar date
const getBanglaCalendarDate = (date: Date) => {
  // Fix timezone to Asia/Dhaka
  const dhakaOffset = 6 * 60; // +6 hours
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  const dhakaTime = new Date(utcTime + dhakaOffset * 60000);

  const enYear = dhakaTime.getFullYear();
  const enMonth = dhakaTime.getMonth(); // 0-11
  const enDay = dhakaTime.getDate();

  // Bangla year
  let bnYear = enYear - 593;
  if (enMonth < 3 || (enMonth === 3 && enDay < 14)) {
    bnYear--;
  }

  // Adjust Falgun for leap year
  const monthDays = [...BN_MONTH_DAYS];
  if (isLeapYear(enYear)) {
    monthDays[10] = 30; // Falgun = 30 days
  }

  // Bangla New Year starts 14 April
  const bnYearStart = new Date(
    Date.UTC(enMonth < 3 ? enYear - 1 : enYear, 3, 14)
  );

  // Compute days passed
  let diffDays = Math.round(
    (dhakaTime.getTime() - bnYearStart.getTime()) / 86400000
  );
  if (diffDays < 0) diffDays = 0; // safety for early hours

  // Find month and day
  let bnMonthIndex = 0;
  while (diffDays >= monthDays[bnMonthIndex]) {
    diffDays -= monthDays[bnMonthIndex];
    bnMonthIndex++;
  }

  const bnDay = diffDays + 1;

  return {
    day: toBnNumber(bnDay),
    month: BN_MONTHS[bnMonthIndex],
    year: toBnNumber(bnYear),
  };
};

// Format Gregorian date in Bangla
const formatGregorianBn = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  });
  return formatter.format(date);
};

// ===== Public API =====
export const convertToBanglaDate = (inputDate = new Date()) => {
  const date = new Date(inputDate);

  const gregorianBn = formatGregorianBn(date);
  const bangla = getBanglaCalendarDate(date);

  return `${gregorianBn}, ${bangla.day} ${bangla.month} ${bangla.year}`;
};

export const TodayBnDate = convertToBanglaDate();

// ========================== End Bangla Date Time Helper ===========================
