import ClockCard from "@/components/dashboard/ClockCard";
import BannerCard from "@/components/dashboard/BannerCard";
import CalendarCard from "@/components/dashboard/CalendarCard";
import CurrentClassesCard from "@/components/dashboard/CurrentClassesCard";
import SummaryCard from "@/components/dashboard/SummaryCard";
import QuickAccessCard from "@/components/dashboard/QuickAccessCard";
import NotificationsCard from "@/components/dashboard/NotificationsCard";
import AnalogClockCard from "@/components/dashboard/AnalogClockCard";

export default function DashboardPage() {
  return (
    <div className="w-full h-full flex gap-[16px] overflow-hidden">
      {/* بخش چپ */}
      <div className="flex-1 h-full flex flex-col gap-[16px]">
        <BannerCard />

        <div className="w-full flex gap-[16px]">
          <SummaryCard />
          <CurrentClassesCard />
        </div>

        <div className="w-full flex gap-[16px]">
          
          <NotificationsCard />
          <QuickAccessCard />
        </div>
      </div>

      {/* بخش راست */}
      <div className="w-[310px] h-full flex flex-col gap-[16px]">
        <ClockCard />
        <CalendarCard />
        <AnalogClockCard />
      </div>
    </div>
  );
}
