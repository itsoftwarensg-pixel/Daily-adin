export type API_Params = {
  url: string;
  method?: string;
  data?: object;
  verify?: boolean;
  has_file?: boolean;
  cache?: RequestCache;
  revalidate?: number;
  timeoutMs?: number;
};

export const apiRequest = async ({
  url,
  data,
  verify = false,
  method = "POST",
  has_file,
  cache,
  revalidate,
  timeoutMs = 10_000,
}: API_Params) => {
  const isFormData =
    typeof FormData !== "undefined" && data instanceof FormData;
  const treatAsFileUpload = has_file ?? isFormData;

  const headers: HeadersInit = {
    Accept: "application/json",
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (
    (method.toUpperCase() === "POST" ||
      method.toUpperCase() === "PUT" ||
      method.toUpperCase() === "PATCH") &&
    data
  ) {
    if (treatAsFileUpload) {
      options.body = data as BodyInit;
    } else {
      options.body = JSON.stringify(data) as BodyInit;
    }
  }

  if (method.toUpperCase() === "GET" && data) {
    const queryParams = new URLSearchParams(
      data as Record<string, string>,
    ).toString();
    url += `?${queryParams}`;
  }

  // Public news data can safely be reused briefly. Besides reducing origin load,
  // Next.js keeps the last successful response available while a revalidation
  // attempt fails, so a short API outage does not blank the whole page.
  const isGetRequest = method.toUpperCase() === "GET";
  const defaultRevalidate = isGetRequest && cache === undefined && revalidate === undefined
    ? 30
    : undefined;
  const effectiveRevalidate = revalidate ?? defaultRevalidate;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  let response: Response;
  try {
    response = await fetch(url, {
      ...options,
      signal: controller.signal,
      cache: cache ?? (effectiveRevalidate !== undefined ? "force-cache" : "no-store"),
      ...(effectiveRevalidate !== undefined ? { next: { revalidate: effectiveRevalidate } } : {}),
    });
  } finally {
    clearTimeout(timeout);
  }
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  const dataResponse = await response.json();
  // const apiErrors: Record<string, string[]> = dataResponse.errors ?? {};

  return {
    success: dataResponse.success,
    status: response.status,
    data: dataResponse.data,
    message: dataResponse.message,
  };

  /*
  // Example Response:
      {
          "success": false,
          "status": 404,
          "data": [] / null
          "message": "Resource not found",
      }
  */
};
