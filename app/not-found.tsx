"use client";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">404 |</h1>
        <p className="text-xl font-normal">This page could not be found.</p>
      </div>
    </div>
  );
}
