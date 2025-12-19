import React from "react";
import HomePage2 from "@/lib/features/home-2";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: `Home - variation 2 | The Daily Adin`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "A modern, fast and SEO-friendly news portal",
  };
}

const RootHomePage = () => {
  return <HomePage2 />;
};

export default RootHomePage;
