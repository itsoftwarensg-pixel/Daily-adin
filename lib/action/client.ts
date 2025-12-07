import { ZodType } from "zod";
import { versionedUrl } from "@/lib/utils/helpers";

/**
 *
 * @param url - relative or absolute URL
 * @param config - fetch config
 * @param schema - zod schema to validate response
 * @param timeoutMs - timeout in milliseconds
 * @returns - parsed and validated JSON response
 */
export async function fetchZodTyped<T>(
  url: string,
  config: RequestInit = {},
  schema: ZodType<T>,
  timeoutMs = 60000 // default timeout 5 minutes
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const vUrl = versionedUrl(url);
  const uConfig: RequestInit = {
    ...config,
    signal: controller.signal,
    headers: { ...config.headers, Accept: "application/json" },
  };

  try {
    const res = await fetch(vUrl, uConfig);

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(
        `HTTP ${res.status} ${res.statusText} at ${res.url}: ${body.slice(
          0,
          500
        )}`
      );
    }

    const ctype = res.headers.get("content-type") || "";
    if (!ctype.includes("application/json")) {
      const text = await res.text().catch(() => "");
      throw new Error(
        `Expected JSON from ${res.url}, got "${ctype}". Body: ${text.slice(
          0,
          500
        )}`
      );
    }

    const raw = await res.json();
    console.log(`url: ${vUrl} Response: ${JSON.stringify(raw)}`);

    // ✅ Zod validation (with clear, pinpointed errors)
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      console.error("Zod schema validation failed:", parsed.error.issues);
      throw new Error("Schema parse error");
    }

    return parsed.data;
  } catch (e: any) {
    if (e?.name === "AbortError") {
      throw new Error(`Request timed out after ${timeoutMs}ms: ${vUrl}`);
    }
    throw e;
  } finally {
    clearTimeout(timer);
  }
}
