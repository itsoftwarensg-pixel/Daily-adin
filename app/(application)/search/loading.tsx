export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="container px-4 mx-auto max-w-[1440px] py-8">
        {/* Search bar */}
        <div className="h-12 bg-gray-200 rounded w-full max-w-2xl mx-auto mb-8" />

        {/* Results list */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex gap-3 border-b pb-4">
              <div className="w-28 shrink-0 aspect-[16/9] bg-gray-200" />
              <div className="flex-grow space-y-2 pt-1">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-4/5" />
                <div className="h-3 bg-gray-100 rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
