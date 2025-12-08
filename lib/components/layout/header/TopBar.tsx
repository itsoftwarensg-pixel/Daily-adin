"use client";

import React from "react";
import Link from "next/link";
import logo from "@/public/logo.png";
import { ImageWithFallback } from "@/lib/components/image";
import { x, youtube, facebook } from "@/lib/components/icons";

const socialLinks = [
  { href: "https://www.facebook.com", icon: facebook, alt: "facebook" },
  { href: "https://www.youtube.com", icon: youtube, alt: "youtube" },
  { href: "https://www.x.com", icon: x, alt: "x" },
];

const TopBar = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-between gap-[153px]">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={logo}
            width={259}
            height={121}
            alt="The Daily Adin Logo"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-end gap-10">
          {/* Date + Social */}
          <div className="flex items-center gap-3">
            <p className="text-[20px] font-normal">আজ ২৪ নভেম্বর ২০২৫</p>
            <div className="bg-gray-4 px-3 py-2 rounded-[5px] flex items-center gap-2">
              {socialLinks.map((item) => (
                <Link key={item.alt} target="_blank" href={item.href}>
                  <ImageWithFallback
                    src={item.icon}
                    width={22}
                    height={22}
                    alt={item.alt}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Title row */}
          <div className="flex items-center justify-end text-[16px] font-normal">
            <div className="w-[5px] h-[40px] bg-black" />
            <div className="bg-primaryRed text-white px-3 py-2">শিরোনাম :</div>
            <div className="bg-gray-1 px-5 py-2 flex items-center gap-6 justify-end">
              <div className="flex items-center gap-2">
                <div className="bg-primaryRed w-2.5 h-2.5 rounded-full" />
                <p>
                  আইনশৃঙ্খলা পরিস্থিতির অবনতির শঙ্কা নেই: স্বরাষ্ট্র উপদেষ্টা
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primaryRed w-2.5 h-2.5 rounded-full" />
                <p>
                  নির্বাচনে ইসিকে সর্বাত্মক সহযোগিতা করবে সেনাবাহিনী: সেনাপ্রধান
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
