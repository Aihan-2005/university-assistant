import { FaClock } from "react-icons/fa";

interface ClassItemProps {
  title: string;
  time: string;
}

function ClassItem({ title, time }: ClassItemProps) {
  return (
    <div className="w-full h-[36px] rounded-[6px] border border-dashed border-[#E0E0E2] px-[8px] flex items-center justify-end">
      <div className="flex items-center gap-[6px]">
        {/* محتوای متنی */}
        <div className="flex flex-col gap-[4px] items-end">
          {/* عنوان کلاس */}
          <span className="text-[8px] font-bold leading-[100%] text-black text-right">
            {title}
          </span>
          {/* زمان */}
          <span className="text-[7px] font-normal leading-[100%] text-black text-right">
            {time}
          </span>
        </div>
        
        {/* آیکون ساعت */}
        <FaClock size={9} className="text-[#0099CC] flex-shrink-0" />
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

  const shouldShowInRows = classes.length <= 3;

  return (
    <div className="flex-1 h-[200px] rounded-[25px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] p-[18px]">
      <div className="w-full h-full flex flex-col gap-[12px]">
        {/* عنوان */}
        <h3 className="text-[11px] font-bold leading-[100%] text-black text-right">
          وضعیت کلاس‌های در حال برگزاری
        </h3>

        {/* لیست کلاس‌ها */}
        {shouldShowInRows ? (
          // حالت سطری (کمتر یا مساوی 3)
          <div className="w-full flex gap-[6px] justify-between">
            {classes.map((classItem, index) => (
              <div key={index} className="flex-1">
                <ClassItem title={classItem.title} time={classItem.time} />
              </div>
            ))}
          </div>
        ) : (
          // حالت ستونی (بیشتر از 3) - دو سطر سه تایی
          <div className="w-full flex flex-col gap-[6px]">
            {/* سطر اول - 3 کلاس */}
            <div className="w-full flex gap-[6px]">
              {classes.slice(0, 3).map((classItem, index) => (
                <div key={index} className="flex-1">
                  <ClassItem title={classItem.title} time={classItem.time} />
                </div>
              ))}
            </div>
            
            {/* سطر دوم - بقیه کلاس‌ها */}
            {classes.length > 3 && (
              <div className="w-full flex gap-[6px]">
                {classes.slice(3, 6).map((classItem, index) => (
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
