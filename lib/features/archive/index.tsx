"use client"
import React from "react";
import Container from "@/lib/components/common/container";
import NewsItemArchive from "@/lib/components/common/news-elements/news-item-archive";
import { newsJson } from "@/lib/data";
import { IoIosArrowForward } from "react-icons/io";
import Calendar from "./calendar";
import { BiSearchAlt2 } from "react-icons/bi";
import Link from "next/link";

const ArchivePage = () => {
    // Local state variables
    const [records, setRecords] = React.useState(12);

    // Handle load more content
    const handleMore = () => {
        setRecords(records + 12);
    }

    // Handle reset filters
    const handleReset = () => {
        window.location.reload();
    }

    return (
        <div className="my-4">
            <Container>
                {/* Section title */}
                <div className="text-xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center mb-4">
                    <span className="pl-4">{`আর্কাইভ`}</span>
                    <IoIosArrowForward />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 border-t pt-4 items-center">
                    <div className="col-span-1 lg:col-span-10">
                        <div className="grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 gap-4">
                            {/* Start and End date */}
                            <Calendar />

                            {/* ক্যাটাগরি */}
                            <div className="col-span-6 lg:col-span-4">
                                <select className="selectArrow w-full text-black rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0">
                                    <option className="py-3 " value="">ক্যাটাগরি</option>
                                    <option value="1">জাতীয়</option>
                                    <option value="2">রাজনীতি</option>
                                    <option value="3">অর্থনীতি</option>
                                    <option value="4">আন্তর্জাতিক</option>
                                    <option value="5">সারাদেশ</option>
                                    <option value="6">খেলা</option>
                                    <option value="7">বিনোদন</option>
                                    <option value="8">লাইফস্টাইল</option>
                                    <option value="9">তথ্যপ্রযুক্তি</option>
                                    <option value="10">সাহিত্য</option>
                                    <option value="11">নারী ও শিশু</option>
                                    <option value="12">ট্যুরিজম</option>
                                    <option value="13">গণমাধ্যম</option>
                                    <option value="14">ধর্ম</option>
                                    <option value="15">কৃষি ও প্রকৃতি</option>
                                    <option value="16">মতামত</option>
                                    <option value="17">এভিয়েশন</option>
                                    <option value="18">শিক্ষা</option>
                                    <option value="19">ক্যাম্পাস</option>
                                    <option value="20">এক্সক্লুসিভ</option>
                                    <option value="21">জবস</option>
                                    <option value="22">স্বাস্থ্য</option>
                                    <option value="23">আইন-আদালত</option>
                                    <option value="24">সোশ্যাল মিডিয়া</option>
                                    <option value="25">জোকস</option>
                                    <option value="26">প্রবাস</option>
                                    <option value="33">ছোটদের পোস্ট</option>
                                    <option value="34">পড়াশোনা</option>
                                    <option value="36">ভিডিও</option>
                                    <option value="37">অটোমোবাইল</option>
                                </select>
                            </div>

                            {/* বিভাগ */}
                            <div className="col-span-6 lg:col-span-4">
                                <select className="selectArrow w-full text-black rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0">
                                    <option value="">বিভাগ</option>
                                    <option value="2">বরিশাল</option>
                                    <option value="3">চট্টগ্রাম</option>
                                    <option value="4">ঢাকা</option>
                                    <option value="5">খুলনা</option>
                                    <option value="6">রাজশাহী</option>
                                    <option value="7">সিলেট</option>
                                    <option value="8">রংপুর</option>
                                    <option value="9">ময়মনসিংহ</option>
                                </select>
                            </div>

                            {/* জেলা */}
                            <div className="col-span-6 lg:col-span-4">
                                <select className="selectArrow w-full text-black rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0">
                                    <option value="">জেলা</option>
                                    <option value="2">বরিশাল</option>
                                    <option value="3">চট্টগ্রাম</option>
                                    <option value="4">ঢাকা</option>
                                    <option value="5">খুলনা</option>
                                    <option value="6">রাজশাহী</option>
                                    <option value="7">সিলেট</option>
                                    <option value="8">রংপুর</option>
                                    <option value="9">ময়মনসিংহ</option>
                                </select>
                            </div>

                            {/* উপজেলা */}
                            <div className="col-span-6 lg:col-span-4">
                                <select className="selectArrow w-full text-black rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0">
                                    <option value="">উপজেলা</option>
                                    <option value="2">বরিশাল</option>
                                    <option value="3">চট্টগ্রাম</option>
                                    <option value="4">ঢাকা</option>
                                    <option value="5">খুলনা</option>
                                    <option value="6">রাজশাহী</option>
                                    <option value="7">সিলেট</option>
                                    <option value="8">রংপুর</option>
                                    <option value="9">ময়মনসিংহ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 space-y-4 pl-4 border-l">
                        <button onClick={handleReset} className="w-full flex gap-4 px-6 py-3.5 items-center justify-center bg-gray-200 hover:bg-gray-300">
                            সকল খবর
                        </button>
                        <button className="w-full flex gap-4 px-6 py-3.5 items-center justify-center text-white bg-green-500 hover:bg-green-600">
                            <BiSearchAlt2 size={22} />
                            খুঁজুন
                        </button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 border-t pt-4">
                    {newsJson.slice(0, records).map((newsItem, index) => (
                        <NewsItemArchive
                            key={index}
                            newsItem={newsItem}
                        />
                    ))}
                </div>

                {/* Load more button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleMore}
                        className="text-white text-lg bg-red-600 px-4 py-2 flex items-center justify-center gap-4 hover:bg-red-500 rounded-sm">
                        {/* <LiaSpinnerSolid className="text-white animate-spin" /> */}
                        <span>আরও দেখুন</span>
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default ArchivePage;

