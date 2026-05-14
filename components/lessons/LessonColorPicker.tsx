'use client';

interface LessonColorPickerProps {
  selectedColor: string;
  onChange: (color: string) => void;
}

const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
  '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#52B788'
];

export default function LessonColorPicker({ selectedColor, onChange }: LessonColorPickerProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <button
          key={color}
          type="button"
          onClick={() => onChange(color)}
          className={`w-8 h-8 rounded-full transition-all ${
            selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-500 scale-110' : 'hover:scale-105'
          }`}
          style={{ backgroundColor: color }}
          aria-label={`انتخاب رنگ ${color}`}
        />
      ))}
    </div>
  );
}
