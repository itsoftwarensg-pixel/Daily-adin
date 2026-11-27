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
// Previous sponsor image: import headerBanner from "@/public/images/header-banner.svg";
import northSouthGroupLogo from "@/public/images/north-south-group-logo.jpg";
import topbarLogo from "@/public/images/topbar-logo.png";
import { x, youtube, facebook } from "@/lib/components/icons";
import SocialMediaDropdown from "@/lib/components/layout/header/SocialMediaDropdown";
import { navItems } from "@/lib/data";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { NavbarMenuItem } from "@/lib/types/common.types";
import { AJKER_PATRIKA_PAGE } from "@/lib/config/constant";

const socialLinks = [
  { href: "https://www.facebook.com/dailyadinbd", icon: facebook, alt: "facebook" },
  { href: "https://www.youtube.com/@dailyadinbd", icon: youtube, alt: "youtube" },
  { href: "https://x.com/dailyadinbd", icon: x, alt: "x" },
];

// Utility links previously used text-sm and an 8-unit minimum height.
const utilityLinkClass = "inline-flex min-h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded px-2 text-lg font-semibold leading-snug text-slate-900 hover:bg-red-50 hover:text-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-700";

// Props
interface Props {
  dateTimeBn: string;
  menus: NavbarMenuItem[];
  // Previous: personalityData?: Category; // সবিশেষ category data
}

const TopBar = ({ dateTimeBn, menus }: Props) => {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [openSocialMediaDropdown, setOpenSocialMediaDropdown] = useState(false);
  const [todayDate, setTodayDate] = useState(dateTimeBn);
  // const personalityNews = personalityData?.position_contents?.[0] ?? null;

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
      {/* Previous masthead used a fixed 40px gap from medium screens upward. */}
      {/* The previous masthead kept the date strip inside the right-hand column. */}
      <div className="z-50 flex items-center justify-between gap-2 md:gap-4 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-x-6 lg:gap-y-2 lg:pt-2 print:!flex print:justify-center">
        <Link
          href={"/"}
          className="relative overflow-hidden shrink-0 w-24 h-12 md:w-52 md:h-28 xl:w-80 xl:h-40"
        >
          <ImageWithFallback
            src={logo}
            alt="The Daily Adin Logo"
            className="object-contain"
            priority={true}
          />
        </Link>

        {/* The previous logo wrapper had no explicit minimum width. */}
        <div className="relative hidden min-w-0 overflow-hidden md:block lg:justify-self-center print:hidden">
            {/* The desktop banner previously opened in the current tab. */}
            <Link
              href="https://northsouthgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
          <ImageWithFallback
            src={northSouthGroupLogo}
            width={500}
            height={150}
            alt="North South Group"
            className="masthead-logo-motion masthead-logo-motion-delayed h-auto w-full max-w-[360px] object-contain"
          />
          </Link>
          {/* <p className="text-[18px] text-center font-normal">{todayDate}</p> */}
        </div>

        {/* Titanic Bay previously appeared as a bare image on mobile. */}
        <Link href="https://www.titanicbay.com/" target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-center gap-2 border border-slate-200 bg-white px-2 py-1 hover:border-teal-600 md:hidden print:hidden" aria-label="Titanic Bay Hotel & Resort">
          <ImageWithFallback src={topbarLogo} alt="Titanic Bay" width={120} height={50} className="masthead-titanic-spin h-auto w-[90px] sm:w-[120px] object-contain" />
          <span className="hidden border-l border-slate-200 pl-2 text-sm font-semibold text-teal-900 sm:block">হোটেল ও রিসোর্ট</span>
        </Link>

        <div className="flex shrink-0 items-center gap-0 sm:gap-4 md:hidden print:hidden">
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
        {/* The previous desktop utility column could shrink and wrap. */}
        <div className="hidden lg:contents print:!hidden">
          {/* Previously the logo stood alone and the date appeared on a separate line. */}
          {/* The previous sponsor card was content-width with a 120px logo. */}
          {/* The previous card was up to 365px wide and sized its height to the content. */}
          {/* The previous sponsor tile was 306px wide with a logo and a short label. */}
          {/* The previous desktop card gave most of its width to the text. */}
          <Link href="https://www.titanicbay.com/" target="_blank" rel="noopener noreferrer" className="group grid min-h-[170px] w-[380px] grid-cols-[150px_minmax(0,1fr)] items-center gap-3 border border-slate-200 border-t-2 border-t-teal-800 bg-[#f8faf9] px-3 py-3 hover:border-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700 motion-safe:transition-shadow hover:shadow-sm xl:w-[460px] xl:grid-cols-[192px_minmax(0,1fr)] xl:gap-4 xl:px-4">
            <span className="grid min-h-[128px] place-items-center overflow-hidden bg-white">
              <ImageWithFallback src={topbarLogo} alt="Titanic Bay" width={192} height={82} sizes="(min-width: 1280px) 192px, 150px" className="masthead-titanic-spin h-auto w-full object-contain" />
            </span>
            <span className="border-l border-slate-200 pl-3 xl:pl-4">
              <span className="block text-lg font-bold leading-snug text-slate-900 xl:text-xl">হোটেল ও রিসোর্টে মালিকানার সুযোগ</span>
              <span className="mt-1.5 block text-sm leading-relaxed text-slate-700">একক ও যৌথ মালিকানা, স্যুট ও ভিলায় থাকার সুবিধা এবং পরিশোধের নিয়ম।</span>
              <span className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-teal-800">
                বিস্তারিত দেখুন
                <span aria-hidden="true" className="inline-block motion-safe:transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1">→</span>
              </span>
            </span>
          </Link>
          {/* The previous utility row used plain links and a right border after the date. */}
          {/* The utility strip previously aligned its contents to the right. */}
          {/* The previous strip wrapped and displayed the date in a gray box. */}
          {/* The previous utility row used a 24px right inset only on extra-wide screens. */}
          <div className="col-span-3 flex items-center justify-center gap-2 whitespace-nowrap border-t border-slate-100 py-1.5 xl:gap-4">
            <div className="flex min-w-0 items-center gap-1">
              <p className="mr-2 text-lg font-semibold leading-snug text-slate-900">{todayDate}</p>
              <Link
                href={`/${AJKER_PATRIKA_PAGE.slug}`}
                className={utilityLinkClass}
              >
                <RiNewspaperLine size={16} aria-hidden="true" className="text-red-700" />
                আজকের পত্রিকা
              </Link>
            </div>

            <Link
              href={"https://epaper.dailyadin.com/"}
              target="_blank"
              className={utilityLinkClass}
            >
              <IoMdPaper size={16} aria-hidden="true" className="text-red-700" />
              ই-পেপার
            </Link>

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setOpenSocialMediaDropdown(true)}
              onMouseLeave={() => setOpenSocialMediaDropdown(false)}
            >
              <button className={utilityLinkClass}>
                <IoIosShareAlt
                  size={16}
                  aria-hidden="true"
                  className="text-red-700"
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
