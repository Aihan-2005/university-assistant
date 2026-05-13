import { FaClock } from "react-icons/fa";

interface ClassItemProps {
  title: string;
  time: string;
}

function ClassItem({ title, time }: ClassItemProps) {
  return (
    <div className="w-full h-[40px] rounded-[8px] border border-dashed border-[#E0E0E2] px-[12px] flex items-center justify-end">
      <div className="flex items-center gap-[8px]">
        {/* محتوای متنی */}
        <div className="flex flex-col gap-[6px] items-end">
          {/* عنوان کلاس */}
          <span className="text-[9px] font-bold leading-[100%] text-black text-right">
            {title}
          </span>
          {/* زمان */}
          <span className="text-[8px] font-normal leading-[100%] text-black text-right">
            {time}
          </span>
        </div>
        
        {/* آیکون ساعت */}
        <FaClock size={11} className="text-[#0099CC] flex-shrink-0" />
      </div>
    </div>
  );
}

export default function CurrentClassesCard() {
  const classes = [
    { title: "کلاس نظریه زبان‌ها", time: "ساعت 9:30 الی 10:45" },
    { title: "کلاس زبان تخصصی", time: "ساعت 9:30 الی 10:45" },
    { title: "کلاس مبانی برنامه‌نویسی", time: "ساعت 10:00 الی 11:30" },
    { title: "کلاس طراحی کامپایلر", time: "ساعت 10:00 الی 11:30" },
  ];

  const shouldShowInColumn = classes.length <= 3;

  return (
    <div className="flex-1 h-[215px] rounded-[25px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] p-[20px]">
      <div className="w-full h-full flex flex-col gap-[16px]">
        {/* عنوان */}
        <h3 className="text-[11px] font-bold leading-[100%] text-black text-right">
          وضعیت کلاس‌های در حال برگزاری
        </h3>

        {/* لیست کلاس‌ها */}
        {shouldShowInColumn ? (
          // حالت ستونی (کمتر یا مساوی 3) - زیر هم
          <div className="w-full flex flex-col gap-[8px]">
            {classes.map((classItem, index) => (
              <ClassItem key={index} title={classItem.title} time={classItem.time} />
            ))}
          </div>
        ) : (
          // حالت شبکه‌ای (بیشتر از 3) - دوتا دوتا کنار هم
          <div className="w-full flex flex-col gap-[8px]">
            {/* سطر اول - 2 کلاس */}
            <div className="w-full flex gap-[8px]">
              {classes.slice(0, 2).map((classItem, index) => (
                <div key={index} className="flex-1">
                  <ClassItem title={classItem.title} time={classItem.time} />
                </div>
              ))}
            </div>
            
            {/* سطر دوم - 2 کلاس */}
            {classes.length > 2 && (
              <div className="w-full flex gap-[8px]">
                {classes.slice(2, 4).map((classItem, index) => (
                  <div key={index} className="flex-1">
                    <ClassItem title={classItem.title} time={classItem.time} />
                  </div>
                ))}
              </div>
            )}
            
            {/* سطر سوم - 2 کلاس (در صورت وجود) */}
            {classes.length > 4 && (
              <div className="w-full flex gap-[8px]">
                {classes.slice(4, 6).map((classItem, index) => (
                  <div key={index} className="flex-1">
                    <ClassItem title={classItem.title} time={classItem.time} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
