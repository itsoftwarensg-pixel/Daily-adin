import Link from "next/link";
import Container from "@/lib/components/common/container";
import LatestPopularNews from "@/lib/components/common/latest-popular";
import LoadMoreContent from "@/lib/components/load-more-content";
import { LOAD_MORE_TYPES } from "@/lib/config/constant";
import { Category } from "@/lib/types/category.page";
import { SubCatContentItem, SubCategory } from "@/lib/types/sub-category.page";
import { IoIosArrowForward } from "react-icons/io";
import InnnerInitalContents from "@/lib/components/inner-initial-contents";
import LatestPopular from "../latest-popular";
import { FiAlertCircle } from "react-icons/fi";
import NoContentFound from "@/lib/components/no-content-found";
import Advertisement from "@/lib/components/common/advertisement";

// Props
interface Props {
  subCategory: SubCategory;
  category: Category;
  contents: {
    data: SubCatContentItem[];
    last_page: number;
  };
}

const SubCategoryIndex = ({ subCategory, category, contents }: Props) => {
  return (
    <div className="">
      <Container>
        <div className="my-6">
          <>
            <div className="flex items-center gap-2 overflow-x-auto">
              <Link
                href={`${category.full_url}`}
                className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
              >
                <span className="pl-4">{category.name}</span>
                <IoIosArrowForward />
              </Link>
              <Link
                href={`${subCategory.full_url}`}
                className="text-xl text-red-600 font-bold flex gap-2 items-center"
              >
                <span>{subCategory.name}</span>
              </Link>
            </div>
            <div className="border-b pb-2 mt-2 mb-0 pl-[22px] overflow-x-auto">
              {category &&
                category.subcategories &&
                category.subcategories.length > 0 && (
                  <ul className="flex gap-4 whitespace-nowrap">
                    {category.subcategories.map((subCat, index) => (
                      <li
                        key={index}
                        className={
                          index != (category.subcategories?.length ?? 0) - 1
                            ? "pr-4 border-r"
                            : ""
                        }
                      >
                        <Link
                          href={`${subCat.full_url}`}
                          className={` hover:text-blue-700 font-semibold ${subCat.alias == subCategory.alias
                            ? "text-blue-700"
                            : "text-gray-700"
                            }`}
                        >
                          {subCat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          </>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
          <div className="col-span-1 lg:col-auto">
            {contents.data && contents.data.length > 0 ? (
              <>
                {/* Lead, SubLead, and 3 contents. Lead below */}
                <InnnerInitalContents contents={contents.data.slice(0, 5)} />

                {/* Advertisement */}
                <div className="flex justify-center mb-4">
                  <Advertisement width={728} height={90} />
                </div>

                {/* LoadMoreContent component */}
                <LoadMoreContent
                  id={subCategory.id}
                  type={LOAD_MORE_TYPES.SUB_CATEGORY}
                  loadMoreContents={{
                    contents: contents.data.slice(5),
                    last_page: contents.last_page, // Assuming 1 for now, will be updated with actual last_page from API
                  }}
                />
              </>
            ) : (
              <NoContentFound />
            )}
          </div>

          <div className="col-span-1 lg:col-auto">
            <div className="flex justify-center">
              <Advertisement width={300} height={300} />
            </div>

            {/* Latest - Popular */}
            <div className="my-4">
              <LatestPopular />
            </div>
          </div>
        </div>
      </Container >
    </div >
  );
};

export default SubCategoryIndex;
