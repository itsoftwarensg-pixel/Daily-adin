"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import fallbackImage from "@/public/images/placeholder/image-placeholder.png";

interface ImageWithFallbackProps {
  src?: string | StaticImageData;
  alt?: string;
  fallBackImage?: string | StaticImageData;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  onError?: (e: any) => void;
  onClick?: (e: any) => void;
}

const ImageWithFallback = ({
  src,
  alt,
  fallBackImage = fallbackImage,
  className,
  width,
  height,
  fill,
  priority = false,
  onError,
  onClick,
}: ImageWithFallbackProps) => {
  // Use fallback if src is falsy initially
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(
    src || fallBackImage
  );

  useEffect(() => {
    setImageSrc(src || fallBackImage);
  }, [src, fallBackImage]);

  const handleError = (e: any) => {
    if (onError) {
      onError(e);
    }
    setImageSrc(fallBackImage);
  };

  return (
    <Image
      src={imageSrc}
      alt={alt || "image"}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      className={className}
      onError={handleError}
      onClick={onClick}
    />
  );
};

export default ImageWithFallback;


// "use client";

// import { useEffect, useState } from "react";
// import Image, { StaticImageData } from "next/image";
// import fallbackImage from "@/public/images/placeholder/image-placeholder.png";
// import { IMAGE_SOURCE_REWRITE } from "@/lib/config/constant";

// const resolveImageSrc = (src?: string | StaticImageData) => {
//   if (typeof src === "string" && src.startsWith(IMAGE_SOURCE_REWRITE.from)) {
//     return src.replace(IMAGE_SOURCE_REWRITE.from, IMAGE_SOURCE_REWRITE.to);
//   }
//   return src;
// };

// interface ImageWithFallbackProps {
//   src?: string | StaticImageData;
//   alt?: string;
//   fallBackImage?: string | StaticImageData;
//   className?: string;
//   width?: number;
//   height?: number;
//   fill?: boolean;
//   onError?: (e: any) => void;
//   onClick?: (e: any) => void;
// }

// const ImageWithFallback = ({
//   src,
//   alt,
//   fallBackImage = fallbackImage,
//   className,
//   width,
//   height,
//   fill,
//   onError,
//   onClick,
// }: ImageWithFallbackProps) => {
//   // Use fallback if src is falsy initially
//   const [imageSrc, setImageSrc] = useState<string | StaticImageData>(
//     resolveImageSrc(src) || fallBackImage
//   );

//   useEffect(() => {
//     setImageSrc(resolveImageSrc(src) || fallBackImage);
//   }, [src, fallBackImage]);

//   const handleError = (e: any) => {
//     if (onError) {
//       onError(e);
//     }
//     // If the rewritten URL fails, retry the original source before the placeholder
//     if (src && imageSrc !== src && imageSrc === resolveImageSrc(src)) {
//       setImageSrc(src);
//       return;
//     }
//     setImageSrc(fallBackImage);
//   };

//   return (
//     <Image
//       src={imageSrc}
//       alt={alt || "image"}
//       width={fill ? undefined : width}
//       height={fill ? undefined : height}
//       fill={fill}
//       className={className}
//       onError={handleError}
//       onClick={onClick}
//     />
//   );
// };

// export default ImageWithFallback;
