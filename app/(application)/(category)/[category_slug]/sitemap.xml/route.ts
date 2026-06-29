import { NextRequest, NextResponse } from "next/server";
import { apiRequest } from "@/lib/api/client";
import { APIEndpoint } from "@/lib/api/api-endpoints";

export const dynamic = "force-dynamic";

interface Params {
  params: Promise<{
    category_slug: string;
  }>;
}

export async function GET(request: NextRequest, { params }: Params) {
  const { category_slug } = await params;

  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.sitemaps.getCategoryArticles(category_slug),
      method: "GET",
    });

    if (!apiResponse.success) {
      return new NextResponse(
        `Sitemap not found for category: ${category_slug}`,
        { status: 404 },
      );
    }

    const data = apiResponse.data || [];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${data
  .map(
    (item: any) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error: any) {
    console.error(
      `Error generating sitemap for category ${category_slug}:`,
      error,
    );
    return new NextResponse(`Error generating sitemap: ${error.message}`, {
      status: 500,
    });
  }
}
