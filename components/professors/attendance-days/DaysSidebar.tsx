'use client';

import { DaySchedule } from '@/types/professorsType';

interface DaysSidebarProps {
  schedule: DaySchedule[];
}

export default function DaysSidebar({ schedule }: DaysSidebarProps) {
  return (
    <div className="w-24 flex flex-col gap-6 pl-6 border-l border-gray-200">
      {schedule.map((day) => (
        <div key={day.dayEn} className="min-h-[80px] flex items-center">
          <span className="text-base font-bold text-gray-900">{day.day}</span>
        </div>
      ))}
    </div>
  );
}
