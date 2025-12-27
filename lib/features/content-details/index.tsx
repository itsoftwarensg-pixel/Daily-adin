import Link from "next/link";
import Container from "@/lib/components/common/container"
import DetailsLeftSidebar from "@/lib/features/details/left-sidebar";
import DetailsRightSidebar from "@/lib/features/details/right-sidebar";
import HtmlContent from "@/lib/components/common/html-content";
import { Category } from "@/lib/types/category.page";
import { ContentDetailsType } from "@/lib/types/details.page";

// Props
interface Props {
  contentDetails: ContentDetailsType;
  category: Category;
}

const ContentDetails = ({ contentDetails, category }: Props) => {
  const tags = [
    "নির্বাচন",
    "মুহাম্মদ ইউনূস",
    "প্রধান উপদেষ্টা",
    "জেলা প্রশাসক",
    "বাংলাদেশ",
  ];

  return (
    <div className="my-6">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-6 mb-12">
          <div className="col-span-auto">

            <div className="grid grid-cols-12 gap-4">
              {/* Left Sidebar */}
              <div className="col-span-3">
                <DetailsLeftSidebar
                  category="রাজনীতি"
                  categoryUrl='/'
                />
              </div>

              {/* Main content */}
              <div className="col-span-9">
                {/* Headline/Title */}
                <h2 className="text-4xl font-semibold mb-4">
                  {contentDetails.heading}
                </h2>

                {/* Image */}
                <div className="mb-6">
                  {/* News Image */}
                  <img src="https://www.rupalibangladesh.com/media/imgAll/2025July/Opodesta-20251217210338.jpg" alt="details image" />

                  {/* Image Caption */}
                  <p className="block text-gray-500 my-1 text-center text-sm">প্রধান উপদেষ্টা প্রফেসর মুহাম্মদ ইউনূসের সঙ্গে বিদায়ী সাক্ষাৎ করেন কোরিয়ার রাষ্ট্রদূত পার্ক ইয়ং-সিক।</p>
                </div>

                {/* Sub-heading */}
                <h4 className="text-2xl mb-4 font-medium leading-9">
                  প্রধান উপদেষ্টা প্রফেসর মুহাম্মদ ইউনূস বলেছেন, দেশে প্রত্যক্ষ বিদেশি বিনিয়োগ আকৃষ্ট করতে বাংলাদেশ ধারাবাহিক সংস্কার হাতে নিয়েছে।
                </h4>

                {/* Content details */}
                <article className="mb-4 text-black leading-8 text-lg content-details">
                  <HtmlContent html="
                                    <p>বুধবার (১৭ ডিসেম্বর) রাষ্ট্রীয় অতিথি ভবন যমুনায় প্রধান উপদেষ্টা অধ্যাপক ড. মুহাম্মদ ইউনূসের সঙ্গে বাংলাদেশে নিযুক্ত কোরিয়ার রাষ্ট্রদূত পার্ক ইয়ং-সিকের বিদায়ী সাক্ষাৎকালে তিনি একথা বলেন।</p>

                                    <p>সাক্ষাৎকালে রাষ্ট্রদূত পার্ক সুদানের আবেই শহরে জাতিসংঘ শান্তিরক্ষীদের ঘাঁটিতে সাম্প্রতিক ড্রোন হামলায় ছয় বাংলাদেশি শান্তিরক্ষী নিহত হওয়ায় গভীর শোক প্রকাশ করেন।</p>
                                    
                                    <p>রাষ্ট্রদূত বাংলাদেশের গণতান্ত্রিক উত্তরণের জন্য তার শুভেচ্ছা জানান এবং আশা প্রকাশ করেন, আগামী ১২ ফেব্রুয়ারি একটি অবাধ, সুষ্ঠু এবং শান্তিপূর্ণ নির্বাচন হবে।</p>

                                    <p>উভয় পক্ষ বাংলাদেশ-দক্ষিণ কোরিয়া সম্পর্ক আরও জোরদার করার উপায় নিয়ে আলোচনা করেন, যার মধ্যে বাংলাদেশে বৃহত্তর কোরিয়ার বিনিয়োগ আকৃষ্ট করা, একটি পরিকল্পিত ব্যাপক অর্থনৈতিক চুক্তির স্থিতি, মানবসম্পদে বিনিয়োগ এবং দুই বন্ধুপ্রতীম দেশের মধ্যে সাংস্কৃতিক বিনিময় সম্প্রসারণের বিষয়ে আলোচনা হয়।</p>

                                    <div class='max-w-[360px] bg-gray-100 mx-auto my-2'>
                                      <a class='block group overflow-hidden' href='/'>
                                        <div class='flex gap-2 items-center'>
                                          <div class='w-[120px] flex-shrink-0'>
                                            <div class='aspect-[16/10]'>
                                              <img alt='নতুন রেললাইন প্রকল্প অনুমোদন' loading='lazy' width='160' height='100' src='https://www.rupalibangladesh.com/media/imgAll/2025July/Opodesta-20251217210338.jpg' class='h-full w-full object-cover' style='margin:0'/>
                                            </div>
                                          </div>
                                          <div class='flex-1'>
                                            <h4 class='group-hover:text-blue-700 font-semibold leading-6 mb-0'>সরকার নতুন রেললাইন প্রকল্প অনুমোদন করেছে।</h4>
                                          </div>
                                        </div>
                                      </a>
                                    </div>


                                    <p>প্রধান উপদেষ্টা প্রফেসর ইউনূস রাষ্ট্রদূত পার্ককে তার মেয়াদ সফলভাবে শেষ করায় অভিনন্দন জানান এবং দ্বিপক্ষীয় সম্পর্ক গভীর করার জন্য তার অবদানের জন্য ধন্যবাদ জানান।</p>

                                    <p>অন্তর্বর্তীকালীন সরকার চট্টগ্রামে কোরিয়ান রপ্তানি প্রক্রিয়াকরণ অঞ্চল সম্পর্কিত দীর্ঘদিনের একটি সমস্যার সমাধান করেছে উল্লেখ করে তিনি আশা প্রকাশ করেন— এটি দক্ষিণ কোরিয়ার শীর্ষস্থানীয় কোম্পানিগুলোকে বাংলাদেশে আকৃষ্ট করবে।</p>

                                    <blockquote class='quote-body'>
                                        <p>
                                            নাফিজ সরাফাতের বিরুদ্ধে দুদকের একাধিক অনুসন্ধান চলমান রয়েছে, যার মধ্যে অবৈধ সম্পদ অর্জনের বিষয়টিও রয়েছে। যতটুকু জানি তিনি সম্পদ বিবরণী দাখিল করেছেন। আমাদের অনুসন্ধান টিম এ বিষয়ে কাজ করছে। কার্যক্রম শেষে কমিশনের অনুমোদনক্রমে আইনগত ব্যবস্থা নেওয়া হবে
                                        </p>
                                        <p><small>দুদকের মহাপরিচালক মো. আক্তার হোসেন</small></p>
                                    </blockquote>
                                    
                                    <p>জবাবে রাষ্ট্রদূত পার্ক বলেন, কোরিয়ার ইলেকট্রনিক্স জায়ান্ট স্যামসাং এখন বাংলাদেশে মোবাইল ফোন উৎপাদন বাড়ানোসহ বাংলাদেশে তাদের কার্যক্রম সম্প্রসারণে আগ্রহী।</p>
                                    
                                    <img src='https://assets.dhakapost.com/media/imgAll/BG/2025December/yunus1-20251210144223.jpg' alt='Image'/>
                                    
                                    <p>তিনি আরও বলেন, দুই দেশ ফেব্রুয়ারিতে একটি পরিকল্পিত কম্প্রিহেনসিভ ইকোনমিক পার্টনারশিপ এগ্রিমেন্ট নিয়ে নতুন দফা আলোচনার আশা করছে, যা বিশ্বের অন্যতম বৃহৎ অর্থনীতি দক্ষিণ কোরিয়ার বাজারে বাংলাদেশি পণ্য বিশেষ করে তৈরি পোশাকের শুল্কমুক্ত প্রবেশাধিকারের পথ প্রশস্ত করবে।</p>

                                    <p>রাষ্ট্রদূত উল্লেখ করেন, ভিয়েতনাম ও ইন্দোনেশিয়া থেকে রপ্তানির আধিপত্য বিস্তারকারী দক্ষিণ কোরিয়ায় বর্তমানে বাংলাদেশের পোশাক আমদানির পাঁচ শতাংশেরও কম। তিনি বলেন, দ্বিপক্ষীয় ও বহুপাক্ষিক মুক্ত বাণিজ্য ব্যবস্থার মাধ্যমে দক্ষিণ-পূর্বাঞ্চলের দুই দেশের পণ্য কোরিয়ায় শুল্কমুক্ত বাজার প্রবেশাধিকার ভোগ করে। দুই দেশের মধ্যে গভীর সাংস্কৃতিক ও মানুষে মানুষে সম্পর্কের কথা স্মরণ করে প্রধান উপদেষ্টা বাংলাদেশি তরুণদের দক্ষতা ও কর্মসংস্থান বৃদ্ধির জন্য দক্ষিণ কোরিয়াকে আরও প্রশিক্ষণ কেন্দ্র বিশেষ করে ভাষা ইনস্টিটিউট প্রতিষ্ঠার বিষয়টি বিবেচনা করার পরামর্শ দেন। এ সময় এসডিজি সমন্বয়ক ও সিনিয়র সচিব লামিয়া মোর্শেদ উপস্থিত ছিলেন।</p>
                                    "/>

                </article>

                {/* Tags */}
                <div className="mb-4 flex gap-1 items-center">
                  {tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/`}
                      className="border rounded px-4 pt-1.5 pb-1 text-sm bg-gray-0 hover:bg-gray-100"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                {/* Follow google news */}
                <div className="bg-amber-50 border border-amber-200 px-4 py-2 d-print-none hover:border-amber-300">
                  <a href="https://news.google.com/publications/?" className="text-dark flex items-center justify-center gap-4" target="_blank">
                    <img className="img-fluid w-8" src="https://www.rupalibangladesh.com/media/common/google-news-feed.png" alt=" Google News" />
                    সর্বশেষ খবর পেতে দৈনিক এদিন এর গুগল নিউজ চ্যানেল ফলো করুন
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-auto">
            <DetailsRightSidebar />
          </div>
        </div>

        {/* Next News */}
        <div className="">
          <div className="border-t-2 border-red-600 text-center mb-6">
            <div className="bg-red-50">
              <span className="bg-red-600 text-white px-4 py-1 inline-block border-b-4 border-red-400">পরবর্তী খবর</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-6">
            <div className="col-span-auto">
              <div className="grid grid-cols-12 gap-4">
                {/* Left Sidebar */}
                <div className="col-span-3">
                  <DetailsLeftSidebar
                    category="জাতীয়"
                    categoryUrl='/'
                  />
                </div>

                {/* Main content */}
                <div className="col-span-9">
                  {/* Headline/Title */}
                  <h2 className="text-4xl font-semibold mb-4">
                    নির্বাচনে যারা দায়িত্বে থাকবেন তাদের তথ্য নিচ্ছে ইসি
                  </h2>

                  {/* Image */}
                  <div className="mb-6">
                    {/* News Image */}
                    <img src="https://www.rupalibangladesh.com/media/imgAll/2025July/Nirbachon-20251215210029.jpg" alt="details image" />

                    {/* Image Caption */}
                    <p className="block text-gray-500 my-1 text-center text-sm">
                      ছবি- সংগৃহীত
                    </p>
                  </div>

                  {/* Sub-heading */}
                  <h4 className="text-2xl mb-4 font-medium leading-9">
                    ত্রয়োদশ জাতীয় সংসদ নির্বাচনে পুলিশ ও প্রশাসনসহ সব বিভাগ থেকে দায়িত্বরত সব কর্মকর্তার তথ্য চেয়েছে নির্বাচন কমিশন (ইসি)। কমিশনের উপসচিব মোহাম্মদ মনির হোসেন ইতোমধ্যে এ সংক্রান্ত চিঠি মাঠ কর্মকর্তাদের পাঠিয়েছেন।
                  </h4>

                  {/* Content details */}
                  <article className="mb-4 text-black leading-8 text-lg content-details">
                    <HtmlContent html="
                                    <p>নির্দেশনায় বলা হয়েছে, নির্বাচনকালীন দ্রুত যোগাযোগ নিশ্চিত করতে নির্বাচনে দায়িত্বপ্রাপ্ত রিটার্নিং অফিসার ও সহকারী রিটার্নিং অফিসারদের পাশাপাশি স্থানীয় পুলিশ প্রশাসনের কর্মকর্তাদের তথ্য পাঠাতে হবে। এর মধ্যে উপমহাপুলিশ পরিদর্শক, পুলিশ কমিশনার, পুলিশ সুপার এবং থানার ভারপ্রাপ্ত কর্মকর্তারা অন্তর্ভুক্ত থাকবেন।</p>

                                    <p>এ ছাড়া মাঠপর্যায়ে দায়িত্বপ্রাপ্ত নির্বাচন কমিশন সচিবালয়ের নিজস্ব কর্মকর্তা—আঞ্চলিক নির্বাচন কর্মকর্তা, সিনিয়র জেলা/জেলা নির্বাচন কর্মকর্তা এবং উপজেলা/থানা নির্বাচন কর্মকর্তারাও—নিয়োজিত থাকবেন। তাদের সকলের তথ্যও নির্ধারিত ছকে ১৬ ডিসেম্বরের মধ্যে নির্বাচন কমিশনে পাঠাতে হবে।</p>
                                    
                                    <p>তপশিল অনুযায়ী, প্রার্থিতা প্রত্যাহারের শেষ তারিখ ২০ জানুয়ারি, চূড়ান্ত প্রার্থী তালিকা প্রকাশ ও প্রতীক বরাদ্দ করা হবে ২১ জানুয়ারি। প্রতীক বরাদ্দের পরদিন থেকে অর্থাৎ ২২ জানুয়ারি থেকে নির্বাচনি প্রচারণা শুরু হবে। প্রচারণা চলবে ভোটগ্রহণ শুরুর ৪৮ ঘণ্টা আগ পর্যন্ত, অর্থাৎ ১০ ফেব্রুয়ারি সকাল সাড়ে ৭টা পর্যন্ত।</p>

                                    <p>এ ছাড়া রিটার্নিং কর্মকর্তার সিদ্ধান্তের বিরুদ্ধে ইসিতে আপিলের তারিখ ১১ জানুযারি, ‎আপিল শুনানি নিষ্পত্তির ১২ জানুযারি থেকে ১৮ জানুযারি, ‎প্রার্থিতা প্রত্যাহারের শেষ সময় ২০ জানুযারি। ‎প্রতীক বরাদ্দ ২১ জানুযারি, ‎ভোটগ্রহণ ও গণভোট হবে ১২ ফ্রেব্রুয়ারি ‎সকাল সাড়ে ৭টা থেকে বিকেল সাড়ে ৪টা পর্যন্ত।</p>
                                    "/>
                  </article>

                  {/* Tags */}
                  <div className="mb-4 flex gap-1 items-center">
                    {tags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/`}
                        className="border rounded px-4 pt-1.5 pb-1 text-sm bg-gray-0 hover:bg-gray-100"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>

                  {/* Follow google news */}
                  <div className="bg-amber-50 border border-amber-200 px-4 py-2 d-print-none hover:border-amber-300">
                    <a href="https://news.google.com/publications/?" className="text-dark flex items-center justify-center gap-4" target="_blank">
                      <img className="img-fluid w-8" src="https://www.rupalibangladesh.com/media/common/google-news-feed.png" alt=" Google News" />
                      সর্বশেষ খবর পেতে দৈনিক এদিন এর গুগল নিউজ চ্যানেল ফলো করুন
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-auto">
              <DetailsRightSidebar />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContentDetails;