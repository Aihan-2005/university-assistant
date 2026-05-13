import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function BannerCard() {
  return (
    <div className="w-full h-140 rounded-[30px] bg-gradient-to-l from-[#0099CC] to-[#00CCFF] relative overflow-hidden flex items-center justify-between px-[20px] py-[12px]">
      <div className="absolute left-[20px] top-1/2 -translate-y-1/2 w-[120px] h-[110px]">
        <Image
          src="/images/welcome-illustration.png"
          alt="welcome"
          width={120}
          height={110}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-6 text-white z-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[19px] font-bold leading-[100%]">
            به دانش برد خوش آمدید!
          </h2>
          <p className="text-[10px] font-normal leading-[120%] max-w-68">
            از اینجا برنامه‌ریزی درسی را سریع‌تر، دقیق‌تر و هوشمندتر تجربه کنید.
          </p>
        </div>
        
        <button className="w-30 h-8 flex items-center justify-center gap-2 bg-[#33CCFF] text-white rounded-[50px] px-3 py-2 text-[9px] font-normal hover:bg-[#00CCFF] transition-colors">
          <FaPlay size={7} />
          <span>تولید برنامه هفتگی</span>
        </button>
      </div>
    </div>
  );
}
