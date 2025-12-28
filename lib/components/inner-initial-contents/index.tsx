import Link from "next/link";
import HtmlContent from "@/lib/components/common/html-content";
import { ImageWithFallback } from "@/lib/components/image";
import { InnerInitialContentItemType } from "@/lib/types/common.types";

// Define the props type
interface Props {
  contents: InnerInitialContentItemType[];
}

const InnnerInitalContents = ({ contents }: Props) => {
  const lead = contents?.[0] ?? null; //
  const subLead = contents?.[1] ?? null; // second item
  const otherSubLead = contents?.slice(2, 5); // max 3 item

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 divider">
        {/* Lead */}
        {lead && (
          <div className="col-span-1 lg:col-span-2">
            <div className="aspect-[16/9]">
              <Link href={`${lead.full_url}`} className="relative group">
                <div className="">
                  <ImageWithFallback
                    src={`${lead.full_image_path}`}
                    height={600}
                    width={900}
                    alt={`${lead.heading}`}
                    className="w-full object-cover h-full"
                  />
                </div>
                <div className="absolute w-full h-1/2 bg-gradient-to-t from-red-500 to-black/0 bottom-0 right-0 z-10"></div>
                <h2 className="absolute left-5 bottom-5 text-white text-3xl font-normal group-hover:underline z-20">
                  {lead.heading}
                </h2>
              </Link>
            </div>
          </div>
        )}

        {/* Lead right */}
        {subLead && (
          <div className="col-span-1">
            <div className="">
              <Link
                href={`${subLead.full_url}`}
                className="relative block group h-full"
              >
                <div className={`w-full h-full`}>
                  <div className="w-full aspect-[16/9]">
                    <ImageWithFallback
                      src={`${subLead.full_image_path}`}
                      height={600}
                      width={900}
                      alt={`${subLead.heading}`}
                      className="w-full object-cover h-full"
                    />
                  </div>
                  <div>
                    <h4
                      className={`pt-2 text-lg group-hover:text-blue-700 font-semibold`}
                    >
                      {subLead.heading}
                    </h4>
                    <HtmlContent
                      html={subLead.description}
                      maxContent={300}
                      className="py-1 text-gray-500"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 3 contents. Lead below */}
      {otherSubLead && otherSubLead.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {otherSubLead.map((newsItem, idx) => (
            <Link
              href={`${newsItem.full_url}`}
              key={idx}
              className="relative block group h-full"
            >
              <div className={`w-full h-full bg-gray-100`}>
                <div className="w-full aspect-[16/9]">
                  <ImageWithFallback
                    src={`${newsItem.full_image_path}`}
                    height={600}
                    width={900}
                    alt={`${newsItem.heading}`}
                    className="w-full object-cover h-full"
                  />
                </div>
                <div>
                  <h4
                    className={`px-2 pt-2 text-lg group-hover:text-blue-700 font-semibold`}
                  >
                    {newsItem.heading}
                  </h4>
                  <HtmlContent
                    html={newsItem.description}
                    maxContent={100}
                    className="p-2 pt-1 text-gray-500"
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
