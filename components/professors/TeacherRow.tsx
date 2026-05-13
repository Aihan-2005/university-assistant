// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import { FiEdit2, FiTrash2 } from 'react-icons/fi';
// import { Professor } from '@/types/professorsTypes';

// interface TeacherRowProps {
//   professor: Professor;
//   onDelete: (id: string) => void;
// }

// export default function TeacherRow({ professor, onDelete }: TeacherRowProps) {
//   const router = useRouter();
//   const [showMenu, setShowMenu] = useState(false);

//   const handleEdit = () => {
//     router.push(`/professors/${professor.id}/edit`);
//   };

//   const handleDelete = () => {
//     onDelete(professor.id);
//     setShowMenu(false);
//   };

//   return (
//     <div className="w-full h-[90px] flex items-center justify-between px-[30px] border-b border-[#E0E0E2] hover:bg-gray-50 transition-colors">
//       {/* نام و نام‌خانوادگی */}
//       <div className="w-[177px] flex items-center gap-[12px]">
//         <div className="w-[55px] h-[55px] rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#0099CC] to-[#006699]">
//           {professor.avatar ? (
//             <Image
//               src={professor.avatar}
//               alt={professor.fullName}
//               width={55}
//               height={55}
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center text-white text-[20px] font-bold">
//               {professor.fullName.charAt(0)}
//             </div>
//           )}
//         </div>
//         <span className="text-[16px] font-normal text-[#000000] truncate">
//           {professor.fullName}
//         </span>
//       </div>

//       {/* نام اختصاری */}
//       <div className="w-[106px] text-[16px] font-normal text-[#000000] text-center truncate">
//         {professor.shortName}
//       </div>

//       {/* ایمیل */}
//       <div className="w-[251px] text-[14px] font-normal text-[#000000] text-center truncate">
//         {professor.email}
//       </div>

//       {/* شماره تماس */}
//       <div className="w-[131px] text-[14px] font-normal text-[#000000] text-center" dir="ltr">
//         {professor.phone}
//       </div>

//       {/* عملیات */}
//       <div className="w-[82px] flex items-center justify-center relative">
//         <button
//           onClick={() => setShowMenu(!showMenu)}
//           className="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] hover:bg-gray-200 transition-colors"
//         >
//           <BsThreeDotsVertical className="w-[20px] h-[20px] text-[#A1A3A8]" />
//         </button>

//         {showMenu && (
//           <>
//             <div
//               className="fixed inset-0 z-10"
//               onClick={() => setShowMenu(false)}
//             />
//             <div className="absolute left-0 top-[40px] w-[140px] bg-white rounded-[12px] shadow-lg border border-[#E0E0E2] py-[8px] z-20">
//               <button
//                 onClick={handleEdit}
//                 className="w-full h-[40px] flex items-center gap-[10px] px-[16px] hover:bg-gray-50 transition-colors"
//               >
//                 <FiEdit2 className="w-[16px] h-[16px] text-[#0099CC]" />
//                 <span className="text-[14px] font-normal text-[#000000]">ویرایش</span>
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="w-full h-[40px] flex items-center gap-[10px] px-[16px] hover:bg-gray-50 transition-colors"
//               >
//                 <FiTrash2 className="w-[16px] h-[16px] text-[#FF4444]" />
//                 <span className="text-[14px] font-normal text-[#FF4444]">حذف</span>
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }





'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiEdit2, FiTrash2, FiCalendar, FiClock } from 'react-icons/fi';
import { Professor } from '@/types/professorsType';
import DeleteProfessorModal from './DeleteTeacherModal';
import EditProfessorModal from './EditTeacherModal';

interface TeacherRowProps {
  professor: Professor;
  onDelete: (id: string) => void;
  onEdit: (id: string, data: any) => void;
}

export default function TeacherRow({ professor, onDelete, onEdit }: TeacherRowProps) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setShowMenu(false);
    setShowEditModal(true);
  };

  const handleEditSubmit = (data: any) => {
    onEdit(professor.id, data);
  };

  const handleDeleteClick = () => {
    setShowMenu(false);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(professor.id);
    setShowDeleteModal(false);
  };

  const handleTermSchedule = () => {
    router.push(`/professors/${professor.id}/term-schedule`);
    setShowMenu(false);
  };

  const handleAttendanceDays = () => {
    router.push(`/professors/${professor.id}/attendance-days`);
    setShowMenu(false);
  };

  const fullName = `${professor.firstName || ''} ${professor.lastName || ''}`.trim();
  const firstChar = fullName.charAt(0) || professor.shortName?.charAt(0) || 'A';

  return (
    <>
      <div className="w-full h-[70px] flex items-center justify-between px-[30px] border-b border-[#E0E0E2] hover:bg-gray-50 transition-colors">
        {/* نام و نام‌خانوادگی */}
        <div className="w-[250px] flex items-center gap-[12px]">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#0099CC] to-[#006699]">
            {professor.avatar ? (
              <Image
                src={professor.avatar}
                alt={fullName}
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-[18px] font-bold">
                {firstChar}
              </div>
            )}
          </div>
          <span className="text-[14px] font-normal text-[#000000] truncate">
            {fullName}
          </span>
        </div>

        {/* نام اختصاری */}
        <div className="w-[150px] text-[14px] font-normal text-[#000000] text-center truncate">
          {professor.shortName}
        </div>

        {/* ایمیل */}
        <div className="w-[300px] text-[13px] font-normal text-[#000000] text-center truncate">
          {professor.email}
        </div>

        {/* شماره تماس */}
        <div className="w-[180px] text-[13px] font-normal text-[#000000] text-center" dir="ltr">
          {professor.phone}
        </div>

        {/* عملیات */}
        <div className="w-[100px] flex items-center justify-center relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] hover:bg-gray-200 transition-colors"
          >
            <BsThreeDotsVertical className="w-[18px] h-[18px] text-[#A1A3A8]" />
          </button>

          {showMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowMenu(false)}
              />
              <div className="absolute left-0 top-[36px] w-[95px] bg-white rounded-[5px] shadow-lg border border-[#E0E0E2] py-[6px] z-20">
                <button
                  onClick={handleEditClick}
                  className="w-full h-[32px] flex items-center gap-[8px] px-[12px] hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[12px] font-normal text-[#000000]">ویرایش</span>
                </button>
                <button
                  onClick={handleDeleteClick}
                  className="w-full h-[32px] flex items-center gap-[8px] px-[12px] hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[12px] font-normal text-[#000000]">حذف</span>
                </button>
                <button
                  onClick={handleTermSchedule}
                  className="w-full h-[32px] flex items-center gap-[8px] px-[12px] hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[12px] font-normal text-[#000000]">برنامه ترمی</span>
                </button>
                <button
                  onClick={handleAttendanceDays}
                  className="w-full h-[32px] flex items-center gap-[8px] px-[12px] hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[12px] font-normal text-[#000000]">روز های حضور</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Delete Modal */}
      <DeleteProfessorModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        professorName={fullName || professor.shortName}
      />

      {/* Edit Modal */}
      <EditProfessorModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSubmit={handleEditSubmit}
        professor={professor}
      />
    </>
  );
}
