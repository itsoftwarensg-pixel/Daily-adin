import Container from "@/lib/components/common/container";
import HtmlContent from "@/lib/components/common/html-content";
import LatestPopularNews from "@/lib/components/common/news-elements/latest-popular";
import { ImageWithFallback } from "@/lib/components/image";
import { newsJson } from "@/lib/data";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const CategoryIndex = () => {
    return (
        <div className="">
            <Container>
                <div className="my-6">
                    <Link href="#" className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center">
                        <span className="pl-4">রাজনীতি</span>
                        <IoIosArrowForward />
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
                    <div className="col-span-1 lg:col-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 divider">
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
                                                        className={`pt-3 text-xl
                           group-hover:text-blue-700 font-normal`}
                                                    >
                                                        {newsItem.title}
                                                    </h4>
                                                    <HtmlContent html={newsItem.description} maxContent={200} className="py-2 text-gray-500" />
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
                                                className={`pt-3 text-xl
                           group-hover:text-blue-700 font-normal`}
                                            >
                                                {newsItem.title}
                                            </h4>
                                            <HtmlContent html={newsItem.description} maxContent={100} className="py-2 text-gray-500" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex justify-center mb-4">
                                <img src="https://tpc.googlesyndication.com/simgad/15643014635329783982" alt="" />
                            </div>

                            {newsJson.slice(40, 46).map((newsItem, idx) => (
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
                                                className={`pt-3 text-2xl group-hover:text-blue-700 font-normal`}
                                            >
                                                {newsItem.title}
                                            </h4>
                                            <HtmlContent html={newsItem.description} maxContent={200} className="py-2 text-gray-400" />
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
            </Container>
        </div>
    )
}

export default CategoryIndex;