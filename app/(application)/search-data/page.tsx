import GoogleSearchBox from "@/lib/components/google/search-box";
import Container from "@/lib/components/common/container";
import { BreadcrumbSchema } from "@/lib/components/seo/schemas";
import { SITE_CONFIG } from "@/lib/config/site-config";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props) {
  const { q } = await searchParams;

  const title = q
    ? `"${q}" - অনুসন্ধান | The Daily Adin`
    : `অনুসন্ধান | The Daily Adin`;

  return {
    title,
    robots: { index: false }, // search result pages should not be indexed
    alternates: {
      canonical: `${SITE_CONFIG.url}/search-data`,
    },
  };
}

export default async function SearchDataPage({ searchParams }: Props) {
  const { q } = await searchParams;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "অনুসন্ধান", item: "/search-data" },
        ]}
      />
      <Container>
        <div className="py-6">
          {q && (
            <p className="text-sm text-gray-500 mb-4">
              অনুসন্ধান ফলাফল:{" "}
              <span className="font-semibold text-gray-800">{q}</span>
            </p>
          )}
          <GoogleSearchBox query={q} />
        </div>
      </Container>
    </>
  );
}
