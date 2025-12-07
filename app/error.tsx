"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
}

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <div>This is the error page</div>;
}
