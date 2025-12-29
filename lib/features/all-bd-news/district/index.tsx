import Link from "next/link";
import Container from "@/lib/components/common/container";
import LatestPopularNews from "@/lib/components/common/latest-popular";
import { ContentItem } from "@/lib/types/category.page";
import { IoIosArrowForward } from "react-icons/io";
import { DistrictPageContentType } from "@/lib/types/district.page";
import { COUNTRY_PAGE, LOAD_MORE_TYPES } from "@/lib/config/constant";
import LoadMoreContent from "@/lib/components/load-more-content";
import InnnerInitalContents from "@/lib/components/inner-initial-contents";
import LatestPopular from "@/lib/features/latest-popular";

// Define the props type
interface Props {
    district: DistrictPageContentType;
    contents: {
        data: ContentItem[];
        last_page: number;
    };
}

const DistrictPage = ({ contents, district }: Props) => {

    return (
        <div className="">
            <Container>
                <div className="my-6">
                    <div className="flex items-center gap-2">
                        <Link href={`/${COUNTRY_PAGE.slug}`} className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center">
                            <span className="pl-4">{COUNTRY_PAGE.name_bn}</span>
                            <IoIosArrowForward />
                        </Link>

                        <Link href={`${district.division.full_url}`} className="text-xl text-red-600 font-bold flex gap-2 items-center">
                            <span >{district.division.name_bn}</span>
                            <IoIosArrowForward />
                        </Link>
                        <Link href={`${district.full_url}`} className="text-xl text-red-600 font-bold flex gap-2 items-center">
                            <span >{district.name_bn}</span>
                        </Link>
                    </div>

                    <div className="border-b pb-2 mt-2 mb-0 pl-[22px]">
                        {district.upazilas && district.upazilas.length > 0 &&
                            <ul className="flex gap-4">
                                {district.upazilas.map((upazila, index) => (
                                    <li
                                        key={index}
                                        className={
                                            index != (district.upazilas?.length ?? 0) - 1
                                                ? "pr-4 border-r"
                                                : ""
                                        }
                                    >
                                        <Link
                                            href={`${upazila.full_url}`}
                                            className={`text-gray-700 hover:text-blue-700 font-semibold`}
                                        >
                                            {upazila.name_bn}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
                    <div className="col-span-1 lg:col-auto">
                        {district?.contents && district?.contents.length > 0 ?
                            <>
                                {/* Lead, SubLead, and 3 contents. Lead below */}
                                <InnnerInitalContents contents={district.contents} />

                                {/* Advertisement */}
                                <div className="flex justify-center mb-4">
                                    <img src="https://tpc.googlesyndication.com/simgad/15643014635329783982" alt="" />
                                </div>

                                {/* LoadMoreContent component */}
                                <LoadMoreContent
                                    id={district.id}
                                    type={LOAD_MORE_TYPES.DISTRICT}
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
                            <LatestPopular />
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    )
}

export default DistrictPage;    