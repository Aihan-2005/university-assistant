// src/components/lessons/AddLessonModal.tsx
'use client';

import { useState } from 'react';
import { useLessonsStore } from '@/store/lessonsStore';

interface AddLessonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddLessonModal({
  isOpen,
  onClose,
}: AddLessonModalProps) {
  const { addLesson } = useLessonsStore();

  const [formData, setFormData] = useState({
    title: '',
    shortName: '',
    units: 3,
    code: '',
    className: '',
    color: '#4F46E5',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const colors = [
    '#4F46E5',
    '#10B981',
    '#F59E0B',
    '#EF4444',
    '#3B82F6',
    '#EC4899',
    '#14B8A6',
    '#A855F7',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'عنوان درس الزامی است';
    }

    if (!formData.shortName.trim()) {
      newErrors.shortName = 'نام اختصاری الزامی است';
    }

    if (!formData.code.trim()) {
      newErrors.code = 'کد درس الزامی است';
    }

    if (!formData.className.trim()) {
      newErrors.className = 'کلاس الزامی است';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleClose = () => {
    setFormData({
      title: '',
      shortName: '',
      units: 3,
      code: '',
      className: '',
      color: '#4F46E5',
    });

    setErrors({});
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    addLesson(formData);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[6px]"
    >
      {/* مودال اصلی - کوچکتر شد */}
      <div
        className="bg-white overflow-hidden shadow-[0_0_11.2px_0_rgba(0,0,0,0.1)]"
        style={{
          width: 760,
          height: 650,
          borderRadius: 25,
        }}
      >
        {/* هدر */}
        <div
          className="flex items-center justify-center border-b border-[#E0E0E2]"
          style={{
            height: 82,
            padding: '10px 20px',
          }}
        >
          <div
            className="flex items-center justify-between w-full"
            style={{
              maxWidth: 700,
            }}
          >
            {/* عنوان */}
            <div
              className="flex items-center justify-center border border-[#E0E0E2]"
              style={{
                width: 170,
                height: 46,
                borderRadius: 23,
              }}
            >
              <span
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: '#424750',
                }}
              >
                ایجاد درس
              </span>
            </div>

            {/* بستن */}
            <button
              type="button"
              onClick={handleClose}
              className="flex items-center justify-center"
              style={{
                width: 46,
                height: 46,
                borderRadius: 23,
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* بدنه */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
          style={{
            padding: 20,
            gap: 24,
          }}
        >
          {/* فرم بالا */}
          <div
            className="flex flex-col"
            style={{
              width: 700,
              gap: 18,
            }}
          >
            {/* ردیف 1 */}
            <div className="flex justify-between">
              {/* عنوان درس */}
              <div
                className="flex flex-col"
                style={{
                  width: 330,
                  gap: 10,
                }}
              >
                <label
                  style={{
                    fontSize: 14,
                    color: '#424750',
                  }}
                >
                  عنوان درس
                </label>

                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                    })
                  }
                  className="outline-none"
                  style={{
                    width: 330,
                    height: 42,
                    borderRadius: 8,
                    border: `1px solid ${
                      errors.title ? '#EF4444' : '#E0E0E2'
                    }`,
                    paddingInline: 10,
                    fontSize: 14,
                  }}
                />
              </div>

              {/* نام اختصاری */}
              <div
                className="flex flex-col"
                style={{
                  width: 330,
                  gap: 10,
                }}
              >
                <label
                  style={{
                    fontSize: 14,
                    color: '#424750',
                  }}
                >
                  نام اختصاری
                </label>

                <input
                  type="text"
                  value={formData.shortName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      shortName: e.target.value,
                    })
                  }
                  className="outline-none"
                  style={{
                    width: 330,
                    height: 42,
                    borderRadius: 8,
                    border: `1px solid ${
                      errors.shortName ? '#EF4444' : '#E0E0E2'
                    }`,
                    paddingInline: 10,
                    fontSize: 14,
                  }}
                />
              </div>
            </div>

            {/* ردیف 2 */}
            <div className="flex justify-between">
              {/* تعداد واحد */}
              <div
                className="flex flex-col"
                style={{
                  width: 330,
                  gap: 10,
                }}
              >
                <label
                  style={{
                    fontSize: 14,
                    color: '#424750',
                  }}
                >
                  تعداد واحد
                </label>

                <input
                  type="number"
                  value={formData.units}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      units: Number(e.target.value),
                    })
                  }
                  className="outline-none"
                  style={{
                    width: 330,
                    height: 42,
                    borderRadius: 8,
                    border: '1px solid #E0E0E2',
                    paddingInline: 10,
                    fontSize: 14,
                  }}
                />
              </div>

              {/* کد درس */}
              <div
                className="flex flex-col"
                style={{
                  width: 330,
                  gap: 10,
                }}
              >
                <label
                  style={{
                    fontSize: 14,
                    color: '#424750',
                  }}
                >
                  کد درس
                </label>

                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      code: e.target.value,
                    })
                  }
                  className="outline-none"
                  style={{
                    width: 330,
                    height: 42,
                    borderRadius: 8,
                    border: `1px solid ${
                      errors.code ? '#EF4444' : '#E0E0E2'
                    }`,
                    paddingInline: 10,
                    fontSize: 14,
                  }}
                />
              </div>
            </div>

            {/* ردیف 3 */}
            <div className="flex justify-between">
              <div
                className="flex flex-col"
                style={{
                  width: 330,
                  gap: 10,
                }}
              >
                <label
                  style={{
                    fontSize: 14,
                    color: '#424750',
                  }}
                >
                  کلاس
                </label>

                <div className="flex justify-between">
                  <input
                    type="text"
                    value={formData.className}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        className: e.target.value,
                      })
                    }
                    className="outline-none"
                    style={{
                      width: 228,
                      height: 42,
                      borderRadius: 8,
                      border: '1px solid #E0E0E2',
                      paddingInline: 10,
                      fontSize: 14,
                    }}
                  />

                  <button
                    type="button"
                    style={{
                      width: 92,
                      height: 42,
                      borderRadius: 8,
                      background: '#A1A3A8',
                      color: '#fff',
                      fontSize: 12,
                    }}
                  >
                    انتخاب کلاس
                  </button>
                </div>
              </div>

              <div style={{ width: 330 }} />
            </div>
          </div>

          {/* باکس‌های پایین - جابجا شدند */}
          <div
            className="flex justify-between"
            style={{
              width: 700,
            }}
          >
            {/* رنگ درس - الان سمت راست */}
            <div
              className="flex flex-col"
              style={{
                width: 340,
                height: 125,
                borderRadius: 10,
                padding: 10,
                background: '#F8F8F8',
                gap: 10,
              }}
            >
              <div className="flex justify-between">
                {/* رنگ اصلی */}
                <div
                  style={{
                    width: 170,
                    height: 60,
                    borderRadius: 8,
                    background: formData.color,
                  }}
                />

                {/* گرید رنگ */}
                <div
                  className="grid grid-cols-4"
                  style={{
                    gap: 4,
                    width: 128,
                  }}
                >
                  {colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          color,
                        })
                      }
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 4,
                        background: color,
                        border:
                          formData.color === color
                            ? '2px solid #000'
                            : 'none',
                      }}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                style={{
                  width: '100%',
                  height: 32,
                  borderRadius: 8,
                  background: '#A1A3A8',
                  color: '#fff',
                  fontSize: 12,
                }}
              >
                تغییر رنگ درس
              </button>
            </div>

            {/* افزودن فیلد جدید - الان سمت چپ */}
            <div
              className="flex flex-col items-center justify-center"
              style={{
                width: 340,
                height: 125,
                borderRadius: 10,
                background: '#33CCFF',
                border: '1.2px dashed #FFFFFF',
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '1px solid #FFFFFF',
                  color: '#FFFFFF',
                  marginBottom: 10,
                  fontSize: 18,
                }}
              >
                +
              </div>

              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                افزودن فیلد جدید
              </span>
            </div>
          </div>
        </form>

        {/* فوتر */}
        <div
          className="flex items-center justify-end border-t border-[#E0E0E2]"
          style={{
            height: 82,
            padding: '10px 20px',
          }}
        >
          <div
            className="flex items-center"
            style={{
              gap: 8,
            }}
          >
            {/* تایید */}
            <button
              type="submit"
              onClick={handleSubmit}
              style={{
                width: 95,
                height: 46,
                borderRadius: 14,
                background: '#0099CC',
                color: '#FFFFFF',
                fontSize: 15,
              }}
            >
              تایید
            </button>

            {/* لغو */}
            <button
              type="button"
              onClick={handleClose}
              style={{
                width: 95,
                height: 46,
                borderRadius: 14,
                border: '1px solid #E0E0E2',
                background: '#FFFFFF',
                color: '#424750',
                fontSize: 15,
              }}
            >
              لغو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
