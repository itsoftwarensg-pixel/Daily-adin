import Link from "next/link";
import { Suspense } from "react";
import CategoryContents from "./contents";
import LatestPopular from "../latest-popular";
import { IoIosArrowForward } from "react-icons/io";
import Loader from "@/lib/components/common/loader";
import { LOAD_MORE_TYPES } from "@/lib/config/constant";
import Container from "@/lib/components/common/container";
import LoadMoreContent from "@/lib/components/load-more-content";
import { Category, ContentItem } from "@/lib/types/category.page";
import InnnerInitalContents from "@/lib/components/inner-initial-contents";

// Define the props type
interface Props {
  category: Category;
}

const CategoryIndex = ({ category }: Props) => {
  // Retrieve IDs of position contents to exclude them from LoadMoreContent
  const positionContents = category?.position_contents || [];
  const positionContentsIds: number[] = positionContents.map((item) => item.id); // Retrieve IDs of position contents. Array

  return (
    <div className="">
      <Container>
        <div className="my-6">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Link
              href={`${category.full_url}`}
              className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
            >
              <span className="pl-4">{category.name}</span>
              <IoIosArrowForward />
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
                      className="pr-4 border-r shrink-0 last:border-r-0"
                    >
                      <Link
                        href={subCat.full_url}
                        className="text-gray-700 hover:text-blue-700 font-semibold"
                      >
                        {subCat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
          <div className="col-span-1 lg:col-auto">
            {category?.position_contents &&
            category?.position_contents.length > 0 ? (
              <>
                {/* Lead, SubLead, and 3 contents. Lead below */}
                <InnnerInitalContents contents={category.position_contents} />

                {/* Advertisement */}
                <div className="flex justify-center mb-4">
                  <img
                    src="https://tpc.googlesyndication.com/simgad/15643014635329783982"
                    alt=""
                  />
                </div>

                {/* LoadMoreContent component */}
                <Suspense fallback={<Loader />}>
                  <CategoryContents
                    categoryID={category.id}
                    excludeIDs={positionContentsIds}
                  />
                </Suspense>
              </>
            ) : (
              <p>No contents available</p>
            )}
          </div>

          <div className="col-span-1 lg:col-auto">
            <div className="flex justify-center">
              <img
                src="https://tpc.googlesyndication.com/simgad/11473454279542623205"
                alt=""
              />
            </div>

            {/* Latest - Popular */}
            <div className="my-4">
              <LatestPopular />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryIndex;
