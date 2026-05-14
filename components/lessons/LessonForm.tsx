'use client';

import { useState, useEffect } from 'react';
import { Lesson } from '@/types/lessonsTypes';
import LessonColorPicker from './LessonColorPicker';

interface LessonFormProps {
  lesson?: Lesson;
  onSubmit: (data: Omit<Lesson, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onCancel: () => void;
  submitLabel?: string;
}

export default function LessonForm({ lesson, onSubmit, onCancel, submitLabel = 'ذخیره' }: LessonFormProps) {
  const [formData, setFormData] = useState({
    title: lesson?.title || '',
    shortName: lesson?.shortName || '',
    code: lesson?.code || '',
    units: lesson?.units || 1,
    level: lesson?.level || 'کارشناسی',
    classroom: lesson?.classroom || '',
    color: lesson?.color || '#4ECDC4',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = 'عنوان درس الزامی است';
    if (!formData.shortName.trim()) newErrors.shortName = 'نام کوتاه الزامی است';
    if (!formData.code.trim()) newErrors.code = 'کد درس الزامی است';
    if (formData.units < 1 || formData.units > 4) newErrors.units = 'تعداد واحد باید بین 1 تا 4 باشد';
    if (!formData.classroom.trim()) newErrors.classroom = 'کلاس الزامی است';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">عنوان درس *</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="مثال: طراحی الگوریتم"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">نام کوتاه *</label>
        <input
          type="text"
          value={formData.shortName}
          onChange={(e) => setFormData({ ...formData, shortName: e.target.value })}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.shortName ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="مثال: الگوریتم"
        />
        {errors.shortName && <p className="text-red-500 text-xs mt-1">{errors.shortName}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">کد درس *</label>
        <input
          type="text"
          value={formData.code}
          onChange={(e) => setFormData({ ...formData, code: e.target.value })}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.code ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="مثال: 12345"
        />
        {errors.code && <p className="text-red-500 text-xs mt-1">{errors.code}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">تعداد واحد *</label>
        <input
          type="number"
          min="1"
          max="4"
          value={formData.units}
          onChange={(e) => setFormData({ ...formData, units: parseInt(e.target.value) || 1 })}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.units ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.units && <p className="text-red-500 text-xs mt-1">{errors.units}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">مقطع *</label>
        <select
          value={formData.level}
          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="کارشناسی">کارشناسی</option>
          <option value="کارشناسی ارشد">کارشناسی ارشد</option>
          <option value="دکتری">دکتری</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">کلاس *</label>
        <input
          type="text"
          value={formData.classroom}
          onChange={(e) => setFormData({ ...formData, classroom: e.target.value })}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.classroom ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="مثال: کلاس 12"
        />
        {errors.classroom && <p className="text-red-500 text-xs mt-1">{errors.classroom}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">رنگ درس</label>
        <LessonColorPicker
          selectedColor={formData.color}
          onChange={(color) => setFormData({ ...formData, color })}
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {submitLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
        >
          انصراف
        </button>
      </div>
    </form>
  );
}
