import { FaBell, FaEnvelope, FaCalendarCheck } from "react-icons/fa";

export default function NotificationsCard() {
  const notifications = [
    { 
      icon: FaEnvelope, 
      text: "درخواست جمع‌آوری رایگان 4 تا پست زیست، ارسال شد.",
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
    <div className="
      flex-1 
      h-[220px]
      rounded-[25px]
      bg-white
      shadow-[0px_0px_11.2px_rgba(0,0,0,0.1)]
      px-[24px]
      py-[20px]
    ">
      <div className="w-full h-full flex flex-col">

        {/* عنوان */}
        <h2 className="text-[12px] font-bold text-black text-right">
          اعلانات
        </h2>

        {/* لیست اعلانات */}
        <div className="flex-1 flex flex-col gap-[10px] mt-[12px] overflow-hidden">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className={`
                w-full 
                min-h-[48px]
                rounded-[12px] 
                ${notification.bgColor} 
                flex items-center 
                px-[14px] 
                py-[8px]
                gap-[12px]
              `}
            >
              {/* آیکون → وسط‌تر و فاصله مناسب از متن */}
              <div className="
                w-[26px]
                h-[26px]
                rounded-full
                bg-[#0099CC]
                flex items-center justify-center 
                flex-shrink-0
              ">
                <notification.icon size={12} className="text-white" />
              </div>

              {/* متن → راست‌چین اما فاصله‌دار */}
              <p className="
                text-[12px] 
                font-normal 
                text-black 
                leading-[150%] 
                text-right 
                flex-1 
              ">
                {notification.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
