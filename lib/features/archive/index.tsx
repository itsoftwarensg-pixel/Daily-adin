"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Calendar from "./calendar";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { ArchiveType } from "@/lib/types/archive.types";
import { UpazilaType } from "@/lib/types/district.page";
import { formatDate1 } from "@/lib/utils/dateFormatter";
import { DivisionType } from "@/lib/types/district.page";
import { CategoryType } from "@/lib/types/category.page";
import { DistrictType } from "@/lib/types/division.page";
import Container from "@/lib/components/common/container";
import { getSearchArchiveAction } from "@/app/actions/archive";
import { getDistrictByDivisionIdAction } from "@/app/actions/division";
import { getUpazilasByDistrictIdAction } from "@/app/actions/district";
import NewsItemArchive from "@/lib/components/common/news-elements/news-item-archive";
import NoContentFound from "@/lib/components/no-content-found";

interface PropsType {
    divisionList: DivisionType[];
    categoryList: CategoryType[];
    archiveSearchResult: {
        from: number;
        per_page: number;
        current_page: number;
        last_page: number;
        to: number;
        total: number;
        data: ArchiveType[];
    };
}

const ArchivePage = ({
    divisionList,
    categoryList,
    archiveSearchResult,
}: PropsType) => {
    // Main content and pagination
    const [contents, setContents] = useState<ArchiveType[]>(
        archiveSearchResult.data
    );
    const [currentPage, setCurrentPage] = useState(
        archiveSearchResult.current_page
    );
    const lastPage = archiveSearchResult.last_page;
    const perPage = archiveSearchResult.per_page;
    const [loading, setLoading] = useState(false);

    // Filters
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedDivision, setSelectedDivision] = useState<string>("");
    const [selectedDistrict, setSelectedDistrict] = useState<string>("");
    const [selectedUpazila, setSelectedUpazila] = useState<string>("");

    // Dynamic dropdown lists
    const [districtList, setDistrictList] = useState<DistrictType[]>([]);
    const [upazilaList, setUpazilaList] = useState<UpazilaType[]>([]);

    // Date filters
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    /** ----------------------------- */
    /** Effects */
    /** ----------------------------- */

    // Fetch districts when division changes
    useEffect(() => {
        if (!selectedDivision) {
            setDistrictList([]);
            setSelectedDistrict("");
            setUpazilaList([]);
            setSelectedUpazila("");
            return;
        }

        const fetchDistricts = async () => {
            const districts = await getDistrictByDivisionIdAction(
                Number(selectedDivision)
            );
            setDistrictList(districts);
            setSelectedDistrict(""); // reset district selection
            setUpazilaList([]); // reset upazila list
            setSelectedUpazila(""); // reset upazila selection
        };

        fetchDistricts();
    }, [selectedDivision]);

    // Fetch upazilas when district changes
    useEffect(() => {
        if (!selectedDistrict) {
            setUpazilaList([]);
            setSelectedUpazila("");
            return;
        }

        const fetchUpazilas = async () => {
            const upazilas = await getUpazilasByDistrictIdAction(
                Number(selectedDistrict)
            );
            setUpazilaList(upazilas);
            setSelectedUpazila(""); // reset upazila selection
        };

        fetchUpazilas();
    }, [selectedDistrict]);

    // Load more archives for pagination
    const handleLoadMore = async () => {
        if (loading || currentPage >= lastPage) return;
        setLoading(true);

        try {
            const response = await getSearchArchiveAction(currentPage + 1, perPage);
            setContents((prev) => [...prev, ...response.data]);
            setCurrentPage(response.current_page);
        } finally {
            setLoading(false);
        }
    };

    // Reset all filters and reload page
    const handleReset = () => {
        window.location.reload();
    };

    // Search archives based on selected filters and dates
    const handleSearchArchive = async () => {
        setLoading(true);

        try {
            const response = await getSearchArchiveAction(
                1, // always start from page 1 for a new search
                perPage,
                formatDate1(startDate) ?? undefined,
                formatDate1(endDate) ?? undefined,
                selectedCategory ? Number(selectedCategory) : undefined,
                selectedDivision ? Number(selectedDivision) : undefined,
                selectedDistrict ? Number(selectedDistrict) : undefined,
                selectedUpazila ? Number(selectedUpazila) : undefined
            );

            // Update state with search results
            setContents(response.data);
            setCurrentPage(response.current_page);
        } catch (error) {
            console.error("Error searching archives:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="my-4">
            <Container>
                {/* Section title */}
                <div className="flex items-center gap-2 pb-4">
                    <Link
                        href="#"
                        className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
                    >
                        <span className="pl-4">আর্কাইভ</span>
                        <IoIosArrowForward />
                    </Link>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 border-t pt-4 items-center">
                    <div className="col-span-1 lg:col-span-10">
                        <div className="grid grid-cols-12 gap-4">
                            {/* Date picker */}
                            <Calendar
                                startDate={startDate}
                                endDate={endDate}
                                setStartDate={setStartDate}
                                setEndDate={setEndDate}
                            />

                            {/* Category dropdown */}
                            <div className="col-span-6 lg:col-span-4">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="selectArrow w-full text-black rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0 cursor-pointer"
                                >
                                    <option value="">ক্যাটাগরি</option>
                                    {categoryList.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name_bn ?? category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Division dropdown */}
                            <div className="col-span-6 lg:col-span-4">
                                <select
                                    value={selectedDivision}
                                    onChange={(e) => setSelectedDivision(e.target.value)}
                                    className="selectArrow w-full text-black rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0 cursor-pointer"
                                >
                                    <option value="">বিভাগ</option>
                                    {divisionList.map((division) => (
                                        <option key={division.id} value={division.id}>
                                            {division.name_bn}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* District dropdown */}
                            <div className="col-span-6 lg:col-span-4">
                                <select
                                    value={selectedDistrict}
                                    onChange={(e) => setSelectedDistrict(e.target.value)}
                                    disabled={!selectedDivision}
                                    className="selectArrow w-full text-black rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0 cursor-pointer"
                                >
                                    <option value="">জেলা</option>
                                    {districtList.map((district) => (
                                        <option key={district.id} value={district.id}>
                                            {district.name_bn ?? district.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Upazila dropdown */}
                            <div className="col-span-6 lg:col-span-4">
                                <select
                                    value={selectedUpazila}
                                    onChange={(e) => setSelectedUpazila(e.target.value)}
                                    disabled={!selectedDistrict}
                                    className="selectArrow w-full text-black rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0 cursor-pointer"
                                >
                                    <option value="">উপজেলা</option>
                                    {upazilaList.map((upazila) => (
                                        <option key={upazila.id} value={upazila.id}>
                                            {upazila.name_bn ?? upazila.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="col-span-1 lg:col-span-2 space-y-4 pl-4 border-l">
                        <button
                            onClick={handleReset}
                            className="w-full flex gap-4 px-6 py-3.5 items-center justify-center bg-gray-200 hover:bg-gray-300"
                        >
                            সকল খবর
                        </button>
                        <button
                            onClick={handleSearchArchive}
                            className="w-full flex gap-4 px-6 py-3.5 items-center justify-center text-white bg-green-500 hover:bg-green-600"
                        >
                            <BiSearchAlt2 size={22} />
                            খুঁজুন
                        </button>
                    </div>
                </div>

                {/* Archive content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 border-t pt-4">
                    {contents.length > 0 ? (
                        contents.map((newsItem) => (
                            <NewsItemArchive key={newsItem.id} newsItem={newsItem} />
                        ))
                    ) : (
                        <NoContentFound />
                    )}
                </div>

                {/* Load more */}
                {currentPage < lastPage && contents.length > 0 && (
                    <div className="flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            disabled={loading}
                            className={`text-white text-lg bg-red-600 px-4 py-2 flex items-center justify-center gap-4 rounded-sm hover:bg-red-500 ${loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading ? "লোড হচ্ছে..." : "আরও দেখুন"}
                        </button>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default ArchivePage;
