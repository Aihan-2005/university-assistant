'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import AttendanceDaysContainer from '@/components/professors/attendance-days/AttendanceDaysContainer';
import { DaySchedule, Professor } from '@/types/professorsType';

export default function AttendanceDaysPage() {
  const params = useParams();
  const professorId = params.id as string;
  const [professor, setProfessor] = useState<Professor | null>(null);
  const [schedule, setSchedule] = useState<DaySchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // دریافت اطلاعات استاد
        const profResponse = await fetch(`/api/professors/${professorId}`);
        
        if (!profResponse.ok) {
          setError('استاد یافت نشد');
          setLoading(false);
          return;
        }

        const profData = await profResponse.json();
        setProfessor(profData);

        // دریافت برنامه هفتگی استاد
        const scheduleResponse = await fetch(`/api/professors/${professorId}/schedule`);
        const scheduleData = await scheduleResponse.json();
        setSchedule(scheduleData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('خطا در دریافت اطلاعات');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [professorId]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <div className="text-gray-600">در حال بارگذاری...</div>
      </div>
    );
  }

  if (error || !professor) {
    return (
      <div className="w-full min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <div className="text-red-600">{error || 'استاد یافت نشد'}</div>
      </div>
    );
  }

  return (
    <AttendanceDaysContainer
      professor={professor}
      schedule={schedule}
      professorId={professorId}
    />
  );
}
