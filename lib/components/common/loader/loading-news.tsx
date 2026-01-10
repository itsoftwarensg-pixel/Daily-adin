"use client";

import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";

interface LoadingNewsProps {
  className?: string;
}

const LoadingNews: React.FC<LoadingNewsProps> = ({ className = "" }) => {
  return (
    <div
      className={`relative flex items-center my-16 print:hidden ${className}`}
    >
      {/* Left Line - Gradient Heartbeat */}
      <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-red-300 to-red-600 animate-pulse rounded-full"></div>

      <span className="flex-shrink mx-6 relative">
        {/* Heartbeat Glow */}
        <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full animate-ping"></div>
        <div className="relative">
          <Image
            src={logo}
            alt="Daily Adin Logo"
            width={150}
            height={50}
            className="h-12 w-auto grayscale opacity-80"
          />
        </div>
      </span>

      {/* Right Line - Gradient Heartbeat */}
      <div className="flex-grow h-[2px] bg-gradient-to-l from-transparent via-red-300 to-red-600 animate-pulse rounded-full"></div>
    </div>
  );
};

export default LoadingNews;
