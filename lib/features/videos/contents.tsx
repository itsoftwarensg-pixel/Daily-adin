"use client";

import { useRef, useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import { getAllVideosAction } from "@/app/actions/video";
import { VideoItemType } from "@/lib/types/video.page";
import VideoGallery from "@/lib/components/common/video-gallery";

interface Props {
  loadMoreContents: {
    contents: VideoItemType[];
    last_page: number;
  };
}

export default function VideoLoadMoreContent({ loadMoreContents }: Props) {
  const [loading, setLoading] = useState(false);
  const [contents, setContents] = useState(loadMoreContents.contents);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const inFlight = useRef(false);

  const fetchContents = async () => {
    if (inFlight.current) return;
    inFlight.current = true;
    setLoading(true);
    setError("");
    try {
      const nextPage = page + 1;
      const data = await getAllVideosAction(nextPage, 12);
      if (!Array.isArray(data?.data)) throw new Error("Unable to load videos");
      setContents((previous) => {
        const existing = new Set(previous.map((video) => video.id));
        return [...previous, ...data.data.filter((video: VideoItemType) => !existing.has(video.id))];
      });
      setPage(nextPage);
    } catch {
      setError("ভিডিও লোড করা যায়নি। আবার চেষ্টা করুন।");
    } finally {
      inFlight.current = false;
      setLoading(false);
    }
  };

  return (
    <div>
      <VideoGallery videos={contents} pageHeading />
      {error && <p role="alert" className="mt-5 text-center text-red-700">{error}</p>}
      {page < loadMoreContents.last_page && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={fetchContents}
            disabled={loading}
            className="flex min-h-11 items-center justify-center gap-3 rounded-lg border border-red-600 bg-red-600 px-6 py-2.5 text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 disabled:cursor-wait disabled:opacity-60"
          >
            {loading && <LiaSpinnerSolid aria-hidden="true" className="animate-spin" />}
            <span>{loading ? "লোড হচ্ছে…" : "আরও দেখুন"}</span>
          </button>
        </div>
      )}
    </div>
  );
}

// Previous implementation retained for reference (inactive).
// "use client";
// import { useState } from "react";
// import { LiaSpinnerSolid } from "react-icons/lia";
// import { getAllVideosAction } from "@/app/actions/video";
// import { VideoItemType } from "@/lib/types/video.page";
// import VideoItem from "@/lib/components/common/news-elements/video-item";
//
// // Props
// interface Props {
//   loadMoreContents: {
//     contents: VideoItemType[];
//     last_page: number;
//   };
// }
//
// const VideoLoadMoreContent = ({ loadMoreContents }: Props) => {
//   // States variables
//   const [loading, setLoading] = useState(false);
//   const [contents, setContents] = useState<VideoItemType[]>(loadMoreContents.contents);
//   const [page, setPage] = useState(1);
//   const recordsPerPage = 12;
//   const lastPage = loadMoreContents.last_page;
//
//   // Fetch contents based on type and id
//   const fetchContents = async () => {
//     setLoading(true);
//     const nextPage = page + 1;
//
//     const data = await getAllVideosAction(nextPage, recordsPerPage);
//
//     // Append new contents to existing contents
//     setContents((prev) => [
//       ...prev,
//       ...data.data,
//     ]);
//
//     setPage(nextPage);
//     setLoading(false);
//   };
//
//   return (
//     <div className="flex flex-col gap-4">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
//         {contents && contents.length > 0 && contents.map((videoItem, idx) => (
//           <div key={idx} className="h-full">
//             <VideoItem
//               videoItem={videoItem}
//             />
//           </div>
//         ))}
//       </div>
//
//       {page < lastPage && (
//         <div className="text-[24px] inline-flex items-center justify-center h-20 font-normal py-4 ">
//           <button
//             onClick={fetchContents}
//             className="text-white text-lg bg-red-600 px-4 py-2 flex items-center justify-center gap-4 hover:bg-red-500 rounded-sm"
//           >
//             {loading && <LiaSpinnerSolid className="text-white animate-spin" />}
//             <span>আরও দেখুন</span>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default VideoLoadMoreContent;
//
