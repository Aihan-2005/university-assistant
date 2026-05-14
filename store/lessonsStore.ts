// import { create } from 'zustand';
// import { Lesson, LessonFilters, PaginationInfo } from '@/types/lessonsTypes';

// interface LessonsState {
//   lessons: Lesson[];
//   filteredLessons: Lesson[];
//   filters: LessonFilters;
//   pagination: PaginationInfo;
//   isLoading: boolean;

//   setFilters: (filters: Partial<LessonFilters>) => void;
//   setPagination: (pagination: Partial<PaginationInfo>) => void;
//   setLoading: (isLoading: boolean) => void;
//   applyFilters: () => void;
//   addLesson: (lesson: Omit<Lesson, 'id' | 'createdAt' | 'updatedAt'>) => void;
//   updateLesson: (id: string, lesson: Partial<Lesson>) => void;
//   deleteLesson: (id: string) => void;
//   getLessonById: (id: string) => Lesson | undefined;
// }

// export const useLessonsStore = create<LessonsState>((set, get) => ({
//   lessons: [],
//   filteredLessons: [],
//   filters: {
//     search: '',
//   },
//   pagination: {
//     currentPage: 1,
//     totalPages: 1,
//     totalItems: 0,
//     itemsPerPage: 8,
//   },
//   isLoading: false,

//   setFilters: (filters) => {
//     set((state) => ({
//       filters: { ...state.filters, ...filters },
//     }));
//     get().applyFilters();
//   },

//   setPagination: (pagination) =>
//     set((state) => ({
//       pagination: { ...state.pagination, ...pagination },
//     })),

//   setLoading: (isLoading) => set({ isLoading }),

//   applyFilters: () => {
//     const { lessons, filters, pagination } = get();
//     let filtered = [...lessons];

//     if (filters.search) {
//       const searchLower = filters.search.toLowerCase();
//       filtered = filtered.filter(
//         (lesson) =>
//           lesson.title.toLowerCase().includes(searchLower) ||
//           lesson.shortName.toLowerCase().includes(searchLower) ||
//           lesson.code.includes(searchLower)
//       );
//     }

//     if (filters.level) {
//       filtered = filtered.filter((lesson) => lesson.level === filters.level);
//     }

//     if (filters.units) {
//       filtered = filtered.filter((lesson) => lesson.units === filters.units);
//     }

//     set({
//       filteredLessons: filtered,
//       pagination: {
//         ...pagination,
//         totalItems: filtered.length,
//         totalPages: Math.ceil(filtered.length / pagination.itemsPerPage),
//         currentPage: 1,
//       },
//     });
//   },

//   addLesson: (lessonData) => {
//     const newLesson: Lesson = {
//       ...lessonData,
//       id: Date.now().toString(),
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     };

//     set((state) => ({
//       lessons: [...state.lessons, newLesson],
//     }));
//     get().applyFilters();
//   },

//   updateLesson: (id, updatedData) => {
//     set((state) => ({
//       lessons: state.lessons.map((lesson) =>
//         lesson.id === id
//           ? { ...lesson, ...updatedData, updatedAt: new Date().toISOString() }
//           : lesson
//       ),
//     }));
//     get().applyFilters();
//   },

//   deleteLesson: (id) => {
//     set((state) => ({
//       lessons: state.lessons.filter((lesson) => lesson.id !== id),
//     }));
//     get().applyFilters();
//   },

//   getLessonById: (id) => {
//     return get().lessons.find((lesson) => lesson.id === id);
//   },
// }));


// src/store/lessonsStore.ts
import { create } from 'zustand';

export interface Lesson {
  id: string;
  title: string;
  shortName: string;
  units: number;
  code: string;
  level: string;
  credits: string; // تغییر نام از credits به کلاس
}

interface LessonsState {
  lessons: Lesson[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  addLesson: (lesson: Omit<Lesson, 'id'>) => void;
  updateLesson: (id: string, lesson: Partial<Omit<Lesson, 'id'>>) => void;
  deleteLesson: (id: string) => void;
  getLessonById: (id: string) => Lesson | undefined;
}

// Mock Data
const mockLessons: Lesson[] = [
  {
    id: '1',
    title: 'ریاضیات مهندسی',
    shortName: 'ریاضی مهندسی',
    units: 3,
    code: '12345',
    level: 'کارشناسی',
    credits: 'کلاس 101'
  },
  {
    id: '2',
    title: 'فیزیک عمومی',
    shortName: 'فیزیک',
    units: 4,
    code: '12346',
    level: 'کارشناسی',
    credits: 'کلاس 102'
  },
  {
    id: '3',
    title: 'برنامه‌نویسی پیشرفته',
    shortName: 'برنامه‌نویسی',
    units: 3,
    code: '12347',
    level: 'کارشناسی',
    credits: 'کلاس 103'
  },
  {
    id: '4',
    title: 'ساختمان داده',
    shortName: 'ساختمان داده',
    units: 3,
    code: '12348',
    level: 'کارشناسی',
    credits: 'کلاس 104'
  },
  {
    id: '5',
    title: 'طراحی الگوریتم',
    shortName: 'الگوریتم',
    units: 3,
    code: '12349',
    level: 'کارشناسی ارشد',
    credits: 'کلاس 201'
  },
  {
    id: '6',
    title: 'پایگاه داده پیشرفته',
    shortName: 'پایگاه داده',
    units: 3,
    code: '12350',
    level: 'کارشناسی ارشد',
    credits: 'کلاس 202'
  },
  {
    id: '7',
    title: 'هوش مصنوعی',
    shortName: 'هوش مصنوعی',
    units: 3,
    code: '12351',
    level: 'کارشناسی ارشد',
    credits: 'کلاس 203'
  },
  {
    id: '8',
    title: 'یادگیری ماشین',
    shortName: 'یادگیری ماشین',
    units: 3,
    code: '12352',
    level: 'کارشناسی ارشد',
    credits: 'کلاس 204'
  }
];

export const useLessonsStore = create<LessonsState>((set, get) => ({
  lessons: mockLessons,
  searchQuery: '',

  setSearchQuery: (query) => set({ searchQuery: query }),

  addLesson: (lesson) => {
    const newLesson: Lesson = {
      ...lesson,
      id: Date.now().toString()
    };
    set((state) => ({
      lessons: [...state.lessons, newLesson]
    }));
  },

  updateLesson: (id, updatedData) => {
    set((state) => ({
      lessons: state.lessons.map((lesson) =>
        lesson.id === id ? { ...lesson, ...updatedData } : lesson
      )
    }));
  },

  deleteLesson: (id) => {
    set((state) => ({
      lessons: state.lessons.filter((lesson) => lesson.id !== id)
    }));
  },

  getLessonById: (id) => {
    return get().lessons.find((lesson) => lesson.id === id);
  }
}));
