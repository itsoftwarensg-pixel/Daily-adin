import Link from "next/link";
import type { ComponentProps } from "react";
import { toSiteHref } from "@/lib/utils/site-href";

export default function SiteLink({ href, ...props }: ComponentProps<typeof Link>) {
  return <Link {...props} href={typeof href === "string" ? toSiteHref(href) : href} />;
}
