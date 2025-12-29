import Link from "next/link";
import HtmlContent from "@/lib/components/common/html-content";
import { ContentDetailsType } from "@/lib/types/details.page";
import { ImageWithFallback } from "@/lib/components/image";

interface Props {
  contentDetails: ContentDetailsType;
  forwardRef?: React.Ref<HTMLDivElement>;
}

const ArticleContent = ({ contentDetails, forwardRef }: Props) => {
  return (
    <div ref={forwardRef}>
      {/* Headline/Title */}
      <h2 className="text-4xl font-semibold mb-4">{contentDetails.heading}</h2>

      {/* Image */}
      <div className="mb-6">
        {/* News Image */}
        <ImageWithFallback
          src={`${contentDetails.full_image_path}`}
          height={900}
          width={1200}
          alt={`${contentDetails.heading}`}
          className="w-full object-cover h-full"
        />

        {/* Image Caption */}
        {/* <p className="block text-gray-500 my-1 text-center text-sm">
          {contentDetails.image_caption}
        </p> */}
      </div>

      {/* Sub-heading */}
      {contentDetails.sub_heading && (
        <h4 className="text-2xl mb-4 font-medium leading-9">
          {contentDetails.sub_heading}
        </h4>
      )}

      {/* Content details */}
      <article className="mb-4 text-black leading-8 text-lg content-details">
        <HtmlContent html={contentDetails.content_details} />
      </article>

      {/* Tags */}
      <div className="mb-4 flex gap-1 items-center">
        {contentDetails &&
          contentDetails.tags &&
          contentDetails.tags.length > 0 &&
          contentDetails.tags.map((tag, index) => (
            <Link
              key={index}
              href={tag.full_url}
              className="border rounded px-4 pt-1.5 pb-1 text-sm bg-gray-0 hover:bg-gray-100"
            >
              {tag.name}
            </Link>
          ))}
      </div>

      {/* Follow google news */}
      <div className="bg-amber-50 border border-amber-200 px-4 py-2 d-print-none hover:border-amber-300">
        <a
          href="https://news.google.com/publications/?"
          className="text-dark flex items-center justify-center gap-4"
          target="_blank"
        >
          <img
            className="img-fluid w-8"
            src="https://www.rupalibangladesh.com/media/common/google-news-feed.png"
            alt=" Google News"
          />
          সর্বশেষ খবর পেতে দৈনিক এদিন এর গুগল নিউজ চ্যানেল ফলো করুন
        </a>
      </div>
    </div>
  );
};

export default ArticleContent;
