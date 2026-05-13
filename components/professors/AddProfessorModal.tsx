'use client';

import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { MdColorLens } from 'react-icons/md';

interface AddProfessorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ProfessorFormData) => void;
}

interface ProfessorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  shortName: string;
  color: string;
  avatar?: File;
}

const PRESET_COLORS = [
  '#515BD4', '#8E59FF', '#E91E63', '#D32F2F',
  '#FF6B35', '#F57C00', '#FBC02D', '#7CB342',
  '#26A69A', '#0099CC', '#1E88E5', '#5E35B1'
];

export default function AddProfessorModal({ isOpen, onClose, onSubmit }: AddProfessorModalProps) {
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

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        shortName: '',
        color: '#63AA84'
      });
      setAvatarPreview('');
      setShowColorPicker(false);
    }
  }, [isOpen]);

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
      <div className="relative w-[675px] h-[575px] bg-white rounded-[19px] shadow-lg flex flex-col">
        {/* Header */}
        <div className="w-full h-[71px] flex items-center justify-between px-[30px] border-b border-[#E0E0E2]">
          <div className="flex items-center gap-[8px]">
            <button
              onClick={onClose}
              className="w-[39px] h-[39px] flex items-center justify-center rounded-full border border-[#E0E0E2] hover:bg-gray-50 transition-colors"
            >
              <FiX className="w-[18px] h-[18px] text-[#424750]" />
            </button>
            <span className="text-[14px] font-normal text-[#000000]">افزودن مدرس</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[30px] py-[24px]">
          <div className="w-full flex flex-col gap-[24px]">
            {/* Form Fields */}
            <div className="w-full flex flex-col gap-[20px]">
              {/* Row 1: نام و نام‌خانوادگی */}
              <div className="w-full flex gap-[16px] px-[8px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="text-[11px] font-normal text-[#424750]">نام</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full h-[40px] px-[12px] rounded-[6px] border border-[#E0E0E2] text-[12px] text-[#000000] focus:outline-none focus:border-[#0099CC] transition-colors"
                    placeholder="نام را وارد کنید"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="text-[11px] font-normal text-[#424750]">نام‌خانوادگی</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full h-[40px] px-[12px] rounded-[6px] border border-[#E0E0E2] text-[12px] text-[#000000] focus:outline-none focus:border-[#0099CC] transition-colors"
                    placeholder="نام‌خانوادگی را وارد کنید"
                  />
                </div>
              </div>

              {/* Row 2: ایمیل و شماره تماس */}
              <div className="w-full flex gap-[16px] px-[8px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="text-[11px] font-normal text-[#424750]">ایمیل</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full h-[40px] px-[12px] rounded-[6px] border border-[#E0E0E2] text-[12px] text-[#000000] focus:outline-none focus:border-[#0099CC] transition-colors"
                    placeholder="ایمیل را وارد کنید"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="text-[11px] font-normal text-[#424750]">شماره تماس</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full h-[40px] px-[12px] rounded-[6px] border border-[#E0E0E2] text-[12px] text-[#000000] focus:outline-none focus:border-[#0099CC] transition-colors"
                    placeholder="شماره تماس را وارد کنید"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Row 3: نام اختصاری */}
              <div className="w-full flex gap-[16px] px-[8px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="text-[11px] font-normal text-[#424750]">نام اختصاری</label>
                  <input
                    type="text"
                    value={formData.shortName}
                    onChange={(e) => handleInputChange('shortName', e.target.value)}
                    className="w-full h-[40px] px-[12px] rounded-[6px] border border-[#E0E0E2] text-[12px] text-[#000000] focus:outline-none focus:border-[#0099CC] transition-colors"
                    placeholder="نام اختصاری را وارد کنید"
                  />
                </div>
                <div className="flex-1" />
              </div>
            </div>

            {/* Color Picker & Avatar Upload */}
            <div className="w-full flex gap-[16px] px-[8px]">
              {/* Color Picker */}
              <div className="flex-1 h-[120px] rounded-[8px] p-[12px] border border-[#E0E0E2] bg-[#FAFAFA]">
                <div className="w-full h-full flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[12px]">
                    <button
                      onClick={() => setShowColorPicker(!showColorPicker)}
                      className="w-[48px] h-[48px] rounded-[8px] border-2 border-white shadow-md flex items-center justify-center hover:scale-105 transition-transform"
                      style={{ backgroundColor: formData.color }}
                    >
                      <MdColorLens className="w-[24px] h-[24px] text-white" />
                    </button>
                    <span className="text-[11px] font-normal text-[#424750]">تغییر رنگ درس</span>
                  </div>
                  
                  {showColorPicker && (
                    <div className="grid grid-cols-6 gap-[8px]">
                      {PRESET_COLORS.map((color) => (
                        <button
                          key={color}
                          onClick={() => handleColorSelect(color)}
                          className="w-[28px] h-[28px] rounded-[6px] border-2 border-white shadow-sm hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Avatar Upload */}
              <div className="flex-1 h-[120px] rounded-[8px] border-[1.5px] border-dashed border-[#D0D0D0] p-[12px] flex items-center justify-center relative bg-[#FAFAFA] hover:bg-[#F5F5F5] transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {avatarPreview ? (
                  <img src={avatarPreview} alt="Preview" className="w-full h-full object-cover rounded-[6px]" />
                ) : (
                  <div className="flex flex-col items-center gap-[8px]">
                    <div className="w-[40px] h-[40px] rounded-[8px] border-2 border-dashed border-[#0099CC] bg-[#0099CC]/5 flex items-center justify-center">
                      <span className="text-[24px] text-[#0099CC] font-light">+</span>
                    </div>
                    <span className="text-[10px] text-[#424750] text-center">آپلود عکس پروفایل</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full h-[71px] flex items-center justify-end gap-[12px] px-[30px] border-t border-[#E0E0E2]">
          <button
            onClick={handleSubmit}
            className="w-[120px] h-[42px] rounded-[10px] bg-[#0099CC] text-white text-[13px] font-normal hover:bg-[#0088BB] transition-colors shadow-sm"
          >
            تایید
          </button>
          <button
            onClick={onClose}
            className="w-[80px] h-[42px] rounded-[10px] border border-[#E0E0E2] bg-white text-[#424750] text-[13px] font-normal hover:bg-gray-50 transition-colors"
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}
