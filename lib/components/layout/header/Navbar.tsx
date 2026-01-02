"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/lib/data";
import { LuGlobe } from "react-icons/lu";
import { FiSearch, FiX } from "react-icons/fi";
import { whiteArrowDown } from "@/lib/components/icons";
import { ImageWithFallback } from "@/lib/components/image";
import { AiOutlineHome } from "react-icons/ai";

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
        <div className="flex-1 flex items-center px-4 py-2">

          {!searchOpen ? (
            <div className="flex items-center gap-6">
              <Link
                href={'/'}
                className="text-[18px] font-semibold text-white"
              >
                <AiOutlineHome />
              </Link>
              {navItems.map((item) => (
                <div
                  key={item.text}
                  className="relative flex flex-col"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.text)
                  }
                  onMouseLeave={() => item.children && setOpenDropdown(null)}
                >
                  <Link
                    href={item.href ?? "#"}
                    className="flex items-center gap-2 text-[17px] font-semibold text-white"
                  >
                    {item.text}

                    {item.children && (
                      <ImageWithFallback
                        src={whiteArrowDown}
                        width={10}
                        height={5}
                        alt="arrow"
                        className={
                          openDropdown === item.text ? "rotate-180" : ""
                        }
                      />
                    )}
                  </Link>

                  {!item.isMegaMenu && item.children && openDropdown === item.text && (
                    <div className="absolute top-full left-0 w-36 bg-[#F4F4F4] rounded-md shadow-md z-50 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.text}
                          href={`${item.href}/${child.href}`}
                          className="block px-5 py-2 text-sm hover:bg-red-100 hover:text-red-600"
                        >
                          {child.text}
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.isMegaMenu && item.children && openDropdown === item.text && (
                    <div className="absolute top-full -right-3 w-[600px] pt-1 z-50">
                      <div className="grid grid-cols-3 bg-[#F4F4F4] rounded-md shadow-md z-50 overflow-hidden py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.text}
                            href={`/${child.href}`}
                            className="block px-5 py-2 text-sm hover:bg-red-100 hover:text-red-600 font-medium"
                          >
                            {child.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center w-full gap-2">
              <input
                autoFocus
                type="text"
                placeholder="Search news..."
                className="flex-1 px-4 py-1 rounded-md text-mds focus:outline-none"
              />

              <button
                onClick={() => setSearchOpen(false)}
                className="text-white"
              >
                <FiX size={24} />
              </button>
            </div>
          )}
        </div>

        {/* Search, Language Icon */}
        <div className="w-36 flex items-center justify-between">
          <div
            className="group px-3 py-2 w-12 border-l border-red-400 ml-auto cursor-pointer"
            onClick={() => setSearchOpen(true)}
          >
            <FiSearch
              size={24}
              className="text-white group-hover:text-red-100"
            />
          </div>
          {/* <div className="px-3 py-2 w-22 border-l group border-red-400 ml-auto text-white cursor-pointer">
            <div className="flex items-center gap-2 group-hover:text-red-100">
              <LuGlobe
                size={20}
                className="text-white group-hover:text-red-100"
              />
              <span>ENG</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
