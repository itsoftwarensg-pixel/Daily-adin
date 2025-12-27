import Link from "next/link";
import Container from "@/lib/components/common/container";
import LatestPopularNews from "@/lib/components/common/latest-popular";
import LoadMoreContent from "@/lib/components/load-more-content";
import { LOAD_MORE_TYPES } from "@/lib/config/constant";
import { Category, ContentItem } from "@/lib/types/category.page";
import { IoIosArrowForward } from "react-icons/io";
import InnnerInitalContents from "@/lib/components/inner-initial-contents";

// Define the props type
interface Props {
    category: Category;
    contents: {
        data: ContentItem[];
        last_page: number;
    };
}

const CategoryIndex = ({ category, contents }: Props) => {

    return (
        <div className="">
            <Container>
                <div className="my-6">
                    <div className="flex items-center gap-2">
                        <Link href="#" className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center">
                            <span className="pl-4">{category.name}</span>
                            <IoIosArrowForward />
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
                                        <Link href={`${category.alias}/${subCat.alias}`} className="text-gray-700 hover:text-blue-700 font-semibold">
                                            {subCat.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
                    <div className="col-span-1 lg:col-auto">
                        {category?.position_contents && category?.position_contents.length > 0 ?
                            <>
                                {/* Lead, SubLead, and 3 contents. Lead below */}
                                <InnnerInitalContents contents={category.position_contents} />

                                {/* Advertisement */}
                                <div className="flex justify-center mb-4">
                                    <img src="https://tpc.googlesyndication.com/simgad/15643014635329783982" alt="" />
                                </div>

                                {/* LoadMoreContent component */}
                                <LoadMoreContent
                                    id={category.id}
                                    type={LOAD_MORE_TYPES.CATEGORY}
                                    loadMoreContents={{
                                        contents: contents.data,
                                        last_page: contents.last_page, // Assuming 1 for now, will be updated with actual last_page from API
                                    }}
                                />
                            </> :
                            <p>No contents available</p>
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
            </Container>
        </div >
    )
}

export default CategoryIndex;