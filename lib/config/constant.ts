export const NODE_ENV = process.env.NODE_ENV;
export const BASE_URL = process.env.BASE_URL;

// Country Page Constants
export const COUNTRY_PAGE = {
    slug: "all-bd-news",
    name: "All Bangladesh News",
    name_bn: "প্রান্তলোক", // প্রান্তলোক, সারাদেশ, দেশজুড়ে খবর
}

// Load More Types
export const LOAD_MORE_TYPES = {
    CATEGORY: "category",
    SUB_CATEGORY: "sub_category",
    DIVISION: "division",
    DISTRICT: "district",
    UPAZILA: "upazila",
    COUNTRY: COUNTRY_PAGE.slug,
};
