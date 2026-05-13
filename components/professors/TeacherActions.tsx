'use client';

import { FiMoreVertical, FiEdit2, FiTrash2, FiCalendar, FiClock } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface TeacherActionsProps {
  professorId: string;
  onDelete: () => void;
}

export default function TeacherActions({ professorId, onDelete }: TeacherActionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[24px] h-[24px] flex items-center justify-center text-[#0099CC] hover:bg-[#0099CC]/10 rounded-full transition-colors"
      >
        <FiMoreVertical className="w-[17px] h-[3px] rotate-90" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[30px] w-[180px] bg-white rounded-[12px] shadow-lg border border-[#E0E0E2] py-[8px] z-50">
          <button
            onClick={() => {
              router.push(`/professors/${professorId}/edit`);
              setIsOpen(false);
            }}
            className="w-full px-[16px] py-[10px] flex items-center gap-[10px] hover:bg-[#F5F5F5] text-right text-[14px]"
          >
            <FiEdit2 className="w-[16px] h-[16px]" />
            <span>ویرایش</span>
          </button>
          
          <button
            onClick={() => {
              router.push(`/professors/${professorId}/presence`);
              setIsOpen(false);
            }}
            className="w-full px-[16px] py-[10px] flex items-center gap-[10px] hover:bg-[#F5F5F5] text-right text-[14px]"
          >
            <FiCalendar className="w-[16px] h-[16px]" />
            <span>روزهای حضور</span>
          </button>
          
          <button
            onClick={() => {
              router.push(`/professors/${professorId}/schedule`);
              setIsOpen(false);
            }}
            className="w-full px-[16px] py-[10px] flex items-center gap-[10px] hover:bg-[#F5F5F5] text-right text-[14px]"
          >
            <FiClock className="w-[16px] h-[16px]" />
            <span>برنامه هفتگی</span>
          </button>
          
          <div className="h-[1px] bg-[#E0E0E2] my-[4px]" />
          
          <button
            onClick={() => {
              onDelete();
              setIsOpen(false);
            }}
            className="w-full px-[16px] py-[10px] flex items-center gap-[10px] hover:bg-[#FEE] text-right text-[14px] text-red-600"
          >
            <FiTrash2 className="w-[16px] h-[16px]" />
            <span>حذف</span>
          </button>
        </div>
      )}
    </div>
  );
}
