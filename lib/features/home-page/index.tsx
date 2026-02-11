"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import LoadingNews from "@/lib/components/common/loader/loading-news";
import {
  HomePageVideoSection,
  HomePageContnetSection,
  HomePagePhotoAlbumSection,
  HomePageStarProgramSection,
  HomeLiveVideoSection,
} from "@/lib/types/home.page";
import HomeLead from "@/lib/features/home-page/lead";
import HomeMedia from "@/lib/features/home-page/media";
import HomeVideo from "@/lib/features/home-page/video";
import HomeSports from "@/lib/features/home-page/sports";
import { DivisionType } from "@/lib/types/district.page";
import HomeCountry from "@/lib/features/home-page/country";
import { HOME_PAGE_CHUNK_2 } from "@/lib/config/constant";
import { getHomePageDataAction } from "@/app/actions/home";
import HomeCommerce from "@/lib/features/home-page/commerce";
import BreakingNews from "@/lib/components/common/breaking-news";
import HomeInternational from "@/lib/features/home-page/international";
import HomeClickedMemories from "@/lib/features/home-page/clicked-memories";
import HomeLaiceFitaPantholokCampus from "@/lib/features/home-page/laicefita-panthopolok-campus";
import ElectionCountdown from "@/lib/features/special-event";

// Type for the combined home data
interface FullHomeData {
  scroll?: HomePageContnetSection;
  lead?: HomePageContnetSection;
  recent?: HomePageContnetSection;
  sports?: HomePageContnetSection;
  country?: HomePageContnetSection;
  entertainment?: HomePageContnetSection;
  international?: HomePageContnetSection;
  home_video?: HomeLiveVideoSection;
  star_program?: HomePageStarProgramSection;
  opinion?: HomePageContnetSection;
  video?: HomePageVideoSection;
  business?: HomePageContnetSection;
  lifestyle?: HomePageContnetSection; // lace tap
  photo?: HomePagePhotoAlbumSection; // clicked memories
  national?: HomePageContnetSection;
  politics?: HomePageContnetSection;
  tourism?: HomePageContnetSection; // 	পান্থলোক - sub-category
  campus?: HomePageContnetSection; //
  leisfita?: HomePageContnetSection; // sub-category
}

// Props
interface Props {
  initialHomeData: FullHomeData;
  divisionList: DivisionType[];
}

const HomePage = ({ initialHomeData, divisionList }: Props) => {
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
      {/* শিরোনাম - Scroll / Breaking News */}
      {homeData &&
        homeData.scroll &&
        homeData.scroll.contents &&
        homeData.scroll.contents.length > 0 && (
          <>
            <BreakingNews contents={homeData.scroll.contents} />
            <ElectionCountdown homeData={homeData as any} />
          </>
        )}

      {/* Fist Chunk data */}
      <HomeLead homeData={homeData as any} />

      {/* Second Chunk Components */}
      {hasLoadedSecondChunk && (
        <>
          <HomeSports data={homeData.sports} />
          <HomeCountry data={homeData.country} divisionList={divisionList} />
          <HomeMedia data={homeData.entertainment} />
          <HomeCommerce data={homeData.business} />
          <HomeInternational data={homeData.international} />
          <HomeVideo data={homeData.video} />
          <HomeLaiceFitaPantholokCampus
            data={{
              leisfita: homeData.leisfita,
              campus: homeData.campus,
              tourism: homeData.tourism,
            }}
          />
          <HomeClickedMemories data={homeData.photo} />
        </>
      )}

      {/* Loading Sentinel */}
      {!hasLoadedSecondChunk && (
        <div
          ref={observerTarget}
          className="w-full flex items-center justify-center min-h-[200px]"
        >
          {loading && <LoadingNews />}
        </div>
      )}
    </>
  );
};

export default HomePage;
