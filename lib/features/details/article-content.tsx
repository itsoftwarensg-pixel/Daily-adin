"use client";

import React, { memo } from "react";
import Link from "next/link";
import HtmlContent from "@/lib/components/common/html-content";
import { ContentDetailsType } from "@/lib/types/details.page";
import { ImageWithFallback } from "@/lib/components/image";
import {
  DetailsLeftSidebarCategory,
  DetailsLeftSidebarDetails,
} from "./left-sidebar";

interface Props {
  contentDetails: ContentDetailsType;
  forwardRef?: React.Ref<HTMLDivElement>;
}

const ArticleContent = memo(({ contentDetails, forwardRef }: Props) => {
  return (
    <div ref={forwardRef} className="grid grid-cols-1 xl:grid-cols-12 gap-0">
      {/* 1. Desktop Only Sidebar (Category + Details) */}
      <div className="hidden xl:block xl:col-span-3 xl:sticky xl:top-16 self-start xl:pr-8 print:hidden">
        <DetailsLeftSidebarCategory
          category={contentDetails.category.name}
          categoryUrl={`/${contentDetails.category.alias}`}
        />
        <div className="mt-2">
          <DetailsLeftSidebarDetails contentDetails={contentDetails} />
        </div>
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="xl:col-span-9 flex flex-col print:col-span-12">
        {/* Mobile-Only Category (Interleaved) */}
        <div className="xl:hidden block print:block">
          <DetailsLeftSidebarCategory
            category={contentDetails.category.name}
            categoryUrl={`/${contentDetails.category.alias}`}
          />
        </div>

        {/* Sub-heading */}
        {contentDetails.sub_heading && (
          <h4 className="text-xl mb-1 font-medium text-gray-700 leading-9">
            {contentDetails.sub_heading}
          </h4>
        )}
        {/* Headline/Title */}
        <h1 className="text-2xl lg:text-4xl font-semibold mb-3">
          {contentDetails.heading}
        </h1>

        {/* Mobile-Only Metadata/Social (Interleaved) */}
        <div className="xl:hidden block print:block">
          <DetailsLeftSidebarDetails contentDetails={contentDetails} />
        </div>

        {/* Image, Body & Rest */}
        <div>
          {/* Image */}
          <div className="mb-2.5">
            {/* News Image */}
            <ImageWithFallback
              src={`${contentDetails.full_image_path}`}
              height={900}
              width={1200}
              alt={`${contentDetails.heading}`}
              className="w-full object-cover h-full"
            />

            {/* Image Caption */}
            {contentDetails.bg_image_caption && (
              <p className="block text-gray-500 bg-gray-100 py-1 text-center text-sm">
                {contentDetails.bg_image_caption}
              </p>
            )}
          </div>

          {/* Content details */}
          <article className="mb-3 text-black leading-8 text-lg content-details">
            <HtmlContent html={contentDetails.content_details} />
          </article>

          {/* Initial */}
          {contentDetails?.initial && (
            <p className="text-gray-600 text-[15px] mb-4 italic print:hidden">
              {contentDetails.initial}
            </p>
          )}

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-1 items-center print:hidden">
            {contentDetails &&
              contentDetails.tags &&
              contentDetails.tags.length > 0 &&
              contentDetails.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={tag.full_url}
                  className="border rounded px-4 pt-1.5 pb-1 text-sm bg-gray-0 hover:bg-gray-100"
                >
                  {tag.name}
                </Link>
              ))}
          </div>

          {/* Follow google news */}
          <div className="bg-amber-50 border border-amber-200 px-4 py-2 d-print-none hover:border-amber-300 print:hidden">
            <a
              href="https://news.google.com/publications/?"
              className="text-dark flex items-center justify-center gap-4"
              target="_blank"
            >
              <img
                className="img-fluid w-8"
                src="https://cdn.dailyadin.com/uploads/January2026/google-news-feed-202601011110526261393218.png"
                alt=" Google News"
              />
              সর্বশেষ খবর পেতে দৈনিক এদিন এর গুগল নিউজ চ্যানেল ফলো করুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

ArticleContent.displayName = "ArticleContent";

export default ArticleContent;
