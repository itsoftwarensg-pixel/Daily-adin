"use client";

import Container from "@/lib/components/common/container";
import { ImageWithFallback } from "@/lib/components/image";
import { ElectionApiResponse } from "@/lib/types/election";
import { HomePageContnetSection } from "@/lib/types/home.page";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TARGET_DATE = new Date("2026-02-12T16:30:00+06:00"); // Bangladesh time

function calculateTimeLeft(): TimeLeft {
  const difference = TARGET_DATE.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

// Props
interface Props {
  homeData: {
    special: HomePageContnetSection;
  };
  electionData: ElectionApiResponse;
}

// START election data
type ElectionItem = {
  key: string;
  value: number;
  label_bn: string;
  label_en: string;
};

type ElectionSection = {
  title_bn: string;
  title_en: string;
  items: ElectionItem[];
};

type ElectionData = {
  referendum?: ElectionSection;
  result?: ElectionSection;
};
// END election data

export default function ElectionCountdown({ homeData, electionData }: Props) {
  // const electionDataLocal: ElectionData = {
  //   "result": {
  //     "items": [
  //       {
  //         "key": "bnp",
  //         "value": 12,
  //         "label_bn": "বিএনপি",
  //         "label_en": "BNP"
  //       },
  //       {
  //         "key": "jamaat",
  //         "value": 190,
  //         "label_bn": "জামায়াত",
  //         "label_en": "Jamaat"
  //       },
  //       {
  //         "key": "ncp",
  //         "value": 15,
  //         "label_bn": "এনসিপি",
  //         "label_en": "NCP"
  //       },
  //       {
  //         "key": "independent",
  //         "value": 2,
  //         "label_bn": "স্বতন্ত্র",
  //         "label_en": "Independent"
  //       },
  //       {
  //         "key": "others",
  //         "value": 3,
  //         "label_bn": "অন্যান্য",
  //         "label_en": "Others"
  //       }
  //     ],
  //     "title_bn": "ফলাফল (আসন)",
  //     "title_en": "Result"
  //   },
  //   "referendum": {
  //     "items": [
  //       {
  //         "key": "yes",
  //         "value": 30,
  //         "label_bn": "হ্যাঁ",
  //         "label_en": "Yes"
  //       },
  //       {
  //         "key": "no",
  //         "value": 70,
  //         "label_bn": "না",
  //         "label_en": "No"
  //       }
  //     ],
  //     "title_bn": "গণভোট",
  //     "title_en": "Referendum"
  //   }
  // }
  const {
    special: specialontents,
  } = homeData;
  const contents = specialontents?.contents.slice(0, 10);    // 6 contents
  const electionDataInfo = electionData?.data ? electionData.data : null; // Referendum and Result data

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toBanglaNumber = (num: number | string) => {
    const en = "0123456789";
    const bn = "০১২৩৪৫৬৭৮৯";

    return num
      .toString()
      .split("")
      .map((d) => (en.includes(d) ? bn[en.indexOf(d)] : d))
      .join("");
  };


  const Box = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 min-w-[70px] shadow">
      <span className="text-2xl font-bold">{toBanglaNumber(value)}</span>
      <span className="text-xs opacity-80">{label}</span>
    </div>
  );

  return (
    <Container>
      <div className="mt-4 w-full rounded-xl shadow-sm p-4 md:p-6
  bg-[radial-gradient(circle_at_top,_rgba(255,80,80,0.15),_rgba(255,255,255,0.95))]
  border border-red-300 text-slate-800">

        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT SECTION */}
          {/* <div className="w-full lg:max-w-[400px] lg:flex-shrink-0 flex justify-center">
            <div className="text-center flex flex-col items-center">

              <h2 className="text-lg md:text-2xl font-semibold mb-2 text-red-700">
                <Link href={`topic/ত্রায়োদশ-জাতীয়-সংসদ-নির্বাচন`}>
                  ত্রয়োদশ জাতীয় সংসদ নির্বাচন
                </Link>
              </h2>

              <div className="flex flex-wrap gap-2 justify-center text-sm md:text-md border-b border-red-300 pb-2 mb-">
                <p className="opacity-90">১২ ফেব্রুয়ারি ২০২৬</p>
                <span className="hidden sm:inline">|</span>
                <p className="opacity-90">সকাল ৭:৩০ - বিকেল ৪:৩০</p>
              </div>

              <div className="p-3 bg-[radial-gradient(circle_at_botto,_rgba(255,80,80,0.15),_rgba(255,255,255,0.95))] rounded-xl pb-0">
                <h4 className="font-semibold">ভোট শেষ হওয়ার বাকি</h4>

                <div className="flex justify-center gap-2 md:gap-3 my-4 flex-wrap">
                  <Box label="দিন" value={timeLeft.days} />
                  <Box label="ঘন্টা" value={timeLeft.hours} />
                  <Box label="মিনিট" value={timeLeft.minutes} />
                  <Box label="সেকেন্ড" value={timeLeft.seconds} />
                </div>
              </div>

              <Link
                href={`topic/ত্রায়োদশ-জাতীয়-সংসদ-নির্বাচন`}
                className="inline-block bg-red-100 text-red-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-red-200 transition"
              >
                বিস্তারিত দেখুন
              </Link>

            </div>
          </div> */}
          <div className="w-full lg:max-w-[400px] lg:flex-shrink-0 flex justify-center">
            <div className="text-center flex flex-col items-center w-full">

              <h2 className="text-lg md:text-2xl font-semibold mb-2 text-red-700">
                <a href="topic/ত্রায়োদশ-জাতীয়-সংসদ-নির্বাচন">
                  ত্রয়োদশ জাতীয় সংসদ নির্বাচন
                </a>
              </h2>

              <div className="flex flex-wrap gap-2 justify-center text-sm md:text-md border-b border-red-300 pb-2 mb-4">
                <p className="opacity-90">১২ ফেব্রুয়ারি ২০২৬</p>
                <span className="hidden sm:inline">|</span>
                <p className="opacity-90">সকাল ৭:৩০ - বিকেল ৪:৩০</p>
              </div>

              {/* Referendum */}
              {electionDataInfo?.referendum && (
                <div className="w-full mb-4 bg-red-50 rounded-xl p-3 text-left">
                  <h4 className="font-bold text-red-800 mb-3 gap-2 bg-red-100/70 px-3 py-2 rounded-lg overflow-hidden">
                    {electionDataInfo.referendum.title_bn}
                  </h4>
                  {electionDataInfo.referendum.items.map((item) => (
                    <div
                      key={item.key}
                      className="flex justify-between border-b last:border-none py-1 text-sm"
                    >
                      <span>{item.label_bn}</span>
                      <span className="font-semibold">{toBanglaNumber(item.value)}%</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Result */}
              {electionDataInfo?.result && (
                <div className="w-full mb-4 bg-red-50 rounded-xl p-3 text-left">
                  <h4 className="font-bold text-red-800 mb-3 gap-2 bg-red-100/70 px-3 py-2 rounded-lg overflow-hidden">
                    {electionDataInfo.result.title_bn}
                  </h4>


                  {[...electionDataInfo.result.items]
                    .sort((a, b) => Number(b.value) - Number(a.value)) // descending
                    .map((item) => (
                      <div
                        key={item.key}
                        className="flex justify-between border-b last:border-none py-1 text-sm"
                      >
                        <span>{item.label_bn}</span>
                        <span className="font-semibold">
                          {toBanglaNumber(item.value)}
                        </span>
                      </div>
                    ))}

                </div>
              )}

              <a
                href="topic/ত্রায়োদশ-জাতীয়-সংসদ-নির্বাচন"
                className="inline-block bg-red-100 text-red-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-red-200 transition"
              >
                বিস্তারিত দেখুন
              </a>
            </div>
          </div>


          {/* RIGHT SECTION */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {contents && contents.length > 0 && contents.map((newsItem, idx) => (
              <Link key={idx} href={newsItem.full_url} className="block group">
                <div className="flex gap-3">
                  <div className="w-[100px] sm:w-[120px] flex-shrink-0">
                    <div className="aspect-[16/10]">
                      <ImageWithFallback
                        src={newsItem.full_image_path}
                        height={100}
                        width={160}
                        alt={newsItem.heading}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="group-hover:underline font-semibold text-sm md:text-base leading-snug">
                      {newsItem.sub_heading ? (
                        <>
                          <span className="text-red-500">{newsItem.sub_heading}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block mx-1"></span>
                          <span>{newsItem.heading}</span>
                        </>
                      ) : (
                        newsItem.heading
                      )}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
