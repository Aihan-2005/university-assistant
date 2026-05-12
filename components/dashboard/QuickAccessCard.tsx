import { FaPlus } from "react-icons/fa";

export default function QuickAccessCard() {
  const quickActions = [
    { label: "افزودن استاد", icon: "👨‍🏫" },
    { label: "افزودن درس", icon: "📚" },
    { label: "افزودن کلاس", icon: "📅" },
  ];

  return (
    <div className="w-[310px] h-[200px] rounded-[30px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] p-[18px] flex flex-col gap-[12px]">
      {/* عنوان */}
      <h2 className="text-[12px] font-bold text-black text-right">دسترسی سریع</h2>

      {/* دکمه‌های دسترسی سریع */}
      <div className="flex-1 flex flex-col justify-around gap-[8px]">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className="w-full h-[44px] rounded-[12px] bg-[#F5F5F5] hover:bg-[#0099CC]/10 transition-colors flex items-center justify-between px-[12px] group"
          >
            {/* آیکون پلاس */}
            <div className="w-[24px] h-[24px] rounded-full bg-[#0099CC] flex items-center justify-center">
              <FaPlus size={10} className="text-white" />
            </div>

            {/* متن */}
            <div className="flex items-center gap-[8px]">
              <span className="text-[11px] font-medium text-black">
                {action.label}
              </span>
              <span className="text-[16px]">{action.icon}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
