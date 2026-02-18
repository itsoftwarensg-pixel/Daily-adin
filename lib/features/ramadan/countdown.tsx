"use client";

import { useEffect, useState } from "react";
import { RamadanDay, RamadanDivision } from "@/lib/types/ramadan";
import Link from "next/link";

type Props = {
  days: RamadanDay[];
  division_offsets: RamadanDivision[];
};

// ------------------ Helpers ------------------

// create Date from HH:mm
const getDateTime = (dateStr: string, time: string) => {
  const [h, m] = time.split(":").map(Number);
  const d = new Date(dateStr);
  d.setHours(h, m, 0, 0);
  return d;
};

// add offset minutes
const addMinutes = (date: Date, offset: number) => {
  const d = new Date(date);
  d.setMinutes(d.getMinutes() + offset);
  return d;
};

// format time in Bangla
const formatTime = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const parts = formatter.formatToParts(date);

  let hour = "";
  let minute = "";
  let dayPeriod = "";

  parts.forEach((p) => {
    if (p.type === "hour") hour = p.value;
    if (p.type === "minute") minute = p.value;
    if (p.type === "dayPeriod") dayPeriod = p.value;
  });

  // convert to Bangla digits
  const toBn = (n: string) =>
    n.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);

  const label = dayPeriod === "AM" ? "ভোর" : "সন্ধ্যা";

  // ✅ label first
  return `${label} ${toBn(hour)}:${toBn(minute)}`;
};


// countdown
const getCountdown = (target: Date) => {
  const now = new Date(); // FIXED for testing, replace with new Date() for live
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return "০০:০০:০০";

  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  const bn = (n: number) =>
    n
      .toString()
      .padStart(2, "0")
      .replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);

  return `${bn(h)}:${bn(m)}:${bn(s)}`;
};

// ------------------ Component ------------------

export default function RamadanCountdown({ days, division_offsets }: Props) {
  const [now, setNow] = useState(new Date());

  // live timer
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  // Bangladesh date (FIXED)
  const todayStr = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Dhaka",
  });

  const todayIndex = days.findIndex((d) => d.enDate === todayStr);

  // if (todayIndex === -1) return <div>আজকের তথ্য নেই</div>;

  if (todayIndex === -1) return (
    <div className="max-w-4xl mx-auto rounded-md border p-3 pb-1 bg-white dark:bg-gray-900">
      {/* Header */}
      <h2 className="text-xl font-semibold text-center mb-3 hover:text-emerald-500">
        <Link href="/ramadan">
          আজকের সেহরি ও ইফতার সময়সূচী
        </Link>
      </h2>

      {/* Table Header */}
      <div className="grid grid-cols-4 text-sm font-semibold border-b pb-2">
        <span>বিভাগ</span>
        <span className="text-center">সেহরি</span>
        <span className="text-center">ইফতার</span>
        <span className="text-right">কাউন্টডাউন</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {division_offsets.map((division) => {
          return (
            <div
              key={division.division_en_name}
              className="grid grid-cols-4 items-center py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              {/* Division */}
              <span>{division.division_bn_name}</span>

              {/* Sehri */}
              <span className="text-center">
                --
              </span>

              {/* Iftar */}
              <span className="text-center">
                --
              </span>

              {/* Countdown */}
              <span className="text-right font-semibold">
                --:--:--
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  const today = days[todayIndex];
  const tomorrow = days[todayIndex + 1];

  return (
    <div className="max-w-4xl mx-auto rounded-md border p-3 pb-1 bg-white dark:bg-gray-900">
      {/* Header */}
      <h2 className="text-xl font-semibold text-center mb-3">
        আজকের সেহরি ও ইফতার সময়সূচী
      </h2>

      {/* Table Header */}
      <div className="grid grid-cols-4 text-sm font-semibold border-b pb-2">
        <span>বিভাগ</span>
        <span className="text-center">সেহরি</span>
        <span className="text-center">ইফতার</span>
        <span className="text-right">কাউন্টডাউন</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {division_offsets.map((division) => {
          const offset = Number(division.time_offset_minute);

          // today times
          const sehriTime = addMinutes(
            getDateTime(today.enDate, today.sehri_end),
            offset
          );

          const iftarTime = addMinutes(
            getDateTime(today.enDate, today.iftar),
            offset
          );

          let nextEvent: { label: string; time: Date } | null = null;

          if (now < sehriTime) {
            nextEvent = { label: "সেহরি", time: sehriTime };
          } else if (now < iftarTime) {
            nextEvent = { label: "ইফতার", time: iftarTime };
          } else if (tomorrow) {
            // tomorrow sehri
            const tomorrowSehri = addMinutes(
              getDateTime(tomorrow.enDate, tomorrow.sehri_end),
              offset
            );

            nextEvent = { label: "আগামী সেহরি", time: tomorrowSehri };
          }

          const countdown = nextEvent
            ? getCountdown(nextEvent.time)
            : "শেষ";

          return (
            <div
              key={division.division_en_name}
              className="grid grid-cols-4 items-center py-0.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              {/* Division */}
              <span>{division.division_bn_name}</span>

              {/* Sehri */}
              <span className="text-center">
                {formatTime(sehriTime)}
              </span>

              {/* Iftar */}
              <span className="text-center">
                {formatTime(iftarTime)}
              </span>

              {/* Countdown */}
              <span className="text-right font-semibold">
                {nextEvent ? (
                  <>
                    <span className="text-md">{countdown}</span>
                    <span className="block text-xs text-gray-500">
                      {nextEvent.label}
                    </span>
                  </>
                ) : (
                  "শেষ"
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
