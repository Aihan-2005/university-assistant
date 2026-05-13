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
    <header className="w-full h-22 bg-white rounded-[20px] px-7 flex items-center justify-center flex-shrink-0">
      <div className="w-full max-w-270 h-15 flex items-center justify-between">
        <div className="flex items-center gap-3 h-15">
          <div className="w-7 h-7 flex items-center justify-center cursor-pointer">
            <HiOutlineMenuAlt3 size={26} className="text-[#A1A3A8]" />
          </div>
          
          <h1 className="text-[28px] font-bold leading-[100%] text-[#000000] font-inter whitespace-nowrap flex items-center">
            {title}
          </h1>
        </div>

        <div className="flex items-center gap-3 h-">
          <div className="w-14 h-14 rounded-full border-2 border-[#0099CC] flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition-colors flex-shrink-0">
            <IoNotificationsOutline size={28} className="text-[#0099CC]" />
          </div>

          <div className="h-16 rounded-[40px] border border-[#E0E0E2] bg-white flex items-center cursor-pointer hover:bg-gray-50 transition-colors flex-shrink-0 pr-3 pl-5 gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/avatar.png"
                alt="avatar"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-1">
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
