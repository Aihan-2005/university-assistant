import { Lesson } from '@/types/lessonsTypes';

const API_BASE = '/api/lessons';

export const lessonService = {
  async getAllLessons(): Promise<Lesson[]> {
    const response = await fetch(API_BASE);
    if (!response.ok) throw new Error('خطا در دریافت دروس');
    return response.json();
  },

  async getLessonById(id: string): Promise<Lesson> {
    const response = await fetch(`${API_BASE}/${id}`);
    if (!response.ok) throw new Error('خطا در دریافت درس');
    return response.json();
  },

  async createLesson(lesson: Omit<Lesson, 'id'>): Promise<Lesson> {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lesson),
    });
    if (!response.ok) throw new Error('خطا در ایجاد درس');
    return response.json();
  },

  async updateLesson(id: string, lesson: Partial<Lesson>): Promise<Lesson> {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lesson),
    });
    if (!response.ok) throw new Error('خطا در ویرایش درس');
    return response.json();
  },

  async deleteLesson(id: string): Promise<void> {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('خطا در حذف درس');
  },
};
