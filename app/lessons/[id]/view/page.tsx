'use client';

import { useRouter, useParams } from 'next/navigation';
import { useLessonsStore } from '@/store/lessonsStore';

export default function ViewLessonPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const lesson = useLessonsStore((state) => state.getLessonById(id));

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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">جزئیات درس</h1>
            <button
              onClick={() => router.push('/lessons')}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-xl"
                style={{ backgroundColor: lesson.color }}
              />
              <div>
                <h2 className="text-xl font-bold text-gray-800">{lesson.title}</h2>
                <p className="text-gray-500">{lesson.shortName}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-500 mb-2">کد درس</p>
                <p className="text-lg font-medium text-gray-800">{lesson.code}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">تعداد واحد</p>
                <p className="text-lg font-medium text-gray-800">{lesson.units}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">مقطع</p>
                <p className="text-lg font-medium text-gray-800">{lesson.level}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">کلاس</p>
                <p className="text-lg font-medium text-gray-800">{lesson.classroom}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-6 border-t border-gray-200">
              <button
                onClick={() => router.push(`/lessons/${id}/edit`)}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                ویرایش درس
              </button>
              <button
                onClick={() => router.push('/lessons')}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                بازگشت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
