import { FaPlus } from "react-icons/fa";

export default function QuickAccessCard() {
  const quickActions = [
    { label: "افزودن استاد", icon: "👨‍🏫" },
    { label: "افزودن درس", icon: "📚" },
    { label: "افزودن کلاس", icon: "📅" },
  ];

  return (
    <div className="
      flex-1 
      h-[220px]
      rounded-[25px]
      bg-white
      shadow-[0px_0px_11.2px_rgba(0,0,0,0.1)]
      px-[24px] 
      py-[20px]
    ">
      <div className="w-full h-full flex flex-col">

        {/* عنوان */}
        <h2 className="text-[12px] font-bold text-black text-right">
          دسترسی سریع
        </h2>

        {/* دکمه‌ها */}
        <div className="flex-1 flex flex-col justify-between mt-[14px]">

          {quickActions.map((action, index) => (
            <button
              key={index}
              className="
                w-full 
                h-[48px]
                rounded-[12px]
                border border-[#DDE4EA]
                bg-white
                transition
                flex items-center justify-between
                px-[16px]
              "
            >
              {/* متن + ایموجی (راست) */}
              <div className="flex items-center gap-[10px] flex-row-reverse">
                <span className="text-[12px] font-medium text-black text-right">
                  {action.label}
                </span>
                <span className="text-[18px] opacity-70">{action.icon}</span>
              </div>

              {/* آیکون پلاس = چپ و نزدیک وسط */}
              <div className="
                w-[28px]
                h-[28px]
                rounded-full 
                bg-[#0099CC]
                flex items-center justify-center
                ml-[6px]
              ">
                <FaPlus size={12} className="text-white" />
              </div>
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}
