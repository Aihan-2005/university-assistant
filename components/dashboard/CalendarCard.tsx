"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CalendarCard() {
  const [currentMonth, setCurrentMonth] = useState("مهر");

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
  
  const calendarDays = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  const today = 7;

  return (
    <div className="w-full h-[300px] rounded-[30px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] p-[15px]">
      <div className="w-full h-full flex flex-col gap-[9px]">
        {/* هدر تقویم */}
        <div className="w-full h-[30px] flex items-center justify-between">
          <button className="w-[26px] h-[26px] rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <FaChevronLeft size={13} className="text-black" />
          </button>

          <div className="h-[26px] rounded-[6px] px-[10px] flex items-center justify-center">
            <span className="text-[14px] font-bold leading-[100%] text-black">
              {currentMonth}
            </span>
          </div>

          <button className="w-[26px] h-[26px] rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <FaChevronRight size={13} className="text-black" />
          </button>
        </div>

        {/* نام روزهای هفته */}
        <div className="w-full h-[26px] flex items-center justify-between gap-[2px]">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className="flex-1 h-[26px] rounded-[4px] flex items-center justify-center"
            >
              <span className="text-[10px] font-medium leading-[100%] text-gray-600">
                {day}
              </span>
            </div>
          ))}
        </div>

        {/* شبکه روزهای ماه */}
        <div className="w-full flex-1 flex flex-col gap-[3px]">
          {calendarDays.map((week, weekIndex) => (
            <div key={weekIndex} className="w-full flex-1 flex items-center justify-between gap-[3px]">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`flex-1 h-full rounded-[5px] flex items-center justify-center ${
                    day === today
                      ? "bg-[#0099CC] shadow-[0px_1px_1px_0px_rgba(0,14,51,0.05)]"
                      : day
                      ? "hover:bg-gray-50"
                      : ""
                  } transition-colors cursor-pointer`}
                >
                  {day && (
                    <span
                      className={`text-[10px] font-normal leading-[100%] ${
                        day === today ? "text-white font-medium" : "text-black"
                      }`}
                    >
                      {day}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
