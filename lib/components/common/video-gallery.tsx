import Link from "next/link";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import { ImageWithFallback } from "@/lib/components/image";
import PublishedTime from "@/lib/components/common/published-time";
import { VideoItemType } from "@/lib/types/video.page";
import { VIDEO_PAGE } from "@/lib/config/constant";

interface Props {
  videos: VideoItemType[];
  pageHeading?: boolean;
  showAllLink?: boolean;
}

function VideoThumbnail({ video, large = false }: { video: VideoItemType; large?: boolean }) {
  return (
    <div className={`relative aspect-video overflow-hidden bg-gray-100 ${large ? "border-t-[3px] border-red-600" : "rounded-lg"}`}>
      <ImageWithFallback
        src={video.thumbnail || (video.embed_code ? `https://img.youtube.com/vi/${video.embed_code}/hqdefault.jpg` : undefined)}
        width={large ? 960 : 240}
        height={large ? 540 : 135}
        sizes={large ? "(max-width: 1023px) calc(100vw - 32px), 54vw" : "(max-width: 639px) 112px, 144px"}
        alt={video.title}
        className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
      />
      <span aria-hidden="true" className={`absolute inset-0 flex items-center justify-center ${large ? "bg-black/5" : "bg-black/10"}`}>
        <span className={`flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-colors group-hover:bg-red-700 ${large ? "h-16 w-16 ring-4 ring-white/70 sm:h-[72px] sm:w-[72px]" : "h-7 w-7 ring-2 ring-white/70"}`}>
          <FaPlay className={`ml-0.5 ${large ? "text-2xl" : "text-[10px]"}`} />
        </span>
      </span>
    </div>
  );
}

function VideoMetadata({ video }: { video: VideoItemType }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5 text-gray-500">
      <span>{VIDEO_PAGE.name_bn}</span>
      <span aria-hidden="true">·</span>
      <PublishedTime date={video.created_at} className="!mt-0 !inline !text-xs !text-gray-500" />
    </div>
  );
}

export default function VideoGallery({ videos, pageHeading = false, showAllLink = false }: Props) {
  const [featured, ...playlist] = videos;
  const Heading = pageHeading ? "h1" : "h2";

  return (
    <section aria-label={VIDEO_PAGE.name_bn} className="text-gray-900">
      <div className="mb-5 flex min-h-[64px] items-center justify-between gap-3 bg-gradient-to-r from-red-700 via-red-400/60 to-red-50 py-2 pl-4 pr-2 sm:min-h-[70px]">
        <Heading className="text-xl font-semibold leading-tight text-white sm:text-2xl">
          {VIDEO_PAGE.name_bn}
        </Heading>
        <div className="flex max-w-full flex-wrap items-center gap-3 text-sm">
          {showAllLink && (
            <Link href="/videos" className="group inline-flex min-h-11 shrink-0 items-center gap-3 whitespace-nowrap bg-gradient-to-r from-red-500 to-neutral-800 px-4 py-2.5 font-medium text-white transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 sm:px-5">
              আরও দেখুন <FaArrowRightLong aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>

      {featured ? (
        <div className={`grid gap-5 lg:gap-6 ${playlist.length ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]" : "max-w-4xl"}`}>
          <Link href={`/videos/${featured.id}`} className="group block min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-red-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600">
            <VideoThumbnail video={featured} large />
            <div className="px-4 py-4 sm:px-5 sm:py-5">
              <VideoMetadata video={featured} />
              <h3 className="mt-2 text-xl font-semibold leading-snug transition-colors group-hover:text-red-700 sm:text-2xl lg:text-[26px]">
                {featured.title}
              </h3>
            </div>
          </Link>

          {playlist.length > 0 && (
            <div className="relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">
              <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
                <FaPlay aria-hidden="true" className="text-[10px] text-red-600" />
                <h3 className="text-base font-semibold text-gray-800">আরও ভিডিও</h3>
              </div>
              <div tabIndex={0} role="region" aria-label="আরও ভিডিও" className="max-h-[480px] flex-1 overflow-y-auto overscroll-contain px-2 [scrollbar-color:#d1d5db_#fff] [scrollbar-width:thin] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-red-600 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-[49px] lg:max-h-none">
                <ul className="divide-y divide-gray-100">
                  {playlist.map((video) => (
                    <li key={video.id}>
                      {/* Previous: default Link prefetch could fetch every visible video detail page. */}
                      <Link prefetch={false} href={`/videos/${video.id}`} className="group grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3 rounded-lg px-2 py-3.5 transition-colors hover:bg-red-50/60 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-red-600 sm:grid-cols-[144px_minmax(0,1fr)] sm:gap-4">
                        <VideoThumbnail video={video} />
                        <div className="min-w-0">
                          <h4 className="mb-2 line-clamp-2 text-base font-semibold leading-snug transition-colors group-hover:text-red-700 sm:text-lg">{video.title}</h4>
                          <VideoMetadata video={video} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p role="status" className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-12 text-center text-gray-500">
          এখনো কোনো ভিডিও পাওয়া যায়নি।
        </p>
      )}
    </section>
  );
}
