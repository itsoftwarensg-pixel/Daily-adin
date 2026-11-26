export class ApiHttpError extends Error {
  constructor(readonly status: number, readonly retryable = status >= 500 || status === 429) {
    super(`API request failed: ${status}`);
    this.name = "ApiHttpError";
  }
}

/** The upstream service replied, but did not return the public API envelope. */
export class ApiInvalidResponseError extends Error {
  constructor() {
    super("API returned an invalid JSON response");
    this.name = "ApiInvalidResponseError";
  }
}

/** True only for a confirmed API 404; do not turn outages into a 404 page. */
export const isApiNotFoundError = (error: unknown): error is ApiHttpError =>
  error instanceof ApiHttpError && error.status === 404;

export type API_Params = {
  url: string;
  method?: string;
  data?: object;
  verify?: boolean;
  has_file?: boolean;
  cache?: RequestCache;
  revalidate?: number;
  tags?: string[];
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
  tags,
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

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      cache: cache ?? (effectiveRevalidate !== undefined ? "force-cache" : "no-store"),
      // Previously cached GETs could only be refreshed by their time limit.
      ...(effectiveRevalidate !== undefined
        ? { next: { revalidate: effectiveRevalidate, tags } }
        : {}),
    });
    if (!response.ok) throw new ApiHttpError(response.status);

    let dataResponse: unknown;
    try {
      dataResponse = await response.json();
    } catch {
      throw new ApiInvalidResponseError();
    }

    if (!dataResponse || typeof dataResponse !== "object") {
      throw new ApiInvalidResponseError();
    }

    const apiResponse = dataResponse as {
      success?: boolean;
      data?: unknown;
      message?: unknown;
      status?: unknown;
    };

    // Laravel public endpoints use this envelope. A failure envelope with a
    // 2xx HTTP status must still not be rendered as an empty news response.
    if (apiResponse.success === false) {
      const status = typeof apiResponse.status === "number" ? apiResponse.status : response.status;
      throw new ApiHttpError(status, status >= 500 || status === 429);
    }

    return {
      success: apiResponse.success,
      status: response.status,
      data: apiResponse.data as any,
      message: apiResponse.message as any,
    };
  } finally {
    clearTimeout(timeout);
  }

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
