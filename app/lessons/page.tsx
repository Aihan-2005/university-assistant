'use client';

import { useState } from 'react';
import { useLessonsStore } from '@/store/lessonsStore';
import LessonTable from '@/components/lessons/LessonTable';
import LessonSearch from '@/components/lessons/LessonSearch';
import Pagination from '@/components/lessons/Pagination';
import AddLessonModal from '@/components/lessons/AddLessonModal';
import EditLessonModal from '@/components/lessons/EditLessonModal';
import DeleteLessonModal from '@/components/lessons/DeleteLessonModal';
import LessonDetailsModal from '@/components/lessons/LessonDetailsModal';

export default function LessonsPage() {
  const { lessons, searchQuery, setSearchQuery } = useLessonsStore();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState<any>(null);
  const [deletingLesson, setDeletingLesson] = useState<any>(null);
  const [viewingLesson, setViewingLesson] = useState<any>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filteredLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lesson.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lesson.code.includes(searchQuery)
  );

  const totalPages = Math.ceil(filteredLessons.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentLessons = filteredLessons.slice(startIndex, endIndex);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div
      className="min-h-screen bg-gray-50 pt-14 pb-8 px-4 md:px-6"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">

        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

          {/* SEARCH */}
          <div className="w-full md:w-auto">
            <LessonSearch
              searchQuery={searchQuery}
              onSearchChange={handleSearch}
            />
          </div>

          {/* ADD BUTTON */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="
              h-[44px]
              min-w-[132px]
              px-5
              rounded-full
              bg-[#0099CC]
              hover:bg-[#0084B0]
              transition-colors
              flex
              items-center
              justify-center
              gap-2
              text-white
              text-[14px]
              font-normal
              self-start
              shadow-sm
            "
          >
            <svg
              className="w-[14px] h-[14px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 4v16m8-8H4"
              />
            </svg>

            افزودن درس
          </button>
        </div>

        {/* TABLE */}
        <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <LessonTable
            lessons={currentLessons}
            onView={setViewingLesson}
            onEdit={setEditingLesson}
            onDelete={setDeletingLesson}
          />
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-10">
            <Pagination
              pagination={{
                currentPage,
                totalPages,
                totalItems: filteredLessons.length,
                itemsPerPage,
              }}
              onPageChange={setCurrentPage}
            />
          </div>
        )}

        {/* MODALS */}

        <AddLessonModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />

        {editingLesson && (
          <EditLessonModal
            lesson={editingLesson}
            isOpen={!!editingLesson}
            onClose={() => setEditingLesson(null)}
          />
        )}

        {deletingLesson && (
          <DeleteLessonModal
            lesson={deletingLesson}
            isOpen={!!deletingLesson}
            onClose={() => setDeletingLesson(null)}
          />
        )}

        {viewingLesson && (
          <LessonDetailsModal
            lesson={viewingLesson}
            isOpen={!!viewingLesson}
            onClose={() => setViewingLesson(null)}
          />
        )}
      </div>
    </div>
  );
}
