export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="container px-4 mx-auto max-w-[1440px] py-6">
        {/* Section heading */}
        <div className="h-7 w-32 bg-gray-200 rounded mb-4" />

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="h-10 w-36 bg-gray-200 rounded" />
          <div className="h-10 w-36 bg-gray-200 rounded" />
          <div className="h-10 w-36 bg-gray-200 rounded" />
          <div className="h-10 w-36 bg-gray-200 rounded" />
          <div className="h-10 w-24 bg-gray-300 rounded" />
        </div>

        {/* Article list */}
        <div className="flex flex-col gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex gap-3 border-b pb-3">
              <div className="w-32 shrink-0 aspect-[16/9] bg-gray-200" />
              <div className="flex-grow space-y-2 pt-1">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-100 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
