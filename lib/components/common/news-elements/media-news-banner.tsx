import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import { HomePageContentItem } from "@/lib/types/home.page";

// Props
interface Props {
    newsItem: HomePageContentItem;
}

const MediaNewsBanner = ({ newsItem }: Props) => {
    return (
        <Link href={`${newsItem.full_url}`} className="relative group block overflow-hidden">
            <div className="aspect-[16/12] w-full">
                <ImageWithFallback
                    src={newsItem.full_image_path}
                    width={450}
                    height={750}
                    alt={newsItem.heading}
                    className="w-full h-full object-cover"
                />
            </div>

            <h2 className="absolute left-5 bottom-5 text-white text-3xl font-semibold group-hover:underline z-20">
                {newsItem.heading}
            </h2>

            <div className="absolute w-full h-1/2 bg-gradient-to-t from-red-500 to-black/0 bottom-0 right-0 z-10"></div>
        </Link>
    );
};

export default MediaNewsBanner;
