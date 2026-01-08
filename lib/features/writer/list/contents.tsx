"use client";
import { useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import logo from "@/public/logo.png";
import { WriterItemType } from "@/lib/types/writer.page";
import { getAllWritersAction } from "@/app/actions/writer";
import { ImageWithFallback } from "@/lib/components/image";
import Link from "next/link";

// Props
interface Props {
  loadMoreContents: {
    contents: WriterItemType[];
    last_page: number;
  };
}

const WriterLoadMoreContent = ({ loadMoreContents }: Props) => {
  // States variables
  const [loading, setLoading] = useState(false);
  const [contents, setContents] = useState<WriterItemType[]>(loadMoreContents.contents);
  const [page, setPage] = useState(1);
  const recordsPerPage = 20;
  const lastPage = loadMoreContents.last_page;

  // Fetch contents based on type and id
  const fetchContents = async () => {
    setLoading(true);
    const nextPage = page + 1;

    const data = await getAllWritersAction(nextPage, recordsPerPage);

    // Append new contents to existing contents
    setContents((prev) => [
      ...prev,
      ...data.data,
    ]);

    setPage(nextPage);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8 mt-2">
        {contents && contents.length > 0 && contents.map((content, idx) => (
          <Link href={content.full_url} key={idx} className="h-full text-center group">
            <div className="mb-2 bg-gray-200 w-36 h-36 p-3 rounded-full mx-auto">
              <ImageWithFallback
                src={content.photo ? content.photo : logo}
                height={600}
                width={900}
                alt={`${content.title}`}
                className="w-full h-full rounded-full mx-auto"
              />
            </div>
            <h4 className="font-semibold text-lg group-hover:text-blue-700">{content.name}{content.id}</h4>
          </Link>
        ))}
      </div>

      {
        page < lastPage && (
          <div className="text-[24px] inline-flex items-center justify-center h-20 font-normal py-4 ">
            <button
              onClick={fetchContents}
              className="text-white text-lg bg-red-600 px-4 py-2 flex items-center justify-center gap-4 hover:bg-red-500 rounded-sm"
            >
              {loading && <LiaSpinnerSolid className="text-white animate-spin" />}
              <span>আরও দেখুন</span>
            </button>
          </div>
        )
      }
    </div >
  );
};

export default WriterLoadMoreContent;
