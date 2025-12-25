import Link from "next/link";
import { googleNews } from "@/lib/components/icons";
import { ImageWithFallback } from "@/lib/components/image";
import HtmlContent from "@/lib/components/common/html-content";
import DetailsLeftSidebar from "@/lib/features/details/left-sidebar";

type PropsType = {
  category: string;
  title: string;
  image: string;
  caption?: string;
  subTitle: string;
  content: string;
  tags: string[];
};

const NewsBlock = ({
  category,
  title,
  image,
  caption,
  subTitle,
  content,
  tags,
}: PropsType) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Left Sidebar */}
      <div className="col-span-3">
        <DetailsLeftSidebar category={category} categoryUrl="/" />
      </div>

      {/* Main Content */}
      <div className="col-span-9">
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>

        <div className="mb-6">
          <img src={image} alt="details image" />
          {caption && (
            <p className="block text-gray-500 my-1 text-center text-sm">
              {caption}
            </p>
          )}
        </div>

        <h4 className="text-2xl mb-4 font-medium leading-9">{subTitle}</h4>

        <article className="mb-4 text-black leading-8 text-lg content-details">
          <HtmlContent html={content} />
        </article>

        {/* Tags */}
        <div className="mb-4 flex gap-1 items-center flex-wrap">
          {tags.map((tag) => (
            <Link
              key={tag}
              href="/"
              className="border rounded px-4 pt-1.5 pb-1 text-sm hover:bg-gray-100"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Google News */}
        <div className="bg-amber-50 border border-amber-200 px-4 py-2 hover:border-amber-300">
          <a
            href="https://news.google.com/publications/?"
            className="flex items-center justify-center gap-4"
            target="_blank"
          >
            <ImageWithFallback
              src={googleNews}
              width={32}
              height={32}
              alt="Google News"
            />
            সর্বশেষ খবর পেতে দৈনিক এদিন এর গুগল নিউজ চ্যানেল ফলো করুন
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;
