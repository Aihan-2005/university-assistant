'use client';

import { useRouter } from 'next/navigation';
import { useLessonsStore } from '@/store/lessonsStore';
import LessonForm from '@/components/lessons/LessonForm';

export default function NewLessonPage() {
  const router = useRouter();
  const addLesson = useLessonsStore((state) => state.addLesson);

  const handleSubmit = (data: any) => {
    addLesson(data);
    router.push('/lessons');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">افزودن درس جدید</h1>
          <LessonForm
            onSubmit={handleSubmit}
            onCancel={() => router.push('/lessons')}
            submitLabel="افزودن درس"
          />
        </div>
      </div>
    </div>
  );
}
