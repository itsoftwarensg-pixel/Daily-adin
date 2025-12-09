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
      <div className="aspect-[16/10] w-full">
        <ImageWithFallback
          src={image}
          width={450}
          height={750}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="absolute left-5 bottom-5 text-white text-[32px] font-normal">
        {title}
      </h2>
    </Link>
  );
};

export default MediaNewsBanner;
