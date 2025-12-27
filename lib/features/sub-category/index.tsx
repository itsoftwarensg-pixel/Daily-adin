import Link from "next/link";
import Container from "@/lib/components/common/container";
import LatestPopularNews from "@/lib/components/common/latest-popular";
import LoadMoreContent from "@/lib/components/load-more-content";
import { LOAD_MORE_TYPES } from "@/lib/config/constant";
import { Category } from "@/lib/types/category.page";
import { SubCatContentItem, SubCategory } from "@/lib/types/sub-category.page";
import { IoIosArrowForward } from "react-icons/io";
import InnnerInitalContents from "@/lib/components/inner-initial-contents";

// Props
interface Props {
    subCategory: SubCategory;
    category: Category
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
                        <div className="flex items-center gap-2">
                            <Link href={`/${category.alias}`} className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center">
                                <span className="pl-4">{category.name}</span>
                                <IoIosArrowForward />
                            </Link>
                            <Link href={`/${subCategory.alias}`} className="text-xl text-red-600 font-bold flex gap-2 items-center">
                                <span>{subCategory.name}</span>
                            </Link>
                        </div>
                        <div className="border-b pb-2 mt-2 mb-0 pl-[22px]">
                            {category && category.subcategories && category.subcategories.length > 0 &&
                                <ul className="flex gap-4">
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
                                                href={`/${category.alias}/${subCat.alias}`}
                                                className={`text-gray-700 hover:text-blue-700 font-semibold ${subCat.name === subCategory.name ? 'text-blue-700' : ''}`}
                                            >
                                                {subCat.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
                    <div className="col-span-1 lg:col-auto">
                        {subCategory?.contents && subCategory?.contents.length > 0 ?
                            <>
                                {/* Lead, SubLead, and 3 contents. Lead below */}
                                <InnnerInitalContents contents={subCategory.contents} />

                                {/* Advertisement */}
                                <div className="flex justify-center mb-4">
                                    <img src="https://tpc.googlesyndication.com/simgad/15643014635329783982" alt="" />
                                </div>

                                {/* LoadMoreContent component */}
                                <LoadMoreContent
                                    id={subCategory.id}
                                    type={LOAD_MORE_TYPES.SUB_CATEGORY}
                                    loadMoreContents={{
                                        contents: contents.data,
                                        last_page: contents.last_page, // Assuming 1 for now, will be updated with actual last_page from API
                                    }}
                                />
                            </>
                            : <div className="text-center text-gray-500 py-20">
                                No contents available.
                            </div>
                        }
                    </div>

                    <div className="col-span-1 lg:col-auto">
                        <div className="flex justify-center">
                            <img src="https://tpc.googlesyndication.com/simgad/11473454279542623205" alt="" />
                        </div>

                        {/* Latest - Popular */}
                        <div className="my-4">
                            <LatestPopularNews />
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default SubCategoryIndex;