"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";
import { globe } from "@/lib/components/icons";
import { RiNewspaperLine } from "react-icons/ri";
import { IoIosShareAlt, IoMdPaper } from "react-icons/io";
import { ImageWithFallback } from "@/lib/components/image";
import { TodayBnDate, TodayDate } from "@/lib/utils/helpers";
import headerBanner from "@/public/images/header-banner.svg";
import { x, youtube, facebook } from "@/lib/components/icons";
import SocialMediaDropdown from "@/lib/components/layout/header/SocialMediaDropdown";

const socialLinks = [
  { href: "https://www.facebook.com", icon: facebook, alt: "facebook" },
  { href: "https://www.youtube.com", icon: youtube, alt: "youtube" },
  { href: "https://www.x.com", icon: x, alt: "x" },
];

// Props
interface Props {
  dateTimeBn: string;
}

const TopBar = ({ dateTimeBn }: Props) => {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [openSocialMediaDropdown, setOpenSocialMediaDropdown] = useState(false);
  const [todayDate, setTodayDate] = useState("");

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenSocialMediaDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const date =
      pathname === "/home-old" ? `আজ ${TodayDate()}` : `${dateTimeBn}`;
    setTodayDate(date);
  }, [pathname]);

  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center gap-10">
        <Link href={"/"} className="relative overflow-hidden">
          <ImageWithFallback
            src={logo}
            width={320}
            height={150}
            alt="The Daily Adin Logo"
            className="object-contain"
          />
        </Link>

        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={headerBanner}
            width={500}
            height={150}
            alt="The Daily Adin Logo"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-2 items-end">
          <p className="text-[20px] font-normal">{todayDate}</p>
          <div className="flex items-center gap-4">
            <Link
              href={"/"}
              className="group flex items-center gap-1 text-md font-medium text-black hover:text-blue-600"
            >
              <RiNewspaperLine
                size={16}
                className="group-hover:text-blue-600"
              />
              আজকের পত্রিকা
            </Link>

            <Link
              href={"/"}
              className="group flex items-center gap-1 text-md font-medium text-black hover:text-blue-600"
            >
              <IoMdPaper size={16} className="group-hover:text-blue-600 " />
              ই-পেপার
            </Link>

            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setOpenSocialMediaDropdown((prev) => !prev)}
                className="group flex items-center gap-1 text-md font-medium text-black hover:text-blue-600"
              >
                <IoIosShareAlt
                  size={16}
                  className="group-hover:text-blue-600"
                />
                সোশ্যাল মিডিয়া
              </button>

              {openSocialMediaDropdown && <SocialMediaDropdown />}
            </div>
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
