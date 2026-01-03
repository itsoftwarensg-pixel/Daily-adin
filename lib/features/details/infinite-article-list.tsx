"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { getContentByIdAction } from "@/app/actions/content";
import {
  ContentDetailsType,
  ContentDetailsNextItemType,
} from "@/lib/types/details.page";
import ArticleContent from "./article-content";
import DetailsLeftSidebar from "./left-sidebar";
import DetailsRightSidebarClient from "./right-sidebar-client";
import { Category } from "@/lib/types/category.page";
import Container from "@/lib/components/common/container";
import Image from "next/image";
import logo from "@/public/logo.png";

interface Props {
  initialContent: ContentDetailsType;
  category: Category;
  latestPopularData: any;
}

const InfiniteArticleList = ({
  initialContent,
  category,
  latestPopularData,
}: Props) => {
  const [articles, setArticles] = useState<ContentDetailsType[]>([
    initialContent,
  ]);
  const [nextIds, setNextIds] = useState<ContentDetailsNextItemType[]>(
    initialContent.next_ids || []
  );
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);
  const articleRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const loadMore = useCallback(async () => {
    if (loading || nextIds.length === 0) return;

    setLoading(true);
    const nextItem = nextIds[0];
    const remainingIds = nextIds.slice(1);

    try {
      const newContent = await getContentByIdAction(
        nextItem.id,
        "next_ids,writer,tags,category"
      );

      if (newContent && newContent.id) {
        setArticles((prev) => [...prev, newContent]);
        setNextIds(remainingIds);
      }
    } catch (error) {
      console.error("Failed to load more content", error);
    } finally {
      setLoading(false);
    }
  }, [loading, nextIds]);

  // Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loadMore]);

  // URL & Title Update Observer
  useEffect(() => {
    const intersectingMap = new Map<number, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const articleId = Number(entry.target.getAttribute("data-id"));
          if (entry.isIntersecting) {
            intersectingMap.set(articleId, true);
          } else {
            intersectingMap.delete(articleId);
          }
        });

        const activeArticle = articles.find((article) =>
          intersectingMap.has(article.id)
        );

        if (activeArticle) {
          const newUrl = activeArticle.full_url;
          // const normalizedUrl = newUrl.replace(
          //   "https://bongonews24.com",
          //   "http://localhost:3000"
          // );

          if (window.location.href !== newUrl) {
            window.history.replaceState(null, "", newUrl);
          }

          const newTitle =
            activeArticle.meta_title ||
            `${activeArticle.heading} | The Daily Adin`;
          if (document.title !== newTitle) {
            document.title = newTitle;
          }
        }
      },
      {
        rootMargin: "-120px 0px 0px 0px",
        threshold: 0,
      }
    );

    Object.values(articleRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [articles]);

  return (
    <div>
      {articles.map((article, index) => (
        <div
          key={article.id}
          ref={(el) => {
            if (el) articleRefs.current[article.id] = el;
          }}
          data-id={article.id}
          className="article-container"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-6 mb-12">
              <div className="col-span-auto">
                <div className="grid grid-cols-12 gap-0 md:gap-4">
                  {/* Left Sidebar */}
                  <div className="col-span-full md:col-span-3 lg:sticky lg:top-16 self-start">
                    <DetailsLeftSidebar
                      category={`${article.category?.name || category.name}`}
                      categoryUrl={`/${article.category?.alias || category.alias
                        }`}
                      contentDetails={article}
                    />
                  </div>

                  {/* Main content */}
                  <div className="col-span-12 md:col-span-9">
                    <ArticleContent contentDetails={article} />
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="col-span-auto lg:sticky lg:top-16 self-start">
                <DetailsRightSidebarClient
                  latestNews={latestPopularData?.recent?.contents || []}
                  popularNews={latestPopularData?.popular?.contents || []}
                />
              </div>
            </div>
          </Container>

          {/* Divider between articles */}
          {index < articles.length - 1 && (
            <div className="relative flex items-center my-16">
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
      ))}

      {/* Loading Sentinel */}
      <div ref={observerTarget} className="h-10 mt-4">
        {loading && <p className="text-center text-gray-500">Loading...</p>}
      </div>
    </div>
  );
};

export default InfiniteArticleList;
