"use client";

import { useEffect, useState } from "react";
import { FiPrinter } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import PhotoLightboxCarousel from "./carousel";
import { GrFacebookOption } from "react-icons/gr";
import { PhotoItemType } from "@/lib/types/photo.page";
import { ImageWithFallback } from "@/lib/components/image";
import NoContentFound from "@/lib/components/no-content-found";
import { RiTwitterXFill, RiWhatsappLine } from "react-icons/ri";
import HtmlContent from "@/lib/components/common/html-content";

interface PropsType {
  data: PhotoItemType;
}

const PhotoAlbumDetails = ({ data }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // Combine feature image and contents images
  const allImages = [
    { src: data.feature_image, caption: data.name },
    ...(data.contents?.map((c) => ({
      src: c.image,
      caption: c.caption,
    })) || []),
  ];

  // Disable body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Open carousel at specific index
  const handleOpenCarousel = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="col-span-1 lg:col-auto">
      {data ? (
        <>
          {/* ====== START Album/Cover information =====*/}
          <div className="mb-4 border-b">
            <h1 className="text-2xl lg:text-4xl font-semibold pt-2 pb-2">
              {data.name}
            </h1>

            {/* Social sharable links */}
            <div className="flex items-center justify-between gap-4 bg-gray-50 rounded-lg p-5">
              <div className="">
                {/* Publish/updated time */}
                <div className="text-gray-500">
                  <p>{data?.created_at_bangla}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <GrFacebookOption
                  size={36}
                  className="p-2 bg-white hover:bg-gray-100 cursor-pointer rounded text-black border"
                />
                <RiTwitterXFill
                  size={36}
                  className="p-2 bg-white hover:bg-gray-100 cursor-pointer rounded text-black border"
                />
                <RiWhatsappLine
                  size={36}
                  className="p-2 bg-white hover:bg-gray-100 cursor-pointer rounded text-black border"
                />
                <MdContentCopy
                  size={36}
                  className="p-2 bg-white hover:bg-gray-100 cursor-pointer rounded text-black border"
                />
                <FiPrinter
                  size={36}
                  className="p-2 bg-white hover:bg-gray-100 cursor-pointer rounded text-black border"
                />
              </div>
            </div>

            {/* Album image and Photographer */}
            <div>
              {/* Album image */}
              <div
                className="w-full aspect-[16/9] mt-4 cursor-pointer"
                onClick={() => handleOpenCarousel(0)}
              >
                <ImageWithFallback
                  src={`${data.feature_image}`}
                  height={600}
                  width={900}
                  alt={`${data.name}`}
                  className="w-full object-cover h-full"
                />
              </div>
            </div>

            <div className="border p-2">
              {/* Description */}
              {data.description && (
                // <p className="text-black text-lg">{data.description}</p>
                <HtmlContent html={data.description} className="text-lg" />
              )}
              {/* Photographer */}
              {data?.photographer_name && (
                <div className="text-gray-500 italic text-md">
                  <span>{data.photographer_name}</span>
                </div>
              )}
            </div>
          </div>
          {/* ====== END Album/Cover information =====*/}

          {/* ====== START related others photos =====*/}
          {data.contents &&
            data.contents.length > 0 &&
            data.contents.map((content, idx) => (
              <div key={idx} className="mb-4">
                {/* Photos and Photographer */}
                <div>
                  {/* Photo */}
                  <div
                    className="w-full aspect-[16/9] mt-4 cursor-pointer"
                    onClick={() => handleOpenCarousel(idx + 1)}
                  >
                    <ImageWithFallback
                      src={`${content.image}`}
                      height={600}
                      width={900}
                      alt={`${content.caption}`}
                      className="w-full object-cover h-full"
                    />
                  </div>
                </div>

                <div className="border p-2">
                  {/* Description */}
                  {content.caption && (
                    <p className="text-black text-lg">{content.caption}</p>
                  )}
                  {/* Photographer */}
                  {content?.photographer && (
                    <div className="text-gray-500 italic text-md">
                      <span>{content.photographer}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          {/* ====== END related others photos =====*/}
        </>
      ) : (
        <NoContentFound />
      )
      }
      {
        isOpen && (
          <PhotoLightboxCarousel
            images={allImages}
            startIndex={startIndex}
            onClose={() => setIsOpen(false)}
          />
        )
      }
    </div >
  );
};

export default PhotoAlbumDetails;
