// 'use client';

// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import { PaginationInfo } from '@/types/professorsTypes';

// interface PaginationProps {
//   pagination: PaginationInfo;
//   onPageChange: (page: number) => void;
// }

// export default function Pagination({ pagination, onPageChange }: PaginationProps) {
//   const { currentPage, totalPages, totalResults } = pagination;

//   const getPageNumbers = () => {
//     const pages: (number | string)[] = [];
    
//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       if (currentPage <= 3) {
//         pages.push(1, 2, 3, '...', totalPages);
//       } else if (currentPage >= totalPages - 2) {
//         pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
//       } else {
//         pages.push(1, '...', currentPage, '...', totalPages);
//       }
//     }
    
//     return pages;
//   };

//   return (
//     <div className="w-[1257px] h-[107px] flex items-center justify-between p-[10px]">
//       {/* دکمه‌های صفحه‌بندی - سمت راست */}
//       <div className="flex items-center gap-[20px]">
//         {/* قبلی */}
//         <button
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="flex items-center gap-[8px] text-[#000000] disabled:opacity-50 disabled:cursor-not-allowed hover:text-[#0099CC] transition-colors"
//         >
//           <FiChevronRight className="w-[20px] h-[20px]" />
//           <span className="text-[16px] font-normal">قبلی</span>
//         </button>

//         {/* شماره صفحات */}
//         <div className="flex items-center gap-[8px]">
//           {getPageNumbers().map((page, index) => (
//             <div key={index}>
//               {page === '...' ? (
//                 <span className="w-[36px] h-[36px] flex items-center justify-center text-[16px] text-[#A1A3A8]">
//                   ...
//                 </span>
//               ) : (
//                 <button
//                   onClick={() => onPageChange(page as number)}
//                   className={`w-[36px] h-[36px] flex items-center justify-center rounded-[12px] text-[16px] font-normal transition-colors ${
//                     currentPage === page
//                       ? 'bg-[#0099CC] text-white'
//                       : 'text-[#000000] hover:bg-[#E0E0E2]'
//                   }`}
//                 >
//                   {page}
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* بعدی */}
//         <button
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="flex items-center gap-[8px] text-[#000000] disabled:opacity-50 disabled:cursor-not-allowed hover:text-[#0099CC] transition-colors"
//         >
//           <span className="text-[16px] font-normal">بعدی</span>
//           <FiChevronLeft className="w-[20px] h-[20px]" />
//         </button>
//       </div>

//       {/* نتایج - سمت چپ */}
//       <div className="flex items-center">
//         <span className="text-[18px] font-normal text-[#000000]">
//           {totalResults} نتیجه
//         </span>
//       </div>
//     </div>
//   );
// }


'use client';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PaginationInfo } from '@/types/professorsTypes';

interface PaginationProps {
  pagination: PaginationInfo;
  onPageChange: (page: number) => void;
}

export default function Pagination({ pagination, onPageChange }: PaginationProps) {
  const { currentPage, totalPages, totalResults } = pagination;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="w-full h-[60px] flex items-center justify-between">
      {/* دکمه‌های صفحه‌بندی - سمت راست */}
      <div className="flex items-center gap-[20px]">
        {/* قبلی */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-[8px] text-[#000000] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#0099CC] transition-colors"
        >
          <FiChevronRight className="w-[18px] h-[18px]" />
          <span className="text-[14px] font-normal">قبلی</span>
        </button>

        {/* شماره صفحات */}
        <div className="flex items-center gap-[8px]">
          {getPageNumbers().map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <span className="w-[36px] h-[36px] flex items-center justify-center text-[14px] text-[#A1A3A8]">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => onPageChange(page as number)}
                  className={`w-[36px] h-[36px] flex items-center justify-center rounded-[10px] text-[14px] font-normal transition-colors ${
                    currentPage === page
                      ? 'bg-[#0099CC] text-white'
                      : 'text-[#000000] hover:bg-[#E0E0E2]'
                  }`}
                >
                  {page}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* بعدی */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-[8px] text-[#000000] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#0099CC] transition-colors"
        >
          <span className="text-[14px] font-normal">بعدی</span>
          <FiChevronLeft className="w-[18px] h-[18px]" />
        </button>
      </div>

      {/* نتایج - سمت چپ */}
      <div className="flex items-center">
        <span className="text-[15px] font-normal text-[#000000]">
          {totalResults} نتیجه
        </span>
      </div>
    </div>
  );
}
