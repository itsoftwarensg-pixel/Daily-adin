// The API's timezone-less publication timestamps use Bangladesh time.
export function parsePublicationDate(value: string): Date | null {
  const normalized = value.trim().replace(" ", "T");
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(normalized)) return null;
  const date = new Date(
    /(?:Z|[+-]\d{2}:?\d{2})$/i.test(normalized)
      ? normalized
      : `${normalized}+06:00`,
  );
  return Number.isNaN(date.getTime()) ? null : date;
}

export function formatTimeAgo(date: Date, now: number): string {
  const seconds = Math.max(0, Math.floor((now - date.getTime()) / 1000));
  if (seconds < 60) return "এইমাত্র";

  const units: [number, string][] = [
    [365 * 86400, "বছর"],
    [30 * 86400, "মাস"],
    [86400, "দিন"],
    [3600, "ঘণ্টা"],
    [60, "মিনিট"],
  ];
  const [duration, label] = units.find(([duration]) => seconds >= duration)!;
  return `${Math.floor(seconds / duration).toLocaleString("bn-BD")} ${label} আগে`;
}
