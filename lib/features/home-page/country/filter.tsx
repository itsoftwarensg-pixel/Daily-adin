"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BiSearchAlt2 } from "react-icons/bi";
import { UpazilaType } from "@/lib/types/district.page";
import { DistrictType } from "@/lib/types/division.page";
import { DivisionType } from "@/lib/types/district.page";
import { getDistrictByDivisionIdAction } from "@/app/actions/division";
import { getUpazilasByDistrictIdAction } from "@/app/actions/district";

interface PropsType {
  divisionList: DivisionType[];
}

const HomeCountryFilter = ({ divisionList }: PropsType) => {
  const router = useRouter();

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [districtList, setDistrictList] = useState<DistrictType[]>([]);
  const [upazilaList, setUpazilaList] = useState<UpazilaType[]>([]);

  // Load districts when division changes
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
      setSelectedDistrict("");
      setUpazilaList([]);
      setSelectedUpazila("");
    };

    fetchDistricts();
  }, [selectedDivision]);

  // Load upazilas when district changes
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
      setSelectedUpazila("");
    };

    fetchUpazilas();
  }, [selectedDistrict]);

  // Selected division object
  const selectedDivisionObj = divisionList.find(
    (d) => d.id === Number(selectedDivision)
  );

  // Selected district object
  const selectedDistrictObj = districtList.find(
    (d) => d.id === Number(selectedDistrict)
  );

  // Selected upazila object
  const selectedUpazilaObj = upazilaList.find(
    (u) => u.id === Number(selectedUpazila)
  );

  //Function to handle search button click
  const handleSearch = () => {
    if (selectedUpazilaObj?.full_url) {
      router.push(selectedUpazilaObj.full_url);
      return;
    }

    if (selectedDistrictObj?.full_url) {
      router.push(selectedDistrictObj.full_url);
      return;
    }

    if (selectedDivisionObj?.full_url) {
      router.push(selectedDivisionObj.full_url);
    }
  };

  // Determine if search button should be disabled
  const isDisabled = !selectedDivision && !selectedDistrict && !selectedUpazila;

  return (
    <div className="flex items-center justify-between mb-4 -mt-4 pt-2">
      {/* Title */}
      <div className="flex gap-4 items-center">
        <span className="h-4 w-4 bg-green-600"></span>
        <h4 className="text-2xl">আমার এলাকার খবর</h4>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {/* Division */}
        <select
          value={selectedDivision}
          onChange={(e) => setSelectedDivision(e.target.value)}
          className="selectArrow block w-full border rounded px-4 py-1 bg-white focus:outline-0 cursor-pointer"
        >
          <option value="">বিভাগ</option>
          {divisionList.map((division) => (
            <option key={division.id} value={division.id}>
              {division.name_bn ?? division.name}
            </option>
          ))}
        </select>

        {/* District */}
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          disabled={!selectedDivision}
          className="selectArrow block w-full border rounded px-4 py-1 bg-white focus:outline-0 cursor-pointer"
        >
          <option value="">জেলা</option>
          {districtList.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name_bn ?? district.name}
            </option>
          ))}
        </select>

        {/* Upazila */}
        <select
          value={selectedUpazila}
          onChange={(e) => setSelectedUpazila(e.target.value)}
          disabled={!selectedDistrict}
          className="selectArrow block w-full border rounded px-4 py-1 bg-white focus:outline-0 cursor-pointer"
        >
          <option value="">উপজেলা</option>
          {upazilaList.map((upazila) => (
            <option key={upazila.id} value={upazila.id}>
              {upazila.name_bn ?? upazila.name}
            </option>
          ))}
        </select>

        {/* Search button */}
        <button
          onClick={handleSearch}
          disabled={isDisabled}
          className={`flex gap-4 px-8 pl-5 pb-1 py-2 items-center rounded border
            ${
              isDisabled
                ? "bg-gray-300 border-gray-300 cursor-not-allowed text-gray-600"
                : "text-white bg-green-500 border-green-500 hover:bg-green-600"
            }`}
        >
          <BiSearchAlt2 size={22} />
          খুঁজুন
        </button>
      </div>
    </div>
  );
};

export default HomeCountryFilter;
