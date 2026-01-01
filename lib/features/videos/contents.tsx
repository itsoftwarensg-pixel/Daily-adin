"use client";
import { useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import { getAllVideosAction } from "@/app/actions/video";
import { VideoItemType } from "@/lib/types/video.page";
import VideoItem from "@/lib/components/common/news-elements/video-item";

// Props
interface Props {
  loadMoreContents: {
    contents: VideoItemType[];
    last_page: number;
  };
}

const VideoLoadMoreContent = ({ loadMoreContents }: Props) => {
  // States variables
  const [loading, setLoading] = useState(false);
  const [contents, setContents] = useState<VideoItemType[]>(loadMoreContents.contents);
  const [page, setPage] = useState(1);
  const recordsPerPage = 12;
  const lastPage = loadMoreContents.last_page;

  // Fetch contents based on type and id
  const fetchContents = async () => {
    setLoading(true);
    const nextPage = page + 1;

    const data = await getAllVideosAction(nextPage, recordsPerPage);

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
        {contents && contents.length > 0 && contents.map((videoItem, idx) => (
          <div key={idx} className="h-full">
            <VideoItem
              videoItem={videoItem}
            />
          </div>
        ))}
      </div>

      {page < lastPage && (
        <div className="text-[24px] inline-flex items-center justify-center h-20 font-normal py-4 ">
          <button
            onClick={fetchContents}
            className="text-white text-lg bg-red-600 px-4 py-2 flex items-center justify-center gap-4 hover:bg-red-500 rounded-sm"
          >
            {loading && <LiaSpinnerSolid className="text-white animate-spin" />}
            <span>আরও দেখুন</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoLoadMoreContent;
