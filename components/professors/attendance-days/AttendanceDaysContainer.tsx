'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AttendanceDaysHeader from './AttendanceDaysHeader';
import AttendanceDaysContent from './AttendanceDaysContent';
import { DaySchedule, Professor } from '@/types/professorsType';

interface AttendanceDaysContainerProps {
  professor: Professor;
  schedule: DaySchedule[];
  professorId: string;
}

export default function AttendanceDaysContainer({
  professor,
  schedule: initialSchedule,
  professorId,
}: AttendanceDaysContainerProps) {
  const router = useRouter();
  const [schedule, setSchedule] = useState<DaySchedule[]>(initialSchedule);
  const [isSaving, setIsSaving] = useState(false);

  const handleScheduleChange = (updatedSchedule: DaySchedule[]) => {
    setSchedule(updatedSchedule);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch(`/api/professors/${professorId}/schedule`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ schedule }),
      });

      if (response.ok) {
        router.push('/professors');
      } else {
        console.error('Failed to save schedule');
        alert('خطا در ذخیره برنامه هفتگی');
      }
    } catch (error) {
      console.error('Error saving schedule:', error);
      alert('خطا در ذخیره برنامه هفتگی');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F7FA] flex items-center justify-center p-8">
      <div className="w-full max-w-[1000px] bg-white rounded-xl shadow-lg">
        <AttendanceDaysHeader
          professor={professor}
          onSave={handleSave}
          isSaving={isSaving}
        />
        <AttendanceDaysContent 
          schedule={schedule} 
          onScheduleChange={handleScheduleChange}
        />
      </div>
    </div>
  );
}
