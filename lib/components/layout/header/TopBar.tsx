"use client";

import React from "react";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { IoMdPaper } from "react-icons/io";
import { GiNewspaper } from "react-icons/gi";
import { globe } from "@/lib/components/icons";
import { ImageWithFallback } from "@/lib/components/image";
import headerBanner from "@/public/images/header-banner.svg";
import { x, youtube, facebook } from "@/lib/components/icons";
import TodayDate from "@/lib/utils/helpers";

const socialLinks = [
  { href: "https://www.facebook.com", icon: facebook, alt: "facebook" },
  { href: "https://www.youtube.com", icon: youtube, alt: "youtube" },
  { href: "https://www.x.com", icon: x, alt: "x" },
];

const TopBar = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center gap-10">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={logo}
            width={320}
            height={150}
            alt="The Daily Adin Logo"
            className="object-contain"
          />
        </div>

        <div className="relative overflow-hidden mt-3">
          <ImageWithFallback
            src={headerBanner}
            width={500}
            height={150}
            alt="The Daily Adin Logo"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-3 items-end">
          <p className="text-[20px] font-normal">আজ {TodayDate()}</p>
          <div className="flex items-center gap-3">
            <button className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 text-[17px] font-medium text-black shadow-sm hover:bg-red-600 hover:text-white transition-all duration-200">
              <GiNewspaper
                size={22}
                className="text-red-600 group-hover:text-white transition-colors"
              />
              আজকের পত্রিকা
            </button>

            <button className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 text-[17px] font-medium text-black shadow-sm hover:bg-red-600 hover:text-white transition-all duration-200">
              <IoMdPaper
                size={22}
                className="text-blue-600 group-hover:text-white transition-colors"
              />
              ই-পেপার
            </button>
          </div>

          <div className="flex items-center gap-3 hidden">
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
            <div className="w-auto h-full bg-gray-4 px-3 py-2 shrink-0 rounded-[5px]">
              <div className="flex items-center gap-2">
                <ImageWithFallback
                  src={globe}
                  width={24}
                  height={24}
                  alt="globe"
                />
                <p className="text-[18px] font-medium leading-none">ENG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
