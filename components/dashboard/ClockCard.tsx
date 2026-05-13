"use client";

import { useState, useEffect } from "react";

export default function ClockCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const day = "07/10";
  const dayName = "دوشنبه";

  return (
    <div className="w-full h-[95px] rounded-[30px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] px-[24px] py-[14px]">
      
      <div className="w-full h-full flex items-center justify-between gap-[18px]">
        {/* بخش راست - تاریخ */}
        <div className="flex flex-col items-end gap-[4px]">
          <span className="text-[15px] font-normal leading-[100%] text-black font-inter text-right">
            {day}
          </span>
          <span className="text-[13px] font-normal leading-[100%] text-black text-right">
            {dayName}
          </span>
        </div>

        {/* خط جداکننده عمودی */}
        <div className="w-[1px] h-[38px] bg-[#E0E0E2]"></div>

        {/* بخش چپ - ساعت */}
        <div className="flex items-center justify-start">
          <span className="text-[34px] font-bold leading-[100%] text-black font-inter">
            {hours}:{minutes}
          </span>
        </div>
      </div>
    </div>
  );
}
