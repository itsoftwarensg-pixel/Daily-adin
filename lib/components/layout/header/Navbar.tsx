"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navItems, newsJson } from "@/lib/data";

import { FiSearch, FiX } from "react-icons/fi";
import { whiteArrowDown } from "@/lib/components/icons";
import { ImageWithFallback } from "@/lib/components/image";
import { LuGlobe } from "react-icons/lu";

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
      <div className="w-full h-full flex items-stretch justify-between bg-[#D30000]">
        <div className="flex items-center gap-6 px-2.5 py-2">
          {navItems.map((item) => (
            <div
              key={item.text}
              className="relative flex flex-col"
              onMouseEnter={() => item.children && setOpenDropdown(item.text)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <div className="flex items-center gap-[10px] cursor-pointer text-[17px] font-semibold text-white">
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
                      className={`${openDropdown === item.text ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>
              </div>

              {item.children && openDropdown === item.text && (
                <div className="absolute min-w-[150px] w-fit shrink-0 z-50 flex flex-col top-[90%] left-0 mt-1 bg-[#F4F4F4] shadow-md rounded-md overflow-hidden">
                  {item.children.map((child) => (
                    <Link
                      key={child.text}
                      href={child.href ?? "#"}
                      className="flex items-center gap-[10px] px-5 py-[7px] text-[14px] hover:bg-red-100 hover:text-red-600"
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

        {/* Search, Language Icon */}
        <div className="w-36 flex items-center justify-between">
          <div
            className="group px-3 py-2 w-12 border-l border-red-400 ml-auto cursor-pointer"
            onClick={() => setSearchOpen(true)}
          >
            <FiSearch size={24} className="text-white group-hover:text-red-100" />
          </div>
          <div
            className="px-3 py-2 w-22 border-l group border-red-400 ml-auto text-white cursor-pointer"
          >
            <div className="flex items-center gap-2 group-hover:text-red-100">
              <LuGlobe size={20} className="text-white group-hover:text-red-100" />
              <span>ENG</span>
            </div>
          </div>
        </div>
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
