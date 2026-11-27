import React from "react";
import PublishedTime from "@/lib/components/common/published-time";
import Link from "@/lib/components/common/site-link";
import { ImageWithFallback } from "@/lib/components/image";
import { HomePageContentItem } from "@/lib/types/home.page";
import HtmlContent from "@/lib/components/common/html-content";

// Props
interface Props {
  opinionNewsContent: HomePageContentItem;
}

const Opinion = ({ opinionNewsContent }: Props) => {
  const { full_url, heading, description, created_at, writer } = opinionNewsContent;
  const writerName = writer?.custom_writer || writer?.name;

  return (
    <Link
      href={full_url}
      // The earlier opinion card used an unlabeled white panel and a thin top border.
      className="group block overflow-hidden rounded-md border border-gray-200 bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-700"
    >
      <div className="border-b border-red-100 bg-red-50 px-3 py-2 font-semibold text-red-800">মতামত</div>
      <div className="p-3">
        <h3 className="break-words text-xl font-bold leading-snug text-black group-hover:text-red-700">
          {heading}
        </h3>

        {description && (
          <HtmlContent
            html={description}
            maxContent={250}
            className="mt-2 line-clamp-4 break-words !text-left text-sm leading-relaxed text-gray-700"
          />
        )}

        <div className="mt-3 flex items-center justify-between gap-3 border-t border-gray-100 pt-3">
          {(writerName || writer?.title || writer?.photo) && (
            <div className="flex min-w-0 items-center gap-2">
              {writer?.photo && (
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <ImageWithFallback src={writer.photo} alt={writerName || "লেখক"} width={40} height={40} className="h-full w-full object-cover" />
                </div>
              )}
              <div className="min-w-0 break-words">
                {writerName && <p className="font-semibold leading-snug text-black">{writerName}</p>}
                {writer?.title && <p className="text-sm leading-snug text-gray-600">{writer.title}</p>}
              </div>
            </div>
          )}
          <PublishedTime date={created_at} className="ml-auto shrink-0" />
        </div>
      </div>
    </Link>
  );
};

export default Opinion;

// Previous two-column opinion card
// const Opinion = ({ opinionNewsContent }: Props) => {
//   return (
//     <Link href={`${opinionNewsContent.full_url}`} className="block group overflow-hidden bg-gray-2">
//       <div className="w-full flex items-start bg-transparent overflow-hidden">
//         <div className="">
//           <h3 className="bg-gray-5 text-[14px] my-5 text-center p-1 font-semibold">
//             {/* সভ্যতার বিকাশে সংবাদপত্রের ভূমিকা? */}
//             {opinionNewsContent.heading}
//           </h3>
//           <h4 className=" group-hover:text-blue-700 px-2 text-[14px] font-normal leading-[18px] text-justify">
//             {/* “সভ্যতার বিকাশে সংবাদপত্র অত্যন্ত গুরুত্বপূর্ণ ভূমিকা রাখে। এটি
//             মানুষের জ্ঞান বৃদ্ধি করে, সমাজ–রাজনীতি সম্পর্কে সচেতন করে, মতামত
//             গঠনে সহায়তা করে এবং শিক্ষিত, দায়িত্বশীল ও অগ্রসর নাগরিক গড়ে তুলতে
//             কার্যকর ভূমিকা পালন করে” */}
//
//             <HtmlContent
//               html={opinionNewsContent.description}
//               maxContent={250}
//               className="text-gray-600"
//             />
//           </h4>
//           <PublishedTime date={opinionNewsContent.created_at} className="px-2 pb-2" />
//         </div>
//         <div className="flex flex-col items-start justify-center">
//           <div className="w-[150px] h-[220px] relative overflow-hidden">
//             <ImageWithFallback
//               src={opinionNewsContent.writer?.photo}
//               fill
//               alt={`${opinionNewsContent.writer?.name || opinionNewsContent.writer?.custom_writer}`}
//               className="object-cover"
//             />
//           </div>
//
//           <div className="w-full text-right">
//             <p className="p-1 text-[20px] bg-white">{opinionNewsContent?.writer?.custom_writer ? opinionNewsContent?.writer?.custom_writer : opinionNewsContent?.writer?.name}</p>
//             {opinionNewsContent?.writer?.title &&
//               <p className="px-1 pt-1 bg-red-600 text-white">
//                 {opinionNewsContent?.writer?.title}
//               </p>
//             }
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };
//
// export default Opinion;
