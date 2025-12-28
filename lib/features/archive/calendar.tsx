"use client";

import { Dispatch, SetStateAction } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

interface CalendarProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
}

const Calendar = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: CalendarProps) => {
  const handleStartDateChange = (value: DateValueType) => {
    if (value && typeof value === "object" && "startDate" in value) {
      setStartDate(value.startDate ? new Date(value.startDate) : null);
      if (!value.startDate) {
        setEndDate(null); // reset endDate if startDate is null
      }
    }
  };

  const handleEndDateChange = (value: DateValueType) => {
    if (value && typeof value === "object" && "startDate" in value) {
      setEndDate(value.startDate ? new Date(value.startDate) : null);
    }
  };

  return (
    <>
      <div className="col-span-6 lg:col-span-4">
        <Datepicker
          inputClassName="w-full !text-black rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0"
          asSingle
          useRange={false}
          minDate={new Date("2020-11-28")}
          maxDate={new Date()}
          displayFormat="DD-MM-YYYY"
          value={{ startDate, endDate }}
          readOnly
          onChange={handleStartDateChange}
          placeholder="তারিখ থেকে"
          popoverDirection="down"
        />
      </div>

      <div className="col-span-6 lg:col-span-4">
        <Datepicker
          inputClassName="w-full rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0"
          asSingle
          useRange={false}
          minDate={startDate || new Date("2020-11-29")}
          maxDate={new Date()}
          displayFormat="DD-MM-YYYY"
          value={{ startDate: endDate, endDate }}
          readOnly
          onChange={handleEndDateChange}
          placeholder="তারিখ পর্যন্ত"
          disabled={!startDate}
          popoverDirection="down"
        />
      </div>
    </>
  );
};

export default Calendar;
