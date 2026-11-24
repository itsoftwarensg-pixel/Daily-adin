import { createHash, timingSafeEqual } from "node:crypto";
import { revalidatePath, revalidateTag } from "next/cache";

export const runtime = "nodejs";

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

export async function POST(request: Request) {
  const secret = process.env.NEWS_REVALIDATION_SECRET;
  if (!secret) return new Response(null, { status: 503 });

  const authorization = request.headers.get("authorization") ?? "";
  if (!timingSafeEqual(digest(authorization), digest(`Bearer ${secret}`))) {
    return new Response(null, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const articleId = body?.articleId;
  if (
    !body ||
    (articleId !== null && (!Number.isSafeInteger(articleId) || articleId <= 0))
  ) {
    return new Response(null, { status: 400 });
  }

  revalidateTag("news:home");
  revalidateTag("news:latest");
  revalidatePath("/");
  revalidatePath("/latest");
  if (articleId !== null) revalidateTag(`news:article:${articleId}`);

  return new Response(null, { status: 204 });
}
