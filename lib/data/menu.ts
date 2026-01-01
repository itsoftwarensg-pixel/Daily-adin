export interface MenuItem {
    id: number;
    name: string;
    name_bn: string | null;
    alias: string;
    photo: string | null;
    full_url: string;
    subcategories: {
        id: number;
        name: string;
        alias: string;
        photo: string | null;
        full_url: string;
        sorting: number;
    }[];
};

export const menuItems: MenuItem[] = [
    {
        "id": 1,
        "name": "জাতীয়",
        "name_bn": null,
        "alias": "national",
        "photo": null,
        "full_url": "https://dailyadin.com/national",
        "subcategories": []
    },

    {
        "id": 2,
        "name": "রাজনীতি",
        "name_bn": null,
        "alias": "political-news",
        "photo": null,
        "full_url": "https://dailyadin.com/political-news",
        "subcategories": []
    },

    {
        "id": 7,
        "name": "দূরলোক",
        "name_bn": null,
        "alias": "world-news",
        "photo": null,
        "full_url": "https://dailyadin.com/world-news",
        "subcategories": [
            {
                "id": 59,
                "name": "লাতিন আমেরিকা",
                "alias": "latin-america",
                "sorting": 1,
                "photo": "https://cdn.dailyadin.com/uploads/2024August/Pakistan-News-20250521105048.jpg",
                "full_url": "https://dailyadin.com/world-news/latin-america"
            },
            {
                "id": 53,
                "name": "ভারত",
                "alias": "india",
                "sorting": 2,
                "photo": null,
                "full_url": "https://dailyadin.com/world-news/india"
            },
            {
                "id": 54,
                "name": "পাকিস্তান",
                "alias": "pakistan",
                "sorting": 3,
                "photo": null,
                "full_url": "https://dailyadin.com/world-news/pakistan"
            },
            {
                "id": 55,
                "name": "চীন",
                "alias": "china",
                "sorting": 4,
                "photo": null,
                "full_url": "https://dailyadin.com/world-news/china"
            },
            {
                "id": 56,
                "name": "মধ্যপ্রাচ্য",
                "alias": "middle-east",
                "sorting": 5,
                "photo": null,
                "full_url": "https://dailyadin.com/world-news/middle-east"
            },
            {
                "id": 57,
                "name": "এশিয়া",
                "alias": "asia",
                "sorting": 7,
                "photo": null,
                "full_url": "https://dailyadin.com/world-news/asia"
            },
            {
                "id": 58,
                "name": "যুক্তরাষ্ট্র",
                "alias": "usa",
                "sorting": 8,
                "photo": null,
                "full_url": "https://dailyadin.com/world-news/usa"
            },
            {
                "id": 60,
                "name": "ইউরোপ",
                "alias": "europe",
                "sorting": 9,
                "photo": null,
                "full_url": "https://dailyadin.com/world-news/europe"
            },
            {
                "id": 61,
                "name": "আফ্রিকা",
                "alias": "africa",
                "sorting": 10,
                "photo": null,
                "full_url": "https://dailyadin.com/world-news/africa"
            },
            {
                "id": 62,
                "name": "অস্ট্রেলিয়া",
                "alias": "south-america",
                "sorting": 11,
                "photo": null,
                "full_url": "https://dailyadin.com/world-news/south-america"
            },
            {
                "id": 64,
                "name": "অন্যান্য",
                "alias": "others",
                "sorting": 13,
                "photo": null,
                "full_url": "https://dailyadin.com/world-news/others"
            }
        ]
    },

    {
        "id": 28,
        "name": "উদ্যোক্তা",
        "name_bn": null,
        "alias": "entrepreneur",
        "photo": null,
        "full_url": "https://dailyadin.com/entrepreneur",
        "subcategories": []
    },
    {
        "id": 20,
        "name": "প্রবাসলোক",
        "name_bn": null,
        "alias": "probash",
        "photo": null,
        "full_url": "https://dailyadin.com/probash",
        "subcategories": []
    },
    {
        "id": 21,
        "name": "আবাসন",
        "name_bn": null,
        "alias": "housing",
        "photo": null,
        "full_url": "https://dailyadin.com/housing",
        "subcategories": []
    },
    {
        "id": 22,
        "name": "ধর্ম",
        "name_bn": null,
        "alias": "religion-news",
        "photo": null,
        "full_url": "https://dailyadin.com/religion-news",
        "subcategories": []
    },
    {
        "id": 23,
        "name": "ক্যাম্পাস",
        "name_bn": null,
        "alias": "campus",
        "photo": null,
        "full_url": "https://dailyadin.com/campus",
        "subcategories": []
    },
    {
        "id": 24,
        "name": "ভ্রমণ",
        "name_bn": null,
        "alias": "traveling-news",
        "photo": null,
        "full_url": "https://dailyadin.com/traveling-news",
        "subcategories": []
    },
    {
        "id": 25,
        "name": "শুভ সংবাদ",
        "name_bn": null,
        "alias": "good-news",
        "photo": null,
        "full_url": "https://dailyadin.com/good-news",
        "subcategories": []
    },
    {
        "id": 26,
        "name": "আবহাওয়া",
        "name_bn": null,
        "alias": "weather-news",
        "photo": null,
        "full_url": "https://dailyadin.com/weather-news",
        "subcategories": []
    },
    {
        "id": 27,
        "name": "পরিবেশ ও কৃষি",
        "name_bn": null,
        "alias": "environment-agriculture-news",
        "photo": null,
        "full_url": "https://dailyadin.com/environment-agriculture-news",
        "subcategories": []
    },
    
    {
        "id": 29,
        "name": "গণমাধ্যম",
        "name_bn": null,
        "alias": "media",
        "photo": null,
        "full_url": "https://dailyadin.com/media",
        "subcategories": []
    },
    {
        "id": 30,
        "name": "শিল্পলোক",
        "name_bn": null,
        "alias": "arts-culture",
        "photo": null,
        "full_url": "https://dailyadin.com/arts-culture",
        "subcategories": []
    },
    {
        "id": 44,
        "name": "রাজধানী",
        "name_bn": null,
        "alias": "capital-city-news",
        "photo": null,
        "full_url": "https://dailyadin.com/capital-city-news",
        "subcategories": []
    },
    {
        "id": 45,
        "name": "সোশ্যাল মিডিয়া",
        "name_bn": null,
        "alias": "social-media-news",
        "photo": null,
        "full_url": "https://dailyadin.com/social-media-news",
        "subcategories": []
    },
    {
        "id": 46,
        "name": "এদিন বিশেষ",
        "name_bn": null,
        "alias": "special-report",
        "photo": null,
        "full_url": "https://dailyadin.com/special-report",
        "subcategories": []
    },
    {
        "id": 47,
        "name": "বাণীলোক",
        "name_bn": null,
        "alias": "speech",
        "photo": null,
        "full_url": "https://dailyadin.com/speech",
        "subcategories": []
    },
    {
        "id": 48,
        "name": "নির্বাচন",
        "name_bn": null,
        "alias": "election-news",
        "photo": null,
        "full_url": "https://dailyadin.com/election-news",
        "subcategories": []
    },
    {
        "id": 51,
        "name": "আজকের পত্রিকা",
        "name_bn": null,
        "alias": "ajkerpatrika",
        "photo": null,
        "full_url": "https://dailyadin.com/ajkerpatrika",
        "subcategories": []
    },
    {
        "id": 18,
        "name": "দিবস",
        "name_bn": null,
        "alias": "festival",
        "photo": null,
        "full_url": "https://dailyadin.com/festival",
        "subcategories": []
    },

    {
        "id": 3,
        "name": "বাণিজ্যলোক",
        "name_bn": null,
        "alias": "business-news",
        "photo": null,
        "full_url": "https://dailyadin.com/business-news",
        "subcategories": [
            {
                "id": 33,
                "name": "নতুন উদ্যোগ",
                "alias": "new-ventures",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/business-news/new-ventures"
            },
            {
                "id": 32,
                "name": "কর্পোরেট",
                "alias": "corporate",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/business-news/corporate"
            },
            {
                "id": 31,
                "name": "শেয়ারবাজার",
                "alias": "stock-market",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/business-news/stock-market"
            },
            {
                "id": 30,
                "name": "ব্যাংক",
                "alias": "bank",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/business-news/bank"
            },
            {
                "id": 34,
                "name": "বিশ্ববাণিজ্য",
                "alias": "global-trade",
                "sorting": 4,
                "photo": null,
                "full_url": "https://dailyadin.com/business-news/global-trade"
            }
        ]
    },
    {
        "id": 4,
        "name": "ক্রীড়ালোক",
        "name_bn": null,
        "alias": "sports-news",
        "photo": null,
        "full_url": "https://dailyadin.com/sports-news",
        "subcategories": [
            {
                "id": 2,
                "name": "ক্রিকেট",
                "alias": "cricket",
                "sorting": 1,
                "photo": "https://cdn.dailyadin.com/uploads/2024August/WhatsApp-Image-2025-04-27-at-210402140c2c55-20250502130120.jpg",
                "full_url": "https://dailyadin.com/sports-news/cricket"
            },
            {
                "id": 3,
                "name": "ফুটবল",
                "alias": "football",
                "sorting": 2,
                "photo": null,
                "full_url": "https://dailyadin.com/sports-news/football"
            },
            {
                "id": 5,
                "name": "অন্যান্য",
                "alias": "others",
                "sorting": 3,
                "photo": null,
                "full_url": "https://dailyadin.com/sports-news/others"
            }
        ]
    },
    {
        "id": 5,
        "name": "চিত্রলোক",
        "name_bn": null,
        "alias": "entertainment-news",
        "photo": null,
        "full_url": "https://dailyadin.com/entertainment-news",
        "subcategories": [
            {
                "id": 65,
                "name": "সিনেমা",
                "alias": "cinema",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/entertainment-news/cinema"
            },
            {
                "id": 70,
                "name": "টেলিভিশন",
                "alias": "television",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/entertainment-news/television"
            },
            {
                "id": 71,
                "name": "সিরিয়াল",
                "alias": "serial",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/entertainment-news/serial"
            },
            {
                "id": 72,
                "name": "মঞ্চ",
                "alias": "stage",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/entertainment-news/stage"
            },
            {
                "id": 73,
                "name": "লোক-সংস্কৃতি",
                "alias": "treatment",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/entertainment-news/treatment"
            },
            {
                "id": 66,
                "name": "বলিউড",
                "alias": "bollywood",
                "sorting": 2,
                "photo": null,
                "full_url": "https://dailyadin.com/entertainment-news/bollywood"
            },
            {
                "id": 67,
                "name": "দক্ষিণের সিনেমা",
                "alias": "south-indian-cinema",
                "sorting": 3,
                "photo": null,
                "full_url": "https://dailyadin.com/entertainment-news/south-indian-cinema"
            },
            {
                "id": 68,
                "name": "সংগীত",
                "alias": "music",
                "sorting": 4,
                "photo": null,
                "full_url": "https://dailyadin.com/entertainment-news/music"
            },
            {
                "id": 69,
                "name": "হলিউড",
                "alias": "hollywood",
                "sorting": 6,
                "photo": null,
                "full_url": "https://dailyadin.com/entertainment-news/hollywood"
            }
        ]
    },
    {
        "id": 6,
        "name": "ফিচার",
        "name_bn": null,
        "alias": "feature-news",
        "photo": null,
        "full_url": "https://dailyadin.com/feature-news",
        "subcategories": [
            {
                "id": 29,
                "name": "দেহঘড়ি",
                "alias": "prescription",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/feature-news/prescription"
            },
            {
                "id": 28,
                "name": "ভিন্যলোক",
                "alias": "vinnolok",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/feature-news/vinnolok"
            },
            {
                "id": 27,
                "name": "ভাগ্যলোক",
                "alias": "horoscope",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/feature-news/horoscope"
            },
            {
                "id": 26,
                "name": "দ্বীনলোক",
                "alias": "religion",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/feature-news/religion"
            },
            {
                "id": 25,
                "name": "ডানপিটে",
                "alias": "dreamer",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/feature-news/dreamer"
            },
            {
                "id": 24,
                "name": "নারীলোক",
                "alias": "women",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/feature-news/women"
            },
            {
                "id": 23,
                "name": "সাহিত্যলোক",
                "alias": "literature",
                "sorting": 1,
                "photo": null,
                "full_url": "https://dailyadin.com/feature-news/literature"
            }
        ]
    },
    
    {
        "id": 8,
        "name": "স্বাস্থ্যলোক",
        "name_bn": null,
        "alias": "health-news",
        "photo": null,
        "full_url": "https://dailyadin.com/health-news",
        "subcategories": [
            {
                "id": 40,
                "name": "চিকিৎসা",
                "alias": "treatment",
                "sorting": 8,
                "photo": null,
                "full_url": "https://dailyadin.com/health-news/treatment"
            },
            {
                "id": 41,
                "name": "পরামর্শ",
                "alias": "health-tips",
                "sorting": 9,
                "photo": null,
                "full_url": "https://dailyadin.com/health-news/health-tips"
            },
            {
                "id": 42,
                "name": "শিশু",
                "alias": "children",
                "sorting": 10,
                "photo": null,
                "full_url": "https://dailyadin.com/health-news/children"
            },
            {
                "id": 43,
                "name": "নারী",
                "alias": "women",
                "sorting": 11,
                "photo": null,
                "full_url": "https://dailyadin.com/health-news/women"
            },
            {
                "id": 44,
                "name": "পুরুষ",
                "alias": "men",
                "sorting": 12,
                "photo": null,
                "full_url": "https://dailyadin.com/health-news/men"
            }
        ]
    },
    {
        "id": 9,
        "name": "শিক্ষা",
        "name_bn": null,
        "alias": "educational-news",
        "photo": null,
        "full_url": "https://dailyadin.com/educational-news",
        "subcategories": []
    },
    {
        "id": 10,
        "name": "জীবনলোক",
        "name_bn": null,
        "alias": "lifestyle",
        "photo": null,
        "full_url": "https://dailyadin.com/lifestyle",
        "subcategories": [
            {
                "id": 36,
                "name": "পান্থলোক",
                "alias": "tourism",
                "sorting": 3,
                "photo": null,
                "full_url": "https://dailyadin.com/lifestyle/tourism"
            },
            {
                "id": 35,
                "name": "লেইসফিতা",
                "alias": "leisfita",
                "sorting": 5,
                "photo": null,
                "full_url": "https://dailyadin.com/lifestyle/leisfita"
            },
            {
                "id": 37,
                "name": "রান্নাঘর",
                "alias": "recipe",
                "sorting": 6,
                "photo": null,
                "full_url": "https://dailyadin.com/lifestyle/recipe"
            },
            {
                "id": 39,
                "name": "সামাজিক যোগাযোগ",
                "alias": "social-media",
                "sorting": 7,
                "photo": null,
                "full_url": "https://dailyadin.com/lifestyle/social-media"
            },
            {
                "id": 38,
                "name": "যত্নআত্তি",
                "alias": "take-care",
                "sorting": 19,
                "photo": null,
                "full_url": "https://dailyadin.com/lifestyle/take-care"
            }
        ]
    },
    {
        "id": 11,
        "name": "সাক্ষাৎকার",
        "name_bn": null,
        "alias": "interview",
        "photo": null,
        "full_url": "https://dailyadin.com/interview",
        "subcategories": []
    },
    {
        "id": 12,
        "name": "ব্যক্তিত্ব",
        "name_bn": null,
        "alias": "personality-news",
        "photo": null,
        "full_url": "https://dailyadin.com/personality-news",
        "subcategories": []
    },
    {
        "id": 13,
        "name": "বিজ্ঞানলোক",
        "name_bn": null,
        "alias": "science",
        "photo": null,
        "full_url": "https://dailyadin.com/science",
        "subcategories": []
    },
    {
        "id": 14,
        "name": "প্রান্তলোক",
        "name_bn": null,
        "alias": "country",
        "photo": null,
        "full_url": "https://dailyadin.com/country",
        "subcategories": []
    },
    {
        "id": 15,
        "name": "অপরাধ",
        "name_bn": null,
        "alias": "crime-news",
        "photo": null,
        "full_url": "https://dailyadin.com/crime-news",
        "subcategories": []
    },
    {
        "id": 16,
        "name": "আইন-অপরাধ",
        "name_bn": null,
        "alias": "law-crime",
        "photo": null,
        "full_url": "https://dailyadin.com/law-crime",
        "subcategories": []
    },
    {
        "id": 17,
        "name": "মতামত",
        "name_bn": null,
        "alias": "opinion",
        "photo": null,
        "full_url": "https://dailyadin.com/opinion",
        "subcategories": []
    },
    {
        "id": 19,
        "name": "কর্মলোক",
        "name_bn": null,
        "alias": "jobs",
        "photo": null,
        "full_url": "https://dailyadin.com/jobs",
        "subcategories": []
    },
    {
        "id": 52,
        "name": "New Category edit",
        "name_bn": null,
        "alias": "new-category edit",
        "photo": "https://cdn.dailyadin.com/uploads/breaking-news-bg-202509221044072381197495576635.jpg",
        "full_url": "https://dailyadin.com/new-category edit",
        "subcategories": []
    },
    {
        "id": 53,
        "name": "New category againds",
        "name_bn": null,
        "alias": "New category again",
        "photo": "https://cdn.dailyadin.com/uploads/September2025/breaking-news-bg-202509241825512947342919.jpg",
        "full_url": "https://dailyadin.com/New category again",
        "subcategories": []
    }
]