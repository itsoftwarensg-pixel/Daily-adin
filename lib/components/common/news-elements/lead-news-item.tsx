import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "../../image";
import HtmlContent from "@/lib/components/common/html-content";
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
                />
              </div>
              <div className="">
                <h4
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
                  {content.heading}
                </h4>
                <div className="hidden md:block">
                  <HtmlContent
                    html={content.description}
                    maxContent={200}
                    className="pt-2 text-gray-500"
                  />
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
