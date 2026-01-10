"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import LoadingNews from "@/lib/components/common/loader/loading-news";
import { getContentByIdAction } from "@/app/actions/content";
import {
  ContentDetailsType,
  ContentDetailsNextItemType,
} from "@/lib/types/details.page";
import ArticleItemContainer from "./article-item-container";
import { Category } from "@/lib/types/category.page";

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
    (initialContent.next_ids || []).filter((id) => id.id !== initialContent.id)
  );
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loadingRef.current || nextIds.length === 0) return;

    loadingRef.current = true;
    setLoading(true);

    const nextItem = nextIds[0];
    const remainingIds = nextIds.slice(1);

    try {
      const newContent = await getContentByIdAction(
        nextItem.id,
        "next_ids,writer,tags,category"
      );

      // Always update nextIds to consume the current item, even if fetch fails or is duplicate
      setNextIds(remainingIds);

      if (newContent && newContent.id) {
        setArticles((prev) => {
          // Double check to prevent duplicates
          if (prev.some((a) => a.id === newContent.id)) {
            return prev;
          }
          return [...prev, newContent];
        });
      }
    } catch (error) {
      console.error("Failed to load more content", error);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [nextIds]);

  // Infinite Scroll Observer for loading more
  useEffect(() => {
    if (nextIds.length === 0) return;

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
  }, [loadMore, nextIds.length]);

  return (
    <div>
      {articles.map((article, index) => (
        <ArticleItemContainer
          key={article.id}
          article={article}
          index={index}
          latestPopularData={latestPopularData}
          isLast={index === articles.length - 1}
        />
      ))}

      {/* Loading Sentinel */}
      {nextIds.length > 0 && (
        <div ref={observerTarget} className="h-10 mt-4 print:hidden">
          {loading && <LoadingNews />}
        </div>
      )}
    </div>
  );
};

export default InfiniteArticleList;
