"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { LiaSpinnerSolid } from "react-icons/lia";
import { searchContentsAction } from "@/app/actions/content";
import { ImageWithFallback } from "@/lib/components/image";
import NoContentFound from "@/lib/components/no-content-found";
import { toBanglaNumber } from "@/lib/utils/helpers";

export interface SearchContentItem {
  id: number;
  sub_heading: string | null;
  heading: string;
  description: string;
  created_at: string;
  created_at_bangla: string;
  full_image_path: string;
  full_url: string;
  categoryName: string;
}

export interface SearchContentResponse {
  from: number | null;
  per_page: number;
  current_page: number;
  last_page: number;
  to: number | null;
  total: number;
  data: SearchContentItem[];
}

interface Props {
  query?: string;
  initialData?: SearchContentResponse | null;
}

export default function SearchComponent({ query = "", initialData }: Props) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(query);
  const [contents, setContents] = useState<SearchContentItem[]>(
    initialData?.data || []
  );
  const [currentPage, setCurrentPage] = useState(initialData?.current_page || 1);
  const [lastPage, setLastPage] = useState(initialData?.last_page || 1);
  const [loading, setLoading] = useState(false);

  const total = initialData?.total || 0;
  const trimmedQuery = query.trim();

  const showEmptyState = useMemo(
    () => Boolean(trimmedQuery) && !loading && contents.length === 0,
    [contents.length, loading, trimmedQuery]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextQuery = searchTerm.trim();
    router.push(nextQuery ? `/search?q=${encodeURIComponent(nextQuery)}` : "/search");
  };

  const fetchMoreContents = async () => {
    if (!trimmedQuery || currentPage >= lastPage) return;

    setLoading(true);
    const nextPage = currentPage + 1;
    const data = await searchContentsAction(
      trimmedQuery,
      nextPage,
      initialData?.per_page || 10
    );

    if (data?.data?.length) {
      setContents((prev) => [...prev, ...data.data]);
      setCurrentPage(data.current_page);
      setLastPage(data.last_page);
    }

    setLoading(false);
  };

  return (
    <section className="w-full max-w-[760px] py-8 mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-red-600">অনুসন্ধান</h1>

      <form onSubmit={handleSubmit} className="mb-5 flex items-stretch gap-3">
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="অনুসন্ধান করুন"
          className="h-11 min-w-0 flex-1 border border-gray-300 px-3 text-base text-gray-900 outline-none focus:border-red-500"
          aria-label="অনুসন্ধান"
        />
        <button
          type="submit"
          className="flex h-11 shrink-0 items-center justify-center gap-1 bg-red-600 px-3 text-white transition hover:bg-red-700"
          aria-label="অনুসন্ধান করুন"
        >
          <FiSearch className="text-xl" />
          <span className="text-sm font-semibold">খুঁজুন</span>
        </button>
      </form>

      {trimmedQuery && (
        <p className="mb-7 text-sm font-semibold text-gray-700">
          প্রাপ্ত ফলাফল:{" "}
          <span className="text-red-600">{toBanglaNumber(total)}</span>
        </p>
      )}

      {showEmptyState ? (
        <NoContentFound />
      ) : (
        <div className="flex flex-col gap-3 md:gap-5">
          {contents.map((newsItem) => (
            <article
              key={newsItem.id}
              className="border border-gray-300 bg-white p-3 md:p-4"
            >
              <Link
                href={newsItem.full_url}
                className="group flex flex-row items-center gap-3 sm:gap-4"
              >
                <div className="w-[42%] max-w-[160px] shrink-0 sm:w-[280px] sm:max-w-none">
                  <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={newsItem.full_image_path}
                      height={360}
                      width={640}
                      alt={newsItem.heading}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs text-gray-600 sm:mb-2 sm:text-sm">
                    {newsItem.categoryName}
                  </p>
                  <h2 className="text-md font-bold leading-snug text-gray-800 transition group-hover:text-blue-700 sm:text-lg">
                    {newsItem.sub_heading && (
                      <span className="text-red-600">
                        {newsItem.sub_heading} /{" "}
                      </span>
                    )}
                    {newsItem.heading}
                  </h2>
                  <p className="mt-2 text-xs text-gray-500 sm:mt-4 sm:text-sm">
                    {newsItem.created_at_bangla}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}

      {currentPage < lastPage && (
        <div className="text-[24px] text-center h-20  w-full font-normal py-4">
          <button
            type="button"
            onClick={fetchMoreContents}
            disabled={loading}
            className="text-white text-lg bg-red-600 px-4 py-2 flex items-center justify-center gap-4 hover:bg-red-500 rounded-sm mx-auto"
          >
            {loading && <LiaSpinnerSolid className="animate-spin text-lg" />}
            <span>আরও দেখুন</span>
          </button>
        </div>
      )}
    </section>
  );
}
