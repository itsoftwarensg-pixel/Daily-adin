import path from "path";
import { readFile } from "fs/promises";
import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const WIDTH = 1200;
const HEIGHT = 630;
const PHOTO_HEIGHT = 530;
const FRAME_PATH = path.join(process.cwd(), "public/images/og-frame.png");

const isAllowedHost = (hostname: string) => {
  const allowed = ["dailyadin.com"];
  if (process.env.BASE_URL) {
    try {
      allowed.push(new URL(process.env.BASE_URL).hostname);
    } catch {}
  }
  return allowed.some((h) => hostname === h || hostname.endsWith(`.${h}`));
};

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src");
  if (!src) return new NextResponse("Missing src", { status: 400 });

  let srcUrl: URL;
  try {
    srcUrl = new URL(src);
  } catch {
    return new NextResponse("Invalid src", { status: 400 });
  }
  if (!["http:", "https:"].includes(srcUrl.protocol) || !isAllowedHost(srcUrl.hostname)) {
    return new NextResponse("Host not allowed", { status: 400 });
  }

  try {
    const res = await fetch(srcUrl, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return new NextResponse("Source unavailable", { status: 502 });

    const [source, frame] = await Promise.all([
      res.arrayBuffer().then((b) => Buffer.from(b)),
      readFile(FRAME_PATH),
    ]);

    // Frame is transparent above the brand bar: fit the photo into the area
    // above the bar so nothing important is hidden, then overlay the frame.
    const photo = await sharp(source).resize(WIDTH, PHOTO_HEIGHT, { fit: "cover" }).toBuffer();
    const output = await sharp({
      create: { width: WIDTH, height: HEIGHT, channels: 3, background: "#ffffff" },
    })
      .composite([
        { input: photo, top: 0, left: 0 },
        { input: frame, top: 0, left: 0 },
      ])
      .jpeg({ quality: 85 })
      .toBuffer();

    return new NextResponse(new Uint8Array(output), {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new NextResponse("Failed to generate image", { status: 500 });
  }
}
