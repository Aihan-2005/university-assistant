"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SidebarLink } from "./sidebarItems";

export default function SidebarItem({ title, href, icon }: SidebarLink) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href ?? "/"}
      className={`
        w-full h-[60px] rounded-[16px]
        px-[20px] py-[8px]
        flex items-center gap-[10px]
        border-r-[2px]
        transition-all duration-200
        
        ${
          active
            ? "bg-[#0099CC] border-[#FFFFFF] text-white"
            : "bg-white border-transparent text-[#000000]"
        }
      `}
    >
      <div
        className={`
          w-[32px] h-[32px] rounded-full flex items-center justify-center flex-shrink-0
          ${active ? "border-[1.3px] border-white" : ""}
        `}
      >
        <Image
          src={icon}
          alt={title}
          width={26}
          height={26}
          className={active ? "invert brightness-0" : ""}
        />
      </div>

      <span
        className={`
          text-[20px] font-normal leading-none
          ${active ? "text-white" : "text-black"}
        `}
      >
        {title}
      </span>
    </Link>
  );
}
