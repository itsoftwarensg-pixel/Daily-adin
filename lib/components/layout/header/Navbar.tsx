"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiSearch, FiX } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { NavbarMenuItem } from "@/lib/types/common.types";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  menus: NavbarMenuItem[];
}

const Navbar = ({ menus }: Props) => {
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const submitSearch = () => {
    const url = `/search-data?q=${encodeURIComponent(searchQuery.trim())}`;

    // Force full page reload
    window.location.href = url;

    closeSearch();
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submitSearch();
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        closeSearch();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSearch();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [searchOpen]);

  return (
    <div className="w-full flex flex-col items-start justify-between gap-3 print:hidden">
      <div className="w-full h-full flex items-stretch justify-between bg-white">
        <div ref={searchRef} className="flex-1 flex items-center px-4 py-2 pl-0">
          {!searchOpen ? (
            <div className="flex items-center gap-4">
              <Link href={"/"} className="text-[18px] font-semibold text-black">
                <AiOutlineHome />
              </Link>
              {menus &&
                menus.length > 0 &&
                menus.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex-col ${index > 9
                      ? "hidden xl:flex"
                      : index > 6
                        ? "hidden lg:flex"
                        : "flex"
                      }`}
                    onMouseEnter={() =>
                      item.children && setOpenDropdown(item.text)
                    }
                    onMouseLeave={() => item.children && setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href ?? "#"}
                      className="flex items-center gap-2 text-[17px] font-semibold text-black hover:text-red-500"
                    >
                      {item.text}
                      {item.children && (
                        <IoIosArrowDown
                          size={14}
                          className={`${openDropdown === item.text ? "rotate-180" : ""
                            } transition-all`}
                        />
                      )}
                    </Link>

                    {!item.isMegaMenu &&
                      item.children &&
                      openDropdown === item.text && (
                        <div className="absolute top-full left-0 w-36 bg-[#F4F4F4] rounded-md shadow-md z-50 py-2">
                          {item.children.map((child) => {
                            const href = child.isCat
                              ? `${child.href}`
                              : `${item.href}/${child.href}`;
                            return (
                              <Link
                                key={child.text}
                                href={href}
                                className="block px-5 py-2 hover:bg-red-100 hover:text-red-600 font-medium"
                              >
                                {child.text}
                              </Link>
                            );
                          })}
                        </div>
                      )}

                    {item.isMegaMenu &&
                      item.children &&
                      openDropdown === item.text && (
                        <div className="absolute top-full -right-3 w-[600px] pt-1 z-50">
                          <div className="grid grid-cols-3 bg-[#F4F4F4] rounded-md shadow-md z-50 overflow-hidden py-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.text}
                                href={`/${child.href}`}
                                className="block px-5 py-2 hover:bg-red-100 hover:text-red-600 font-medium"
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
                placeholder="সংবাদ খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 px-4 py-1 rounded-md text-sm focus:outline-none"
              />
              <button onClick={closeSearch} className="text-black shrink-0">
                <FiX size={24} />
              </button>
              {/* Search icon */}

              <div className="flex items-center justify-between">
                <a href={`/search-data?q=${encodeURIComponent(searchQuery.trim())}`}
                  className="group px-3 py-2 w-12 border-l border-r border-gray-200 ml-auto cursor-pointer"
                >
                  <FiSearch
                    size={24}
                    className="text-black group-hover:text-gray-600"
                  />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Search icon */}
        {!searchOpen &&
          <div className="flex items-center justify-between">
            <div
              className="group px-3 py-2 w-12 border-l border-r border-gray-200 ml-auto cursor-pointer"
              onClick={() => setSearchOpen(true)}
            >
              <FiSearch
                size={24}
                className="text-black group-hover:text-gray-600"
              />
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
