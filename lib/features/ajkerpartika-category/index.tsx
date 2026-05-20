import Link from "next/link";
import Container from "@/lib/components/common/container";
import { AJKER_PATRIKA_PAGE, LOAD_MORE_TYPES } from "@/lib/config/constant";
import { Category, ContentItem } from "@/lib/types/category.page";
import { IoIosArrowForward } from "react-icons/io";
import LoadMoreContent from "@/lib/components/load-more-content";
import NoContentFound from "@/lib/components/no-content-found";
import ImageWithFallback from "@/lib/components/image/ImageWithFallback";

// Define the props type
interface Props {
  category: Category;
  contents: {
    data: ContentItem[];
    last_page: number;
  };
}

const AjkerPatrikaCategory = ({ category, contents }: Props) => {
  const toBDDateStr = (date: Date) =>
    date.toLocaleDateString("en-CA", { timeZone: "Asia/Dhaka" });

  const excludedContents = contents?.data?.filter((content) => {
    const contentDate = new Date(content.created_at);
    return toBDDateStr(contentDate) === toBDDateStr(new Date());
  });

  const excludedContentsIds = excludedContents?.map((content) => content.id);

  return (
    <div className="">
      <Container>
        <div className="my-6">
          <div className="flex items-center gap-2">
            <Link
              href={`${category.full_url}`}
              className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
            >
              <span className="pl-4">{AJKER_PATRIKA_PAGE.name_bn}</span>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1 lg:col-auto">
            {contents.data &&
              contents.data.length > 0 ? (
              <>
                {excludedContents && excludedContents.length > 0 && (
                  <div className="mb-6 border bg-gray-100 p-3 md:p-6">
                    <div className="flex flex-wrap gap-4">
                      {excludedContents.map((item, index) => (
                        <Link
                          key={item.id ?? index}
                          href={item.full_url}
                          className="block group w-[calc(50%-8px)] md:w-[calc(25%-12px)]"
                        >
                          <div className="relative aspect-[16/12] overflow-hidden">
                            <ImageWithFallback
                              src={item.full_image_path}
                              height={600}
                              width={900}
                              alt={item.heading}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <h4 className="text-white text-sm md:text-lg font-semibold leading-snug line-clamp-2">
                                {item.heading}
                              </h4>
                              <div className="text-gray-300 text-xs mt-1">{item.created_at_bangla}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {/* Advertisement */}

                {/* LoadMoreContent component */}
                <LoadMoreContent
                  id={category.id}
                  type={LOAD_MORE_TYPES.AJKER_PATRIKA_CATEGORY}
                  loadMoreContents={{
                    contents: contents.data,
                    last_page: contents.last_page, // Assuming 1 for now, will be updated with actual last_page from API
                  }}
                  excludeIDs={excludedContentsIds}
                />
              </>
            ) : (
              <NoContentFound />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AjkerPatrikaCategory;
