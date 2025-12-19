import Container from "@/lib/components/common/container";
import NewsBlock from "@/lib/features/details/news-block";
import DetailsRightSidebar from "@/lib/features/details/right-sidebar";

const newsList = [
  {
    id: 1,
    category: "রাজনীতি",
    title:
      "বিদেশি বিনিয়োগ আনতে ধারাবাহিক সংস্কার হাতে নেওয়া হয়েছে : প্রধান উপদেষ্টা",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/Opodesta-20251217210338.jpg",
    caption:
      "প্রধান উপদেষ্টা প্রফেসর মুহাম্মদ ইউনূসের সঙ্গে বিদায়ী সাক্ষাৎ করেন কোরিয়ার রাষ্ট্রদূত পার্ক ইয়ং-সিক।",
    subTitle:
      "প্রধান উপদেষ্টা প্রফেসর মুহাম্মদ ইউনূস বলেছেন, দেশে প্রত্যক্ষ বিদেশি বিনিয়োগ আকৃষ্ট করতে বাংলাদেশ ধারাবাহিক সংস্কার হাতে নিয়েছে।",
    content: `<p>বুধবার (১৭ ডিসেম্বর)...</p>`,
    tags: [
      "নির্বাচন",
      "মুহাম্মদ ইউনূস",
      "প্রধান উপদেষ্টা",
      "জেলা প্রশাসক",
      "বাংলাদেশ",
    ],
  },
  {
    id: 2,
    category: "জাতীয়",
    title: "নির্বাচনে যারা দায়িত্বে থাকবেন তাদের তথ্য নিচ্ছে ইসি",
    image:
      "https://www.rupalibangladesh.com/media/imgAll/2025July/Nirbachon-20251215210029.jpg",
    caption: "ছবি- সংগৃহীত",
    subTitle: "ত্রয়োদশ জাতীয় সংসদ নির্বাচনে পুলিশ ও প্রশাসনসহ...",
    content: `<p>নির্দেশনায় বলা হয়েছে...</p>`,
    tags: ["নির্বাচন", "ইসি", "বাংলাদেশ"],
  },
];

const DetailsIndex = () => {
  const mainNews = newsList[0];
  const nextNews = newsList.slice(1);

  return (
    <div className="my-6">
      <Container>
        {/* Main News */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-6 mb-12">
          <div>
            <NewsBlock {...mainNews} />
          </div>

          <DetailsRightSidebar />
        </div>

        {/* Next News Header */}
        {nextNews.length > 0 && (
          <>
            <div className="border-t-2 border-red-600 text-center mb-6">
              <span className="bg-red-600 text-white px-4 py-1 inline-block">
                পরবর্তী খবর
              </span>
            </div>

            {nextNews.map((news) => (
              <div
                key={news.id}
                className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-6 mb-12"
              >
                <div>
                  <NewsBlock {...news} />
                </div>

                <DetailsRightSidebar />
              </div>
            ))}
          </>
        )}
      </Container>
    </div>
  );
};

export default DetailsIndex;
