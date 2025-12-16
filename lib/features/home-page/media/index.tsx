import React from "react";
import { newsJson } from "@/lib/data";
import Container from "@/lib/components/common/container";
import GradientHeader from "@/lib/components/common/section-headers/gradient";
import MediaNewsItem from "@/lib/components/common/news-elements/media-news-item";
import MediaNewsBanner from "@/lib/components/common/news-elements/media-news-banner";
import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import HtmlContent from "@/lib/components/common/html-content";

const HomeMedia = () => {
  return (
    <div className="py-8 bg-red-500 bg-opacity-5">
      <Container>
        <GradientHeader
          title="চিত্রলোক"
          color="red"
          href="/"
          showReadMoreBtn={true}
        />

        <div className="grid grid-cols-12 gap-4">
          {/* Left */}
          <div className="col-span-6 space-y-4 pr-4">
            {newsJson.slice(40, 43).map((newsItem, index) => (
              <div className="bg-red-100 border-l-[12px] border-red-500" key={index}>
                <Link href={'/'} className="group block overflow-hidden">
                  <div className="grid grid-cols-5 gap-2 items-center">
                    <div className="col-span-2 aspect-[16/10]">
                      <ImageWithFallback
                        src={newsItem.image}
                        width={140}
                        height={250}
                        alt={newsItem.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="col-span-3 group-hover:text-blue-700 px-2">
                      <h4 className="text-xl mb-2 font-semibold">{newsItem.title}</h4>
                      <HtmlContent className="text-gray-600" html={newsItem.description} maxContent={100} />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="col-span-6 space-y-5">
            {newsJson.slice(44, 45).map((newsItem, index) => (
              <MediaNewsBanner
                key={index}
                image={newsItem.image}
                title={newsItem.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeMedia;
