import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function BannerCard() {
  return (
    <div className="relative w-full h-[140px] overflow-hidden rounded-[30px] bg-gradient-to-l from-[#0099CC] to-[#00CCFF]">
      
      <div className="flex h-full items-center justify-between px-[12px]">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center gap-[14px] text-white max-w-[185px] mr-[6px]">
          
          <div className="flex flex-col gap-[6px]">
            <h2 className="text-[17px] font-bold leading-[120%] text-right">
              به دانش برد خوش آمدید!
            </h2>

            <p className="text-[10px] leading-[150%] text-right text-white/90">
              از اینجا برنامه‌ریزی درسی را سریع‌تر،
              دقیق‌تر و هوشمندتر تجربه کنید.
            </p>
          </div>

          <button className="flex items-center justify-center gap-[5px] w-fit h-[30px] rounded-full bg-[#33CCFF] px-[10px] text-[8px] font-medium text-white transition-colors hover:bg-[#20c8ff]">
            <FaPlay size={6} />
            <span>تولید برنامه هفتگی</span>
          </button>
        </div>

        {/* Image */}
        <div className="relative w-[120px] h-[110px] shrink-0 -ml-[8px]">
          <Image
            src="/images/welcome-illustration.png"
            alt="welcome"
            width={120}
            height={110}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
