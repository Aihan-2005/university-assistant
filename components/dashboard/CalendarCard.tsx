"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CalendarCard() {
  const persianMonths = [
    "فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور",
    "مهر","آبان","آذر","دی","بهمن","اسفند"
  ];

  const currentPersianMonth = 1; // ماه جاری
  const [monthIndex, setMonthIndex] = useState(currentPersianMonth);

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

  // داده‌های خام کاربر → فقط اصلاح استایل انجام می‌دهیم
  const calendarDays = [
    [29, 30, 31, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 1, 2], // روزهای ماه بعد
  ];

  const today = 7; // روز امروز ماه جاری

  const handlePrevMonth = () => {
    setMonthIndex(prev => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setMonthIndex(prev => (prev === 11 ? 0 : prev + 1));
  };

  /** تشخیص نوع روز */
  const getDayType = (weekIndex, day) => {
    if (weekIndex === 0 && day >= 29) return "prev";   // ماه قبل
    if (weekIndex === 4 && day <= 2) return "next";    // ماه بعد
    return "current";                                  // ماه اصلی
  };

  return (
    <div className="w-full h-[300px] rounded-[30px] bg-white shadow-[0_0_11px_rgba(0,0,0,0.1)] p-[15px]">

      <div className="flex h-full flex-col gap-[10px]">

        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleNextMonth}
            className="w-[26px] h-[26px] rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <FaChevronRight size={13} className="text-black" />
          </button>

          <span className="text-[14px] font-bold text-black">
            {persianMonths[monthIndex]}
          </span>

          <button
            onClick={handlePrevMonth}
            className="w-[26px] h-[26px] rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <FaChevronLeft size={13} className="text-black" />
          </button>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 gap-[3px]">
          {weekDays.map((day, index) => (
            <div key={index} className="flex items-center justify-center h-[26px]">
              <span className="text-[10px] font-medium text-gray-600">{day}</span>
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="flex flex-col flex-1 gap-[3px]">

          {calendarDays.map((week, weekIndex) => (
            <div key={weekIndex} className="grid flex-1 grid-cols-7 gap-[3px]">

              {week.map((day, dayIndex) => {
                const type = getDayType(weekIndex, day);
                const isToday = type === "current" && day === today;

                /** استایل پس‌زمینه */
                const bgClass =
                  isToday
                    ? "bg-[#0099CC]"
                    : type === "current"
                    ? "bg-[#F3F3F3]"
                    : "bg-white";

                /** استایل متن */
                const textClass =
                  isToday
                    ? "text-white font-medium"
                    : type === "current"
                    ? "text-black"
                    : "text-[#0099CC]";

                return (
                  <div
                    key={dayIndex}
                    className={`flex items-center justify-center rounded-[6px] transition ${bgClass}`}
                  >
                    <span className={`text-[10px] ${textClass}`}>
                      {day}
                    </span>
                  </div>
                );
              })}

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
