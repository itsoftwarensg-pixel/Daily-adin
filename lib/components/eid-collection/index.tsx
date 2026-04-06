import Link from "next/link";
import { HomePageContentItem } from "@/lib/types/home.page";
import ImageWithFallback from "../image/ImageWithFallback";

interface Props {
    title: string;
    contents: HomePageContentItem[];
}

export default function EidSection({ title, contents }: Props) {

    return (
        <section className="relative max-w-6xl mx-auto p-4 bg-gradient-to-b from-emerald-100 via-amber-200 to-amber-50 rounded-xl shadow-2xl ring-2 ring-amber-300 hover:ring-amber-400 transition-all duration-500 transform hover:scale-[1.01] overflow-hidden">
            {/* Eid floating decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-4 right-6 text-amber-400 text-4xl animate-bounce-slow">🌙</div>
                <div className="absolute top-6 left-3 text-yellow-300 text-sm animate-pulse">⭐</div>
            </div>

            {/* Section Heading */}
            <Link href="/eid-collection" className="relative text-xl md:text-2xl font-extrabold text-center text-amber-700 mb-4 border-b-2 border-amber-300 pb-2 drop-shadow-md block hover:text-amber-500 transition-all duration-300">
                {title}
            </Link>

            {/* Contents - Max 3 */}
            <div className="relative space-y-2">
                {contents.slice(0, 3).map((content) => (
                    <Link
                        key={content.id}
                        href={content.full_url}
                        className="block group overflow-hidden rounded-lg bg-white/60 shadow-lg backdrop hover:shadow-2xl transition-all duration-300 relative hover:bg-white"
                    >
                        <div className="flex gap-3 items-center p-3">
                            {/* Left: Text */}
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-800 group-hover:text-amber-600 leading-snug">
                                    {content.sub_heading ? (
                                        <>
                                            <span className="text-emerald-600">{content.sub_heading}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block mx-1"></span>
                                            <span>{content.heading}</span>
                                        </>
                                    ) : (
                                        content.heading
                                    )}
                                </h4>
                            </div>

                            {/* Right: Image */}
                            <div className="w-[60px] flex-shrink-0 border">
                                <div className="aspect-[16/12]">
                                    <ImageWithFallback
                                        src={content.full_image_path}
                                        height={100}
                                        width={160}
                                        alt={content.heading}
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-3 flex justify-center">
            <Link href="/eid-collection"
              className="
                px-5 py-2 rounded-full text-sm font-medium
                bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500
                text-white shadow-md

                hover:shadow-lg hover:scale-[1.03]
                active:scale-95 transition-all duration-300

                
              "
            >
              আরও দেখুন
            </Link>
          </div>
        </section>

    );
}
