export interface Professor {
  id: string;
  fullName: string;
  shortName: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  resultsPerPage: number;
}

export interface TimeSlot {
  start: string;
  end: string;
}

export interface DaySchedule {
  day: string;
  dayEn: string;
  isPresent: boolean;
  timeSlots: TimeSlot[];
}
