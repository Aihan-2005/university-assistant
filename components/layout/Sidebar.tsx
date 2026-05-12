import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { servicesItems, accountItems } from "./sidebarItems";

export default function Sidebar() {
  return (
    <aside className="w-[320px] h-full rounded-[20px] bg-white border-l border-[#E0E0E2] py-[30px] px-[20px] flex flex-col flex-shrink-0">
      {/* لوگو و عنوان */}
      <div className="w-full flex items-center gap-[14px] mb-[40px] pr-[5px]">
        <div className="w-[55px] h-[55px] rounded-full bg-[#0099CC] flex items-center justify-center flex-shrink-0">
          <Image
            src="/icons/xaiarya.png"
            alt="logo"
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
        <h1 className="text-[28px] font-bold leading-[100%] text-[#000000] font-inter">
          دانش برد
        </h1>
      </div>

      {/* بخش دکمه‌ها */}
      <div className="flex flex-col gap-[8px]">
        {/* عنوان خدمات */}
        <div className="w-full h-[45px] flex items-center pr-[15px]">
          <span className="text-[18px] font-normal leading-[100%] text-[#0099CC] font-inter">
            خدمات
          </span>
        </div>

        {/* دکمه‌های خدمات */}
        {servicesItems.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}

        {/* خط جداکننده */}
        <div className="w-full h-[1px] bg-[#E0E0E2] my-[15px]" />

        {/* عنوان حساب */}
        <div className="w-full h-[45px] flex items-center pr-[15px]">
          <span className="text-[18px] font-normal leading-[100%] text-[#0099CC] font-inter">
            حساب
          </span>
        </div>

        {/* دکمه‌های حساب */}
        {accountItems.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </div>
    </aside>
  );
}
