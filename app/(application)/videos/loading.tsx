export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="container px-4 mx-auto max-w-[1440px] mt-4">
        {/* Section heading */}
        <div className="h-7 w-24 bg-gray-200 rounded mb-2" />
        <div className="h-px bg-gray-200 mb-4" />

        {/* Video card grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i}>
              <div className="aspect-[16/9] bg-gray-200 w-full" />
              <div className="mt-2 space-y-1">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-100 rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
