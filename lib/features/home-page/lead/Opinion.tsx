// import React from "react";
// import Link from "next/link";
// import { ImageWithFallback } from "@/lib/components/image";
// import OpinionImage from "@/public/images/opinion.png";
// import { MdArrowOutward } from "react-icons/md";
// import { BiSolidQuoteAltRight } from "react-icons/bi";

// const Opinion = () => {
//   return (
//     <div className="border">
//       <Link href={`/`} className="group flex justify-between items-center gap-2 px-3 py-2 bg-black text-white hover:bg-gray-900 border-l-[6px] border-red-600 mb-2">
//         <div className="flex gap-2 items-center">
//           <span className="pt-0.5 font-bold">মতামত</span>
//         </div>
//         <div>
//           <MdArrowOutward className="group-hover:rotate-[45deg] transition-all" />
//         </div>
//       </Link>

//       <Link href={"/"} className="relative block group overflow-hidden px-3 pyt-1 pb-3">
//         <div className="w-full flex items-start gap-3 bg-transparent overflow-hidden">
//           <div className="flex flex-col items-start justify-center w-20">
//             <div className="w-full h-20 relative overflow-hidden aspect-[16/9]">
//               <ImageWithFallback
//                 src={OpinionImage}
//                 fill
//                 alt="মামুনুল হক"
//                 className="object-cover rounded-full"
//               />
//             </div>

//           </div>

//           <div className="flex-1">
//             <h4 className=" group-hover:text-blue-700 font-normal">
//               "সড়ক দুর্ঘটনা কমাতে সচেতনতা বৃদ্ধি করা হবে। জনসাধারণকে নিরাপদ যাত্রার নিয়ম মেনে চলার আহ্বান জানানো হচ্ছে।"
//             </h4>
//             <p className="pt-2 text-sm text-gray-500">অধ্যাপক ডা. এবিএম আবদুল্লাহ</p>
//           </div>
//         </div>
//         <BiSolidQuoteAltRight className="absolute right-2 bottom-2 opacity-5" size={44} />
//       </Link>
//     </div>
//   );
// };

// <div className="flex">
//   <div className="w-40">

//   </div>
//   <div className="second-box">

//   </div>
// </div>

// export default Opinion;

import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import OpinionImage from "@/public/images/opinion.png";
import { HomePageContentItem } from "@/lib/types/home.page";

// Props
interface Props {
  opinionNewsContent: HomePageContentItem;
}

const Opinion = ({ opinionNewsContent }: Props) => {
  return (
    <Link href={`${opinionNewsContent.full_url}`} className="block group overflow-hidden bg-gray-2">
      <div className="w-full flex items-start bg-transparent overflow-hidden">
        <div className="">
          <h3 className="bg-gray-5 text-[14px] my-5 text-center p-1 font-semibold">
            {/* সভ্যতার বিকাশে সংবাদপত্রের ভূমিকা? */}
            {opinionNewsContent.heading}
          </h3>
          <h4 className=" group-hover:text-blue-700 px-2 text-[14px] font-normal leading-[18px] text-justify">
            {/* “সভ্যতার বিকাশে সংবাদপত্র অত্যন্ত গুরুত্বপূর্ণ ভূমিকা রাখে। এটি
            মানুষের জ্ঞান বৃদ্ধি করে, সমাজ–রাজনীতি সম্পর্কে সচেতন করে, মতামত
            গঠনে সহায়তা করে এবং শিক্ষিত, দায়িত্বশীল ও অগ্রসর নাগরিক গড়ে তুলতে
            কার্যকর ভূমিকা পালন করে” */}
            {opinionNewsContent.description}
          </h4>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="w-[150px] h-[220px] relative overflow-hidden">
            <ImageWithFallback
              src={`${opinionNewsContent.full_image_path}`}
              fill
              alt={`${opinionNewsContent.writer?.name || opinionNewsContent.writer?.custom_writer}`}
              className="object-cover"
            />
          </div>

          <div className="w-full text-right">
            <p className="p-1 text-[20px] bg-white">{opinionNewsContent?.writer?.custom_writer ? opinionNewsContent?.writer?.custom_writer : opinionNewsContent?.writer?.name}</p>
            {opinionNewsContent?.writer?.title &&
              <p className="px-1 pt-1 bg-red-600 text-white">
                {opinionNewsContent?.writer?.title}
              </p>
            }
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Opinion;
