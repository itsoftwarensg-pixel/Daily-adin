import Reactx, { ReactNode } from "react";
import { ScrollToTopButton } from "@/lib/components/layout/ui";
import ApplicationFooter from "@/lib/components/layout/footer";
import ApplicationHeader from "@/lib/components/layout/header";

// Generate dynamic metadata
export async function generateMetadata() {
  return {
    title: "The Daily Adin",
    keywords: "daily-adin, adin, news, news-portal, content, article",
    description: "A modern, fast and SEO-friendly news portal",
  };
}

interface Props {
  children: Readonly<ReactNode>;
}

export default function AppLayout({ children }: Props) {
  return (
    <div>
      <ApplicationHeader />
      <main className="pb-4">{children}</main>
      <ApplicationFooter />

      {/* Floating scroll-to-top button */}
      <ScrollToTopButton />
    </div>
  );
}
