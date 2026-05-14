'use client';

interface LessonSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function LessonSearch({
  searchQuery,
  onSearchChange,
}: LessonSearchProps) {
  return (
    <div
      className="relative w-full max-w-[340px]"
      dir="rtl"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder=""
        className="
          w-full
          h-[44px]
          rounded-full
          border
          border-[#E0E0E2]
          bg-white
          pr-[46px]
          pl-[20px]
          text-[14px]
          text-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-cyan-500/20
          focus:border-cyan-500
          transition-all
        "
      />

      {/* ICON */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A1A3A8]">
        <svg
          className="w-[16px] h-[16px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* TEXT */}
      <span
        className="
          absolute
          right-[44px]
          top-1/2
          -translate-y-1/2
          text-[14px]
          font-normal
          text-[#A1A3A8]
          pointer-events-none
        "
      >
        جستجو
      </span>
    </div>
  );
}
