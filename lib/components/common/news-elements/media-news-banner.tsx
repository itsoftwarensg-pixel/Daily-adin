import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";

interface Props {
  image: string;
  title: string;
  href?: string;
}

const MediaNewsBanner = ({ image, title, href = "/" }: Props) => {
  return (
    <Link href={href} className="relative group block overflow-hidden">
      <div className="aspect-[16/12] w-full">
        <ImageWithFallback
          src={image}
          width={450}
          height={750}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="absolute left-5 bottom-5 text-white text-3xl font-normal group-hover:underline z-20">
        {title}
      </h2>

      <div className="absolute w-full h-1/2 bg-gradient-to-t from-red-500 to-black/0 bottom-0 right-0 z-10"></div>
    </Link>
  );
};

export default MediaNewsBanner;
