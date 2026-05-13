'use client';

import { FiPlus, FiX } from 'react-icons/fi';
import { DaySchedule } from '@/types/professorsType';

interface ScheduleCardProps {
  day: DaySchedule;
  onToggle: () => void;
  onAddTimeSlot: () => void;
  onRemoveTimeSlot: (index: number) => void;
  onTimeSlotChange: (index: number, field: 'start' | 'end', value: string) => void;
}

export default function ScheduleCard({ 
  day, 
  onToggle,
  onAddTimeSlot,
  onRemoveTimeSlot,
  onTimeSlotChange
}: ScheduleCardProps) {
  return (
    <div
      className={`w-full min-h-[80px] rounded-xl flex flex-col px-6 py-4 transition-all ${
        day.isPresent
          ? 'bg-[#E3F2FD] border-r-4 border-r-[#0099CC]'
          : 'bg-[#FFEBEE] border-r-4 border-r-[#E53935]'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={day.isPresent}
            onChange={onToggle}
            className="w-5 h-5 rounded border-gray-300 text-[#0099CC] focus:ring-[#0099CC]"
          />
          <span className="text-sm font-medium text-gray-700">
            {day.isPresent ? 'استاد حضور دارد' : 'استاد حضور ندارد'}
          </span>
        </label>

        {day.isPresent && (
          <button
            onClick={onAddTimeSlot}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0099CC] text-white text-xs hover:bg-[#0088BB] transition-colors"
          >
            <FiPlus className="w-4 h-4" />
            افزودن ساعت
          </button>
        )}
      </div>

      {day.isPresent && day.timeSlots.length > 0 && (
        <div className="flex flex-col gap-2">
          {day.timeSlots.map((slot, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <input
                  type="time"
                  value={slot.start}
                  onChange={(e) => onTimeSlotChange(index, 'start', e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0099CC]"
                />
                <span className="text-sm text-gray-600">الی</span>
                <input
                  type="time"
                  value={slot.end}
                  onChange={(e) => onTimeSlotChange(index, 'end', e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0099CC]"
                />
              </div>
              
              {day.timeSlots.length > 1 && (
                <button
                  onClick={() => onRemoveTimeSlot(index)}
                  className="p-1.5 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
