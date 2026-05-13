'use client';

import { useState } from 'react';
import DaysSidebar from './DaysSidebar';
import ScheduleCards from './ScheduleCards';
import { DaySchedule } from '@/types/professorsType';

interface AttendanceDaysContentProps {
  schedule: DaySchedule[];
  onScheduleChange: (schedule: DaySchedule[]) => void;
}

export default function AttendanceDaysContent({ 
  schedule, 
  onScheduleChange 
}: AttendanceDaysContentProps) {
  const hasAnySchedule = schedule.some(day => day.isPresent && day.timeSlots.length > 0);

  const handleDayToggle = (dayEn: string) => {
    const updatedSchedule = schedule.map(day => {
      if (day.dayEn === dayEn) {
        return {
          ...day,
          isPresent: !day.isPresent,
          timeSlots: !day.isPresent ? [{ start: '08:00', end: '10:00' }] : []
        };
      }
      return day;
    });
    onScheduleChange(updatedSchedule);
  };

  const handleTimeSlotAdd = (dayEn: string) => {
    const updatedSchedule = schedule.map(day => {
      if (day.dayEn === dayEn) {
        return {
          ...day,
          timeSlots: [...day.timeSlots, { start: '08:00', end: '10:00' }]
        };
      }
      return day;
    });
    onScheduleChange(updatedSchedule);
  };

  const handleTimeSlotRemove = (dayEn: string, index: number) => {
    const updatedSchedule = schedule.map(day => {
      if (day.dayEn === dayEn) {
        const newTimeSlots = day.timeSlots.filter((_, i) => i !== index);
        return {
          ...day,
          timeSlots: newTimeSlots,
          isPresent: newTimeSlots.length > 0
        };
      }
      return day;
    });
    onScheduleChange(updatedSchedule);
  };

  const handleTimeSlotChange = (dayEn: string, index: number, field: 'start' | 'end', value: string) => {
    const updatedSchedule = schedule.map(day => {
      if (day.dayEn === dayEn) {
        const newTimeSlots = day.timeSlots.map((slot, i) => {
          if (i === index) {
            return { ...slot, [field]: value };
          }
          return slot;
        });
        return { ...day, timeSlots: newTimeSlots };
      }
      return day;
    });
    onScheduleChange(updatedSchedule);
  };

  return (
    <div className="w-full px-8 py-6">
      {!hasAnySchedule ? (
        <div className="w-full py-20 flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-4xl text-gray-400">📅</span>
          </div>
          <p className="text-lg font-medium text-gray-600">روزی برای حضور استاد ثبت نشده است</p>
          <p className="text-sm text-gray-500">لطفاً روزها و ساعات حضور استاد را تعیین کنید</p>
        </div>
      ) : (
        <div className="flex gap-8">
          <DaysSidebar schedule={schedule} />
          <ScheduleCards 
            schedule={schedule}
            onDayToggle={handleDayToggle}
            onTimeSlotAdd={handleTimeSlotAdd}
            onTimeSlotRemove={handleTimeSlotRemove}
            onTimeSlotChange={handleTimeSlotChange}
          />
        </div>
      )}
    </div>
  );
}
