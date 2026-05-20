export default function Loading() {
  return (
    <div className="animate-pulse my-4">
      <div className="container px-4 mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="h-7 w-36 bg-gray-200 rounded mb-4" />
        <div className="h-px bg-gray-200 mb-4" />

        {/* 3-col grid of news cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="flex gap-3 border-b pb-3">
              <div className="w-28 shrink-0 aspect-[16/9] bg-gray-200" />
              <div className="flex-grow space-y-2 pt-1">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-4/5" />
                <div className="h-3 bg-gray-100 rounded w-1/3 mt-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
