import React from "react";
import Link from "next/link";
import ImageWithFallback from "@/lib/components/image/ImageWithFallback";
import { ContentItem } from "@/lib/types/category.page";

// Props
interface Props {
  newsItem: ContentItem;
}

const NewsItemLatestPopular = ({ newsItem }: Props) => {
  if (!newsItem) {
    return null;
  }

  return (
    <>
      <Link href={newsItem.full_url} className="block group overflow-hidden">
        <div className="flex gap-2 mb-2">
          {/* Left: Image (fixed 100px width) */}
          <div className="w-[120px] flex-shrink-0">
            <div className="aspect-[16/10]">
              <ImageWithFallback
                src={newsItem.full_image_path}
                height={100}
                width={160}
                alt={newsItem.heading}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <h4 className="group-hover:text-blue-700 font-semibold">
              {newsItem.sub_heading ?
                <>
                  <span className="text-red-500">{newsItem.sub_heading}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block mx-1"></span>
                  <span>{newsItem.heading}</span>
                </>
                : newsItem.heading
              }
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewsItemLatestPopular;
