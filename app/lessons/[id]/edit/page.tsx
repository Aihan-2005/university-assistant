'use client';

import { useRouter, useParams } from 'next/navigation';
import { useLessonsStore } from '@/store/lessonsStore';
import LessonForm from '@/components/lessons/LessonForm';

export default function EditLessonPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const lesson = useLessonsStore((state) => state.getLessonById(id));
  const updateLesson = useLessonsStore((state) => state.updateLesson);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">درس یافت نشد</h2>
          <button
            onClick={() => router.push('/lessons')}
            className="text-blue-600 hover:underline"
          >
            بازگشت به لیست دروس
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (data: any) => {
    updateLesson(id, data);
    router.push('/lessons');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">ویرایش درس</h1>
          <LessonForm
            lesson={lesson}
            onSubmit={handleSubmit}
            onCancel={() => router.push('/lessons')}
            submitLabel="ذخیره تغییرات"
          />
        </div>
      </div>
    </div>
  );
}
