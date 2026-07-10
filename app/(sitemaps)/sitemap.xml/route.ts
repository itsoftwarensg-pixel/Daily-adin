import { NextResponse } from "next/server";
import { apiRequest } from "@/lib/api/client";
import { APIEndpoint } from "@/lib/api/api-endpoints";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const apiResponse = await apiRequest({
      url: APIEndpoint.sitemaps.getIndex(),
      method: "GET",
    });

    if (!apiResponse.success) {
      return new NextResponse(
        `Failed to fetch sitemap from backend. Status: ${apiResponse.status}`,
        { status: 500 },
      );
    }

    const sitemaps = apiResponse.data || [];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (item: any) => `  <sitemap>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
  </sitemap>`,
  )
  .join("\n")}
</sitemapindex>`;

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error: any) {
    console.error("Error generating sitemap index:", error);
    return new NextResponse(`Error generating sitemap: ${error.message}`, {
      status: 500,
    });
  }
}
