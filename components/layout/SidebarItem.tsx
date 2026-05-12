"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SidebarLink } from "./sidebarItems";

export default function SidebarItem({ title, href, icon }: SidebarLink) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href || "/"}
      className={`w-full h-[55px] rounded-[14px] border-r-2 pr-[15px] pl-[15px] flex items-center gap-[12px] transition-all duration-200 ${
        isActive
          ? "bg-[#0099CC] border-[#0099CC]"
          : "bg-white border-transparent hover:bg-gray-50"
      }`}
    >
      {/* آیکون */}
      <div className="w-[28px] h-[28px] flex items-center justify-center flex-shrink-0">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className={`object-contain ${isActive ? "brightness-0 invert" : ""}`}
        />
      </div>
      
      {/* متن */}
      <span className={`text-[18px] font-normal leading-[100%] font-inter ${
        isActive ? "text-white" : "text-[#000000]"
      }`}>
        {title}
      </span>
    </Link>
  );
}
