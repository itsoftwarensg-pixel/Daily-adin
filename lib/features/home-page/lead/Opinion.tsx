import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import OpinionImage from "@/public/images/opinion.png";
import { MdArrowOutward } from "react-icons/md";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Opinion = () => {
  return (
    <div className="border">
      <Link href={`/`} className="group flex justify-between items-center gap-2 px-3 py-2 bg-black text-white hover:bg-gray-900 border-l-[6px] border-red-600 mb-2">
        <div className="flex gap-2 items-center">
          <span className="pt-0.5 font-bold">মতামত</span>
        </div>
        <div>
          <MdArrowOutward className="group-hover:rotate-[45deg] transition-all" />
        </div>
      </Link>

      <Link href={"/"} className="relative block group overflow-hidden px-3 pyt-1 pb-3">
        <div className="w-full flex items-start gap-3 bg-transparent overflow-hidden">
          <div className="flex flex-col items-start justify-center w-20">
            <div className="w-full h-20 relative overflow-hidden aspect-[16/9]">
              <ImageWithFallback
                src={OpinionImage}
                fill
                alt="মামুনুল হক"
                className="object-cover rounded-full"
              />
            </div>

          </div>

          <div className="flex-1">
            <h4 className=" group-hover:text-blue-700 font-normal">
              "সড়ক দুর্ঘটনা কমাতে সচেতনতা বৃদ্ধি করা হবে। জনসাধারণকে নিরাপদ যাত্রার নিয়ম মেনে চলার আহ্বান জানানো হচ্ছে।"
            </h4>
            <p className="pt-2 text-sm text-gray-500">অধ্যাপক ডা. এবিএম আবদুল্লাহ</p>
          </div>
        </div>
        <BiSolidQuoteAltRight className="absolute right-2 bottom-2 opacity-5" size={44} />
      </Link>
    </div>
  );
};

<div className="flex">
  <div className="w-40">

  </div>
  <div className="second-box">

  </div>
</div>

export default Opinion;
