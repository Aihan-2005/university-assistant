// 'use client';

// import { FiSearch } from 'react-icons/fi';
// import { useProfessorsStore } from '@/store/professorsStore';

// export default function TeacherSearch() {
//   const { searchQuery, setSearchQuery } = useProfessorsStore();

//   return (
//     <div className="w-[350px] h-[45px] flex items-center gap-[8px] rounded-[40px] border border-[#E0E0E2] px-[15px] bg-white">
//       <FiSearch className="w-[16px] h-[16px] text-[#A1A3A8]" />
//       <input
//         type="text"
//         placeholder="جستجو"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="flex-1 text-[14px] font-normal text-right outline-none placeholder:text-[#A1A3A8]"
//       />
//     </div>
//   );
// }


'use client';

import { FiSearch } from 'react-icons/fi';
import { useProfessorsStore } from '@/store/professorsStore';

export default function TeacherSearch() {
  const { searchQuery, setSearchQuery } = useProfessorsStore();

  return (
    <div className="relative w-[350px]">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="جستجو استاد..."
        className="w-full h-[45px] pl-[45px] pr-[20px] rounded-[30px] border border-[#E0E0E2] text-[13px] text-[#000000] placeholder:text-[#A1A3A8] focus:outline-none focus:border-[#0099CC] transition-colors"
      />
      <FiSearch className="absolute left-[20px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#A1A3A8]" />
    </div>
  );
}
