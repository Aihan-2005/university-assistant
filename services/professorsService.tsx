import { Professor, PaginationInfo } from '@/types/professorsTypes';

// Mock data برای تست
const mockProfessors: Professor[] = [
  {
    id: '1',
    fullName: 'امیر عسکری',
    shortName: 'آ عسکری',
    email: 'amir_askari@gmail.com',
    phone: '09905700831',
    avatar: '/avatars/professor1.jpg',
  },
  {
    id: '2',
    fullName: 'محسن امینی',
    shortName: 'م امینی',
    email: 'mohsen_amini@gmail.com',
    phone: '09114563212',
    avatar: '/avatars/professor2.jpg',
  },
  {
    id: '3',
    fullName: 'علی مهرابان',
    shortName: 'ع مهرابان',
    email: 'ali_mehraban@gmail.com',
    phone: '09354570019',
    avatar: '/avatars/professor3.jpg',
  },
  {
    id: '4',
    fullName: 'مینو علیا',
    shortName: 'م علیا',
    email: 'minoo.alinia@gmail.com',
    phone: '09392300981',
    avatar: '/avatars/professor4.jpg',
  },
  {
    id: '5',
    fullName: 'مریم عابدزاده',
    shortName: 'م عابدزاده',
    email: 'maryaalzade@gmail.com',
    phone: '09111348400',
    avatar: '/avatars/professor5.jpg',
  },
  {
    id: '6',
    fullName: 'فاطمه حسینی',
    shortName: 'ف حسینی',
    email: 'fateme_hosseini@gmail.com',
    phone: '09358769812',
    avatar: '/avatars/professor6.jpg',
  },
  {
    id: '7',
    fullName: 'علیرضا امینی',
    shortName: 'ع امینی',
    email: 'alireza.mahmudi@gmail.com',
    phone: '09906398712',
    avatar: '/avatars/professor7.jpg',
  },
];

export const professorsService = {
  async getProfessors(
    page: number = 1,
    searchQuery: string = '',
    perPage: number = 7
  ): Promise<{ professors: Professor[]; pagination: PaginationInfo }> {
    // شبیه‌سازی تاخیر API
    await new Promise((resolve) => setTimeout(resolve, 500));

    // فیلتر بر اساس جستجو
    let filtered = mockProfessors;
    if (searchQuery) {
      filtered = mockProfessors.filter(
        (p) =>
          p.fullName.includes(searchQuery) ||
          p.shortName.includes(searchQuery) ||
          p.email.includes(searchQuery) ||
          p.phone.includes(searchQuery)
      );
    }

    const totalResults = filtered.length;
    const totalPages = Math.ceil(totalResults / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const professors = filtered.slice(startIndex, endIndex);

    return {
      professors,
      pagination: {
        currentPage: page,
        totalPages,
        totalResults,
        resultsPerPage: perPage,
      },
    };
  },

  async getProfessorById(id: string): Promise<Professor | null> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockProfessors.find((p) => p.id === id) || null;
  },

  async createProfessor(professor: Omit<Professor, 'id'>): Promise<Professor> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newProfessor = {
      ...professor,
      id: Date.now().toString(),
    };
    mockProfessors.push(newProfessor);
    return newProfessor;
  },

  async updateProfessor(id: string, data: Partial<Professor>): Promise<Professor> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = mockProfessors.findIndex((p) => p.id === id);
    if (index === -1) throw new Error('Professor not found');
    mockProfessors[index] = { ...mockProfessors[index], ...data };
    return mockProfessors[index];
  },

  async deleteProfessor(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = mockProfessors.findIndex((p) => p.id === id);
    if (index === -1) throw new Error('Professor not found');
    mockProfessors.splice(index, 1);
  },
};
