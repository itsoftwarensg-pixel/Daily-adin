"use client";

// Previous: import { useEffect, useState } from "react";
import { usePublicationClock } from "@/lib/hooks/use-publication-clock";
import { formatTimeAgo, parsePublicationDate } from "@/lib/utils/relativeTime";

interface Props {
  date: string | null | undefined;
  className?: string;
}

export default function PublishedTime({ date, className = "" }: Props) {
  // Previous implementation: one interval per news card.
  // const [now, setNow] = useState<number | null>(null);
  // useEffect(() => {
  //   setNow(Date.now());
  //   const timer = window.setInterval(() => setNow(Date.now()), 60_000);
  //   return () => window.clearInterval(timer);
  // }, []);
  const now = usePublicationClock();

  const published = date ? parsePublicationDate(date) : null;
  if (!published) return null;

  return (
    <time
      dateTime={published.toISOString()}
      title={published.toLocaleString("bn-BD", { timeZone: "Asia/Dhaka" })}
      className={`mt-2 block text-sm font-normal leading-5 text-gray-500 ${className}`}
    >
      {now === null ? "\u00a0" : formatTimeAgo(published, now)}
    </time>
  );
}
