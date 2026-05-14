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

  // ساعت
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  // تاریخ واقعی شمسی
  const persianDate = new Intl.DateTimeFormat("fa-IR", {
    month: "2-digit",
    day: "2-digit",
  }).format(time);

  // نام روز واقعی
  const persianDay = new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
  }).format(time);

  return (
    <div className="w-full h-[95px] rounded-[30px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] px-[28px]">
      
      <div className="flex items-center justify-center h-full gap-[22px]">
        
        {/* Date Section */}
        <div className="flex flex-col items-center justify-center gap-[6px] min-w-[70px]">
          <span className="text-[15px] font-medium leading-[100%] text-black">
            {persianDate}
          </span>

          <span className="text-[13px] font-normal leading-[100%] text-[#555]">
            {persianDay}
          </span>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-[42px] bg-[#E0E0E2]" />

        {/* Time Section */}
        <div className="flex items-center justify-center min-w-[120px]">
          <span className="text-[34px] font-bold leading-[100%] text-black tracking-tight">
            {hours}:{minutes}
          </span>
        </div>
      </div>
    </div>
  );
}
