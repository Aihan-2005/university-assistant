'use client';

import { FiX } from 'react-icons/fi';

interface DeleteProfessorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  professorName: string;
}

export default function DeleteProfessorModal({
  isOpen,
  onClose,
  onConfirm,
  professorName
}: DeleteProfessorModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-[330px] h-[225px] bg-white rounded-[19px] shadow-lg flex flex-col">
        {/* Header */}
        <div className="w-full h-[60px] flex items-center justify-between px-[15px] border-b border-[#E0E0E2]">
          <div className="flex items-center gap-[10px]">
            <button
              onClick={onClose}
              className="w-[34px] h-[34px] flex items-center justify-center rounded-full border border-[#E0E0E2] hover:bg-gray-50 transition-colors"
            >
              <FiX className="w-[12px] h-[12px] text-[#424750]" />
            </button>
            <span className="text-[13px] font-normal text-[#000000]">حذف استاد</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center px-[15px] py-[22px]">
          <p className="text-[11px] font-bold text-[#000000] text-center">
            آیا از حذف استاد <span className="font-bold">{professorName}</span> اطمینان دارید؟
          </p>
        </div>

        {/* Footer */}
        <div className="w-full h-[60px] flex items-center justify-center gap-[6px] px-[15px] border-t border-[#E0E0E2]">
          <button
            onClick={handleConfirm}
            className="w-[75px] h-[38px] rounded-[11px] bg-[#E53935] text-white text-[12px] font-normal hover:bg-[#D32F2F] transition-colors shadow-sm"
          >
            حذف
          </button>
          <button
            onClick={onClose}
            className="w-[75px] h-[38px] rounded-[11px] border border-[#E0E0E2] bg-white text-[#424750] text-[12px] font-normal hover:bg-gray-50 transition-colors"
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}
