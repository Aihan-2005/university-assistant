'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiPlus } from 'react-icons/fi';
import { useProfessorsStore } from '@/store/professorsStore';
import { professorsService } from '@/services/professorsService';
import TeacherSearch from '@/components/professors/TeacherSearch';
import TeachersTable from '@/components/professors/TeachersTable';
import Pagination from '@/components/professors/Pagination';
import AddProfessorModal from '@/components/professors/AddProfessorModal';

export default function ProfessorsPage() {
  const router = useRouter();
  const {
    professors,
    searchQuery,
    pagination,
    isLoading,
    setProfessors,
    setPagination,
    setIsLoading,
    deleteProfessor,
  } = useProfessorsStore();

  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    loadProfessors(pagination.currentPage);
  }, [debouncedSearch, pagination.currentPage]);

  const loadProfessors = async (page: number) => {
    setIsLoading(true);
    try {
      const result = await professorsService.getProfessors(
        page,
        debouncedSearch,
        pagination.resultsPerPage
      );
      setProfessors(result.professors);
      setPagination(result.pagination);
    } catch (error) {
      console.error('Error loading professors:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, currentPage: page });
  };

  const handleDelete = async (id: string) => {
    if (confirm('آیا از حذف این استاد اطمینان دارید؟')) {
      try {
        await professorsService.deleteProfessor(id);
        deleteProfessor(id);
        loadProfessors(pagination.currentPage);
      } catch (error) {
        console.error('Error deleting professor:', error);
      }
    }
  };

  const handleAddProfessor = async (data: any) => {
    try {
      await professorsService.createProfessor(data);
      loadProfessors(pagination.currentPage);
    } catch (error) {
      console.error('Error adding professor:', error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F5F5] flex items-center justify-center p-[20px]">
      <div className="w-[1400px] bg-white rounded-[20px] p-[30px] flex flex-col gap-[20px]">
        {/* نوار بالایی */}
        <div className="w-full flex items-center justify-between">
          <TeacherSearch />
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-[140px] h-[45px] flex items-center justify-center gap-[8px] rounded-[30px] bg-[#0099CC] text-white hover:bg-[#0088BB] transition-colors"
          >
            <FiPlus className="w-[16px] h-[16px]" strokeWidth={3} />
            <span className="text-[14px] font-normal">افزودن استاد</span>
          </button>
        </div>

        {/* جدول */}
        {isLoading ? (
          <div className="w-full h-[600px] flex items-center justify-center rounded-[15px] border border-[#E0E0E2] bg-white">
            <div className="text-[14px] text-[#A1A3A8]">در حال بارگذاری...</div>
          </div>
        ) : (
          <TeachersTable professors={professors} onDelete={handleDelete} />
        )}

        {/* Pagination */}
        {!isLoading && professors.length > 0 && (
          <Pagination pagination={pagination} onPageChange={handlePageChange} />
        )}
      </div>

      {/* Modal */}
      <AddProfessorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddProfessor}
      />
    </div>
  );
}
