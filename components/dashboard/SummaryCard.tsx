import { FaChalkboardTeacher, FaBook, FaUsers } from "react-icons/fa";

interface SummaryItemProps {
  icon: React.ReactNode;
  count: number;
  label: string;
}

function SummaryItem({ icon, count, label }: SummaryItemProps) {
  return (
    <div className="flex-1 h-full rounded-[10px] border border-[#E0E0E2] bg-white p-5 flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center gap-3">
        {/* دایره آیکون */}
        <div className="relative w-[70px] h-[70px] rounded-full bg-[#0099CC]/20 flex items-center justify-center">
          {/* دایره داخلی سفید */}
          <div className="absolute w-15 h-15 rounded-full bg-white border border-[#0099CC] flex items-center justify-center">
            <span className="text-[22px] font-bold leading-[100%] text-[#0099CC]">
              {count}
            </span>
          </div>
        </div>
      </div>

      {/* برچسب */}
      <span className="text-[13px] font-normal leading-[100%] text-center text-black whitespace-pre-line">
        {label}
      </span>
    </div>
  );
}

export default function SummaryCard() {
  return (
    <div className="flex-1 h-55 rounded-[25px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] p-[24px]">
      <div className="w-full h-full flex flex-col gap-4">
        {/* عنوان */}
        <h3 className="text-[11px] font-bold leading-[100%] text-black text-right">
          خلاصه وضعیت
        </h3>

        {/* آیتم‌ها */}
        <div className="w-full flex-1 flex justify-between gap-2">
          <SummaryItem
            count={23}
            label={"تعداد\nاساتید"}
            icon={null}
          />
          <SummaryItem
            count={56}
            label={"تعداد\nدروس"}
            icon={null}
          />
          <SummaryItem
            count={8}
            label={"تعداد\nکلاس‌ها"}
            icon={null}
          />
        </div>
      </div>
    </div>
  );
}
