"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/lib/data";
import Marquee from "react-fast-marquee";
import { FiSearch, FiX } from "react-icons/fi";
import { whiteArrowDown } from "@/lib/components/icons";
import { ImageWithFallback } from "@/lib/components/image";

const Navbar = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [searchOpen]);

  return (
    <div className="w-full flex flex-col items-start justify-between gap-3">
      {/* Navbar */}
      <div className="w-full h-full flex items-stretch bg-[#D30000]">
        <div className="flex items-center gap-6 px-3 py-2">
          {navItems.map((item) => (
            <div
              key={item.text}
              className="relative flex flex-col"
              onMouseEnter={() => item.children && setOpenDropdown(item.text)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <div className="flex items-center gap-[10px] cursor-pointer text-[16px] text-white">
                <Link
                  href={item.href ?? "#"}
                  className="flex items-center gap-[6px]"
                  onClick={(e) => item.children && e.preventDefault()}
                >
                  <p>{item.text}</p>

                  {item.children && (
                    <ImageWithFallback
                      src={whiteArrowDown}
                      width={10}
                      height={5}
                      alt="whiteArrowDown"
                      className={`${
                        openDropdown === item.text ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
              </div>

              {item.children && openDropdown === item.text && (
                <div className="absolute min-w-[150px] w-fit shrink-0 z-50 flex flex-col top-[90%] left-0 mt-1 bg-[#F4F4F4] shadow-md rounded-md">
                  {item.children.map((child) => (
                    <Link
                      key={child.text}
                      href={child.href ?? "#"}
                      className="flex items-center gap-[10px] px-5 py-[7px] text-[14px]"
                    >
                      <div className="bg-primaryRed w-2.5 h-2.5 rounded-full shrink-0" />
                      {child.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Icon */}
        <div
          className="px-3 py-2 border-l border-gray-5 ml-auto cursor-pointer"
          onClick={() => setSearchOpen(true)}
        >
          <FiSearch size={24} className="text-white" />
        </div>
      </div>

      {/* Title row */}
      <div className="flex items-center justify-end text-[16px] font-normal w-full">
        <div className="bg-[#FF4646] text-white px-3 py-2 shrink-0 border-l-[6px] border-b border-black">
          শিরোনাম :
        </div>

        <Marquee
          pauseOnHover={true}
          speed={50}
          gradient={false}
          className="bg-[#FFB2B2] px-5 py-2 border-t border-black"
        >
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="bg-primaryRed w-2.5 h-2.5 rounded-full shrink-0" />
              <p>আইনশৃঙ্খলা পরিস্থিতির অবনতির শঙ্কা নেই: স্বরাষ্ট্র উপদেষ্টা</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-primaryRed w-2.5 h-2.5 rounded-full shrink-0" />
              <p>
                নির্বাচনে ইসিকে সর্বাত্মক সহযোগিতা করবে সেনাবাহিনী: সেনাপ্রধান
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-primaryRed w-2.5 h-2.5 rounded-full shrink-0" />
              <p>আগামী নির্বাচনের প্রস্তুতি দ্রুত এবং স্বচ্ছভাবে সম্পন্ন হবে</p>
            </div>
          </div>
        </Marquee>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center p-5">
          <div ref={searchRef} className="max-w-full w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSearchOpen(false)}
            >
              <FiX size={25} className="text-red-500" />
            </button>

            <input
              type="text"
              placeholder="Search..."
              className="w-full px-8 py-4 text-lg rounded-md focus:outline-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
