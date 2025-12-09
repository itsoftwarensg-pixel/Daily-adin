"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  globe,
  search,
  arrowUp,
  arrowDown,
  hamburger,
} from "@/lib/components/icons";
import { navItems } from "@/lib/data";
import { ImageWithFallback } from "@/lib/components/image";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="w-full flex items-center justify-between gap-5">
      <div className="w-full h-full flex items-stretch bg-gray-4">
        <div className="flex items-center gap-4 px-3 py-2">
          {navItems.map((item) => (
            <div
              key={item.text}
              className="relative flex flex-col"
              onMouseEnter={() => item.children && setOpenDropdown(item.text)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <div className="flex items-center gap-[10px] cursor-pointer text-[16px]">
                <Link
                  href={item.href ?? "#"}
                  className="flex items-center gap-[10px]"
                  onClick={(e) => item.children && e.preventDefault()}
                >
                  <p>{item.text}</p>

                  {item.children && (
                    <ImageWithFallback
                      src={openDropdown === item.text ? arrowUp : arrowDown}
                      width={10}
                      height={5}
                      alt="arrow"
                    />
                  )}
                </Link>
              </div>

              {/* Dropdown */}
              {item.children && openDropdown === item.text && (
                <div className="absolute w-fit shrink-0 z-50 flex flex-col top-[90%] left-0 mt-1 bg-[#F4F4F4] shadow-md rounded-md">
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

        <div className="px-3 py-2 border-l border-gray-5 ml-auto">
          <ImageWithFallback
            src={hamburger}
            width={24}
            height={24}
            alt="hamburger"
            className="leading-none"
          />
        </div>
      </div>

      <div className="w-auto h-full bg-gray-4 px-3 py-2 flex items-center gap-2 shrink-0">
        <ImageWithFallback src={search} width={24} height={24} alt="search" />
        <input
          type="text"
          className="w-auto bg-transparent focus:outline-none text-[14px] font-normal"
        />
        <div className="flex items-center gap-2">
          <ImageWithFallback src={globe} width={24} height={24} alt="globe" />
          <p className="text-[18px] font-medium leading-none">ENG</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
