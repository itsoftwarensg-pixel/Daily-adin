import React from "react";

// Props
interface Props {
    height: string;
    width: string;
    className?: string;
}

const Advertisement = ({ height, width, className }: Props) => {
    return (
        <div
            style={{ maxWidth: `${width}px`, height: `${height}px` }}
            className={`bg-gray-200 rounded flex items-center justify-center ${className}`}
        >
            Advertisement
        </div>
    );
};

export default Advertisement;
