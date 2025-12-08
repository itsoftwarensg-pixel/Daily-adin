import React from "react";
import LeadVideoHeader from "@/lib/components/common/section-headers/lead-video-header";
import LeadNewsItemVideoOverlay from "@/lib/components/common/news-elements/lead-news-item-video-overlay";
import LeadNewsItemVideoCelebrity from "@/lib/components/common/news-elements/lead-news-item-video-celebrity";

const HomeLeadSidebar = () => {
    return (
        <div className="space-y-6">
            <div className="space-y-3">
                <LeadVideoHeader title="YouTube" />
                <LeadNewsItemVideoOverlay />
            </div>

            <div className="space-y-3">
                <LeadVideoHeader title="তারকা আসছেন যিনি" />
                <LeadNewsItemVideoCelebrity
                    title="বাংলাদেশী ক্রিকেটার"
                    content={`
                        <p>একজন বাংলাদেশী আন্তর্জাতিক ক্রিকেটার, যিনি একজন অলরাউন্ডার হিসেবে বাংলাদেশ জাতীয় দলে খেলেন।</p>
                        <p>তিনি মূলত একজন ডানহাতি অফ ব্রেক বোলার এবং নিচের দিকের ডানহাতি ব্যাটসম্যান। তিনি ২০১৯ সালে 
                        ক্রিকইনফো দ্বারা বিশ্বের অন্যতম সেরা উদীয়মান ক্রিকেটারদের একজন হিসেবে নির্বাচিত হয়েছিলেন।</p>
                    `}
                    quote="তুমি অনেক বড় মনের মানুষ"
                    quoteFrom="একজন ভক্তের উক্তি"
                />
            </div>
        </div>
    );
};

export default HomeLeadSidebar;
