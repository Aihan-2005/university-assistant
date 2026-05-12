"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { getPageTitle } from "./sidebarItems";

export default function Header() {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <header className="w-full h-[100px] bg-white rounded-[20px] px-[30px] flex items-center justify-center flex-shrink-0">
      {/* محتوای داخلی هدر */}
      <div className="w-full max-w-[1000px] h-[60px] flex items-center justify-between">
        {/* بخش راست - آیکون منو و عنوان */}
        <div className="flex items-center gap-[10px] h-[60px]">
          {/* آیکون منو */}
          <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer">
            <HiOutlineMenuAlt3 size={26} className="text-[#A1A3A8]" />
          </div>
          
          {/* عنوان */}
          <h1 className="text-[28px] font-bold leading-[100%] text-[#000000] font-inter whitespace-nowrap flex items-center">
            {title}
          </h1>
        </div>

        {/* بخش چپ - آیکون اعلان و پروفایل */}
        <div className="flex items-center gap-[10px] h-[60px]">
          {/* آیکون اعلان */}
          <div className="w-[55px] h-[55px] rounded-full border-2 border-[#0099CC] flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition-colors flex-shrink-0">
            <IoNotificationsOutline size={28} className="text-[#0099CC]" />
          </div>

          {/* کارت پروفایل */}
          <div className="h-[60px] rounded-[40px] border border-[#E0E0E2] bg-white flex items-center cursor-pointer hover:bg-gray-50 transition-colors flex-shrink-0 pr-[10px] pl-[20px] gap-[12px]">
            {/* آواتار */}
            <div className="w-[48px] h-[48px] rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/avatar.png"
                alt="avatar"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            {/* نام و عنوان */}
            <div className="flex flex-col justify-center gap-[5px]">
              <span className="text-[16px] font-bold leading-[100%] text-[#000000] font-inter whitespace-nowrap text-right">
                علی موسوی
              </span>
              <span className="text-[12px] font-normal leading-[100%] text-[#0099CC] font-inter whitespace-nowrap text-right">
                مدیر گروه
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
