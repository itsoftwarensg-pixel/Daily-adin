"use client";
import Link from "next/link";
import { useState } from "react";
import { ContentItem } from "@/lib/types/category.page";
import {
  getContentsByCategoryIdAction,
  getContentsByDistrictIdAction,
  getContentsByDivisionIdAction,
  getContentsBySubCategoryIdAction,
  getContentsByTopicIdAction,
  getContentsByUpazilaIdAction,
  getContentsByWriterIdAction,
} from "@/app/actions/content";
import HtmlContent from "@/lib/components/common/html-content";
import { ImageWithFallback } from "@/lib/components/image";
import { LiaSpinnerSolid } from "react-icons/lia";
import { COUNTRY_PAGE, LOAD_MORE_TYPES } from "@/lib/config/constant";

// Props
interface Props {
  loadMoreContents: {
    contents: ContentItem[];
    last_page: number;
  };
  id: number;
  type:
  | typeof LOAD_MORE_TYPES.CATEGORY // category
  | typeof LOAD_MORE_TYPES.SUB_CATEGORY // sub-category
  | typeof LOAD_MORE_TYPES.DIVISION // division
  | typeof LOAD_MORE_TYPES.DISTRICT // district
  | typeof LOAD_MORE_TYPES.UPAZILA // upazila
  | typeof LOAD_MORE_TYPES.TOPIC // topic
  | typeof LOAD_MORE_TYPES.WRITER // writer
  | typeof COUNTRY_PAGE.slug
  | typeof LOAD_MORE_TYPES.AJKER_PATRIKA_CATEGORY;
  excludeIDs?: number[];
}

const LoadMoreContent = ({
  loadMoreContents,
  id,
  type,
  excludeIDs = [],
}: Props) => {
  // States variables
  const [loading, setLoading] = useState(false);
  const [contents, setContents] = useState<ContentItem[]>(
    loadMoreContents?.contents?.filter((item) => !excludeIDs.includes(item.id))
  );
  const [page, setPage] = useState(1);
  const recordsPerPage = 10;
  const lastPage = loadMoreContents.last_page;

  const isTypeAjkerPatrika = type === LOAD_MORE_TYPES.AJKER_PATRIKA_CATEGORY;

  // Fetch contents based on type and id
  const fetchContents = async () => {
    setLoading(true);
    const nextPage = page + 1;

    let data: any; // Explicitly type data as 'any' or a more specific type if known
    if ((type === LOAD_MORE_TYPES.CATEGORY) || (type === LOAD_MORE_TYPES.AJKER_PATRIKA_CATEGORY))
      data = await getContentsByCategoryIdAction(id, nextPage, recordsPerPage);
    else if (type === LOAD_MORE_TYPES.SUB_CATEGORY)
      data = await getContentsBySubCategoryIdAction(id, nextPage, recordsPerPage);
    else if (type === LOAD_MORE_TYPES.DIVISION)
      data = await getContentsByDivisionIdAction(id, nextPage, recordsPerPage);
    else if (type === LOAD_MORE_TYPES.DISTRICT)
      data = await getContentsByDistrictIdAction(id, nextPage, recordsPerPage);
    else if (type === LOAD_MORE_TYPES.UPAZILA)
      data = await getContentsByUpazilaIdAction(id, nextPage, recordsPerPage);
    else if (type === LOAD_MORE_TYPES.TOPIC)
      data = await getContentsByTopicIdAction(id, nextPage, recordsPerPage);
    else if (type === LOAD_MORE_TYPES.WRITER)
      data = await getContentsByWriterIdAction(id, nextPage, recordsPerPage);

    // Append new contents to existing contents
    setContents((prev) => [
      ...prev,
      ...data.data.filter(
        (item: { id: number }) => !excludeIDs.includes(item.id)
      ),
    ]);

    setPage(nextPage);
    setLoading(false);
  };

  const isGrid = isTypeAjkerPatrika ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'flex flex-col gap-4';
  const imageWidth = isTypeAjkerPatrika ? 'w-36 lg:w-60' : 'w-36 lg:w-80';
  return (
    <div>
      <div className={isGrid}>
        {contents && contents.length > 0 && contents.map((newsItem, idx) => (
          <div key={idx} className="border-b pb-4">
            <Link
              href={`${newsItem.full_url}`}
              className="group flex flex-row gap-3"
            >
              <div className={imageWidth + " shrink-0"}>
                <div className={`w-full aspect-[16/9] overflow-hidden`}>
                  <ImageWithFallback
                    src={`${newsItem.full_image_path}`}
                    height={600}
                    width={900}
                    alt={`${newsItem.heading}`}
                    className="w-full object-cover h-full"
                  />
                </div>
              </div>
              <div className="flex-grow px-2">
                <h4
                  className={`pt-2 text-[17px] md:text-xl group-hover:text-blue-700 font-semibold`}
                >
                  {newsItem.sub_heading &&
                    <div className="inline-flex items-center gap-2 mr-2">
                      <span className="text-red-500">{newsItem.sub_heading}</span>
                      <span className="w-2 h-2 rounded-full bg-red-400 inline-block"></span>
                    </div>
                  }
                  {newsItem.heading}
                </h4>
                {!isTypeAjkerPatrika && (
                  <HtmlContent
                    html={newsItem.description}
                    maxContent={300}
                    className="hidden md:block py-1 text-gray-400"
                  />
                )}
                <div className="text-sm text-gray-500 mt-1">{newsItem.created_at_bangla}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {page < lastPage && (
        <div className="text-[24px] text-center h-20  w-full font-normal py-4 ">
          <button
            onClick={fetchContents}
            className="text-white text-lg bg-red-600 px-4 py-2 flex items-center justify-center gap-4 hover:bg-red-500 rounded-sm mx-auto"
          >
            {loading && <LiaSpinnerSolid className="text-white animate-spin" />}
            <span>আরও দেখুন</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LoadMoreContent;
