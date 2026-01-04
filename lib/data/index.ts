// This file is for temporary usage

import { COUNTRY_PAGE } from "@/lib/config/constant";

export enum NewsCategory {
  BINODON = "বিনোদন",
  SHIKSHA = "শিক্ষা",
  PORIBESH = "পরিবেশ",
  PORIBHON = "পরিবহন",
  PROJUKTI = "প্রযুক্তি",
  ORTHONITI = "অর্থনীতি",
  KHELADHULA = "খেলাধুলা",
  SHASTHO = "স্বাস্থ্য",
  PORJOTON = "পর্যটন",
}

export interface NewsItemType {
  id: number;
  title: string;
  brief: string;
  description: string;
  image: string;
  category: string;
}

export type NavItem = {
  text: string;
  href: string;
  isMegaMenu?: boolean;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  // { text: "সর্বশেষ", href: "#" },
  { text: "জাতীয়", href: "/national" },
  { text: "রাজনীতি", href: "/politics" },
  {
    text: "দূরলোক",
    href: "/international",
    // children: [
    //   { "text": "লাতিন আমেরিকা", "href": "latin-america" },
    //   { "text": "ভারত", "href": "india" },
    //   { "text": "পাকিস্তান", "href": "pakistan" },
    //   { "text": "চীন", "href": "china" },
    //   { "text": "মধ্যপ্রাচ্য", "href": "middle-east" },
    //   { "text": "এশিয়া", "href": "asia" },
    //   { "text": "যুক্তরাষ্ট্র", "href": "usa" },
    //   { "text": "ইউরোপ", "href": "europe" },
    //   { "text": "আফ্রিকা", "href": "africa" },
    //   { "text": "অস্ট্রেলিয়া", "href": "south-america" },
    //   { "text": "অন্যান্য", "href": "others" }
    // ],
  },
  {
    text: COUNTRY_PAGE.name_bn,
    href: `/${COUNTRY_PAGE.slug}`,
    children: [
      { text: "ঢাকা", href: `dhaka` },
      { text: "চট্টগ্রাম", href: `chattogram` },
      { text: "রাজশাহী", href: `rajshahi` },
      { text: "রংপুর", href: `rangpur` },
      { text: "ময়মনসিংহ", href: `mymensing` },
      { text: "সিলেট", href: `sylhet` },
      { text: "খুলনা", href: `khulna` },
      { text: "বরিশাল", href: `barishal` },
    ],
  },
  {
    text: "বাণিজ্যলোক",
    href: "/business",
    children: [
      { "text": "নতুন উদ্যোগ", "href": "new-ventures" },
      { "text": "কর্পোরেট", "href": "corporate" },
      { "text": "শেয়ারবাজার", "href": "stock-market" },
      { "text": "ব্যাংক", "href": "bank" },
      { "text": "বিশ্ববাণিজ্য", "href": "global-trade" }
    ]
    ,
  },
  {
    text: "ক্রীড়ালোক",
    href: "/sports",
    children: [
      { "text": "ক্রিকেট", "href": "cricket" },
      { "text": "ফুটবল", "href": "football" },
      { "text": "অন্যান্য", "href": "others" }
    ]
    ,
  },

  {
    text: "চিত্রলোক",
    href: "/entertainment",
    // children: [
    //   { "text": "সিনেমা", "href": "cinema" },
    //   { "text": "টেলিভিশন", "href": "television" },
    //   { "text": "সিরিয়াল", "href": "serial" },
    //   { "text": "মঞ্চ", "href": "stage" },
    //   { "text": "লোক-সংস্কৃতি", "href": "treatment" },
    //   { "text": "বলিউড", "href": "bollywood" },
    //   { "text": "দক্ষিণের সিনেমা", "href": "south-indian-cinema" },
    //   { "text": "সংগীত", "href": "music" },
    //   { "text": "হলিউড", "href": "hollywood" }
    // ]
  },
  { text: "বিজ্ঞানলোক", href: "/science" },
  {
    text: "জীবনলোক",
    href: "/lifestyle",
    children: [
      { "text": "লেইসফিতা", "href": "leisfita" },
      { "text": "পান্থলোক", "href": "tourism" },
      { "text": "রান্নাঘর", "href": "recipe" },
      { "text": "সামাজিক যোগাযোগ", "href": "social-media" },
      // { "text": "যত্নআত্তি", "href": "take-care" }
    ]
    ,
  },
  {
    text: "স্বাস্থ্যলোক",
    href: "/health",
    children: [
      { "text": "চিকিৎসা", "href": "treatment" },
      { "text": "পরামর্শ", "href": "health-tips" },
      { "text": "শিশু", "href": "children" },
      { "text": "নারী", "href": "women" },
      { "text": "পুরুষ", "href": "men" }
    ]
    ,
  },
  // feature
  {
    text: "ফিচার",
    href: "/feature",
    children: [
      { "text": "সাহিত্যলোক", "href": "literature" },
      { "text": "নারীলোক", "href": "women" },
      { "text": "ডানপিটে", "href": "dreamer" },
      { "text": "দ্বীনলোক", "href": "religion" },
      { "text": "ভাগ্যলোক", "href": "horoscope" },
      { "text": "অন্যলোক", "href": "onnolok" },
      { "text": "দেহঘড়ি", "href": "prescription" },
    ],
  },
  { text: "ক্যাম্পাস", href: "/campus" },
  {
    text: "কর্মলোক",
    href: "/jobs",
    // children: [
    //   { text: "সরকারি", href: "#government" },
    //   { text: "বেসরকারি", href: "#private" },
    //   { text: "ব্যাংক", href: "#bank-jobs" },
    //   { text: "এনজিও", href: "#ngo" },
    //   { text: "পরামর্শ", href: "#career-advice" },
    // ],
  },

  {
    text: "অন্যান্য",
    href: "/",
    isMegaMenu: true,
    children: [
      { "text": "শিল্পলোক", "href": "arts-culture" },
      { "text": "গণমাধ্যম", "href": "media" },
      { "text": "দিবস", "href": "festival" },
      { "text": "প্রবাসলোক", "href": "probash" },
      { "text": "মতামত", "href": "opinion" },
      { "text": "সাক্ষাৎকার", "href": "interview" },
      { "text": "এদিন বিশেষ", "href": "special-report" },
      { "text": "উদ্যোক্তা", "href": "entrepreneur" },
      { "text": "আইন-অপরাধ", "href": "law-crime" },
      { "text": "বাণীলোক", "href": "speech" },
      { "text": "ক্লিকস্মৃতি", "href": "photos" },
      { "text": "ভিডিও ঘর", "href": "videos" },
      { "text": "আর্কাইভস", "href": "archive" },
    ],
  },
];