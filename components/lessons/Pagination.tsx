'use client';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PaginationState } from '@/types/lessonsTypes';

interface PaginationProps {
  pagination?: PaginationState;
  onPageChange: (page: number) => void;
}

export default function Pagination({ pagination, onPageChange }: PaginationProps) {
  if (!pagination) return null;

  const { currentPage, totalPages, totalItems } = pagination;

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  const getPageNumbers = (): (number | string)[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage, '...', totalPages];
  };

  const pages = getPageNumbers();

  return (
    <div className="w-full h-[60px] flex items-center justify-between">
      
      {/* pagination buttons */}
      <div className="flex items-center gap-[20px]">

        {/* previous */}
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-[8px] text-[#000000] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#0099CC] transition-colors"
        >
          <FiChevronRight className="w-[18px] h-[18px]" />
          <span className="text-[14px] font-normal">قبلی</span>
        </button>

        {/* page numbers */}
        <div className="flex items-center gap-[8px]">
          {pages.map((page, index) =>
            page === '...' ? (
              <span
                key={`dots-${index}`}
                className="w-[36px] h-[36px] flex items-center justify-center text-[14px] text-[#A1A3A8]"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => changePage(page as number)}
                className={`w-[36px] h-[36px] flex items-center justify-center rounded-[10px] text-[14px] font-normal transition-colors ${
                  currentPage === page
                    ? 'bg-[#0099CC] text-white'
                    : 'text-[#000000] hover:bg-[#E0E0E2]'
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        {/* next */}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-[8px] text-[#000000] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#0099CC] transition-colors"
        >
          <span className="text-[14px] font-normal">بعدی</span>
          <FiChevronLeft className="w-[18px] h-[18px]" />
        </button>

      </div>

      {/* results count */}
      <div className="flex items-center">
        <span className="text-[15px] font-normal text-[#000000]">
          {totalItems} نتیجه
        </span>
      </div>
    </div>
  );
}
