import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import {
  x,
  feed,
  youtube,
  whatsapp,
  telegram,
  linkedIn,
  facebook,
  messenger,
  instagram,
  pinterest,
  googleNews,
  tiktok,
} from "@/lib/components/icons";

const SOCIAL_DATA = [
  {
    title: "ফেসবুক",
    type: "grid-2",
    links: [
      {
        name: "The Daily Adin",
        href: "https://www.facebook.com/dailyadin/?ref=waios.fb_links_xma_control",
        icon: facebook,
      },
      {
        name: "The Daily Adin",
        href: "https://www.youtube.com/@dailyadinbd",
        icon: youtube,
      },
    ],
  },
  // {
  //   title: "ইউটিউব",
  //   type: "grid-2",
  //   links: [
  //     {
  //       name: "The Daily Adin",
  //       href: "https://www.youtube.com",
  //       icon: youtube,
  //     },
  //     {
  //       name: "Alternative Page",
  //       href: "https://www.youtube.com",
  //       icon: youtube,
  //     },
  //   ],
  // },
  {
    type: "grid-3",
    items: [
      {
        title: "এক্স",
        name: "The Daily Adin",
        href: "#",
        icon: x,
      },
      {
        title: "টিকটক",
        name: "The Daily Adin",
        href: "https://www.tiktok.com/@adinbd?_r=1&_t=ZS-92gEDUTEwkL",
        icon: tiktok,
      },
      {
        title: "ইনস্টাগ্রাম",
        name: "The Daily Adin",
        href: "#",
        icon: instagram,
      },
    ],
  },
  {
    type: "grid-3",
    items: [
      {
        title: "লিঙ্কডইন",
        name: "The Daily Adin",
        href: "#",
        icon: linkedIn,
      },
      {
        title: "পিন্টারেস্ট",
        name: "The Daily Adin",
        href: "#",
        icon: pinterest,
      },
      {
        title: "গুগল নিউজ",
        name: "The Daily Adin",
        href: "#",
        icon: googleNews,
      },
    ],
  },
  {
    type: "grid-3",
    items: [
      {
        title: "হোয়াটসঅ্যাপ",
        name: "The Daily Adin",
        href: "#",
        icon: whatsapp,
      },
      {
        title: "টেলিগ্রাম",
        name: "The Daily Adin",
        href: "#",
        icon: telegram,
      },
      {
        title: "মেসেঞ্জার",
        name: "The Daily Adin",
        href: "#",
        icon: messenger,
      },
    ],
  },
  {
    type: "grid-3",
    isLast: true,
    items: [
      {
        title: "ফিড",
        name: "The Daily Adin",
        href: "#",
        icon: feed,
      },
    ],
  },
];

const SocialMediaDropdown = () => {
  return (
    <div className="absolute right-0 mt-3 w-[600px] rounded-md bg-white shadow-lg border z-[9999]">
      <div className="absolute -top-2 right-5 w-4 h-4 bg-white border-l border-t rotate-45" />

      <div className="max-w-full w-full px-6">
        {SOCIAL_DATA.map((section, idx) => (
          <div
            key={idx}
            className={`py-5 ${section.isLast ? "" : "border-b border-gray-300"
              } ${section.type === "grid-3"
                ? "grid grid-cols-3 gap-3"
                : "flex flex-col gap-3"
              }`}
          >
            {section.type === "grid-2" && section.links && (
              <>
                <p className="text-lg font-semibold">{section.title}</p>
                <div className="grid grid-cols-2 gap-3">
                  {section.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      target="_blank"
                      href={link.href}
                      className="flex items-center gap-2 group"
                    >
                      <ImageWithFallback
                        src={link.icon}
                        width={18}
                        height={18}
                        alt={link.name}
                      />
                      <p className="font-medium group-hover:text-blue-700">{link.name}</p>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {section.type === "grid-3" &&
              section.items?.map((item, iIdx) => (
                <div key={iIdx} className="flex flex-col gap-3">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <Link
                    target="_blank"
                    href={item.href}
                    className="flex items-center gap-2 group"
                  >
                    <ImageWithFallback
                      src={item.icon}
                      width={18}
                      height={18}
                      alt={item.name}
                    />
                    <p className="font-medium group-hover:text-blue-700">{item.name}</p>
                  </Link>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaDropdown;
