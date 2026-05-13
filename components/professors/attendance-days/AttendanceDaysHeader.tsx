'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiArrowRight } from 'react-icons/fi';
import { Professor } from '@/types/professorsType';

interface AttendanceDaysHeaderProps {
  professor: Professor;
  onSave: () => void;
  isSaving: boolean;
}

export default function AttendanceDaysHeader({
  professor,
  onSave,
  isSaving,
}: AttendanceDaysHeaderProps) {
  const router = useRouter();
  const fullName = `${professor.firstName || ''} ${professor.lastName || ''}`.trim() || professor.fullName;
  const firstChar = fullName.charAt(0) || professor.shortName?.charAt(0) || 'A';

  return (
    <div className="w-full px-8 py-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        {/* Professor Info */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <FiArrowRight className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[#0099CC] to-[#006699] flex items-center justify-center">
            {professor.avatar ? (
              <Image
                src={professor.avatar}
                alt={fullName}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white text-2xl font-bold">{firstChar}</span>
            )}
          </div>
          
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">{fullName}</span>
            <span className="text-sm text-gray-500">{professor.email}</span>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={onSave}
          disabled={isSaving}
          className="px-6 py-2.5 rounded-full bg-[#0099CC] text-white text-sm font-medium hover:bg-[#0088BB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSaving ? 'در حال ذخیره...' : 'ثبت روزهای حضور'}
        </button>
      </div>
    </div>
  );
}
