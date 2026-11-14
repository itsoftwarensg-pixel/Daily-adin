"use client";

import React, { useState } from "react";
import { ContentDetailsType } from "@/lib/types/details.page";
import Link from "next/link";
import { FiPrinter } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { RiTwitterXFill, RiWhatsappLine } from "react-icons/ri";

// Props
interface Props {
  contentDetails: ContentDetailsType;
  category: string;
  categoryUrl: string;
  showCategory?: boolean;
  showDetails?: boolean;
}

export const DetailsLeftSidebarCategory = ({
  category,
  categoryUrl,
}: {
  category: string;
  categoryUrl: string;
}) => (
  <Link
    href={categoryUrl}
    className="text-xl border-l-4 border-red-500 text-red-500 font-bold inline-flex gap-2 items-center mb-4 print:border-none print:text-gray-800 print:font-normal print:gap-0"
  >
    <span className="pl-4 print:pl-0">{category}</span>
    <IoIosArrowForward className="print:hidden" />
  </Link>
);

export const DetailsLeftSidebarDetails = ({
  contentDetails,
}: {
  contentDetails: ContentDetailsType;
}) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = contentDetails.full_url;
  const title = contentDetails.heading;

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.print();
  };

  return (
    <>
      {/* Writer, TODO:: Link to writer page */}
      <div className="text-gray-700 font-semibold mb-2">
        <span>
          {contentDetails?.writer?.custom_writer ? (
            contentDetails?.writer?.custom_writer
          ) : (
            <Link
              href={`${contentDetails?.writer?.full_url}`}
              className="hover:text-blue-700"
            >
              {contentDetails?.writer?.name}
            </Link>
          )}
        </span>
      </div>

      {/* Publish/updated time */}
      <div className="text-gray-500 mb-4">
        <p>প্রকাশিত: {contentDetails?.created_at_bangla}</p>

        {/* {contentDetails?.updated_at_bangla && (
          <p>আপডেট: {contentDetails.updated_at_bangla}</p>
        )} */}
      </div>

      {/* Social sharable links */}
      <div className="flex gap-1 mb-4 print:hidden">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          title="ফেসবুকে শেয়ার করুন"
        >
          <GrFacebookOption
            size={36}
            className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border"
          />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl
          )}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          title="এক্স (টুইটারে) শেয়ার করুন"
        >
          <RiTwitterXFill
            size={36}
            className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border"
          />
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            title + " " + shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          title="হোয়াটসঅ্যাপে শেয়ার করুন"
        >
          <RiWhatsappLine
            size={36}
            className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border"
          />
        </a>
        <div className="relative flex items-center">
          <button type="button" onClick={handleCopy} title="লিঙ্ক কপি করুন">
            <MdContentCopy
              size={36}
              className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border"
            />
          </button>
          {copied && (
            <span className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap animate-in fade-in zoom-in duration-200">
              কপি করা হয়েছে!
            </span>
          )}
        </div>
        <button type="button" onClick={handlePrint} title="প্রিন্ট করুন">
          <FiPrinter
            size={36}
            className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border"
          />
        </button>
      </div>
    </>
  );
};

const DetailsLeftSidebar = ({
  contentDetails,
  category,
  categoryUrl,
  showCategory = true,
  showDetails = true,
}: Props) => {
  return (
    <div className="mb-0">
      {showCategory && (
        <DetailsLeftSidebarCategory
          category={category}
          categoryUrl={categoryUrl}
        />
      )}
      {showDetails && (
        <DetailsLeftSidebarDetails contentDetails={contentDetails} />
      )}
    </div>
  );
};

export default DetailsLeftSidebar;
