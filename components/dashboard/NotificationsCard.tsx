import { FaBell, FaEnvelope, FaCalendarCheck } from "react-icons/fa";

export default function NotificationsCard() {
  const notifications = [
    { 
      icon: FaEnvelope, 
      text: "درخواج جمع‌آوری رایگان 4 تا پست زیست، ارسال شد.",
      bgColor: "bg-blue-50"
    },
    { 
      icon: FaBell, 
      text: "کلاس زبان تخصصی از ساعت 10 الی 11:30 برگزار می‌شود.",
      bgColor: "bg-blue-50"
    },
    { 
      icon: FaCalendarCheck, 
      text: "به آقای دکتر رحیمی پور از صفحه معارف است.",
      bgColor: "bg-blue-50"
    },
  ];

  return (
    <div className="flex-1 h-[200px] rounded-[30px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] p-[18px] flex flex-col gap-[12px]">
      {/* عنوان */}
      <h2 className="text-[12px] font-bold text-black text-right">اعلانات</h2>

      {/* لیست اعلانات */}
      <div className="flex-1 flex flex-col gap-[8px] overflow-hidden">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`w-full p-[10px] rounded-[10px] ${notification.bgColor} flex items-start gap-[8px]`}
          >
            {/* آیکون */}
            <div className="w-[20px] h-[20px] rounded-full bg-[#0099CC] flex items-center justify-center flex-shrink-0">
              <notification.icon size={10} className="text-white" />
            </div>

            {/* متن */}
            <p className="text-[9px] font-normal text-black leading-[140%] text-right flex-1">
              {notification.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
