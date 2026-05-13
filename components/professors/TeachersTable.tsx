// 'use client';

// import { Professor } from '@/types/professorsTypes';
// import TeacherRow from './TeacherRow';

// interface TeachersTableProps {
//   professors: Professor[];
//   onDelete: (id: string) => void;
// }

// export default function TeachersTable({ professors, onDelete }: TeachersTableProps) {
//   return (
//     <div className="w-[1200px] h-[720px] rounded-[20px] border border-[#E0E0E2] overflow-hidden flex flex-col">
//       {/* Header */}
//       <div className="w-full h-[90px] flex items-center justify-between px-[30px] border-b border-[#E0E0E2] flex-shrink-0">
//         <div className="w-[177px] text-[16px] font-bold text-[#000000]">
//           نام و نام‌خانوادگی
//         </div>
//         <div className="w-[106px] text-[16px] font-bold text-[#000000] text-center">
//           نام اختصاری
//         </div>
//         <div className="w-[251px] text-[16px] font-bold text-[#000000] text-center">
//           ایمیل
//         </div>
//         <div className="w-[131px] text-[16px] font-bold text-[#000000] text-center">
//           شماره تماس
//         </div>
//         <div className="w-[82px] text-[16px] font-bold text-[#000000] text-center">
//           عملیات
//         </div>
//       </div>

//       {/* Rows Container */}
//       <div className="flex-1 overflow-y-auto">
//         {professors.length === 0 ? (
//           <div className="w-full h-full flex items-center justify-center">
//             <p className="text-[16px] text-[#A1A3A8]">استادی یافت نشد</p>
//           </div>
//         ) : (
//           professors.map((professor) => (
//             <TeacherRow
//               key={professor.id}
//               professor={professor}
//               onDelete={onDelete}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


'use client';

import { Professor } from '@/types/professorsTypes';
import TeacherRow from './TeacherRow';

interface TeachersTableProps {
  professors: Professor[];
  onDelete: (id: string) => void;
}

export default function TeachersTable({ professors, onDelete }: TeachersTableProps) {
  return (
    <div className="w-full h-[600px] rounded-[15px] border border-[#E0E0E2] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="w-full h-[70px] flex items-center justify-between px-[30px] border-b border-[#E0E0E2] flex-shrink-0">
        <div className="w-[250px] text-[14px] font-bold text-[#000000]">
          نام و نام‌خانوادگی
        </div>
        <div className="w-[150px] text-[14px] font-bold text-[#000000] text-center">
          نام اختصاری
        </div>
        <div className="w-[300px] text-[14px] font-bold text-[#000000] text-center">
          ایمیل
        </div>
        <div className="w-[180px] text-[14px] font-bold text-[#000000] text-center">
          شماره تماس
        </div>
        <div className="w-[100px] text-[14px] font-bold text-[#000000] text-center">
          عملیات
        </div>
      </div>

      {/* Rows Container */}
      <div className="flex-1 overflow-y-auto">
        {professors.length === 0 ? (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-[14px] text-[#A1A3A8]">استادی یافت نشد</p>
          </div>
        ) : (
          professors.map((professor) => (
            <TeacherRow
              key={professor.id}
              professor={professor}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
