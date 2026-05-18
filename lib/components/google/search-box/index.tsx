'use client';

import Script from 'next/script';
import { useRef, useEffect } from 'react';

const GCSE_CX = '96375e6d42e524fbb';
const GCSE_DIV_ID = 'gcse-search-widget';

declare global {
  interface Window {
    google?: {
      search?: {
        cse?: {
          element?: {
            render: (config: { div: string; tag: string }) => void;
            getElement: (id: string) => { execute: (q: string) => void } | undefined;
          };
        };
      };
    };
  }
}

interface Props {
  query?: string;
}

function runSearch(q: string) {
  const api = window.google?.search?.cse?.element;
  if (!api) return;

  if (!api.getElement(GCSE_DIV_ID)) {
    try {
      api.render({ div: GCSE_DIV_ID, tag: 'search' });
    } catch { /* safe to ignore */ }
  }

  let attempts = 0;
  const poll = setInterval(() => {
    const el = api.getElement(GCSE_DIV_ID);
    if (el) {
      el.execute(q);
      clearInterval(poll);
    } else if (++attempts >= 30) {
      clearInterval(poll);
    }
  }, 100);
}

export default function GoogleSearchBox({ query }: Props) {
  const queryRef = useRef(query);
  queryRef.current = query;

  // Fires after script loads on first visit, and on every re-mount (SPA navigation).
  const handleReady = () => {
    if (queryRef.current) runSearch(queryRef.current);
  };

  // Re-execute when query prop changes without a page re-mount (same-page search).
  useEffect(() => {
    if (query) runSearch(query);
  }, [query]);

  return (
    <>
      <Script
        src={`https://cse.google.com/cse.js?cx=${GCSE_CX}`}
        strategy="afterInteractive"
        onReady={handleReady}
      />
      <div id={GCSE_DIV_ID} className="gcse-search" />
    </>
  );
}
