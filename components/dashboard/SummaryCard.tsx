"use client";

import { FaChalkboardTeacher, FaBook, FaUsers } from "react-icons/fa";

interface SummaryItemProps {
  count: number;
  label: string;
}

function SummaryItem({ count, label }: SummaryItemProps) {
  return (
    <div
      className="
        flex-1
        h-[180px]
        rounded-[14px]
        border border-[#E0E0E2]
        bg-white
        flex flex-col
        items-center
        justify-center
        pt-[14px]
        pb-[12px]
      "
    >
      {/* دایره آبی */}
      <div className="w-[70px] h-[70px] rounded-full border-[3px] border-[#0099CC]/60 flex items-center justify-center">
        <span className="text-[22px] font-bold text-[#0099CC] leading-none">
          {count}
        </span>
      </div>

      {/* متن */}
      <span className="mt-[10px] text-[13px] font-medium text-black leading-[140%] text-center whitespace-pre-line">
        {label}
      </span>
    </div>
  );
}

export default function SummaryCard() {
  return (
    <div
      className="
        flex-1
        h-[210px]
        rounded-[25px]
        bg-white
        shadow-[0px_0px_11px_rgba(0,0,0,0.10)]
      "
    >
      {/* عنوان */}
      <h3 className="text-[13px] font-bold text-black text-right pt-[22px] pr-[22px]">
        خلاصه وضعیت
      </h3>

      {/* باکس‌ها */}
      <div
        className="
          flex
          flex-1
          items-end
          gap-[6px]
          px-[22px]
          pb-[18px]
          mt-[12px]
        "
      >
        <SummaryItem count={23} label={"تعداد\nاساتید"} />
        <SummaryItem count={56} label={"تعداد\nدروس"} />
        <SummaryItem count={8} label={"تعداد\nکلاس‌ها"} />
      </div>
    </div>
  );
}
