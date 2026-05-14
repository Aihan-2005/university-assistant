// src/types/lessonsTypes.ts
export interface Lesson {
  id: string;
  title: string;
  shortName: string;
  units: number;
  code: string;
  level: string;
  credits: string;
}

export interface LessonFormData {
  title: string;
  shortName: string;
  units: number;
  code: string;
  level: string;
  credits: string;
}

export interface LessonFilters {
  searchQuery: string;
  level?: string;
  units?: number;
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
