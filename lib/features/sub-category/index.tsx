import Container from "@/lib/components/common/container";
import HtmlContent from "@/lib/components/common/html-content";
import LatestPopularNews from "@/lib/components/common/latest-popular";
import { ImageWithFallback } from "@/lib/components/image";
import { newsJson } from "@/lib/data";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const SubCategoryIndex = () => {
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
            name_en: "jatiyo-party",
            name_bn: "জাতীয় পার্টি",
        },
        {
            name_en: "national-citizen-party",
            name_bn: "জাতীয় নাগরিক পার্টি (এনসিপি)",
        },
    ];

    return (
        <div className="">
            <Container>
                <div className="my-6">
                    <div className="flex items-center gap-2">
                        <Link href="#" className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center">
                            <span className="pl-4">রাজনীতি</span>
                            <IoIosArrowForward />
                        </Link>
                        <Link href={`/category/awami-league`} className="text-xl text-red-600 font-bold flex gap-2 items-center">
                            <span>আওয়ামী লীগ</span>
                        </Link>
                    </div>
                    <div className="border-b pb-2 mt-2 mb-0 pl-[22px]">
                        <ul className="flex gap-4">
                            {subCategories.map((subCat, index) => (
                                <li
                                    key={index}
                                    className={
                                        index !== subCategories.length - 1
                                            ? "pr-4 border-r"
                                            : ""
                                    }
                                >
                                    <Link href={`/category/${subCat.name_en}`} className="text-gray-700 hover:text-blue-700 font-semibold">
                                        {subCat.name_bn}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
                    <div className="col-span-1 lg:col-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 divider">
                            {/* Lead */}
                            <div className="col-span-1 lg:col-span-2">
                                <div className="">
                                    <Link href="#" className="relative group">
                                        <div className="">
                                            <img className="w-full aspect-[16/9]" src="https://cdn.dhakapost.com/media/imgAll/BG/2025December/jobaida-20251208155025.jpg" alt="" />
                                        </div>
                                        <div className="absolute w-full h-1/2 bg-gradient-to-t from-red-500 to-black/0 bottom-0 right-0 z-10"></div>

                                        <h2 className="absolute left-5 bottom-5 text-white text-3xl font-normal group-hover:underline z-20">
                                            খালেদা জিয়াকে দেখতে হাসপাতালে জোবাইদা রহমান
                                        </h2>
                                    </Link>
                                </div>
                            </div>

                            {/* Lead right */}
                            <div className="col-span-1">
                                <div className="">
                                    {newsJson.slice(44, 45).map((newsItem, idx) => (
                                        <Link href={"/"} key={idx} className="relative block group h-full">
                                            <div
                                                className={`w-full h-full`}
                                            >
                                                <div className="w-full aspect-[16/9]">
                                                    <ImageWithFallback
                                                        src={`${newsItem.image}`}
                                                        height={600}
                                                        width={900}
                                                        alt={`${newsItem.title}`}
                                                        className="w-full object-cover h-full"
                                                    />
                                                </div>
                                                <div>
                                                    <h4
                                                        className={`pt-2 text-lg group-hover:text-blue-700 font-semibold`}>
                                                        {newsItem.title}
                                                    </h4>
                                                    <HtmlContent html={newsItem.description} maxContent={200} className="py-1 text-gray-500" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 3 contents. Lead below */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {newsJson.slice(40, 43).map((newsItem, idx) => (
                                <Link href={"/"} key={idx} className="relative block group h-full">
                                    <div
                                        className={`w-full h-full bg-gray-100`}
                                    >
                                        <div className="w-full aspect-[16/9]">
                                            <ImageWithFallback
                                                src={`${newsItem.image}`}
                                                height={600}
                                                width={900}
                                                alt={`${newsItem.title}`}
                                                className="w-full object-cover h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4 className={`px-2 pt-2 text-lg group-hover:text-blue-700 font-semibold`}>
                                                {newsItem.title}
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

                        <div className="flex flex-col gap-4">
                            {newsJson.slice(37, 47).map((newsItem, idx) => (
                                <div key={idx} className="border-b pb-4">
                                    <Link href={"/"} className="group flex flex-row gap-3">
                                        <div className="w-36 lg:w-80 shrink-0">
                                            <div className="w-full aspect-[16/9]">
                                                <ImageWithFallback
                                                    src={`${newsItem.image}`}
                                                    height={600}
                                                    width={900}
                                                    alt={`${newsItem.title}`}
                                                    className="w-full object-cover h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-grow px-2">
                                            <h4
                                                className={`pt-2 text-xl group-hover:text-blue-700 font-semibold`}
                                            >
                                                {newsItem.title}
                                            </h4>
                                            <HtmlContent html={newsItem.description} maxContent={200} className="py-1 text-gray-400" />
                                        </div>
                                    </Link>
                                </div>
                            ))}

                            <div className="text-[24px] inline-flex items-center justify-center h-20 font-normal py-4 ">
                                <button
                                    type={'button'}
                                    className="px-6 py-2 bg-red-100 hover:bg-red-200"
                                >আরো দেখুন
                                </button>
                            </div>
                        </div>

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