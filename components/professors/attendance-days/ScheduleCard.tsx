'use client';

import ScheduleCard from './ScheduleCard';
import { DaySchedule } from '@/types/professorsType';

interface ScheduleCardsProps {
  schedule: DaySchedule[];
  onDayToggle: (dayEn: string) => void;
  onTimeSlotAdd: (dayEn: string) => void;
  onTimeSlotRemove: (dayEn: string, index: number) => void;
  onTimeSlotChange: (dayEn: string, index: number, field: 'start' | 'end', value: string) => void;
}

export default function ScheduleCards({ 
  schedule,
  onDayToggle,
  onTimeSlotAdd,
  onTimeSlotRemove,
  onTimeSlotChange
}: ScheduleCardsProps) {
  return (
    <div className="flex-1 flex flex-col gap-6">
      {schedule.map((day) => (
        <ScheduleCard 
          key={day.dayEn} 
          day={day}
          onToggle={() => onDayToggle(day.dayEn)}
          onAddTimeSlot={() => onTimeSlotAdd(day.dayEn)}
          onRemoveTimeSlot={(index) => onTimeSlotRemove(day.dayEn, index)}
          onTimeSlotChange={(index, field, value) => onTimeSlotChange(day.dayEn, index, field, value)}
        />
      ))}
    </div>
  );
}
