"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import logo from "@/public/logo.png";
import { usePathname } from "next/navigation";
import { globe } from "@/lib/components/icons";
import { RiNewspaperLine } from "react-icons/ri";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosShareAlt,
  IoMdPaper,
} from "react-icons/io";
import { ImageWithFallback } from "@/lib/components/image";
import { TodayBnDate, TodayDate } from "@/lib/utils/helpers";
import headerBanner from "@/public/images/header-banner.svg";
import { x, youtube, facebook } from "@/lib/components/icons";
import SocialMediaDropdown from "@/lib/components/layout/header/SocialMediaDropdown";
import { navItems } from "@/lib/data";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { NavbarMenuItem } from "@/lib/types/common.types";
import { Category } from "@/lib/types/category.page";
import { AJKER_PATRIKA_PAGE } from "@/lib/config/constant";

const socialLinks = [
  { href: "https://www.facebook.com/dailyadinbd", icon: facebook, alt: "facebook" },
  { href: "https://www.youtube.com/@dailyadinbd", icon: youtube, alt: "youtube" },
  { href: "https://x.com/dailyadinbd", icon: x, alt: "x" },
];

// Props
interface Props {
  dateTimeBn: string;
  menus: NavbarMenuItem[];
  personalityData: Category; // সবিশেষ category data
}

const TopBar = ({ dateTimeBn, menus, personalityData }: Props) => {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [openSocialMediaDropdown, setOpenSocialMediaDropdown] = useState(false);
  const [todayDate, setTodayDate] = useState(dateTimeBn);
  const personalityNews = personalityData?.position_contents?.[0] ?? null; // সবিশেষ এর প্রথম নিউজ

  // Mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<number[]>([]); // store open submenu indexes

  // Toogle menu click
  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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

  // Set today's date based on pathname
  useEffect(() => {
    const date =
      pathname === "/home-old" ? `আজ ${TodayDate()}` : `${dateTimeBn}`;
    setTodayDate(date);
  }, [pathname, dateTimeBn]);

  // Disable background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      // Disable background scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "";
    }

    // Cleanup (important)
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="w-full bg-white pb-2 md:pb-0 print:border-b-[#d4d4d4] print:border-b print:border-dashed border-b-red-500 border-b-2 md:border-none">
      <div className="flex justify-between items-center gap-10 z-50 print:justify-center">
        <Link
          href={"/"}
          className="relative overflow-hidden w-24 h-12 md:w-52 md:h-28 xl:w-80 xl:h-40"
        >
          <ImageWithFallback
            src={logo}
            alt="The Daily Adin Logo"
            className="object-contain"
            priority={true}
          />
        </Link>

        <div className="relative overflow-hidden hidden md:block print:hidden">
          <ImageWithFallback
            src={headerBanner}
            width={500}
            height={150}
            alt="The Daily Adin Logo"
            className="object-contain w-90 xl:w-[360px]"
          />
          {/* <p className="text-[18px] text-center font-normal">{todayDate}</p> */}
        </div>

        <div className="flex items-center gap-4 md:hidden print:hidden">
          <Link
            href="/search"
            aria-label="অনুসন্ধান"
            className="flex h-10 w-10 items-center justify-center text-black hover:text-red-600"
          >
            <FiSearch size={24} />
          </Link>
          <button
            aria-label={mobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            className="flex h-10 w-10 items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>

        {/* <div className="hidden lg:flex flex-col gap-2 border min-h-[85px] items-end print:hidden w-[362px] max-w-[362px]"> */}
        <div className="hidden lg:flex flex-col gap-2 items-end print:hidden">
          <p className="text-[20px] font-normal">{todayDate}</p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${AJKER_PATRIKA_PAGE.slug}`}
              className="group flex items-center gap-1 text-md font-medium text-black hover:text-blue-600"
            >
              <RiNewspaperLine
                size={16}
                className="group-hover:text-blue-600"
              />
              আজকের পত্রিকা
            </Link>

            <Link
              href={"https://epaper.dailyadin.com/"}
              target="_blank"
              className="group flex items-center gap-1 text-md font-medium text-black hover:text-blue-600"
            >
              <IoMdPaper size={16} className="group-hover:text-blue-600 " />
              ই-পেপার
            </Link>

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setOpenSocialMediaDropdown(true)}
              onMouseLeave={() => setOpenSocialMediaDropdown(false)}
            >
              <button className="group flex items-center gap-1 text-md font-medium text-black hover:text-blue-600">
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
          {/* --{JSON.stringify(personalityData)} */}
          {/* {personalityNews && (
            <Link className="block group overflow-hidden w-[360px] max-w-[360px]" href={personalityNews.full_url}>
              <div className="w-full grid grid-cols-5 items-center justify-center bg-gray-100 gap-2 overflow-hidden">
                <div className="col-span-2 aspect-[16/10]">
                  <ImageWithFallback
                    src={personalityNews.full_image_path}
                    height={600}
                    width={900}
                    alt={`${personalityNews.heading}`}
                    className="w-full object-cover h-full"
                  />
                </div>
                <div className="col-span-3">
                  <h4 className="p-2 group-hover:text-blue-700 text-[17px] font-semibold">
                    {personalityNews.sub_heading ? (
                      <>
                        <span className="text-red-500">
                          {personalityNews.sub_heading}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block mx-1"></span>
                        <span>{personalityNews.heading}</span>
                      </>
                    ) :
                      personalityNews.heading
                    }
                  </h4>
                </div>
              </div>
            </Link>
          )} */}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex print:hidden">
          {/* Overlay */}
          <div
            className="flex-1 bg-black/30"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="md:hidden bg-white shadow-lg h-screen w-80 overflow-y-auto pb-24">
            {/* Header */}
            <div className="sticky top-0 bg-gray-100 px-4 py-4 flex justify-between z-50">
              <Link
                href={"/"}
                className="text-[22px] font-semibold text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <AiOutlineHome />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <AiOutlineClose size={24} />
              </button>
            </div>

            {/* Navigation */}
            <div>
              {menus &&
                menus.length > 0 &&
                menus.map((item, index) => {
                  const isOpen = openSubmenus.includes(index);

                  return (
                    <div key={index} className="border-b border-gray-200">
                      {/* Parent row */}
                      <div className="group relative flex items-stretch justify-between">
                        <Link
                          href={item.href}
                          className={`px-4 py-3 font-medium hover:bg-gray-100 transition-colors hover:text-red-500
      ${item.children ? "w-[85%]" : "w-full"}
    `}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.text}
                        </Link>

                        {/* Arrow */}
                        {item.children && (
                          <button
                            onClick={() => toggleSubmenu(index)}
                            className="
                            absolute
                            right-0
                            inset-y-0
                            w-[15%]
                            flex items-center justify-center
                            text-gray-500
                            transition-all
                            hover:text-red-500
                            hover:bg-gray-100
                            border-l
                          "
                          >
                            <span
                              className={`transition-transform duration-200
          ${isOpen ? "rotate-180" : ""}
        `}
                            >
                              <IoIosArrowDown />
                            </span>
                          </button>
                        )}
                      </div>

                      {/* Submenu */}
                      {item.children && isOpen && (
                        <div className="pl-4 pb-2 bg-gray-50">
                          {item.children.map((child, i) => {
                            const href = child.isCat
                              ? `${child.href}`
                              : `${item.href}/${child.href}`;
                            return (
                              <Link
                                key={i}
                                href={item.isMegaMenu ? `/${child.href}` : href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 text-gray-600
                                 hover:text-red-500 hover:bg-gray-100
                                 transition-colors"
                              >
                                {child.text}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
