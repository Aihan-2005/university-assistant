import { create } from 'zustand';
import { Professor, PaginationInfo } from '@/types/professorsTypes';

interface ProfessorsState {
  professors: Professor[];
  searchQuery: string;
  pagination: PaginationInfo;
  isLoading: boolean;
  
  setProfessors: (professors: Professor[]) => void;
  setSearchQuery: (query: string) => void;
  setPagination: (pagination: PaginationInfo) => void;
  setIsLoading: (loading: boolean) => void;
  deleteProfessor: (id: string) => void;
}

export const useProfessorsStore = create<ProfessorsState>((set) => ({
  professors: [],
  searchQuery: '',
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
    resultsPerPage: 7,
  },
  isLoading: false,
  
  setProfessors: (professors) => set({ professors }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setPagination: (pagination) => set({ pagination }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  deleteProfessor: (id) => set((state) => ({
    professors: state.professors.filter((p) => p.id !== id),
  })),
}));
