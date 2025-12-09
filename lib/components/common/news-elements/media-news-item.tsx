import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";

interface PropsType {
  image: string;
  title: string;
  description: string;
  href?: string;
}

const MediaNewsItem = ({
  image,
  title,
  description,
  href = "/",
}: PropsType) => {
  return (
    <Link href={href} className="group block overflow-hidden">
      <div className="grid grid-cols-5 gap-2 items-center">
        <div className="col-span-2 aspect-[16/10]">
          <ImageWithFallback
            src={image}
            width={140}
            height={250}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-3 group-hover:text-blue-700">
          <h4 className="p-2 text-[24px]">{title}</h4>
          <h2 className="p-2 text-[16px] text-textLightGray">{description}</h2>
        </div>
      </div>
    </Link>
  );
};

export default MediaNewsItem;
