import React from "react";
import HomePage from "@/lib/features/home-page";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: `Home | The Daily Adin`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "A modern, fast and SEO-friendly news portal",
  };
}

const RootHomePage = () => {
  return <HomePage />;
};

export default RootHomePage;
