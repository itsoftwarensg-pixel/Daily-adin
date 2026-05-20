export default function Loading() {
  return (
    <div className="animate-pulse my-6">
      <div className="container px-4 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-6">
          {/* Article main */}
          <div className="space-y-4">
            {/* Category breadcrumb */}
            <div className="h-4 w-32 bg-gray-200 rounded" />

            {/* Headline */}
            <div className="space-y-2">
              <div className="h-7 bg-gray-200 rounded w-full" />
              <div className="h-7 bg-gray-200 rounded w-4/5" />
            </div>

            {/* Meta row */}
            <div className="flex gap-4">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>

            {/* Hero image */}
            <div className="aspect-[16/9] bg-gray-200 w-full" />

            {/* Body paragraphs */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </div>
            ))}

            {/* Tags */}
            <div className="flex gap-2 flex-wrap pt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-7 w-20 bg-gray-200 rounded-full" />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="w-full aspect-square bg-gray-100 rounded" />
            <div className="flex gap-2">
              <div className="h-8 bg-gray-200 rounded w-20" />
              <div className="h-8 bg-gray-100 rounded w-20" />
            </div>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex gap-2 border-b pb-2">
                <div className="w-16 shrink-0 aspect-[16/10] bg-gray-200" />
                <div className="flex-grow space-y-1 pt-1">
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
