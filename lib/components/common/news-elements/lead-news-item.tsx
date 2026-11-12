import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "../../image";
import { HomePageContentItem } from "@/lib/types/home.page";

// Props
interface Props {
  content: HomePageContentItem;
}

const LeadNewsItem = ({ content }: Props) => {
  return (
    <>
      {content &&
        <>
          <Link
            href={`${content.full_url}`}
            className="block group mb-0 md:mb-4"
          >
            <div className="w-full bg-white">
              <div className="w-full">
                <ImageWithFallback
                  src={`${content.full_image_path}`}
                  height={900}
                  width={1200}
                  alt={`${content.heading}`}
                  className="w-full"
                  priority={true}
                  sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1439px) 44vw, 620px"
                />
              </div>
              <div className="">
                <h1
                  className="
                    mt-1
                    pt-1 sm:pt-2
                    pb-0
                    text-2xl
                    lg:text-3xl
                    group-hover:text-blue-700
                    font-semibold
                    leading-snug
                  "
                >
                  {content.sub_heading &&
                    <div className="inline-flex items-center gap-1 mr-1">
                      <span className="text-red-500">{content.sub_heading}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block"></span>
                    </div>
                  }
                  {content.heading}
                </h1>
                <div className="hidden md:block">
                  <p className="pt-2 text-gray-500 overflow-hidden line-clamp-3">{content.description}</p>
                </div>
              </div>
            </div>
          </Link>
        </>
      }
    </>
  );
};

export default LeadNewsItem;
