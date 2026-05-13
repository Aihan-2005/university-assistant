import { FaPlus } from "react-icons/fa";

export default function QuickAccessCard() {
  const quickActions = [
    { label: "افزودن استاد", icon: "👨‍🏫" },
    { label: "افزودن درس", icon: "📚" },
    { label: "افزودن کلاس", icon: "📅" },
  ];

  return (
    <div className="flex-1 h-[200px] rounded-[25px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] p-[20px]">
      <div className="w-full h-full flex flex-col gap-[16px]">
        {/* عنوان */}
        <h2 className="text-[11px] font-bold text-black text-right">
          دسترسی سریع
        </h2>

        {/* دکمه‌های دسترسی سریع */}
        <div className="flex-1 flex flex-col justify-between gap-[8px]">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="w-full h-[40px] rounded-[10px] bg-[#F5F5F5] hover:bg-[#0099CC]/10 transition-colors flex items-center justify-between px-[12px] group"
            >
              {/* آیکون پلاس */}
              <div className="w-[24px] h-[24px] rounded-full bg-[#0099CC] flex items-center justify-center flex-shrink-0">
                <FaPlus size={10} className="text-white" />
              </div>

              {/* متن و ایموجی */}
              <div className="flex items-center gap-[8px]">
                <span className="text-[10px] font-medium text-black">
                  {action.label}
                </span>
                <span className="text-[16px]">{action.icon}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
