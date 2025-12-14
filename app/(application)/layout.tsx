import React from "react";
import ApplicationHeader from "@/lib/components/layout/header";
import ApplicationFooter from "@/lib/components/layout/footer";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: `The Daily Adin`,
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "A modern, fast and SEO-friendly news portal",
  };
}

// Props
interface Props {
  children: Readonly<React.ReactNode>;
}

export default function AppLayout({ children }: Props) {
  return (
    <div>
      <ApplicationHeader />
      <main className="pt-[280px] pb-4">{children}</main>
      <ApplicationFooter />
    </div>
  );
}
