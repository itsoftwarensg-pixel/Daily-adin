"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getTopicBySlugAction } from "@/app/actions/topic";
import { getContentsByTopicIdAction } from "@/app/actions/content";
import { TopicContentItem } from "@/lib/types/topic.page";
import { ImageWithFallback } from "@/lib/components/image";
import { toBanglaNumber } from "@/lib/utils/helpers";

const TAG_SLUG = "ফুটবল-বিশ্বকাপ-২০২৬";
const TAG_URL = `/topic/${TAG_SLUG}`;

export default function WorldCupSection() {
  const [contents, setContents] = useState<TopicContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const topic = await getTopicBySlugAction(TAG_SLUG);
        if (!topic?.id) return;
        const data = await getContentsByTopicIdAction(topic.id, 1, 5);
        setContents(data?.data?.slice(0, 5) ?? []);
      } catch {
        // silently fail — section simply won't render
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (!loading && contents.length === 0) return null;

  return (
    <section className="relative overflow-hidden rounded-xl shadow-lg ring-1 ring-green-800/30">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#0a3d1f] via-[#145a32] to-[#1a7a40] px-4 py-3 flex items-center justify-between">
        <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400" />
        <div className="flex items-center gap-2 pl-2">
          <span className="text-2xl">⚽</span>
          <div>
            <p className="text-yellow-400 text-[10px] font-semibold uppercase tracking-widest leading-none">
              FIFA World Cup 2026
            </p>
            <h3 className="text-white text-lg font-extrabold leading-tight">
              মহারণ ২০২৬
            </h3>
          </div>
        </div>
        <span className="text-yellow-400 text-2xl select-none">🏆</span>
      </div>

      {/* Loading skeleton */}
      {loading ? (
        <div className="bg-white divide-y divide-gray-100">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 animate-pulse">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-1.5">
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-3/4" />
              </div>
              <div className="flex-shrink-0 w-[60px] aspect-[4/3] rounded bg-gray-200" />
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white divide-y divide-gray-100">
          {contents.map((item, idx) => (
            <Link
              key={item.id}
              href={item.full_url}
              className="flex items-center gap-3 px-3 py-2.5 group hover:bg-green-50 transition-colors duration-200"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-700 text-white text-xs font-bold flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-200">
                {toBanglaNumber(idx + 1)}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-green-800 leading-snug line-clamp-2">
                  {item.sub_heading ? (
                    <>
                      <span className="text-green-700">{item.sub_heading}</span>
                      <span className="w-1 h-1 rounded-full bg-green-400 inline-block mx-1 align-middle" />
                      <span>{item.heading}</span>
                    </>
                  ) : (
                    item.heading
                  )}
                </h4>
              </div>
              <div className="flex-shrink-0 w-[60px]">
                <div className="aspect-[4/3] overflow-hidden rounded">
                  <ImageWithFallback
                    src={item.full_image_path}
                    height={90}
                    width={120}
                    alt={item.heading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-[#0a3d1f] to-[#145a32] px-4 py-2.5 flex justify-center">
        <Link
          href={TAG_URL}
          className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-sm font-semibold bg-yellow-400 text-green-900 hover:bg-yellow-300 active:scale-95 transition-all duration-200 shadow"
        >
          আরও দেখুন
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
