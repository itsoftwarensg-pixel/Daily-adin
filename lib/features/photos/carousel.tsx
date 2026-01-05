"use client";

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { IoClose } from "react-icons/io5";
import { ImageWithFallback } from "@/lib/components/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";

interface PropsType {
  images: { src: string; caption?: string }[];
  startIndex: number;
  onClose: () => void;
}

const PhotoLightboxCarousel = ({ images, startIndex, onClose }: PropsType) => {
  const sliderRef = useRef<Slider | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(startIndex);

  useEffect(() => {
    sliderRef.current?.slickGoTo(startIndex, true);
  }, [startIndex]);

  // Fullscreen toggle
  const handleToggleFullscreen = async () => {
    if (!document.fullscreenElement && containerRef.current) {
      await containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  /* ---------- Arrows ---------- */
  const PrevArrow = ({ onClick }: any) =>
    currentSlide === 0 ? null : (
      <button
        onClick={onClick}
        className="flex items-center justify-center text-[16px] md:text-[25px] absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-2 z-50 text-white bg-gray-900  hover:bg-blue-700 rounded-full"
      >
        <FaChevronLeft />
      </button>
    );

  const NextArrow = ({ onClick }: any) =>
    currentSlide === images.length - 1 ? null : (
      <button
        onClick={onClick}
        className="flex items-center justify-center text-[16px] md:text-[25px] absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-2 z-50 text-white bg-gray-900  hover:bg-blue-700 rounded-full"
      >
        <FaChevronRight />
      </button>
    );

  // Slick settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    cssEase: "ease-in-out",
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: startIndex,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      {/* Controls */}
      <div className="absolute top-4 right-4 z-50 flex gap-4">
        <button
          onClick={handleToggleFullscreen}
          className="p-2 text-white bg-gray-900  hover:bg-blue-700 rounded-full"
        >
          {isFullscreen ? (
            <BiExitFullscreen size={25} />
          ) : (
            <BiFullscreen size={25} />
          )}
        </button>
        <button
          onClick={onClose}
          className="p-2 text-white bg-gray-900  hover:bg-red-600 rounded-full"
        >
          <IoClose size={25} />
        </button>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings} className="h-full w-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="h-screen flex items-center justify-center relative"
          >
            <div className="h-screen flex items-center justify-center relative">
              <ImageWithFallback
                src={img.src}
                alt={img.caption || ""}
                width={1920}
                height={1080}
                className="block max-w-full max-h-full object-contain"
              />
            </div>

            {/* Caption overlay */}
            {img.caption && (
              <div className="w-full absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-8 rounded-md text-center text-sm md:text-lg z-50">
                {img.caption}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoLightboxCarousel;
