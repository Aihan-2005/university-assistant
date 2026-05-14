'use client';

import { useState, useEffect, useRef } from 'react';
import { useLessonsStore, Lesson } from '@/store/lessonsStore';
import { X, ChevronDown, Edit3, Plus } from 'lucide-react';

interface EditLessonModalProps {
  lesson: Lesson;
  isOpen: boolean;
  onClose: () => void;
}

export default function EditLessonModal({
  lesson,
  isOpen,
  onClose
}: EditLessonModalProps) {

  const { updateLesson } = useLessonsStore();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    shortName: '',
    units: 3,
    code: '',
    level: 'کارشناسی',
    class: '',
    color: '#4F46E5'
  });

  const colors = [
    '#424750',
    '#8B5CF6',
    '#EC4899',
    '#3B82F6',
    '#34D399',
    '#F59E0B',
    '#EF4444',
    '#FCD34D'
  ];

  useEffect(() => {
    if (isOpen) {
      setFormData({
        title: lesson.title,
        shortName: lesson.shortName,
        units: lesson.units,
        code: lesson.code,
        level: lesson.level,
        class: lesson.credits || '',
        color: lesson.color || '#4F46E5'
      });
    }
  }, [isOpen, lesson]);

  if (!isOpen) return null;

  const handleSave = () => {
    updateLesson(lesson.id, {
      ...formData,
      credits: formData.class
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 backdrop-blur-[4px]"
      dir="rtl"
      onClick={onClose}
    >

      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white shadow-[0px_0px_11.2px_0px_#0000001A] flex flex-col"
        style={{
          width: 720,
          height: 620,
          borderRadius: 25
        }}
      >

        {/* header */}
        <div
          className="flex items-center justify-between border-b border-[#E0E0E2]"
          style={{
            height: 82,
            padding: '0 25px'
          }}
        >

          {/* title box right */}
          <div
            className="flex items-center justify-center border border-[#E0E0E2]"
            style={{
              width: 180,
              height: 50,
              borderRadius: 26,
              gap: 10
            }}
          >
            <span style={{ fontSize: 17 }}>ویرایش درس</span>
            <Edit3 size={18} />
          </div>

          {/* close left */}
          <button onClick={onClose}>
            <X size={22} />
          </button>

        </div>

        {/* content */}
        <div
          className="flex-1 overflow-y-auto"
          style={{
            padding: '24px 40px'
          }}
        >

          {/* row 1 */}
          <div className="grid grid-cols-2 gap-[20px] mb-5">

            <div className="flex flex-col gap-2">
              <label>عنوان درس</label>
              <input
                value={formData.title}
                onChange={(e)=>setFormData({...formData,title:e.target.value})}
                className="border border-[#E0E0E2] rounded-lg px-2"
                style={{height:42}}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>نام اختصاری</label>
              <input
                value={formData.shortName}
                onChange={(e)=>setFormData({...formData,shortName:e.target.value})}
                className="border border-[#E0E0E2] rounded-lg px-2"
                style={{height:42}}
              />
            </div>

          </div>

          {/* row2 */}
          <div className="grid grid-cols-2 gap-[20px] mb-5">

            <div className="flex flex-col gap-2">

              <label>تعداد واحد</label>

              <div className="relative">

                <select
                  value={formData.units}
                  onChange={(e)=>setFormData({...formData,units:Number(e.target.value)})}
                  className="border border-[#E0E0E2] rounded-lg px-2 appearance-none w-full"
                  style={{height:42}}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>

                <ChevronDown
                  className="absolute left-3 top-3 text-[#A1A3A8]"
                  size={16}
                />

              </div>

            </div>

            <div className="flex flex-col gap-2">

              <label>کد درس</label>

              <input
                value={formData.code}
                onChange={(e)=>setFormData({...formData,code:e.target.value})}
                className="border border-[#E0E0E2] rounded-lg px-2"
                style={{height:42}}
              />

            </div>

          </div>

          {/* class */}
          <div className="flex flex-col gap-2 mb-7">

            <label>کلاس</label>

            <div className="flex gap-2">

              <input
                value={formData.class}
                onChange={(e)=>setFormData({...formData,class:e.target.value})}
                className="border border-[#E0E0E2] rounded-lg px-2 flex-1"
                style={{height:42}}
              />

              <button
                className="bg-[#A1A3A8] text-white rounded-lg"
                style={{
                  width:110,
                  height:42
                }}
              >
                انتخاب کلاس
              </button>

            </div>

          </div>

          {/* bottom section */}
          <div className="grid grid-cols-2 gap-[24px]">

            {/* color */}
            <div
              className="border border-[#E0E0E2] rounded-xl p-3 flex flex-col gap-3 items-center"
              style={{height:130}}
            >

              <div className="flex gap-3 items-center">

                <div
                  style={{
                    width:160,
                    height:60,
                    borderRadius:8,
                    background:formData.color,
                    border:'1px solid #E0E0E2'
                  }}
                />

                <div className="grid grid-cols-4 gap-1.5">

                  {colors.map(c=>(
                    <div
                      key={c}
                      onClick={()=>setFormData({...formData,color:c})}
                      style={{
                        width:24,
                        height:24,
                        borderRadius:6,
                        background:c,
                        border:'1px solid #E0E0E2',
                        cursor:'pointer'
                      }}
                    />
                  ))}

                </div>

              </div>

              <button
                className="bg-[#A1A3A8] text-white rounded-lg"
                style={{
                  width:'100%',
                  height:30,
                  fontSize:12
                }}
              >
                تغییر رنگ درس
              </button>

            </div>

            {/* add field */}
            <div
              className="rounded-xl flex items-center justify-center"
              style={{
                height:130,
                border:'1.2px solid #E0E0E2',
                padding:12
              }}
            >

              <div
                className="flex items-center justify-center gap-2"
                style={{
                  width:'100%',
                  height:50,
                  border:'2px solid #33CCFF',
                  borderRadius:10
                }}
              >

                <Plus size={16} color="#33CCFF"/>

                <span style={{fontSize:14}}>
                  افزودن فیلد جدید
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* footer */}
        <div
          className="flex items-center border-t border-[#E0E0E2]"
          style={{
            height:90,
            padding:'0 25px',
            justifyContent:'flex-end'
          }}
        >

          <div className="flex gap-2">

            <button
              onClick={handleSave}
              className="bg-[#0099CC] text-white"
              style={{
                width:100,
                height:48,
                borderRadius:15
              }}
            >
              ویرایش
            </button>

            <button
              onClick={onClose}
              className="border border-[#E0E0E2]"
              style={{
                width:100,
                height:48,
                borderRadius:15
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
