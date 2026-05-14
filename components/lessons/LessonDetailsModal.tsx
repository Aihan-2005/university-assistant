// src/components/lessons/LessonDetailsModal.tsx
'use client';

import { Lesson } from '@/store/lessonsStore';
import { useEffect, useRef } from 'react';

interface LessonDetailsModalProps {
  lesson: Lesson;
  isOpen: boolean;
  onClose: () => void;
}

export default function LessonDetailsModal({ lesson, isOpen, onClose }: LessonDetailsModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) modalRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white w-full max-w-xl rounded-2xl shadow-lg border border-gray-200"
        dir="rtl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-lg font-bold text-gray-900">جزئیات درس</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            &#10005;
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">

          <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-lg">
            <p className="text-xl font-bold text-gray-900">{lesson.title}</p>
            <p className="text-sm text-gray-600 mt-1">کد: {lesson.code}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Info title="نام اختصاری" value={lesson.shortName} />
            <Info title="تعداد واحد" value={`${lesson.units} واحد`} />
            <Info title="مقطع" value={lesson.level} />
            <Info title="کلاس" value={lesson.credits} />
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">اطلاعات تکمیلی</p>
            <InfoRow title="شناسه" value={lesson.id} />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t flex justify-end">
          <button className="px-5 py-2 bg-cyan-600 text-white rounded-lg" onClick={onClose}>
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({ title, value }: any) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <p className="text-xs text-gray-500 mb-1">{title}</p>
      <p className="text-base font-semibold text-gray-800">{value}</p>
    </div>
  );
}

function InfoRow({ title, value }: any) {
  return (
    <div className="flex justify-between text-sm py-1">
      <span className="text-gray-600">{title}</span>
      <span className="text-gray-800 font-medium">{value}</span>
    </div>
  );
}
