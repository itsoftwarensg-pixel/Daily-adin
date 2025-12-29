"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import HomeLead from "@/lib/features/home-page/lead";
import HomeMedia from "@/lib/features/home-page/media";
import HomeSports from "@/lib/features/home-page/sports";
import HomeCountry from "@/lib/features/home-page/country";
import HomeCommerce from "@/lib/features/home-page/commerce";
import HomeInternational from "@/lib/features/home-page/international";
import HomeClickedMemories from "@/lib/features/home-page/clicked-memories";
import HomeLaiceFitaPantholokCampus from "@/lib/features/home-page/laicefita-panthopolok-campus";
import BreakingNews from "@/lib/components/common/breaking-news";
import HomeVideo from "@/lib/features/home-page/video";
import { HomePageContnetSection, HomePagePhotoAlbumSection, HomePageVideoSection } from "@/lib/types/home.page";
import { getHomePageDataAction } from "@/app/actions/home";
import { HOME_PAGE_CHUNK_2 } from "@/lib/config/constant";

// Type for the combined home data
interface FullHomeData {
  'lead'?: HomePageContnetSection;
  'recent'?: HomePageContnetSection;
  'sports-news'?: HomePageContnetSection;
  'country'?: HomePageContnetSection;
  'entertainment-news'?: HomePageContnetSection;
  'world-news'?: HomePageContnetSection;
  'video'?: HomePageVideoSection;
  'business-news'?: HomePageContnetSection;
  'lifestyle'?: HomePageContnetSection; // lace tap
  'photo'?: HomePagePhotoAlbumSection; // clicked memories
  'national-news'?: HomePageContnetSection;
  'political-news'?: HomePageContnetSection;
}

// Props
interface Props {
  initialHomeData: FullHomeData;
}

const HomePage = ({ initialHomeData }: Props) => {
  const [homeData, setHomeData] = useState<FullHomeData>(initialHomeData);
  const [loading, setLoading] = useState(false);
  const [hasLoadedSecondChunk, setHasLoadedSecondChunk] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const loadSecondChunk = useCallback(async () => {
    if (loading || hasLoadedSecondChunk) return;

    setLoading(true);
    try {
      const secondChunkData = await getHomePageDataAction(HOME_PAGE_CHUNK_2);
      if (secondChunkData) {
        setHomeData((prev) => ({
          ...prev,
          ...secondChunkData,
        }));
        setHasLoadedSecondChunk(true);
      }
    } catch (error) {
      console.error("Failed to load home page second chunk", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasLoadedSecondChunk]);

  // Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadSecondChunk();
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
  }, [loadSecondChunk]);

  return (
    <>
      <BreakingNews />
      <HomeLead homeData={homeData as any} />

      {/* Second Chunk Components */}
      {hasLoadedSecondChunk && (
        <>
          <HomeSports homeData={homeData as any} />
          <HomeCountry homeData={homeData as any} />
          <HomeMedia homeData={homeData as any} />
          <HomeCommerce homeData={homeData as any} />
          <HomeInternational homeData={homeData as any} />
          <HomeVideo homeData={homeData as any} />
          <HomeLaiceFitaPantholokCampus homeData={homeData as any} />
          <HomeClickedMemories homeData={homeData as any} />
        </>
      )}

      {/* Loading Sentinel */}
      {!hasLoadedSecondChunk && (
        <div ref={observerTarget} className="h-20 w-full flex items-center justify-center">
          {loading && <p className="text-gray-500 animate-pulse">Loading more content...</p>}
        </div>
      )}
    </>
  );
};

export default HomePage;
