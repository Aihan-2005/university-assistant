'use client';

import { useEffect, useRef } from 'react';
import { Trash2, X } from 'lucide-react';
import { useLessonsStore, Lesson } from '@/store/lessonsStore';

interface DeleteLessonModalProps {
  lesson: Lesson;
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteLessonModal({
  lesson,
  isOpen,
  onClose,
}: DeleteLessonModalProps) {
  const { deleteLesson } = useLessonsStore();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleDelete = () => {
    deleteLesson(lesson.id);
    onClose();
  };

  return (
    <div
      dir="rtl"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 backdrop-blur-[4px]"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative overflow-hidden bg-white shadow-[0px_0px_11.2px_0px_#0000001A]"
        style={{
          width: 440,
          height: 300,
          borderRadius: 25,
        }}
      >
        <div
          className="flex items-center justify-between border-b border-[#E0E0E2]"
          style={{
            height: 80,
            padding: '10px 20px',
          }}
        >
          <div className="flex items-center gap-[10px]">
            <div
              className="flex items-center justify-center border border-[#E0E0E2]"
              style={{
                width: 45,
                height: 45,
                borderRadius: 14,
                background: '#FFFFFF',
              }}
            >
              <Trash2 size={18} color="#424750" strokeWidth={2} />
            </div>

            <span
              style={{
                fontSize: 18,
                fontWeight: 400,
                color: '#000000',
                whiteSpace: 'nowrap',
              }}
            >
              حذف درس
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center justify-center transition-opacity hover:opacity-70"
          >
            <X size={18} color="#424750" />
          </button>
        </div>

        <div
          className="flex items-center justify-center"
          style={{
            height: 140,
            padding: '30px 20px',
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: '#000000',
              textAlign: 'center',
            }}
          >
            آیا از حذف این درس اطمینان دارید؟
          </p>
        </div>

        <div
          className="flex items-center justify-end border-t border-[#E0E0E2]"
          style={{
            height: 80,
            padding: '10px 30px',
          }}
        >
          <div
            className="flex items-center"
            style={{
              gap: 16,
            }}
          >
            <button
              onClick={handleDelete}
              className="flex items-center justify-center transition-transform active:scale-95"
              style={{
                width: 100,
                height: 50,
                borderRadius: 15,
                background: '#EF4444',
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#FFFFFF',
                }}
              >
                حذف
              </span>
            </button>

            <button
              onClick={onClose}
              className="flex items-center justify-center border border-[#E0E0E2] transition-transform active:scale-95"
              style={{
                width: 100,
                height: 50,
                borderRadius: 15,
                background: '#FFFFFF',
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#424750',
                }}
              >
                لغو
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
