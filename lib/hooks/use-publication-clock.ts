"use client";

import { useSyncExternalStore } from "react";

const subscribers = new Set<() => void>();
let now: number | null = null;
let timer: number | undefined;

function updateTime() {
  if (document.hidden) return;
  now = Date.now();
  subscribers.forEach((notify) => notify());
}

function subscribe(notify: () => void) {
  subscribers.add(notify);
  if (subscribers.size === 1) {
    now = Date.now();
    timer = window.setInterval(updateTime, 60_000);
    document.addEventListener("visibilitychange", updateTime);
  }

  return () => {
    subscribers.delete(notify);
    if (subscribers.size === 0) {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", updateTime);
      timer = undefined;
      now = null;
    }
  };
}

const getSnapshot = () => now;
const getServerSnapshot = () => null;

export function usePublicationClock() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
