"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import logo from "@/public/logo.svg";
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
import { AiOutlineClose } from "react-icons/ai";

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
  }, [pathname]);

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
    <div className="w-full bg-white border-b-red-500 border-b-2 pb-2 md:pb-0">
      <div className="flex justify-between items-center gap-10 z-50">
        <Link
          href={"/"}
          className="relative overflow-hidden w-24 h-12 md:w-80 md:h-40"
        >
          <ImageWithFallback
            src={logo}
            alt="The Daily Adin Logo"
            className="object-contain"
          />
        </Link>

        <div className="relative overflow-hidden hidden md:block">
          <ImageWithFallback
            src={headerBanner}
            width={500}
            height={150}
            alt="The Daily Adin Logo"
            className="object-contain"
          />
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
        </button>

        <div className="hidden md:flex flex-col gap-2 items-end">
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

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setOpenSocialMediaDropdown(true)}
              onMouseLeave={() => setOpenSocialMediaDropdown(false)}
            >
              <button
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="flex-1 bg-black/30"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="md:hidden bg-white shadow-lg h-screen w-80 overflow-y-auto pb-12">
            {/* Header */}
            <div className="sticky top-0 bg-gray-100 px-4 py-4 flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)}>
                <AiOutlineClose size={24} />
              </button>
            </div>

            {/* Navigation */}
            <div>
              {navItems.map((item, index) => {
                const isOpen = openSubmenus.includes(index);

                return (
                  <div key={index} className="border-b border-gray-200">
                    {/* Parent row */}
                    <div className="group flex items-center justify-between px-2 hover:bg-gray-100 transition-colors">
                      <Link
                        href={item.href}
                        className={`px-2 py-3 font-medium w-full
                    transition-colors
                    group-hover:text-red-500
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
                          className="w-[15%] flex items-center justify-center
                               text-gray-500
                               transition-all
                               group-hover:text-red-500"
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
                        {item.children.map((child, i) => (
                          <Link
                            key={i}
                            href={`${item.href}/${child.href}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-gray-600
                                 hover:text-red-500 hover:bg-gray-100
                                 transition-colors"
                          >
                            {child.text}
                          </Link>
                        ))}
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
