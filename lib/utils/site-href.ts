const siteHosts = new Set(["dailyadin.com", "www.dailyadin.com"]);

export function toSiteHref(href: string): string {
  if (!/^(https?:)?\/\//i.test(href)) return href;

  try {
    const url = new URL(href, "https://www.dailyadin.com");
    if (!siteHosts.has(url.hostname) || url.pathname.startsWith("//")) return href;

    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return href;
  }
}
