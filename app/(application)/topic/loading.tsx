export default function Loading() {
  return (
    <div className="animate-pulse mt-4">
      <div className="container px-4 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
          {/* Main content */}
          <div>
            <div className="h-7 w-48 bg-gray-200 rounded mb-2" />
            <div className="h-px bg-gray-200 mb-4" />

            {/* List items */}
            <div className="flex flex-col gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex gap-3 border-b pb-4">
                  <div className="w-36 lg:w-60 shrink-0 aspect-[16/9] bg-gray-200" />
                  <div className="flex-grow space-y-2 pt-1">
                    <div className="h-5 bg-gray-200 rounded w-full" />
                    <div className="h-5 bg-gray-200 rounded w-4/5" />
                    <div className="h-4 bg-gray-100 rounded w-1/4" />
                  </div>
                </div>
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
