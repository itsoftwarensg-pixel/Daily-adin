import React from "react";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";
import { newsJson } from "@/lib/data"; // Temporary
import { BiSearchAlt2 } from "react-icons/bi";


const HomeCountry = () => {
    return (
        <div className="py-8">
            <Container>
                <GradientHeader
                    title="প্রান্তলোক"
                    color="green"
                    href="/"
                    showReadMoreBtn={true}
                />
                {/* আমার এলাকার খবর  */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-4 items-center">
                        <span className="h-4 w-4 bg-red-600"></span>
                        <h4 className="text-2xl">আমার এলাকার খবর </h4>
                    </div>
                    <div className="flex gap-6">
                        <select className="block w-full border rounded px-4 py-3 bg-white
                     active:ring-0 focus:ring-0 focus:ring-blue-0 focus:border-blue-0">
                            <option value={''}>বিভাগ</option>
                            <option value={''}>Dhaka</option>
                            <option value={''}>Rajshahi</option>
                            <option value={''}>Chittagong</option>
                        </select>
                        <select className="block w-full border rounded px-4 py-3 bg-white
                     active:ring-0 focus:ring-0 focus:ring-blue-0 focus:border-blue-0">
                            <option value={''}>জেলা</option>
                            <option value={''}>Dhaka</option>
                            <option value={''}>Rajshahi</option>
                            <option value={''}>Chittagong</option>
                        </select>
                        <select className="block w-full border rounded px-4 py-3 bg-white
                     active:ring-0 focus:ring-0 focus:ring-blue-0 focus:border-blue-0">
                            <option value={''}>উপজেলা</option>
                            <option value={''}>Dhaka</option>
                            <option value={''}>Rajshahi</option>
                            <option value={''}>Chittagong</option>
                        </select>

                        <button className="flex gap-4 px-8 py-2 items-center text-white rounded bg-red-400 hover:bg-red-500">
                            <BiSearchAlt2 size={22} />
                            খুঁজুন
                        </button>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left */}
                    <div className="space-y-2">
                        {newsJson.slice(11, 12).map((newsItem, idx) => (
                            <div key={idx} className="h-auto">
                                <NewsItemVertical
                                    newsItem={newsItem}
                                    titleSize="large"
                                    bgColor="gray"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {newsJson.slice(6, 10).map((newsItem, idx) => (
                                <div key={idx} className="h-auto">
                                    <NewsItemVertical
                                        newsItem={newsItem}
                                        bgColor="gray"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeCountry;
