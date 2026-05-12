import { FaChalkboardTeacher, FaBook, FaUsers } from "react-icons/fa";

interface SummaryItemProps {
  icon: React.ReactNode;
  count: number;
  label: string;
}

function SummaryItem({ icon, count, label }: SummaryItemProps) {
  return (
    <div className="w-[75px] h-[140px] rounded-[10px] border border-[#E0E0E2] bg-white p-[8px] flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center gap-[10px]">
        {/* دایره آیکون */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#0099CC]/20 flex items-center justify-center">
          <div className="text-[#0099CC]">
            {icon}
          </div>
        </div>

        {/* عدد */}
        <span className="text-[18px] font-bold leading-[100%] text-[#0099CC]">
          {count}
        </span>
      </div>

      {/* برچسب */}
      <span className="text-[12px] font-normal leading-[100%] text-center text-black whitespace-pre-line">
        {label}
      </span>
    </div>
  );
}

export default function SummaryCard() {
  return (
    <div className="w-[260px] h-[200px] rounded-[25px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] p-[18px]">
      <div className="w-full h-full flex flex-col gap-[12px]">
        {/* عنوان */}
        <h3 className="text-[11px] font-bold leading-[100%] text-black text-right">
          خلاصه وضعیت
        </h3>

        {/* آیتم‌ها */}
        <div className="w-full flex justify-between gap-[6px]">
          <SummaryItem
            icon={<FaChalkboardTeacher size={24} />}
            count={23}
            label={"تعداد\nاساتید"}
          />
          <SummaryItem
            icon={<FaBook size={24} />}
            count={56}
            label={"تعداد\nدروس"}
          />
          <SummaryItem
            icon={<FaUsers size={24} />}
            count={8}
            label={"تعداد\nکلاس‌ها"}
          />
        </div>
      </div>
    </div>
  );
}
