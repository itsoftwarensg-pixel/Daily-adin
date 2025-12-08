// This file is for temporary usage

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

interface NavItem {
  text: string;
  href?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    text: "সর্বশেষ",
    href: "#latest",
    children: [
      { text: "জাতীয়", href: "#national" },
      { text: "আন্তর্জাতিক", href: "#international" },
      { text: "প্রাদেশিক", href: "#regional" },
    ],
  },
  {
    text: "বাংলাদেশ",
    href: "#bd",
    children: [
      { text: "রাজধানী", href: "#capital" },
      { text: "পরিবেশ", href: "#environment" },
      { text: "ক্যাম্পাস", href: "#campus" },
    ],
  },
  {
    text: "রাজনীতি",
    href: "#politics",
    children: [
      { text: "জাতীয় সরকার", href: "#national-gov" },
      { text: "আঞ্চলিক রাজনীতি", href: "#regional-politics" },
      { text: "নির্বাচন", href: "#elections" },
    ],
  },
  {
    text: "বিশ্ব",
    href: "#internation",
    children: [
      { text: "আন্তর্জাতিক সম্পর্ক", href: "#international-relations" },
      { text: "সংঘাত ও যুদ্ধ", href: "#conflict" },
      { text: "অর্থনীতি", href: "#global-economy" },
    ],
  },
  {
    text: "বাণিজ্য",
    href: "#business",
    children: [
      { text: "শেয়ার বাজার", href: "#stock-market" },
      { text: "বাণিজ্যিক আইন", href: "#trade-law" },
      { text: "উদ্যোক্তা", href: "#entrepreneurs" },
    ],
  },
  {
    text: "খেলাধুলা",
    href: "#sports",
    children: [
      { text: "ফুটবল", href: "#football" },
      { text: "ক্রিকেট", href: "#cricket" },
      { text: "অলিম্পিক", href: "#olympics" },
    ],
  },
  {
    text: "চাকরি",
    href: "#jobs",
    children: [
      { text: "সরকারি চাকরি", href: "#gov-jobs" },
      { text: "বেসরকারি চাকরি", href: "#private-jobs" },
      { text: "ইন্টার্নশিপ", href: "#internships" },
    ],
  },
  {
    text: "জীবনযাপন",
    href: "#lifestyle",
    children: [
      { text: "স্বাস্থ্য ও ফিটনেস", href: "#health-fitness" },
      { text: "ভ্রমণ", href: "#travel" },
      { text: "খাদ্য ও রান্না", href: "#food" },
    ],
  },
  {
    text: "স্বাস্থ্য",
    href: "#health",
    children: [
      { text: "রোগ ও চিকিৎসা", href: "#diseases" },
      { text: "মানসিক স্বাস্থ্য", href: "#mental-health" },
      { text: "স্বাস্থ্য টিপস", href: "#health-tips" },
    ],
  },
];

// https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp
// https://via.placeholder.com/600x400?text=News
export const newsJson = [
  {
    id: 1,
    title: "রাজধানীতে নতুন মেট্রো লাইন চালু",
    brief: "রাজধানীতে আজ থেকে নতুন মেট্রো লাইন কার্যক্রম শুরু হয়েছে।",
    description:
      "রাজধানীর যাত্রীরা আজ থেকে নতুন মেট্রো লাইনে যাতায়াত করতে পারবেন। এটি শহরের ট্রাফিক সমস্যা কমাতে গুরুত্বপূর্ণ ভূমিকা রাখবে। মেট্রো প্রকল্পের উদ্বোধন অনুষ্ঠানে প্রধানমন্ত্রী উপস্থিত ছিলেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/88-20251207151913.webp",
    category: "রাজনীতি",
  },
  {
    id: 2,
    title: "দেশে নতুন শিক্ষানীতি প্রবর্তন",
    brief: "সরকার নতুন শিক্ষানীতি প্রবর্তনের ঘোষণা দিয়েছে।",
    description:
      "নতুন শিক্ষানীতির মাধ্যমে শিক্ষার্থীদের মানসম্মত শিক্ষা নিশ্চিত করা হবে। শিক্ষানীতি অনুযায়ী শিক্ষার্থীরা আধুনিক প্রযুক্তি ও দক্ষতা অর্জনে সক্ষম হবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/Indonesi-20251207102249.jpg",
    category: "শিক্ষা",
  },
  {
    id: 3,
    title: "চট্টগ্রামে বন্যার সতর্কবার্তা",
    brief:
      "চট্টগ্রাম ও পার্শ্ববর্তী এলাকায় বন্যার সতর্কবার্তা জারি করা হয়েছে।",
    description:
      "স্থানীয় প্রশাসন এবং সেনাবাহিনী উদ্ধার তৎপরতা বাড়িয়েছে। মানুষকে নিরাপদ স্থানে চলে যেতে বলা হয়েছে। বন্যার কারণে বিভিন্ন সড়ক ও ঘরবাড়ি ক্ষতিগ্রস্ত হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/4-20251207095615.jpg",
    category: "পরিবেশ",
  },
  {
    id: 4,
    title: "ঢাকায় আন্তর্জাতিক চলচ্চিত্র উৎসব শুরু",
    brief: "ঢাকায় আন্তর্জাতিক চলচ্চিত্র উৎসবের উদ্বোধন হয়েছে।",
    description:
      "উৎসবে বিভিন্ন দেশের চলচ্চিত্র প্রদর্শিত হবে। চলচ্চিত্রপ্রেমীরা এই উৎসব উপভোগ করতে পারবেন। প্রধান অতিথি হিসেবে উপস্থিত ছিলেন বিখ্যাত পরিচালক।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 5,
    title: "স্বাস্থ্য সচেতনতায় নতুন উদ্যোগ",
    brief: "দেশব্যাপী স্বাস্থ্য সচেতনতায় নতুন কর্মসূচি চালু হয়েছে।",
    description:
      "সচেতনতা বাড়াতে টেলিভিশন, রেডিও এবং সোশ্যাল মিডিয়ার মাধ্যমে স্বাস্থ্য সম্পর্কিত তথ্য প্রচার করা হচ্ছে। বিশেষজ্ঞরা নিয়মিত স্বাস্থ্য পরীক্ষা ও টিকা নেওয়ার পরামর্শ দিচ্ছেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/india-(1)-20251207090711.jpg",
    category: "স্বাস্থ্য",
  },
  {
    id: 6,
    title: "কৃষকদের জন্য বিশেষ সহায়তা ঘোষণা",
    brief: "কৃষকদের জন্য সরকারি নতুন সহায়তা প্যাকেজ ঘোষণা করা হয়েছে।",
    description:
      "কৃষি ঋণ, বীজ এবং সার সহায়তা দেওয়া হবে। সরকারের এই উদ্যোগ কৃষকদের উৎপাদন বাড়াতে সাহায্য করবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/rupali-20251206222502.webp",
    category: "অর্থনীতি",
  },
  {
    id: 7,
    title: "নতুন রেললাইন প্রকল্প অনুমোদন",
    brief: "সরকার নতুন রেললাইন প্রকল্প অনুমোদন করেছে।",
    description:
      "নতুন রেললাইন দেশের যাতায়াত সুবিধা বাড়াবে। প্রকল্পটির কাজ আগামী বছর শুরু হবে। এটি অর্থনীতির উন্নয়নে সহায়ক হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/Untitled-2-20251204044017.jpg",
    category: "পরিবহন",
  },
  {
    id: 8,
    title: "টেলিযোগাযোগ খাতে নতুন প্রযুক্তি",
    brief: "দেশের টেলিযোগাযোগ খাতে নতুন প্রযুক্তি চালু করা হয়েছে।",
    description:
      "নতুন প্রযুক্তির মাধ্যমে উচ্চগতির ইন্টারনেট ও উন্নত নেটওয়ার্ক সেবা প্রদান করা হবে। গ্রাহকরা দ্রুত ও সহজভাবে সংযোগ ব্যবহার করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/Rupali-20251204111730.png",
    category: "প্রযুক্তি",
  },
  {
    id: 9,
    title: "পরিবেশ সংরক্ষণে নতুন পরিকল্পনা",
    brief: "পরিবেশ সংরক্ষণে সরকার নতুন পরিকল্পনা গ্রহণ করেছে।",
    description:
      "বনাঞ্চল রক্ষা, নদী ও জলাশয় পরিষ্কার রাখা এবং বায়ু দূষণ কমাতে নানা পদক্ষেপ নেওয়া হবে। জনগণকেও সচেতন হতে উৎসাহিত করা হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/Mobile-20251206201633.jpg",
    category: "পরিবেশ",
  },
  {
    id: 10,
    title: "দেশে প্রযুক্তি মেলার আয়োজন",
    brief: "দেশে নতুন প্রযুক্তি মেলার আয়োজন করা হয়েছে।",
    description:
      "মেলায় নতুন প্রযুক্তি ও উদ্ভাবনী পণ্য প্রদর্শিত হবে। শিক্ষার্থী ও উদ্যোক্তাদের জন্য এটি শিক্ষণীয় ও সহায়ক হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/Mobile-20251206152907.jpg",
    category: "প্রযুক্তি",
  },
  {
    id: 11,
    title: "ঢাকায় আন্তর্জাতিক ক্রীড়া প্রতিযোগিতা",
    brief: "ঢাকায় আন্তর্জাতিক ক্রীড়া প্রতিযোগিতার আয়োজন করা হয়েছে।",
    description:
      "বিভিন্ন দেশের খেলোয়াড়রা অংশ নিচ্ছেন। প্রতিযোগিতা উত্তেজনাপূর্ণ এবং দর্শকদের জন্য আকর্ষণীয় হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/rajbari-20251207152331.webp",
    category: "খেলাধুলা",
  },
  {
    id: 12,
    title: "শিক্ষার্থীদের জন্য নতুন বৃত্তি প্রোগ্রাম",
    brief: "সরকার শিক্ষার্থীদের জন্য নতুন বৃত্তি প্রোগ্রাম চালু করেছে।",
    description:
      "উচ্চমানের শিক্ষা ও গবেষণার জন্য বৃত্তি প্রদান করা হবে। শিক্ষার্থীরা আবেদন করতে পারবে অনলাইনে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/Untitled-21-20251207151931.webp",
    category: "শিক্ষা",
  },
  {
    id: 13,
    title: "সড়ক নিরাপত্তা সপ্তাহ শুরু",
    brief: "দেশে সড়ক নিরাপত্তা সপ্তাহের আয়োজন করা হয়েছে।",
    description:
      "সড়ক দুর্ঘটনা কমাতে সচেতনতা বৃদ্ধি করা হবে। জনসাধারণকে নিরাপদ যাত্রার নিয়ম মেনে চলার আহ্বান জানানো হচ্ছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/L20-20251205202803.jpg",
    category: "পরিবহন",
  },
  {
    id: 14,
    title: "দেশে নতুন স্বাস্থ্যকেন্দ্র উদ্বোধন",
    brief: "নতুন স্বাস্থ্যকেন্দ্রের উদ্বোধন হয়েছে গ্রামে।",
    description:
      "স্থানীয় মানুষকে প্রাথমিক স্বাস্থ্যসেবা প্রদান করা হবে। হাসপাতাল ও ডাক্তারদের সেবা সহজলভ্য করা হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/00-20251207145456.webp",
    category: "স্বাস্থ্য",
  },
  {
    id: 15,
    title: "শিক্ষকদের জন্য প্রশিক্ষণ প্রোগ্রাম",
    brief: "শিক্ষকদের জন্য নতুন প্রশিক্ষণ কর্মসূচি চালু হয়েছে।",
    description:
      "শিক্ষকরা আধুনিক শিক্ষাদান পদ্ধতি ও প্রযুক্তি ব্যবহার শিখবেন। শিক্ষার্থীদের মান উন্নয়নের লক্ষ্যে এই প্রোগ্রাম কার্যকর হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/3-20251207135547.webp",
    category: "শিক্ষা",
  },
  {
    id: 16,
    title: "নতুন বাণিজ্যিক জোন উদ্বোধন",
    brief: "দেশে নতুন বাণিজ্যিক জোন উদ্বোধন করা হয়েছে।",
    description:
      "বাণিজ্যিক জোনটি রপ্তানি ও উৎপাদন বৃদ্ধি করবে। উদ্যোক্তাদের জন্য সুবিধাজনক পরিবেশ তৈরি হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/00-20251207133005.webp",
    category: "অর্থনীতি",
  },
  {
    id: 17,
    title: "পর্যটন কেন্দ্র নতুন আকর্ষণ",
    brief: "দেশের পর্যটন কেন্দ্রে নতুন আকর্ষণ যোগ করা হয়েছে।",
    description:
      "পর্যটকরা নতুন স্থাপনা ও আকর্ষণ উপভোগ করতে পারবেন। এটি দেশের পর্যটন খাতকে উৎসাহিত করবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/00-20251207132203.webp",
    category: "পর্যটন",
  },
  {
    id: 18,
    title: "নদী দূষণ কমাতে সরকার উদ্যোগী",
    brief: "নদী দূষণ কমাতে সরকার নতুন পদক্ষেপ নিয়েছে।",
    description:
      "কারখানা থেকে বিষাক্ত পদার্থ নিষ্কাশন নিয়ন্ত্রণ করা হবে। নদী পরিষ্কার রাখার জন্য জনগণকে সচেতন করা হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/Mo-Salah-20251207131403.jpg",
    category: "পরিবেশ",
  },
  {
    id: 19,
    title: "শহরে স্মার্ট ট্রাফিক লাইট চালু",
    brief: "শহরের গুরুত্বপূর্ণ সড়কে স্মার্ট ট্রাফিক লাইট চালু হয়েছে।",
    description:
      "নিয়ন্ত্রিত ট্রাফিক লাইটের মাধ্যমে যানজট কমানো হবে। ড্রাইভারদের জন্য আরও নিরাপদ যাত্রা নিশ্চিত করা হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/FIFA-20251207093050.webp",
    category: "পরিবহন",
  },
  {
    id: 20,
    title: "নতুন খেলাধুলার সুযোগ শিশুদের জন্য",
    brief: "শহরে নতুন খেলার মাঠ উদ্বোধন হয়েছে শিশুদের জন্য।",
    description:
      "শিশুরা নিরাপদ পরিবেশে খেলাধুলা করতে পারবে। স্বাস্থ্যকর এবং আনন্দময় কার্যক্রমের সুযোগ নিশ্চিত করা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/1-20251202143448.webp",
    category: "খেলাধুলা",
  },
  {
    id: 21,
    title: "রাজধানীতে আন্তর্জাতিক কনফারেন্স",
    brief: "রাজধানীতে আন্তর্জাতিক কনফারেন্স আয়োজন করা হয়েছে।",
    description:
      "বিভিন্ন দেশের প্রতিনিধি উপস্থিত ছিলেন। কনফারেন্সে অর্থনীতি ও প্রযুক্তি নিয়ে আলোচনা হয়।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "আন্তর্জাতিক",
  },
  {
    id: 22,
    title: "ঢাকায় নতুন আর্ট গ্যালারি উদ্বোধন",
    brief: "শহরে নতুন আর্ট গ্যালারি উদ্বোধন করা হয়েছে।",
    description:
      "গ্যালারিতে স্থানীয় ও আন্তর্জাতিক শিল্পীর চিত্রকর্ম প্রদর্শিত হচ্ছে। দর্শকরা নতুন শিল্পকর্ম উপভোগ করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 23,
    title: "কৃষকদের জন্য বীজ ও সার বিতরণ",
    brief: "কৃষকদের মাঝে নতুন বীজ ও সার বিতরণ শুরু হয়েছে।",
    description:
      "সরকারি উদ্যোগের মাধ্যমে কৃষকরা মানসম্মত বীজ ও সার পেয়েছেন। এটি ফসল উৎপাদন বাড়াতে সহায়ক হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "অর্থনীতি",
  },
  {
    id: 24,
    title: "শহরে নতুন ইলেকট্রিক বাস সার্ভিস",
    brief: "রাজধানীতে নতুন ইলেকট্রিক বাস সার্ভিস চালু হয়েছে।",
    description:
      "বাস সার্ভিস শহরের পরিবেশবান্ধব ও দ্রুত যাতায়াত নিশ্চিত করবে। কম্পিউটারাইজড টিকেটিং ব্যবস্থা সংযুক্ত করা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবহন",
  },
  {
    id: 25,
    title: "দেশে নতুন বিনোদন উৎসব শুরু",
    brief: "দেশব্যাপী নতুন বিনোদন উৎসব শুরু হয়েছে।",
    description:
      "উৎসবে বিভিন্ন সাংস্কৃতিক অনুষ্ঠান, গান, নাচ ও নাটক প্রদর্শিত হবে। জনগণ উপভোগ করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 26,
    title: "নতুন প্রযুক্তি উদ্ভাবনে শিক্ষার্থী প্রোগ্রাম",
    brief: "শিক্ষার্থীদের জন্য নতুন প্রযুক্তি উদ্ভাবন কর্মসূচি চালু হয়েছে।",
    description:
      "শিক্ষার্থীরা আধুনিক প্রযুক্তি নিয়ে কাজ করবে এবং উদ্ভাবনী প্রকল্প উপস্থাপন করবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "প্রযুক্তি",
  },
  {
    id: 27,
    title: "স্বাস্থ্য সচেতনতায় নতুন ক্যাম্পেইন",
    brief: "দেশে স্বাস্থ্য সচেতনতায় নতুন ক্যাম্পেইন শুরু হয়েছে।",
    description:
      "টেলিভিশন, রেডিও ও সোশ্যাল মিডিয়ার মাধ্যমে সাধারণ মানুষকে স্বাস্থ্য সম্পর্কে সচেতন করা হচ্ছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "স্বাস্থ্য",
  },
  {
    id: 28,
    title: "শহরে নতুন উদ্যান উদ্বোধন",
    brief: "শহরে নতুন উদ্যান উদ্বোধন করা হয়েছে।",
    description:
      "উদ্যানটি পরিবার ও শিশুদের জন্য আনন্দময় এবং স্বাস্থ্যকর পরিবেশ নিশ্চিত করবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবেশ",
  },
  {
    id: 29,
    title: "দেশে আন্তর্জাতিক ব্যবসায় সম্মেলন",
    brief: "দেশে আন্তর্জাতিক ব্যবসায় সম্মেলন আয়োজন করা হয়েছে।",
    description:
      "বিভিন্ন দেশের ব্যবসায়ী অংশগ্রহণ করেছেন। নতুন বিনিয়োগ ও বাণিজ্য সুযোগ নিয়ে আলোচনা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "অর্থনীতি",
  },
  {
    id: 30,
    title: "ক্রীড়া প্রতিযোগিতায় যুবাদের অংশগ্রহণ",
    brief: "দেশের যুবাদের অংশগ্রহণে নতুন ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হয়েছে।",
    description:
      "নানা ধরনের খেলার মাধ্যমে যুবাদের মধ্যে ক্রীড়া সচেতনতা ও প্রতিভা বৃদ্ধি করা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "খেলাধুলা",
  },
  {
    id: 31,
    title: "ঢাকায় আন্তর্জাতিক সাহিত্য মেলা",
    brief: "রাজধানীতে আন্তর্জাতিক সাহিত্য মেলার আয়োজন করা হয়েছে।",
    description:
      "বিভিন্ন দেশের লেখক ও পাঠক অংশগ্রহণ করেছেন। বই, উপন্যাস ও কবিতার প্রদর্শনী এবং পাঠ অনুষ্ঠান অনুষ্ঠিত হচ্ছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 32,
    title: "নতুন প্রযুক্তি উদ্ভাবনে শিক্ষার্থী প্রতিযোগিতা",
    brief: "দেশের শিক্ষার্থীদের জন্য নতুন প্রযুক্তি প্রতিযোগিতা আয়োজন।",
    description:
      "শিক্ষার্থীরা উদ্ভাবনী প্রকল্প উপস্থাপন করেছে। বিজয়ীদের পুরস্কার প্রদান করা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "প্রযুক্তি",
  },
  {
    id: 33,
    title: "দেশে নতুন পরিবেশ সচেতনতা সপ্তাহ",
    brief: "দেশজুড়ে পরিবেশ সচেতনতা সপ্তাহের আয়োজন।",
    description:
      "বন উজাড় রোধ, নদী পরিস্কার ও বায়ু দূষণ নিয়ন্ত্রণে বিভিন্ন কর্মসূচি নেওয়া হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবেশ",
  },
  {
    id: 34,
    title: "কৃষকদের জন্য নতুন ঋণ সুবিধা",
    brief: "কৃষকদের জন্য নতুন ঋণ সুবিধা চালু করা হয়েছে।",
    description:
      "সরকার কৃষকদের জন্য কম সুদের ঋণ প্রদান করবে। এটি ফসল উৎপাদন বাড়াতে সহায়ক হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "অর্থনীতি",
  },
  {
    id: 35,
    title: "শহরে নতুন ইভেন্ট হল উদ্বোধন",
    brief: "রাজধানীতে নতুন ইভেন্ট হল উদ্বোধন করা হয়েছে।",
    description:
      "উদ্বোধনী অনুষ্ঠানে স্থানীয় এবং আন্তর্জাতিক অতিথি অংশগ্রহণ করেছেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 36,
    title: "সড়ক নিরাপত্তা বাড়াতে নতুন পদক্ষেপ",
    brief: "দেশে সড়ক নিরাপত্তা বাড়াতে নতুন পদক্ষেপ গ্রহণ।",
    description:
      "নিয়ন্ত্রিত ট্রাফিক লাইট, নিরাপদ পথচারী জোন ও সচেতনতা কর্মসূচি শুরু হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবহন",
  },
  {
    id: 37,
    title: "শিক্ষার্থীদের জন্য নতুন অনলাইন কোর্স",
    brief: "দেশের শিক্ষার্থীদের জন্য নতুন অনলাইন কোর্স চালু হয়েছে।",
    description:
      "কোর্সগুলিতে বিভিন্ন বিষয় শিখতে পারবেন শিক্ষার্থীরা। এটি শিক্ষার মান উন্নত করবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "শিক্ষা",
  },
  {
    id: 38,
    title: "ক্রীড়া অঙ্গনে নতুন সুযোগ যুবাদের জন্য",
    brief: "নতুন ক্রীড়া সুবিধা যুবাদের জন্য চালু।",
    description:
      "শহরে নতুন স্টেডিয়াম ও প্রশিক্ষণ সুবিধা যুবাদের জন্য উন্মুক্ত।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "খেলাধুলা",
  },
  {
    id: 39,
    title: "নতুন স্বাস্থ্য সচেতনতায় সামাজিক ক্যাম্পেইন",
    brief: "দেশব্যাপী নতুন স্বাস্থ্য সচেতনতা ক্যাম্পেইন চালু।",
    description:
      "টেলিভিশন, সোশ্যাল মিডিয়া ও রেডিওর মাধ্যমে জনগণকে স্বাস্থ্য সম্পর্কে সচেতন করা হচ্ছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "স্বাস্থ্য",
  },
  {
    id: 40,
    title: "পর্যটন কেন্দ্রের নতুন আকর্ষণ",
    brief: "দেশের পর্যটন কেন্দ্রে নতুন আকর্ষণ যোগ।",
    description: "পর্যটকরা নতুন স্থাপনা, উদ্যান ও প্রদর্শনী উপভোগ করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পর্যটন",
  },
  {
    id: 41,
    title: "ঢাকায় আন্তর্জাতিক আর্ট প্রদর্শনী",
    brief: "রাজধানীতে আন্তর্জাতিক আর্ট প্রদর্শনীর আয়োজন।",
    description:
      "বিভিন্ন দেশের শিল্পীর চিত্রকর্ম প্রদর্শিত হচ্ছে। দর্শকরা শিল্পকর্ম উপভোগ করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 42,
    title: "শহরে স্মার্ট সাইকেল লেন চালু",
    brief: "শহরের গুরুত্বপূর্ণ এলাকায় স্মার্ট সাইকেল লেন চালু।",
    description:
      "সাইকেল ব্যবহারকারীরা নিরাপদভাবে চলাচল করতে পারবেন। পরিবেশবান্ধব উদ্যোগ।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবহন",
  },
  {
    id: 43,
    title: "কৃষকদের জন্য নতুন প্রযুক্তি প্রশিক্ষণ",
    brief: "কৃষকদের জন্য নতুন প্রযুক্তি প্রশিক্ষণ কর্মসূচি।",
    description:
      "কৃষকরা আধুনিক প্রযুক্তি ব্যবহার শিখবে, যা ফসল উৎপাদন বাড়াতে সাহায্য করবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "অর্থনীতি",
  },
  {
    id: 44,
    title: "শিক্ষক প্রশিক্ষণ কর্মসূচি শুরু",
    brief: "শিক্ষকদের জন্য নতুন প্রশিক্ষণ কার্যক্রম।",
    description:
      "শিক্ষকরা আধুনিক শিক্ষাদান পদ্ধতি ও প্রযুক্তি ব্যবহার শিখবেন। শিক্ষার্থীদের মান উন্নয়নের লক্ষ্য।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "শিক্ষা",
  },
  {
    id: 45,
    title: "শহরে নতুন উদ্যান উদ্বোধন",
    brief: "শহরে নতুন উদ্যান উদ্বোধন।",
    description:
      "উদ্যানটি শিশু ও পরিবারের জন্য নিরাপদ এবং আনন্দময় পরিবেশ নিশ্চিত করবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবেশ",
  },
  {
    id: 46,
    title: "নতুন আন্তর্জাতিক ব্যবসায় সম্মেলন",
    brief: "দেশে আন্তর্জাতিক ব্যবসায় সম্মেলন আয়োজন।",
    description:
      "বিভিন্ন দেশের ব্যবসায়ী অংশগ্রহণ করেছেন। নতুন বিনিয়োগ ও বাণিজ্য সুযোগ নিয়ে আলোচনা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "অর্থনীতি",
  },
  {
    id: 47,
    title: "ক্রীড়া প্রতিযোগিতায় স্কুল ও কলেজ ছাত্ররা অংশগ্রহণ",
    brief: "দেশের যুবাদের ক্রীড়া প্রতিযোগিতায় অংশগ্রহণ।",
    description:
      "নানা ধরনের খেলার মাধ্যমে প্রতিভা বৃদ্ধি এবং সুস্থ জীবনধারা প্রচার।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "খেলাধুলা",
  },
  {
    id: 48,
    title: "নতুন স্বাস্থ্য কেন্দ্র উদ্বোধন",
    brief: "শহরের নতুন স্বাস্থ্যকেন্দ্র উদ্বোধন।",
    description:
      "প্রাথমিক স্বাস্থ্যসেবা সহজলভ্য করা হয়েছে। স্থানীয় মানুষের জন্য গুরুত্বপূর্ণ উদ্যোগ।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "স্বাস্থ্য",
  },
  {
    id: 49,
    title: "পর্যটন উন্নয়নে নতুন প্রকল্প",
    brief: "দেশের পর্যটন উন্নয়নে নতুন প্রকল্প চালু।",
    description:
      "নতুন পর্যটন আকর্ষণ ও সুবিধা পর্যটকদের জন্য উন্মুক্ত করা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পর্যটন",
  },
  {
    id: 50,
    title: "শহরে নতুন সংস্কৃতি কেন্দ্র উদ্বোধন",
    brief: "শহরে নতুন সংস্কৃতি কেন্দ্র উদ্বোধন।",
    description:
      "সংস্কৃতি কেন্দ্রটি শিল্পকর্ম প্রদর্শনী, নাটক, সঙ্গীত ও নাচের জন্য ব্যবহার করা হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 51,
    title: "রাজধানীতে নতুন স্মার্ট পার্ক উদ্বোধন",
    brief: "শহরে নতুন স্মার্ট পার্কের উদ্বোধন করা হয়েছে।",
    description:
      "পার্কে আধুনিক ল্যান্ডস্কেপিং, ফিটনেস জোন ও শিশুদের খেলার মাঠ রয়েছে। এটি শহরের নাগরিকদের জন্য বিনোদনমূলক স্থান।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবেশ",
  },
  {
    id: 52,
    title: "শিক্ষার্থীদের জন্য অনলাইন প্রতিযোগিতা",
    brief: "দেশের শিক্ষার্থীদের জন্য নতুন অনলাইন প্রতিযোগিতা আয়োজন।",
    description:
      "শিক্ষার্থীরা বিভিন্ন বিষয় নিয়ে অংশগ্রহণ করছে। বিজয়ীদের জন্য পুরস্কার প্রদান করা হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "শিক্ষা",
  },
  {
    id: 53,
    title: "দেশে আন্তর্জাতিক চলচ্চিত্র মেলা শুরু",
    brief: "দেশে আন্তর্জাতিক চলচ্চিত্র মেলার উদ্বোধন হয়েছে।",
    description:
      "বিভিন্ন দেশের চলচ্চিত্র প্রদর্শিত হচ্ছে। দর্শকরা চলচ্চিত্র উৎসব উপভোগ করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 54,
    title: "নতুন প্রযুক্তি প্রদর্শনী রাজধানীতে",
    brief: "রাজধানীতে নতুন প্রযুক্তি প্রদর্শনী শুরু হয়েছে।",
    description:
      "উদ্যোক্তা এবং শিক্ষার্থীরা নতুন উদ্ভাবনী প্রযুক্তি উপস্থাপন করছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "প্রযুক্তি",
  },
  {
    id: 55,
    title: "শহরে নতুন বাইক লেন চালু",
    brief: "শহরে নতুন বাইক লেন চালু হয়েছে।",
    description:
      "সাইকেল ব্যবহারকারীদের জন্য নিরাপদ এবং স্বাচ্ছন্দ্যময় যাতায়াত নিশ্চিত করা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবহন",
  },
  {
    id: 56,
    title: "কৃষকদের জন্য নতুন বীজ বিতরণ",
    brief: "কৃষকদের মধ্যে নতুন বীজ বিতরণ শুরু।",
    description:
      "সরকারি উদ্যোগের মাধ্যমে মানসম্মত বীজ প্রদান করা হয়েছে, যা ফসল উৎপাদন বৃদ্ধি করবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "অর্থনীতি",
  },
  {
    id: 57,
    title: "শহরে নতুন ক্রীড়া স্টেডিয়াম উদ্বোধন",
    brief: "শহরের নতুন ক্রীড়া স্টেডিয়াম উদ্বোধন।",
    description:
      "নতুন স্টেডিয়ামে বিভিন্ন খেলাধুলা প্রতিযোগিতা এবং প্রশিক্ষণ কার্যক্রম অনুষ্ঠিত হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "খেলাধুলা",
  },
  {
    id: 58,
    title: "স্বাস্থ্য সচেতনতায় নতুন ক্যাম্পেইন",
    brief: "দেশে স্বাস্থ্য সচেতনতায় নতুন ক্যাম্পেইন চালু।",
    description:
      "টেলিভিশন, সোশ্যাল মিডিয়া ও রেডিওর মাধ্যমে জনগণকে স্বাস্থ্য সম্পর্কে সচেতন করা হচ্ছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "স্বাস্থ্য",
  },
  {
    id: 59,
    title: "নতুন আন্তর্জাতিক ব্যবসায় সম্মেলন শুরু",
    brief: "দেশে আন্তর্জাতিক ব্যবসায় সম্মেলন শুরু।",
    description:
      "বিভিন্ন দেশের ব্যবসায়ী অংশগ্রহণ করছেন। নতুন বিনিয়োগ ও বাণিজ্য সুযোগ নিয়ে আলোচনা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "অর্থনীতি",
  },
  {
    id: 60,
    title: "শহরে নতুন সংস্কৃতি অনুষ্ঠান",
    brief: "শহরে নতুন সংস্কৃতি অনুষ্ঠান আয়োজন।",
    description:
      "সংস্কৃতি কেন্দ্রে নাটক, সঙ্গীত ও নাচ প্রদর্শনী অনুষ্ঠিত হবে। দর্শকরা অংশগ্রহণ করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 61,
    title: "পর্যটন উন্নয়নে নতুন প্রকল্প চালু",
    brief: "দেশের পর্যটন উন্নয়নে নতুন প্রকল্প চালু।",
    description:
      "নতুন পর্যটন আকর্ষণ এবং সুবিধা পর্যটকদের জন্য উন্মুক্ত করা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পর্যটন",
  },
  {
    id: 62,
    title: "শহরে স্মার্ট ট্রাফিক লাইট ব্যবস্থা চালু",
    brief: "শহরের গুরুত্বপূর্ণ সড়কে স্মার্ট ট্রাফিক লাইট চালু।",
    description:
      "ট্রাফিক নিয়ন্ত্রণে নতুন প্রযুক্তি ব্যবহার করে যানজট কমানো হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবহন",
  },
  {
    id: 63,
    title: "শিক্ষার্থীদের জন্য নতুন বৃত্তি কর্মসূচি",
    brief: "শিক্ষার্থীদের জন্য নতুন বৃত্তি কর্মসূচি চালু।",
    description:
      "উচ্চমানের শিক্ষা নিশ্চিত করতে শিক্ষার্থীদের জন্য অনলাইন আবেদন শুরু হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "শিক্ষা",
  },
  {
    id: 64,
    title: "দেশে নতুন চলচ্চিত্র প্রদর্শনী",
    brief: "দেশে নতুন চলচ্চিত্র প্রদর্শনী অনুষ্ঠিত।",
    description:
      "বিভিন্ন দেশ ও স্থানীয় চলচ্চিত্র প্রদর্শিত হয়েছে। দর্শকরা উৎসব উপভোগ করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 65,
    title: "শহরে নতুন উদ্যান উদ্বোধন",
    brief: "শহরে নতুন উদ্যান উদ্বোধন করা হয়েছে।",
    description:
      "উদ্যানটি শিশু ও পরিবারের জন্য নিরাপদ এবং আনন্দময় পরিবেশ নিশ্চিত করবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবেশ",
  },
  {
    id: 66,
    title: "ক্রীড়া শিক্ষার জন্য নতুন প্রশিক্ষণ কেন্দ্র",
    brief: "শহরে ক্রীড়া শিক্ষার জন্য নতুন প্রশিক্ষণ কেন্দ্র উদ্বোধন।",
    description:
      "যুবাদের খেলাধুলায় অংশগ্রহণ এবং প্রতিভা বিকাশের সুযোগ বৃদ্ধি।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "খেলাধুলা",
  },
  {
    id: 67,
    title: "শহরে নতুন স্বাস্থ্যকেন্দ্র চালু",
    brief: "শহরে নতুন স্বাস্থ্যকেন্দ্র চালু করা হয়েছে।",
    description:
      "স্থানীয় জনগণকে প্রাথমিক স্বাস্থ্যসেবা প্রদান করা হবে। স্বাস্থ্য পরীক্ষা এবং জরুরি সেবা সহজলভ্য।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "স্বাস্থ্য",
  },
  {
    id: 68,
    title: "দেশে নতুন প্রযুক্তি মেলা শুরু",
    brief: "দেশে নতুন প্রযুক্তি মেলার আয়োজন।",
    description:
      "নতুন উদ্ভাবনী প্রযুক্তি প্রদর্শিত হচ্ছে এবং শিক্ষার্থীরা অংশগ্রহণ করছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "প্রযুক্তি",
  },
  {
    id: 69,
    title: "শহরে নতুন আন্তর্জাতিক সাহিত্য কর্মশালা",
    brief: "শহরে আন্তর্জাতিক সাহিত্য কর্মশালা অনুষ্ঠিত।",
    description:
      "লেখক এবং পাঠকরা বিভিন্ন সাহিত্য আলোচনা ও পাঠ অনুষ্ঠানে অংশগ্রহণ করেছেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 70,
    title: "পর্যটন কেন্দ্রের নতুন সংস্কার কাজ সম্পন্ন",
    brief: "দেশের পর্যটন কেন্দ্রে নতুন সংস্কার কাজ সম্পন্ন।",
    description:
      "নতুন সুযোগ সুবিধা এবং পরিষ্কার পরিবেশ পর্যটকদের জন্য তৈরি করা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পর্যটন",
  },
  {
    id: 71,
    title: "শহরে নতুন আর্ট ফেস্টিভ্যাল শুরু",
    brief: "শহরে আন্তর্জাতিক আর্ট ফেস্টিভ্যালের উদ্বোধন।",
    description:
      "বিভিন্ন দেশের শিল্পীরা অংশগ্রহণ করেছেন। দর্শকরা চিত্রকর্ম, ইনস্টলেশন এবং প্রদর্শনী উপভোগ করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 72,
    title: "কৃষকদের জন্য নতুন সার ও বীজ বিতরণ",
    brief: "কৃষকদের মাঝে নতুন সার ও বীজ বিতরণ শুরু হয়েছে।",
    description:
      "সরকারি উদ্যোগের মাধ্যমে কৃষকরা মানসম্মত সার ও বীজ পেয়েছেন, যা ফসল উৎপাদন বাড়াতে সহায়ক হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "অর্থনীতি",
  },
  {
    id: 73,
    title: "শহরে নতুন স্মার্ট পার্ক উদ্বোধন",
    brief: "নাগরিকদের জন্য নতুন স্মার্ট পার্ক উদ্বোধন।",
    description:
      "পার্কে ফিটনেস জোন, শিশুদের খেলার মাঠ এবং সবুজ এলাকা রয়েছে। শহরের বিনোদনমূলক স্থান হিসেবে এটি গুরুত্বপূর্ণ।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবেশ",
  },
  {
    id: 74,
    title: "শহরে নতুন ট্রাফিক নিয়ন্ত্রণ সিস্টেম",
    brief: "শহরের গুরুত্বপূর্ণ সড়কে নতুন ট্রাফিক নিয়ন্ত্রণ ব্যবস্থা চালু।",
    description:
      "স্মার্ট লাইট এবং রিয়েল-টাইম ট্রাফিক মনিটরিংয়ের মাধ্যমে যানজট কমানো হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবহন",
  },
  {
    id: 75,
    title: "শিক্ষার্থীদের জন্য নতুন অনলাইন কোর্স",
    brief: "শিক্ষার্থীদের জন্য নতুন অনলাইন কোর্স চালু।",
    description:
      "কোর্সে বিভিন্ন বিষয় শেখার সুযোগ রয়েছে। এটি শিক্ষার্থীদের দক্ষতা বৃদ্ধি করবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "শিক্ষা",
  },
  {
    id: 76,
    title: "নতুন আন্তর্জাতিক ক্রীড়া প্রতিযোগিতা শুরু",
    brief: "দেশে আন্তর্জাতিক ক্রীড়া প্রতিযোগিতা শুরু হয়েছে।",
    description:
      "বিভিন্ন দেশের খেলোয়াড়রা অংশগ্রহণ করছেন। প্রতিযোগিতা দর্শকদের জন্য আকর্ষণীয়।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "খেলাধুলা",
  },
  {
    id: 77,
    title: "নতুন স্বাস্থ্য সচেতনতা ক্যাম্পেইন চালু",
    brief: "দেশে স্বাস্থ্য সচেতনতা ক্যাম্পেইন শুরু।",
    description:
      "জনগণকে স্বাস্থ্য পরীক্ষা, টিকা ও স্বাস্থ্যকর অভ্যাস সম্পর্কে সচেতন করা হচ্ছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "স্বাস্থ্য",
  },
  {
    id: 78,
    title: "পর্যটন কেন্দ্রের নতুন সংস্কার কাজ সম্পন্ন",
    brief: "দেশের পর্যটন কেন্দ্রে নতুন সংস্কার কাজ সম্পন্ন হয়েছে।",
    description:
      "নতুন সুযোগ সুবিধা এবং পরিষ্কার পরিবেশ পর্যটকদের জন্য তৈরি করা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পর্যটন",
  },
  {
    id: 79,
    title: "শহরে নতুন সংস্কৃতি ও শিল্পকেন্দ্র উদ্বোধন",
    brief: "শহরে নতুন সংস্কৃতি ও শিল্পকেন্দ্র উদ্বোধন।",
    description:
      "কেন্দ্রে নাটক, সঙ্গীত ও নাচের প্রদর্শনী অনুষ্ঠিত হবে। দর্শকরা অংশগ্রহণ করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 80,
    title: "শহরে নতুন শিক্ষকের প্রশিক্ষণ কর্মসূচি",
    brief: "শিক্ষকদের জন্য নতুন প্রশিক্ষণ কর্মসূচি চালু।",
    description:
      "শিক্ষকরা আধুনিক শিক্ষাদান পদ্ধতি শিখবেন, যা শিক্ষার্থীদের মান উন্নয়নে সহায়ক হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "শিক্ষা",
  },
  {
    id: 81,
    title: "নতুন আন্তর্জাতিক ব্যবসায় সম্মেলন",
    brief: "দেশে আন্তর্জাতিক ব্যবসায় সম্মেলন আয়োজন।",
    description:
      "বিভিন্ন দেশের ব্যবসায়ীরা অংশগ্রহণ করছেন। নতুন বিনিয়োগ এবং বাণিজ্য সুযোগ নিয়ে আলোচনা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "অর্থনীতি",
  },
  {
    id: 82,
    title: "ক্রীড়া শিক্ষার জন্য নতুন প্রশিক্ষণ কেন্দ্র",
    brief: "শহরে ক্রীড়া শিক্ষার জন্য নতুন প্রশিক্ষণ কেন্দ্র উদ্বোধন।",
    description:
      "যুবাদের খেলাধুলায় অংশগ্রহণ এবং প্রতিভা বিকাশের সুযোগ বৃদ্ধি।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "খেলাধুলা",
  },
  {
    id: 83,
    title: "নতুন প্রযুক্তি মেলা রাজধানীতে",
    brief: "রাজধানীতে নতুন প্রযুক্তি মেলার আয়োজন।",
    description:
      "শিক্ষার্থী ও উদ্যোক্তারা নতুন উদ্ভাবনী প্রযুক্তি প্রদর্শন করছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "প্রযুক্তি",
  },
  {
    id: 84,
    title: "শহরে নতুন উদ্যান উদ্বোধন",
    brief: "শহরে নতুন উদ্যান উদ্বোধন।",
    description:
      "উদ্যানটি শিশু ও পরিবারের জন্য নিরাপদ এবং বিনোদনমূলক পরিবেশ তৈরি করবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবেশ",
  },
  {
    id: 85,
    title: "শহরে স্মার্ট সাইকেল লেন চালু",
    brief: "শহরে নতুন স্মার্ট সাইকেল লেন চালু হয়েছে।",
    description:
      "সাইকেল ব্যবহারকারীরা নিরাপদভাবে চলাচল করতে পারবেন। এটি পরিবেশবান্ধব উদ্যোগ।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবহন",
  },
  {
    id: 86,
    title: "শিক্ষার্থীদের জন্য নতুন অনলাইন কোর্স চালু",
    brief: "শিক্ষার্থীদের জন্য নতুন অনলাইন কোর্স চালু।",
    description: "কোর্সের মাধ্যমে শিক্ষার্থীরা নতুন দক্ষতা অর্জন করতে পারবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "শিক্ষা",
  },
  {
    id: 87,
    title: "শহরে আন্তর্জাতিক আর্ট প্রদর্শনী",
    brief: "শহরে আন্তর্জাতিক আর্ট প্রদর্শনীর আয়োজন।",
    description: "দর্শকরা বিভিন্ন দেশের শিল্পীর চিত্রকর্ম উপভোগ করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 88,
    title: "শহরে নতুন স্বাস্থ্যকেন্দ্র চালু",
    brief: "শহরে নতুন স্বাস্থ্যকেন্দ্র চালু।",
    description:
      "প্রাথমিক স্বাস্থ্যসেবা সহজলভ্য করা হয়েছে। স্থানীয় মানুষের জন্য গুরুত্বপূর্ণ উদ্যোগ।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "স্বাস্থ্য",
  },
  {
    id: 89,
    title: "নতুন আন্তর্জাতিক সাহিত্য কর্মশালা",
    brief: "শহরে আন্তর্জাতিক সাহিত্য কর্মশালা অনুষ্ঠিত।",
    description:
      "লেখক এবং পাঠকরা বিভিন্ন সাহিত্য আলোচনা ও পাঠ অনুষ্ঠানে অংশগ্রহণ করেছেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 90,
    title: "পর্যটন উন্নয়নে নতুন প্রকল্প চালু",
    brief: "দেশের পর্যটন উন্নয়নে নতুন প্রকল্প চালু।",
    description:
      "নতুন পর্যটন আকর্ষণ এবং সুবিধা পর্যটকদের জন্য উন্মুক্ত করা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পর্যটন",
  },
  {
    id: 91,
    title: "শহরে নতুন সংস্কৃতি উৎসব শুরু",
    brief: "শহরে নতুন সংস্কৃতি উৎসবের উদ্বোধন।",
    description:
      "উৎসবে নাটক, সঙ্গীত ও নৃত্য প্রদর্শনী অনুষ্ঠিত হচ্ছে। দর্শকরা বিনোদন উপভোগ করতে পারবেন।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 92,
    title: "শিক্ষার্থীদের জন্য নতুন বৃত্তি কর্মসূচি",
    brief: "শিক্ষার্থীদের জন্য নতুন বৃত্তি কর্মসূচি চালু।",
    description:
      "উচ্চমানের শিক্ষা নিশ্চিত করতে শিক্ষার্থীদের অনলাইন আবেদন গ্রহণ করা হচ্ছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "শিক্ষা",
  },
  {
    id: 93,
    title: "শহরে নতুন উদ্যান ও পার্কিং এলাকা",
    brief: "শহরে নতুন উদ্যান ও পার্কিং এলাকা তৈরি।",
    description:
      "উদ্যানটি পরিবার ও শিশুদের জন্য নিরাপদ বিনোদনমূলক স্থান। পার্কিং সুবিধা নাগরিকদের সুবিধার্থে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবেশ",
  },
  {
    id: 94,
    title: "শহরে নতুন স্মার্ট ট্রাফিক নিয়ন্ত্রণ ব্যবস্থা",
    brief: "শহরের গুরুত্বপূর্ণ সড়কে স্মার্ট ট্রাফিক নিয়ন্ত্রণ ব্যবস্থা চালু।",
    description:
      "স্মার্ট লাইট ও রিয়েল-টাইম মনিটরিংয়ের মাধ্যমে যানজট কমানো হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পরিবহন",
  },
  {
    id: 95,
    title: "নতুন আন্তর্জাতিক প্রযুক্তি সম্মেলন",
    brief: "দেশে আন্তর্জাতিক প্রযুক্তি সম্মেলন আয়োজন।",
    description:
      "নতুন উদ্ভাবনী প্রযুক্তি প্রদর্শন ও উদ্যোক্তাদের অংশগ্রহণ। শিক্ষার্থীরা সেখান থেকে শেখার সুযোগ পাচ্ছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "প্রযুক্তি",
  },
  {
    id: 96,
    title: "ক্রীড়া শিক্ষার জন্য নতুন প্রশিক্ষণ কেন্দ্র",
    brief: "শহরে ক্রীড়া শিক্ষার জন্য নতুন প্রশিক্ষণ কেন্দ্র উদ্বোধন।",
    description:
      "যুবাদের খেলাধুলায় অংশগ্রহণ এবং প্রতিভা বিকাশের সুযোগ বৃদ্ধি করা হবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "খেলাধুলা",
  },
  {
    id: 97,
    title: "নতুন স্বাস্থ্য সচেতনতা ক্যাম্পেইন শুরু",
    brief: "দেশে স্বাস্থ্য সচেতনতা ক্যাম্পেইন শুরু হয়েছে।",
    description:
      "জনগণকে স্বাস্থ্য পরীক্ষা, টিকা ও স্বাস্থ্যকর অভ্যাস সম্পর্কে সচেতন করা হচ্ছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "স্বাস্থ্য",
  },
  {
    id: 98,
    title: "পর্যটন কেন্দ্রের নতুন সুবিধা চালু",
    brief: "দেশের পর্যটন কেন্দ্রে নতুন সুযোগ সুবিধা চালু হয়েছে।",
    description:
      "পর্যটকদের জন্য নতুন দর্শনীয় স্থান, পরিষ্কার পরিবেশ এবং নিরাপত্তা ব্যবস্থা নিশ্চিত করা হয়েছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "পর্যটন",
  },
  {
    id: 99,
    title: "শহরে নতুন আন্তর্জাতিক সাহিত্য মেলা",
    brief: "শহরে আন্তর্জাতিক সাহিত্য মেলার আয়োজন।",
    description:
      "বিভিন্ন দেশের লেখক এবং পাঠক অংশগ্রহণ করছেন। বই ও সাহিত্যিক পাঠ অনুষ্ঠান অনুষ্ঠিত হচ্ছে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp",
    category: "বিনোদন",
  },
  {
    id: 100,
    title: "শিক্ষার্থীদের জন্য নতুন অনলাইন কোর্স",
    brief: "শিক্ষার্থীদের জন্য নতুন অনলাইন কোর্স চালু।",
    description:
      "কোর্সে শিক্ষার্থীরা নতুন দক্ষতা অর্জন করতে পারবে এবং ভবিষ্যতের ক্যারিয়ারের জন্য প্রস্তুতি নেবে।",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/SM/High-Court-20251207115549.webp1",
    category: "শিক্ষা",
  },
];
