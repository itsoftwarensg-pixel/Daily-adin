import Link from "next/link";
import React from "react";

// Props
interface Props {
  label?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  imgSrc?: string;
  link?: string;
}

const Advertisement = ({
  label = "Advertisement",
  height,
  width,
  className,
  imgSrc,
  link
}: Props) => {
  // Format size
  const formatSize = (value?: string | number) => {
    if (value === undefined) {
      return undefined;
    }

    // If it's a number → append px
    if (typeof value === "number") {
      return `${value}px`;
    }

    // If it's a string with % or other units → use as-is
    if (/[a-z%]+$/i.test(value)) {
      return value;
    }

    // If it's a numeric string → append px
    if (/^\d+$/.test(value)) {
      return `${value}px`;
    }

    return value;
  };

  const markup = (
    <div
      style={{
        width: formatSize(width),
        height: formatSize(height),
      }}
      className={`bg-gray-200 rounded flex items-center justify-center ${className}`}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={label}
          style={{
            width: formatSize(width),
            height: formatSize(height),
          }}
        />
      ) : label}
    </div>
  );

  if (link) {
    return (
      <Link
        href={`${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {markup}
      </Link>
    );
  }

  return markup;
};

export default Advertisement;
