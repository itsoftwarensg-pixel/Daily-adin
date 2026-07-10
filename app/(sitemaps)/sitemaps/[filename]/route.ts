import { NextRequest, NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/config/site-config";
import { apiRequest } from "@/lib/api/client";
import { APIEndpoint } from "@/lib/api/api-endpoints";

export const dynamic = "force-dynamic";

interface Params {
  params: Promise<{
    filename: string;
  }>;
}

export async function GET(request: NextRequest, { params }: Params) {
  const { filename } = await params;

  // Verify the extension is .xml
  if (!filename.endsWith(".xml")) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const name = filename.replace(/\.xml$/, "");

  let apiUrl = "";
  if (name === "news-sitemap") {
    apiUrl = APIEndpoint.sitemaps.getNews();
  } else if (name === "category-sitemap") {
    apiUrl = APIEndpoint.sitemaps.getCategories();
  } else if (name === "sub-category-sitemap") {
    apiUrl = APIEndpoint.sitemaps.getSubCategories();
  } else if (name === "topic-sitemap") {
    apiUrl = APIEndpoint.sitemaps.getTopics();
  } else if (name === "video-sitemap") {
    apiUrl = APIEndpoint.sitemaps.getVideos();
  } else if (name === "photo-sitemap") {
    apiUrl = APIEndpoint.sitemaps.getPhotos();
  } else {
    return new NextResponse("Not Found", { status: 404 });
  }

  try {
    const apiResponse = await apiRequest({
      url: apiUrl,
      method: "GET",
    });

    if (!apiResponse.success) {
      return new NextResponse(`Sitemap not found: ${filename}`, { status: 404 });
    }

    const data = apiResponse.data || [];
    let xml = "";

    if (name === "news-sitemap") {
      // Render Google News Sitemap
      xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${data
  .map(
    (item: any) => `  <url>
    <loc>${item.loc}</loc>
    <news:news>
      <news:publication>
        <news:name>${SITE_CONFIG.name} - ${SITE_CONFIG.alternateName}</news:name>
        <news:language>bn</news:language>
      </news:publication>
      <news:publication_date>${item.publication_date}</news:publication_date>
      <news:title>${escapeXml(item.title)}</news:title>
    </news:news>
  </url>`,
  )
  .join("\n")}
</urlset>`;
    } else {
      // Render Standard Sitemap
      xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${data
  .map(
    (item: any) => `  <url>
    <loc>${item.loc}</loc>${item.lastmod ? `\n    <lastmod>${item.lastmod}</lastmod>` : ""}
  </url>`,
  )
  .join("\n")}
</urlset>`;
    }

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error: any) {
    console.error(`Error generating sitemap ${filename}:`, error);
    return new NextResponse(`Error generating sitemap: ${error.message}`, { status: 500 });
  }
}

/**
 * Helper to escape special characters for XML.
 */
function escapeXml(unsafe: string): string {
  if (!unsafe) return "";
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}
