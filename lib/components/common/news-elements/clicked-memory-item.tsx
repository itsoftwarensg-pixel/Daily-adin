import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";

interface PropsType {
  newsItem: {
    title: string;
    image: string;
  };
  href?: string;
  variant?: "memory" | "clicked"; // choose style
  bgColor?: string; // optional background for memory variant
  height?: string; // optional height for clicked variant
}

const ClickedMemoryItem = ({
  newsItem,
  href = "/",
  variant = "clicked",
  bgColor,
  height = "190px",
}: PropsType) => {
  return (
    <Link href={href} className="block overflow-hidden relative group">
      <div
        className={`relative w-full ${variant === "memory" ? "px-9 py-8" : ""
          } ${bgColor && variant === "memory" ? `bg-${bgColor}-100` : ""}`}
      >
        <div
          className={`relative w-full overflow-hidden ${variant === "memory" ? "aspect-[16/9]" : `aspect-[16/5]`
            }`}
        >
          <ImageWithFallback
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="w-full h-full object-cover"
          />

          {/* Memory variant corner frames */}
          {variant === "memory" && (
            <>
              <div className="absolute top-0 left-0 z-10 w-8 h-8 border-t-4 border-l-4 border-[#4B3838]"></div>
              <div className="absolute top-0 right-0 z-10 w-8 h-8 border-t-4 border-r-4 border-[#4B3838]"></div>
              <div className="absolute bottom-0 left-0 z-10 w-8 h-8 border-b-4 border-l-4 border-[#4B3838]"></div>
              <div className="absolute bottom-0 right-0 z-10 w-8 h-8 border-b-4 border-r-4 border-[#4B3838]"></div>
            </>
          )}

          {/* Overlay text */}
          <div
            className={`absolute ${variant === "memory" ? "bottom-0 right-0" : "bottom-0 left-0"
              } bg-gray-100 bg-opacity-80 px-4 py-2 rounded-tr-lg ${variant === "memory"
                ? "opacity-9 group-hover:opacity-100 transition-opacity duration-300"
                : ""
              }`}
          >
            <p
              className={`${variant === "memory" ? "text-[32px]" : "text-[20px]"
                } font-normal group-hover:text-red-500`}
            >
              {newsItem.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClickedMemoryItem;
