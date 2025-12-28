import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const HomeCountryFilter = () => {

    return (
        <div className="flex items-center justify-between mb-4 -mt-4 pt-2" >
            {/* আমার এলাকার খবর  */}
            <div className="flex gap-4 items-center">
                <span className="h-4 w-4 bg-green-600"></span>
                <h4 className="text-2xl">আমার এলাকার খবর </h4>
            </div>
            <div className="flex gap-2">
                <select
                    className="selectArrow block w-full border rounded px-4 py-1 bg-white focus:outline-0
                     active:ring-0 focus:ring-0 focus:ring-blue-0 focus:border-blue-0"
                >
                    <option value={""}>বিভাগ</option>
                    <option value={""}>Dhaka</option>
                    <option value={""}>Rajshahi</option>
                    <option value={""}>Chittagong</option>
                </select>
                <select
                    className="selectArrow block w-full border rounded px-4 py-1 bg-white focus:outline-0
                     active:ring-0 focus:ring-0 focus:ring-blue-0 focus:border-blue-0"
                >
                    <option value={""}>জেলা</option>
                    <option value={""}>Dhaka</option>
                    <option value={""}>Rajshahi</option>
                    <option value={""}>Chittagong</option>
                </select>
                <select
                    className="selectArrow block w-full border rounded px-4 py-1 bg-white focus:outline-0
                     active:ring-0 focus:ring-0 focus:ring-blue-0 focus:border-blue-0"
                >
                    <option value={""}>উপজেলা</option>
                    <option value={""}>Dhaka</option>
                    <option value={""}>Rajshahi</option>
                    <option value={""}>Chittagong</option>
                </select>

                <button className="flex gap-4 px-8 pl-5 pb-1 py-2 items-center text-white bg-green-500 rounded border border-green-500 hover:bg-green-600">
                    <BiSearchAlt2 size={22} />
                    খুঁজুন
                </button>
            </div>
        </div >
    );
};

export default HomeCountryFilter;
