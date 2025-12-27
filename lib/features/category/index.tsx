import Container from "@/lib/components/common/container";
import HtmlContent from "@/lib/components/common/html-content";
import LatestPopularNews from "@/lib/components/common/latest-popular";
import { ImageWithFallback } from "@/lib/components/image";
import { newsJson } from "@/lib/data";
import LoadMoreContent from "@/lib/features/category/load-more-content";
import { Category, ContentItem } from "@/lib/types/category.page";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

// Define the props type
interface Props {
    category: Category;
    contents: {
        data: ContentItem[];
        last_page: number;
    };
}

const CategoryIndex = ({ category, contents }: Props) => {
    const subCategories = [
        {
            name_en: "bnp",
            name_bn: "বিএনপি",
        },
        {
            name_en: "jamaat",
            name_bn: "জামায়াত",
        },
        {
            name_en: "awami-league",
            name_bn: "আওয়ামী লীগ",
        },
        {
            name_en: "jatiyo-party",
            name_bn: "জাতীয় পার্টি",
        },
        {
            name_en: "national-citizen-party",
            name_bn: "জাতীয় নাগরিক পার্টি (এনসিপি)",
        },
    ];

    const lead = category?.position_contents?.[0] ?? null; // 
    const subLead = category?.position_contents?.[1] ?? null; // second item
    const otherSubLead = category?.position_contents?.slice(2, 5); // max 3 items

    console.log('==== Category Page load more Data: ', contents);

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
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 divider">
                                    {/* Lead */}
                                    <div className="col-span-1 lg:col-span-2">
                                        <div className="aspect-[16/9]">
                                            <Link href={`/${category.alias}/${lead.id}`} className="relative group">
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

                                    {/* Lead right */}
                                    <div className="col-span-1">
                                        <div className="">
                                            <Link href={`/${category.alias}/${subLead.id}`} className="relative block group h-full">
                                                <div
                                                    className={`w-full h-full`}
                                                >
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
                                                            className={`pt-2 text-lg group-hover:text-blue-700 font-semibold`}>
                                                            {subLead.heading}
                                                        </h4>
                                                        <HtmlContent html={subLead.description} maxContent={300} className="py-1 text-gray-500" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* 3 contents. Lead below */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {otherSubLead?.map((newsItem, idx) => (
                                        <Link href={`/${category.alias}/${newsItem.id}`} key={idx} className="relative block group h-full">
                                            <div
                                                className={`w-full h-full bg-gray-100`}
                                            >
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
                                                    <h4 className={`px-2 pt-2 text-lg group-hover:text-blue-700 font-semibold`}>
                                                        {newsItem.heading}
                                                    </h4>
                                                    <HtmlContent html={newsItem.description} maxContent={100} className="p-2 pt-1 text-gray-500" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* Advertisement */}
                                <div className="flex justify-center mb-4">
                                    <img src="https://tpc.googlesyndication.com/simgad/15643014635329783982" alt="" />
                                </div>

                                {/* LoadMoreContent component */}
                                <LoadMoreContent
                                    categoryId={category.id}
                                    loadMoreContents={{
                                        contents: contents.data,
                                        last_page: contents.last_page, // Assuming 1 for now, will be updated with actual last_page from API
                                    }}
                                />
                            </> :
                            <p>No contents available in this sub-category.</p>
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