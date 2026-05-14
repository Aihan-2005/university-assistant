'use client';

import { Lesson } from '@/store/lessonsStore';
import LessonActions from './LessonActions';

interface LessonRowProps {
  lesson: Lesson;
  onView: (lesson: Lesson) => void;
  onEdit: (lesson: Lesson) => void;
  onDelete: (lesson: Lesson) => void;
}

export default function LessonRow({
  lesson,
  onView,
  onEdit,
  onDelete,
}: LessonRowProps) {
  return (
    <tr className="h-[72px] hover:bg-gray-50 transition-colors">

      <td className="px-4 py-4 text-right text-[14px] font-medium text-gray-900 truncate">
        {lesson.title}
      </td>

      <td className="px-4 py-4 text-right text-[14px] text-gray-700 truncate">
        {lesson.shortName}
      </td>

      <td className="px-4 py-4 text-center text-[14px] text-gray-700">
        {lesson.units}
      </td>

      <td className="px-4 py-4 text-center text-[14px] font-mono text-gray-700">
        {lesson.code}
      </td>

      <td className="px-4 py-4 text-center text-[14px] text-gray-700 truncate">
        {lesson.level}
      </td>

      <td className="px-4 py-4 text-center text-[14px] text-gray-700">
        {lesson.credits}
      </td>

      <td className="px-4 py-4">
        <div className="flex items-center justify-center">
          <LessonActions
            lesson={lesson}
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </td>
    </tr>
  );
}
