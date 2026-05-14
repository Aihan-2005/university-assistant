'use client';

import { Lesson } from '@/store/lessonsStore';
import LessonRow from './LessonRow';

interface LessonTableProps {
  lessons: Lesson[];
  onView: (lesson: Lesson) => void;
  onEdit: (lesson: Lesson) => void;
  onDelete: (lesson: Lesson) => void;
}

export default function LessonTable({
  lessons,
  onView,
  onEdit,
  onDelete,
}: LessonTableProps) {
  return (
    <div className="w-full">
      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">

            <th className="w-[24%] px-4 py-4 text-right text-sm font-semibold text-gray-700">
              عنوان درس
            </th>

            <th className="w-[16%] px-4 py-4 text-right text-sm font-semibold text-gray-700">
              نام اختصاری
            </th>

            <th className="w-[10%] px-4 py-4 text-center text-sm font-semibold text-gray-700">
              واحد
            </th>

            <th className="w-[14%] px-4 py-4 text-center text-sm font-semibold text-gray-700">
              کد درس
            </th>

            <th className="w-[14%] px-4 py-4 text-center text-sm font-semibold text-gray-700">
              مقطع
            </th>

            <th className="w-[10%] px-4 py-4 text-center text-sm font-semibold text-gray-700">
              کلاس
            </th>

            <th className="w-[12%] px-4 py-4 text-center text-sm font-semibold text-gray-700">
              عملیات
            </th>

          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {lessons.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="px-6 py-14 text-center text-gray-500"
              >
                <div className="flex flex-col items-center gap-3">
                  <svg
                    className="w-14 h-14 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>

                  <p className="text-lg font-medium">
                    هیچ درسی یافت نشد
                  </p>

                  <p className="text-sm">
                    برای شروع، یک درس جدید اضافه کنید
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            lessons.map((lesson) => (
              <LessonRow
                key={lesson.id}
                lesson={lesson}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
