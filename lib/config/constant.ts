export const NODE_ENV = process.env.NODE_ENV;
export const BASE_URL = process.env.BASE_URL;

// Country Page Constants
export const COUNTRY_PAGE = {
    slug: "country",
    name: "All Bangladesh News",
    name_bn: "প্রান্তলোক", // প্রান্তলোক, সারাদেশ, দেশজুড়ে খবর
}

// Video Page Constants
export const VIDEO_PAGE = {
    slug: "videos",
    name: "Video",
    name_bn: "ভিডিও ঘর"
}

// Video Page Constants
export const PHOTO_PAGE = {
    slug: "photos",
    name: "Photo",
    name_bn: "ক্লিকস্মৃতি"
}

// Load More Types
export const LOAD_MORE_TYPES = {
    CATEGORY: "category",
    SUB_CATEGORY: "sub_category",
    DIVISION: "division",
    DISTRICT: "district",
    UPAZILA: "upazila",
    TOPIC: "topic",
    COUNTRY: COUNTRY_PAGE.slug,
};

// Home page dataset includes
export const HOME_PAGE_CHUNK_1 = `lead,scroll,trending_tag,special,recent,popular,national,politics,home_video,star_program,opinion`;
export const HOME_PAGE_CHUNK_2 = `sports,country,entertainment,lifestyle,international,business,photo,video,tourism,campus,leisfita`;
export const HOME_PAGE_INCLUDES = `${HOME_PAGE_CHUNK_1},${HOME_PAGE_CHUNK_2}`;

// Advertisements
export const ADVERTISE_TYPES = {
    HOME_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/January2026/adevertisement_300x300-202601051617362294445887.jpeg",
    CATEGORY_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/January2026/adevertisement_300x300-202601051617362294445887.jpeg",
    SUB_CATEGORY_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/January2026/adevertisement_300x300-202601051617362294445887.jpeg",
    COUNTRY_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/January2026/adevertisement_300x300-202601051617362294445887.jpeg",
    DIVISION_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/January2026/adevertisement_300x300-202601051617362294445887.jpeg",
    DISTRICT_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/January2026/adevertisement_300x300-202601051617362294445887.jpeg",
    UPAZILA_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/January2026/adevertisement_300x300-202601051617362294445887.jpeg",
    CONTENT_DETAILS_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/January2026/adevertisement_300x300-202601051617362294445887.jpeg",
    VIDEO_DETAILS_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/January2026/adevertisement_300x300-202601051617362294445887.jpeg",
    PHOTO_DETAILS_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/January2026/adevertisement_300x300-202601051617362294445887.jpeg",
}
