import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import { HomePagePhotoAlbumItem } from "@/lib/types/home.page";

interface PropsType {
    newsItem: HomePagePhotoAlbumItem;
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
        <Link href={`/photos/${newsItem.id}`} className="block overflow-hidden relative group">
            <div
                className={`relative w-full ${variant === "memory" ? "px-1 md:px-6 py-1 md:py-5" : ""} ${bgColor && variant === "memory" ? `bg-${bgColor}-100` : ""}`}
            >
                <div
                    className={`relative w-full overflow-hidden ${variant === "memory" ? "aspect-[16/9]" : `aspect-[16/5]`
                        }`}
                >

                    {newsItem.feature_image ? (
                        <ImageWithFallback
                            src={newsItem.feature_image}
                            alt={newsItem.name}
                            fill
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full object-cover h-full bg-gray-100" />
                    )}

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
                        className={`absolute text-right ${variant === "memory" ? "bottom-0 right-0" : "bottom-0 left-0"
                            } bg-gray-100 bg-opacity-80 px-4 py-2 rounded-tl-lg ${variant === "memory"
                                ? "opacity-9 group-hover:opacity-100 transition-opacity duration-300"
                                : ""
                            }`}
                    >
                        <p
                            className={`${variant === "memory" ? "text-sm md:text-xl" : "text-[20px]"
                                } font-semibold group-hover:text-red-500`}
                        >
                            {newsItem.name}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ClickedMemoryItem;
