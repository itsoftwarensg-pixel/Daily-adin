import { versionedUrl } from "@/lib/utils/helpers";

/**
 *
 * @param url - relative or absolute URL
 * @param config - fetch config
 * @returns - parsed JSON response
 */
export async function fetchTyped<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  const vUrl = versionedUrl(url);
  const uConfig: RequestInit = {
    ...config,
    headers: {
      ...config.headers,
      Accept: "application/json",
    },
  };

  const res = await fetch(vUrl, uConfig);

  // Throw on non-2xx so callers never get silent `undefined`
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `HTTP ${res.status} ${res.statusText} at ${res.url}: ${body.slice(
        0,
        500
      )}`
    );
  }

  // If content type is not json then throw error
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

  try {
    return raw as TResponse;
  } catch (error) {
    console.log("Type assertion error", error);
    throw error;
  }
}
