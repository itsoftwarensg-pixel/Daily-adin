export type NavItem = {
  text: string;
  href: string;
  isMegaMenu?: boolean;
  children?: NavItem[];
  isCat?: boolean;
};

export const navItems: NavItem[] = [
  {
    text: "জাতীয়",
    href: "/national",
    children: [
      { text: "রাজধানী", href: "/capital-city", isCat: true },
      { text: "এদিন দিশেষ", href: "/special-report", isCat: true },
    ]
  },
  {
    text: "রাজনীতি",
    href: "/politics"
  },
  {
    text: "দূরলোক",
    href: "/international"
  },
  {
    text: "প্রান্তলোক",
    href: `/country`,
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
      { text: "ব্যাংক", href: "bank" },
      { text: "শেয়ারবাজার", href: "stock-market" },
      { text: "কর্পোরেট", href: "corporate" },
    ]
  },
  {
    text: "স্বাস্থ্যলোক",
    href: "/health",
    children: [
      { text: "চিকিৎসা", href: "treatment" },
      { text: "পরামর্শ", href: "tips" },
      { text: "শিশু", href: "children" },
    ]
  },
  {
    text: "ক্রীড়ালোক",
    href: "/sports",
    children: [
      { text: "ক্রিকেট", href: "cricket" },
      { text: "ফুটবল", href: "football" },
      { text: "অন্যান্য", href: "others" }
    ]
  },
  {
    text: "চিত্রলোক",
    href: "/entertainment",
    children: [
      { text: "হলিউড", href: "hollywood" },
      { text: "বলিউড", href: "bollywood" },
      { text: "সিনেমা", href: "dhallywood" },
      { text: "দক্ষিণের সিনেমা", href: "south-indian-cinema" },
      { text: "টেলিভিশন", href: "television" },
      { text: "সিরিয়াল", href: "serial" },
    ]
  },
  {
    text: "সাহিত্যলোক",
    href: "/literature"
  },
  {
    text: "ফিচার",
    href: "/feature",
    children: [
      { text: "নারীলোক", href: "women" },
      { text: "ডানপিটে", href: "dreamer" },
      { text: "দ্বীনলোক", href: "religion" },
      { text: "ভাগ্যলোক", href: "horoscope" },
      { text: "অন্যলোক", href: "onnolok" },
      { text: "রম্যলোক", href: "fun" },
    ],
  },
  {
    text: "জীবনলোক",
    href: "/lifestyle",
    children: [
      { text: "লেইসফিতা", href: "leisfita" },
      { text: "পান্থলোক", href: "tourism" },
      { text: "রান্নাঘর", href: "recipe" },
      { text: "যত্নআত্তি", href: "take-care" },
      { text: "সামাজিক যোগাযোগ", href: "social-media" },
    ]
  },
  {
    text: "বিজ্ঞানলোক",
    href: "/science",
    children: [
      { text: "প্রযুক্তিলোক", href: "technology" },
      { text: "গ্যাজেট", href: "gazette" },
    ]
  },
  {
    text: "কর্মলোক",
    href: "/jobs",
  },
  {
    text: "অন্যান্য",
    href: "/",
    isMegaMenu: true,
    children: [
      { text: "শিক্ষাঙ্গন", href: "education" },
      { text: "ক্যাম্পাস", href: "campus" },
      { text: "গণমাধ্যম", href: "media" },
      { text: "দিবস", href: "festival" },
      { text: "প্রবাসলোক", href: "probash" },
      { text: "মতামত", href: "opinion" },
      { text: "সাক্ষাৎকার", href: "interview" },
      { text: "আবহাওয়া ও প্রকৃতি", href: "weather-environment" },
      { text: "কৃষি", href: "agriculture" },
      { text: "উদ্যোক্তা", href: "entrepreneur" },
      { text: "আইন-অপরাধ", href: "law-crime" },
      { text: "বাণীলোক", href: "speech" },
      { text: "ক্লিক স্মৃতি", href: "photos" },
      { text: "ভিডিও ঘর", href: "videos" },
      { text: "আর্কাইভস", href: "archive" },
    ],
  },
];