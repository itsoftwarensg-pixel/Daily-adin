import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import HtmlContent from "@/lib/components/common/html-content";
import { InnerInitialContentItemType } from "@/lib/types/common.types";

interface Props {
  contents: InnerInitialContentItemType[];
}

const InnnerInitalContents = ({ contents }: Props) => {
  const lead = contents?.[0] ?? null;
  const subLead = contents?.[1] ?? null;
  const otherSubLead = contents?.slice(2, 5) ?? [];

  return (
    <div>
      {/* ================= Desktop Lead + SubLead ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Lead */}
        {lead && (
          <div className="col-span-1 lg:col-span-2">
            <Link href={lead.full_url} className="relative block group">
              <div className="aspect-[16/9]">
                <ImageWithFallback
                  src={lead.full_image_path}
                  height={600}
                  width={900}
                  alt={lead.heading}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-red-500 to-transparent z-10" />

              <h2 className="absolute left-5 bottom-5 z-20 text-white text-xl md:text-3xl font-semibold group-hover:underline">
                {lead.heading}
              </h2>
            </Link>
          </div>
        )}

        {/* SubLead (desktop only) */}
        {subLead && (
          <div className="hidden lg:block col-span-1">
            <Link href={subLead.full_url} className="block group h-full">
              <div className="aspect-[16/9]">
                <ImageWithFallback
                  src={subLead.full_image_path}
                  height={600}
                  width={900}
                  alt={subLead.heading}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="pt-2 text-lg font-semibold group-hover:text-blue-700">
                {subLead.sub_heading &&
                  <div className="inline-flex items-center gap-1 mr-1">
                    <span className="text-red-500">{subLead.sub_heading}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block"></span>
                  </div>
                }
                {subLead.heading}
              </h4>

              <HtmlContent
                html={subLead.description}
                maxContent={200}
                className="py-1 text-gray-500"
              />
            </Link>
          </div>
        )}
      </div>

      {/* ================= Mobile: 2x2 Grid ================= */}
      {subLead && (
        <div className="grid grid-cols-2 gap-4 mb-6 lg:hidden">
          {[subLead, ...otherSubLead].map((item, index) => (
            <Link
              key={item.id ?? index}
              href={item.full_url}
              className="block group"
            >
              <div className="bg-gray-100 h-full">
                <div className="aspect-[16/9]">
                  <ImageWithFallback
                    src={item.full_image_path}
                    height={600}
                    width={900}
                    alt={item.heading}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-2">
                  <h4 className="text-[17px] font-semibold group-hover:text-blue-700">
                    {item.heading}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* ================= Desktop: 3 Items Below ================= */}
      {otherSubLead.length > 0 && (
        <div className="hidden lg:grid grid-cols-3 gap-4 mb-6">
          {otherSubLead.map((newsItem, idx) => (
            <Link
              key={newsItem.id ?? idx}
              href={newsItem.full_url}
              className="block group"
            >
              <div className="bg-gray-100 h-full">
                <div className="aspect-[16/9]">
                  <ImageWithFallback
                    src={newsItem.full_image_path}
                    height={600}
                    width={900}
                    alt={newsItem.heading}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-2">
                  <h4 className="text-lg font-semibold group-hover:text-blue-700">
                    {newsItem.sub_heading &&
                      <div className="inline-flex items-center gap-1 mr-1">
                        <span className="text-red-500">{newsItem.sub_heading}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block"></span>
                      </div>
                    }
                    {newsItem.heading}
                  </h4>

                  <HtmlContent
                    html={newsItem.description}
                    maxContent={100}
                    className="pt-1 text-gray-500"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default InnnerInitalContents;
