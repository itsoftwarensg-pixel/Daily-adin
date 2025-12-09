import React from "react";

// Props
interface Props {
  label?: string;
  height: string | number;
  width?: string | number;
  className?: string;
}

const Advertisement = ({
  label = "Advertisement",
  height,
  width,
  className,
}: Props) => {
  return (
    <div
      style={{
        width: width
          ? `${width}${typeof width === "number" ? "px" : ""}`
          : "100%",
        height: `${height}${typeof height === "number" ? "px" : ""}`,
      }}
      className={`bg-gray-200 rounded flex items-center justify-center ${className}`}
    >
      {label}
    </div>
  );
};

export default Advertisement;
