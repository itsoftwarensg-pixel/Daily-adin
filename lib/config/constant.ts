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

// লেখক তালিকা
export const WRITER_PAGE = {
    slug: "author",
    name: "Writer",
    name_bn: "লেখক তালিকা"
}

// Load More Types
export const LOAD_MORE_TYPES = {
    CATEGORY: "category",
    SUB_CATEGORY: "sub_category",
    DIVISION: "division",
    DISTRICT: "district",
    UPAZILA: "upazila",
    TOPIC: "topic",
    WRITER: "writer",
    COUNTRY: COUNTRY_PAGE.slug,
};

// Home page dataset includes
export const HOME_PAGE_CHUNK_1 = `eid-collection,lead,scroll,trending_tag,special,recent,popular,national,politics,home_video,star_program,opinion`;
export const HOME_PAGE_CHUNK_2 = `sports,country,entertainment,lifestyle,international,business,photo,video,tourism,campus,leisfita`;
export const HOME_PAGE_INCLUDES = `${HOME_PAGE_CHUNK_1},${HOME_PAGE_CHUNK_2}`;

// 
export const CATEGORY_SLUG = {
    PERSONALITY: 'personality', // সবিশেষ
}

// Advertisements
export const ADVERTISE_TYPES = {
    HOME_TOP_RIGHT_UP: "https://cdn.dailyadin.com/uploads/February2026/adevertisement-housing-202602142011269842119803.jpeg",
    HOME_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/February2026/adevertisement-february-202602142011173667929847.jpeg",
    CATEGORY_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/February2026/adevertisement-february-202602142011173667929847.jpeg",
    SUB_CATEGORY_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/February2026/adevertisement-february-202602142011173667929847.jpeg",
    COUNTRY_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/February2026/adevertisement-february-202602142011173667929847.jpeg",
    DIVISION_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/February2026/adevertisement-february-202602142011173667929847.jpeg",
    DISTRICT_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/February2026/adevertisement-february-202602142011173667929847.jpeg",
    UPAZILA_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/February2026/adevertisement-february-202602142011173667929847.jpeg",
    CONTENT_DETAILS_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/February2026/adevertisement-february-202602142011173667929847.jpeg",
    VIDEO_DETAILS_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/February2026/adevertisement-february-202602142011173667929847.jpeg",
    PHOTO_DETAILS_TOP_RIGHT: "https://cdn.dailyadin.com/uploads/February2026/adevertisement-february-202602142011173667929847.jpeg",
}
