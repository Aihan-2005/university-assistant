'use client';

import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { MdColorLens } from 'react-icons/md';
import { Professor } from '@/types/professorsType';

interface EditProfessorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ProfessorFormData) => void;
  professor: Professor;
}

interface ProfessorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  shortName: string;
  color: string;
  avatar?: File | string;
}

const PRESET_COLORS = [
  '#515BD4', '#8E59FF', '#E91E63', '#D32F2F',
  '#FF6B35', '#F57C00', '#FBC02D', '#7CB342',
  '#26A69A', '#0099CC', '#1E88E5', '#5E35B1'
];

export default function EditProfessorModal({ isOpen, onClose, onSubmit, professor }: EditProfessorModalProps) {
  const [formData, setFormData] = useState<ProfessorFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    shortName: '',
    color: '#63AA84'
  });

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string>('');

  useEffect(() => {
    if (isOpen && professor) {
      setFormData({
        firstName: professor.firstName || '',
        lastName: professor.lastName || '',
        email: professor.email || '',
        phone: professor.phone || '',
        shortName: professor.shortName || '',
        color: professor.color || '#63AA84',
        avatar: professor.avatar
      });
      setAvatarPreview(professor.avatar || '');
    }
  }, [isOpen, professor]);

  const handleInputChange = (field: keyof ProfessorFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleColorSelect = (color: string) => {
    setFormData(prev => ({ ...prev, color }));
    setShowColorPicker(false);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, avatar: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-[675px] bg-white rounded-[22px] shadow-lg flex flex-col">
        {/* Header */}
        <div className="w-full h-[71px] flex items-center justify-between px-[15px] border-b border-[#E0E0E2] bg-white rounded-t-[22px]">
          <div className="flex items-center gap-[10px]">
            <button
              onClick={onClose}
              className="w-[39px] h-[39px] flex items-center justify-center rounded-full border border-[#E0E0E2] hover:bg-gray-50 transition-colors bg-white"
            >
              <FiX className="w-[9px] h-[9px] text-[#424750]" />
            </button>
            <span className="text-[13.5px] font-normal text-[#000000]">ویرایش مدرس</span>
          </div>
        </div>

        {/* Content */}
        <div className="w-full px-[15px] py-[7px]">
          <div className="w-full flex flex-col gap-[19px]">
            {/* Form Fields Container */}
            <div className="w-full rounded-[12px] border border-[#E0E0E2] p-[7px]">
              <div className="w-full flex flex-col gap-[15px]">
                {/* Row 1: نام و نام‌خانوادگی */}
                <div className="w-full flex gap-[19px]">
                  <div className="flex-1 flex flex-col gap-[10px]">
                    <label className="text-[10.5px] font-normal text-[#424750] text-right">نام</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full h-[34px] px-[7px] rounded-[6px] border border-[#E0E0E2] text-[10.5px] text-[#000000] focus:outline-none focus:border-[#0099CC] transition-colors bg-white"
                      placeholder="نام را وارد کنید"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-[10px]">
                    <label className="text-[10.5px] font-normal text-[#424750] text-right">نام‌خانوادگی</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full h-[34px] px-[7px] rounded-[6px] border border-[#E0E0E2] text-[10.5px] text-[#000000] focus:outline-none focus:border-[#0099CC] transition-colors bg-white"
                      placeholder="نام‌خانوادگی را وارد کنید"
                    />
                  </div>
                </div>

                {/* Row 2: ایمیل و شماره تماس */}
                <div className="w-full flex gap-[19px]">
                  <div className="flex-1 flex flex-col gap-[10px]">
                    <label className="text-[10.5px] font-normal text-[#424750] text-right">ایمیل</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full h-[34px] px-[7px] rounded-[6px] border border-[#E0E0E2] text-[10.5px] text-[#000000] focus:outline-none focus:border-[#0099CC] transition-colors bg-white"
                      placeholder="ایمیل را وارد کنید"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-[10px]">
                    <label className="text-[10.5px] font-normal text-[#424750] text-right">شماره تماس</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full h-[34px] px-[7px] rounded-[6px] border border-[#E0E0E2] text-[10.5px] text-[#000000] focus:outline-none focus:border-[#0099CC] transition-colors bg-white"
                      placeholder="شماره تماس را وارد کنید"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Row 3: نام اختصاری */}
                <div className="w-full flex gap-[19px]">
                  <div className="flex-1 flex flex-col gap-[10px]">
                    <label className="text-[10.5px] font-normal text-[#424750] text-right">نام اختصاری</label>
                    <input
                      type="text"
                      value={formData.shortName}
                      onChange={(e) => handleInputChange('shortName', e.target.value)}
                      className="w-full h-[34px] px-[7px] rounded-[6px] border border-[#E0E0E2] text-[10.5px] text-[#000000] focus:outline-none focus:border-[#0099CC] transition-colors bg-white"
                      placeholder="نام اختصاری را وارد کنید"
                    />
                  </div>
                  <div className="flex-1" />
                </div>
              </div>
            </div>

            {/* Color Picker & Avatar Upload */}
            <div className="w-full flex gap-[19px]">
              {/* Color Picker */}
              <div className="flex-1 h-[105px] rounded-[6px] p-[7px] bg-[#F3F3F3]">
                <div className="w-full h-full flex flex-col gap-[9px]">
                  <div className="flex items-center gap-[9px]">
                    <button
                      onClick={() => setShowColorPicker(!showColorPicker)}
                      className="w-[48px] h-[48px] rounded-[6px] border border-[#E0E0E2] flex items-center justify-center hover:scale-105 transition-transform"
                      style={{ backgroundColor: formData.color }}
                    >
                      <MdColorLens className="w-[17px] h-[17px] text-white" />
                    </button>
                    <div className="h-[22px] px-[7px] rounded-[6px] bg-[#A1A3A8] flex items-center justify-center">
                      <span className="text-[9px] font-normal text-white">تغییر رنگ درس</span>
                    </div>
                  </div>
                  
                  {showColorPicker && (
                    <div className="grid grid-cols-6 gap-[6px]">
                      {PRESET_COLORS.map((color) => (
                        <button
                          key={color}
                          onClick={() => handleColorSelect(color)}
                          className="w-[22px] h-[22px] rounded-[4px] border border-white shadow-sm hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Avatar Upload */}
              <div className="flex-1 h-[105px] rounded-[6px] border border-dashed border-[rgba(0,0,0,0.1)] p-[7px] flex items-center justify-center relative bg-[rgba(51,204,255,0.1)] hover:bg-[rgba(51,204,255,0.15)] transition-colors cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {avatarPreview ? (
                  <img src={avatarPreview} alt="Preview" className="w-full h-full object-cover rounded-[4px]" />
                ) : (
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[12px] h-[12px] rounded-[2px] border border-[#33CCFF] bg-transparent flex items-center justify-center">
                      <span className="text-[16px] text-[#33CCFF] font-light leading-none">+</span>
                    </div>
                    <span className="text-[10.5px] text-[#33CCFF] text-center">افزودن فیلد جدید</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full h-[71px] flex items-center justify-end gap-[6px] px-[15px] border-t border-[#E0E0E2] bg-white rounded-b-[22px]">
          <button
            onClick={handleSubmit}
            className="w-[135px] h-[37.5px] rounded-[11px] bg-[#0099CC] text-white text-[12px] font-normal hover:bg-[#0088BB] transition-colors"
          >
            ویرایش
          </button>
          <button
            onClick={onClose}
            className="w-[75px] h-[37.5px] rounded-[11px] border border-[#E0E0E2] bg-white text-[#424750] text-[12px] font-normal hover:bg-gray-50 transition-colors"
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}
