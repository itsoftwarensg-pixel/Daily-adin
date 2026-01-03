import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import { HomePageContentItem } from "@/lib/types/home.page";
import HtmlContent from "@/lib/components/common/html-content";

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

            <HtmlContent
              html={opinionNewsContent.description}
              maxContent={250}
              className="text-gray-600"
            />
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
