"use client";

import React from "react";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { globe } from "@/lib/components/icons";
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
      <div className="flex items-start justify-between gap-[153px]">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={logo}
            width={320}
            height={150}
            alt="The Daily Adin Logo"
            className="object-contain"
          />
        </div>

        {/* Date + Social */}
        <div className="flex items-center gap-3 mt-8">
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
  );
};

export default TopBar;
