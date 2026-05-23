import Container from "@/lib/components/common/container";
import SearchComponent from "@/lib/components/search-component";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { searchContentsAction } from "@/app/actions/content";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props) {
  const { q } = await searchParams;

  const title = q
    ? `"${q}" - অনুসন্ধান | The Daily Adin`
    : `অনুসন্ধান | The Daily Adin`;
  const description = q
    ? `"${q}" সম্পর্কিত সর্বশেষ সংবাদ ও কনটেন্ট খুঁজুন The Daily Adin-এ।`
    : `The Daily Adin-এ সর্বশেষ সংবাদ ও কনটেন্ট অনুসন্ধান করুন।`;

  return {
    title,
    description,
    robots: { index: false }, // search result pages should not be indexed
    alternates: {
      canonical: `${SITE_CONFIG.url}/search`,
    },
  };
}

export default async function SearchDataPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() || "";
  const data = query ? await searchContentsAction(query, 1, 10) : null;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "অনুসন্ধান", item: "/search" },
        ]}
      />
      <Container>
        <SearchComponent key={query} query={query} initialData={data} />
      </Container>
    </>
  );
}
