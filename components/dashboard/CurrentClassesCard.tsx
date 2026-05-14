"use client";

import { FaClock } from "react-icons/fa";

interface ClassItemProps {
  title: string;
  time: string;
}

function ClassItem({ title, time }: ClassItemProps) {
  return (
    <div
      className="
        w-full h-full
        rounded-[10px]
        border border-dashed border-[#E0E0E2]
        px-[10px] py-[8px]
        flex items-center justify-center
      "
    >
      <div className="flex items-center gap-[8px]">
          {/* آیکون */}
        <FaClock
          size={11}
          className="text-[#0099CC] flex-shrink-0"
        />
        
        {/* متن */}
        <div className="flex flex-col items-center justify-center gap-[6px] text-center">
          
          {/* عنوان */}
          <span className="text-[12px] font-bold leading-[100%] text-black">
            {title}
          </span>

          {/* زمان */}
          <span className="text-[10px] font-normal leading-[100%] text-black">
            {time}
          </span>

        </div>

      
      </div>
    </div>
  );
}

export default function CurrentClassesCard() {

  // تست با 6 آیتم
  const classes = [
    { title: "کلاس نظریه زبان‌ها", time: "9:30 الی 10:45" },
    { title: "کلاس زبان تخصصی", time: "9:30 الی 10:45" },
    { title: "کلاس مبانی برنامه‌نویسی", time: "10:00 الی 11:30" },
    { title: "کلاس طراحی کامپایلر", time: "10:00 الی 11:30" },
    { title: "کلاس ساختمان داده", time: "11:30 الی 13:00" },
    { title: "کلاس هوش مصنوعی", time: "13:15 الی 14:45" },
  ];

  const isColumnMode = classes.length <= 3;

  return (
    <div className="flex-1 h-[215px] rounded-[25px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] p-[20px]">

      <div className="w-full h-full flex flex-col gap-[16px]">

        {/* عنوان */}
        <h3 className="text-[11px] font-bold leading-[100%] text-black text-right">
          وضعیت کلاس‌های در حال برگزاری
        </h3>

        {/* محتوا */}
        <div className="flex-1">

          {isColumnMode ? (

            /* حالت زیرهمی برای 3 تا و کمتر */
            <div className="w-full h-full flex flex-col gap-[8px]">

              {classes.map((classItem, index) => (
                <div key={index} className="flex-1">
                  <ClassItem
                    title={classItem.title}
                    time={classItem.time}
                  />
                </div>
              ))}

            </div>

          ) : (

            /* حالت گریدی برای بیشتر از 3 */
            <div className="w-full h-full grid grid-cols-2 gap-[8px]">

              {classes.map((classItem, index) => (
                <ClassItem
                  key={index}
                  title={classItem.title}
                  time={classItem.time}
                />
              ))}

            </div>

          )}

        </div>
      </div>
    </div>
  );
}
