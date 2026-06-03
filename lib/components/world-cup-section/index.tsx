"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getTopicBySlugAction } from "@/app/actions/topic";
import { getContentsByTopicIdAction } from "@/app/actions/content";
import { TopicContentItem } from "@/lib/types/topic.page";
import { ImageWithFallback } from "@/lib/components/image";

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
        // silently fail
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (!loading && contents.length === 0) return null;

  return (
    <section className="relative max-w-6xl mx-auto p-4 bg-gradient-to-b from-emerald-100 via-amber-200 to-amber-50 rounded-xl shadow-2xl ring-2 ring-amber-300 hover:ring-amber-400 transition-all duration-500 transform hover:scale-[1.01] overflow-hidden">

      {/* Floating decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 right-6 text-amber-400 text-4xl animate-bounce-slow">🏆</div>
        <div className="absolute top-5 left-3 text-yellow-300 text-xl animate-pulse">⚽</div>
      </div>

      {/* Section Heading */}
      <Link
        href={TAG_URL}
        className="relative text-xl md:text-2xl font-extrabold text-center text-amber-700 mb-4 border-b-2 border-amber-300 pb-2 drop-shadow-md block hover:text-amber-500 transition-all duration-300"
      >
        মহারণ ২০২৬
      </Link>

      {/* Contents */}
      <div className="relative space-y-2">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="block overflow-hidden rounded-lg bg-white/60 shadow-lg animate-pulse">
                <div className="flex gap-3 items-center p-3">
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-amber-200 rounded w-full" />
                    <div className="h-3 bg-amber-200 rounded w-3/4" />
                  </div>
                  <div className="w-[60px] flex-shrink-0 aspect-[16/12] rounded bg-amber-200" />
                </div>
              </div>
            ))
          : contents.map((item, idx) => (
              <Link
                key={item.id}
                href={item.full_url}
                className="block group overflow-hidden rounded-lg bg-white/60 shadow-lg backdrop hover:shadow-2xl transition-all duration-300 relative hover:bg-white"
              >
                <div className="flex gap-3 items-center p-3">
                  {/* Text */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 group-hover:text-amber-600 leading-snug">
                      {item.sub_heading ? (
                        <>
                          <span className="text-emerald-600">{item.sub_heading}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block mx-1" />
                          <span>{item.heading}</span>
                        </>
                      ) : (
                        item.heading
                      )}
                    </h4>
                  </div>

                  {/* Thumbnail */}
                  <div className="w-[60px] flex-shrink-0 border">
                    <div className="aspect-[16/12]">
                      <ImageWithFallback
                        src={item.full_image_path}
                        height={100}
                        width={160}
                        alt={item.heading}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>

      {/* CTA */}
      <div className="mt-3 flex justify-center">
        <Link
          href={TAG_URL}
          className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 text-white shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-300"
        >
          আরও দেখুন
        </Link>
      </div>
    </section>
  );
}
