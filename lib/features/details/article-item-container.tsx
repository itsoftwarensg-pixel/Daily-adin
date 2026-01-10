"use client";

import React, { FC, useCallback, useEffect, useRef } from "react";
import { ContentDetailsType } from "@/lib/types/details.page";
import ArticleContent from "./article-content";
import Container from "@/lib/components/common/container";
import DetailsRightSidebarClient from "./right-sidebar-client";
import Image from "next/image";
import logo from "@/public/logo.png";

type Props = {
  article: ContentDetailsType;
  index: number;
  latestPopularData: any;
  isLast: boolean;
};

// Module-level flag to prevent multiple instances from handling the same keyboard event
let isHandlingKeyboardPrint = false;

const ArticleItemContainer: FC<Props> = React.memo(
  ({ article, index, latestPopularData, isLast }) => {
    const isPrintingRef = useRef(false);
    const currentRef = useRef<HTMLDivElement>(null);

    const scrollCallback = useCallback(() => {
      // If we're about to print or actively printing, ignore scroll events
      if (isPrintingRef.current) return false;

      const el = currentRef.current;
      if (el) {
        const { top, left, bottom } = el.getBoundingClientRect();
        const { innerHeight } = window;
        return (
          (top < 150 && top >= 0) ||
          (bottom >= innerHeight / 2 && bottom < innerHeight && left >= 0)
        );
      }
      return false;
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        // Critical: Skip all scroll detection if print is active
        if (isPrintingRef.current) return;

        const isInViewport = scrollCallback();
        if (isInViewport) {
          // Check pathname to avoid redundant replaceState
          const currentPath = window.location.pathname;
          const targetPath = new URL(article.full_url, window.location.origin)
            .pathname;

          if (currentPath !== targetPath) {
            window.history.replaceState(null, "", article.full_url);

            const newTitle =
              article.meta_title || `${article.heading} | The Daily Adin`;
            if (document.title !== newTitle) {
              document.title = newTitle;
            }

            // Enforce print visibility when active
            const items = document.querySelectorAll("div[data-print-id]");
            if (items && items.length > 0) {
              Array.from(items).forEach((item) => {
                if (
                  item.getAttribute("data-print-id") === article.id.toString()
                ) {
                  item.classList.remove("print:hidden");
                } else {
                  item.classList.add("print:hidden");
                }
              });
            }
          }
        }
      };

      // Intercept keyboard shortcuts for print (Cmd+P / Ctrl+P)
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "p") {
          // If another instance is already handling this keypress, ignore it
          if (isHandlingKeyboardPrint) return;

          // Only handle print if THIS article is currently active in viewport
          const isActive = scrollCallback();
          if (!isActive) return;

          // Mark that we're handling this keypress
          isHandlingKeyboardPrint = true;

          // Immediately lock the print state BEFORE the browser scrolls
          isPrintingRef.current = true;

          // Prevent default to stop browser's native print
          e.preventDefault();

          // Trigger print manually after a tiny delay to ensure lock is set
          setTimeout(() => {
            window.print();
          }, 10);
        }
      };

      const handleBeforePrint = () => {
        isPrintingRef.current = true;
      };

      const handleAfterPrint = () => {
        isPrintingRef.current = false;
        // Reset the global flag so future prints can work
        isHandlingKeyboardPrint = false;
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("beforeprint", handleBeforePrint);
      window.addEventListener("afterprint", handleAfterPrint);

      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("beforeprint", handleBeforePrint);
        window.removeEventListener("afterprint", handleAfterPrint);
      };
    }, [article, scrollCallback]);

    return (
      <div
        data-print-id={article.id}
        className={`${index !== 0 ? "print:hidden" : ""}`}
      >
        <div ref={currentRef}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-6 mb-12 print:grid-cols-12 print:gap-0 print:mb-0">
              <div className="col-span-auto print:col-span-12">
                <ArticleContent contentDetails={article} />
              </div>

              {/* Right Sidebar */}
              <div className="col-span-auto lg:sticky lg:top-16 self-start print:hidden">
                <DetailsRightSidebarClient
                  latestNews={latestPopularData?.recent?.contents || []}
                  popularNews={latestPopularData?.popular?.contents || []}
                />
              </div>
            </div>
          </Container>
        </div>

        {/* Divider between articles */}
        {!isLast && (
          <div className="relative flex items-center my-16 print:hidden">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-6">
              <Image
                src={logo}
                alt="Daily Adin Logo"
                width={150}
                height={50}
                className="h-12 w-auto grayscale opacity-50"
              />
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
        )}
      </div>
    );
  }
);

ArticleItemContainer.displayName = "ArticleItemContainer";

export default ArticleItemContainer;
