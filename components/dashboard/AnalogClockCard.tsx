"use client";

import { useState, useEffect } from "react";

export default function AnalogClockCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondAngle = (seconds * 6) - 90;
  const minuteAngle = (minutes * 6 + seconds * 0.1) - 90;
  const hourAngle = (hours * 30 + minutes * 0.5) - 90;

  return (
    <div className="w-full h-[225px] rounded-[30px] bg-white shadow-[0px_0px_11.2px_0px_rgba(0,0,0,0.1)] p-[15px] flex items-center justify-center">
      <div className="relative w-[160px] h-[160px]">
        <svg className="w-full h-full" viewBox="0 0 160 160">
          {/* دایره اصلی */}
          <circle
            cx="80"
            cy="80"
            r="75"
            fill="none"
            stroke="#E0E0E2"
            strokeWidth="2"
          />

          {/* نقاط ساعت‌ها */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x = 80 + 65 * Math.cos(angle);
            const y = 80 + 65 * Math.sin(angle);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2.5"
                fill="#0099CC"
              />
            );
          })}

          {/* عقربه ساعت */}
          <line
            x1="80"
            y1="80"
            x2={80 + 33 * Math.cos(hourAngle * Math.PI / 180)}
            y2={80 + 33 * Math.sin(hourAngle * Math.PI / 180)}
            stroke="#0099CC"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* عقربه دقیقه */}
          <line
            x1="80"
            y1="80"
            x2={80 + 52 * Math.cos(minuteAngle * Math.PI / 180)}
            y2={80 + 52 * Math.sin(minuteAngle * Math.PI / 180)}
            stroke="#0099CC"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* عقربه ثانیه */}
          <line
            x1="80"
            y1="80"
            x2={80 + 60 * Math.cos(secondAngle * Math.PI / 180)}
            y2={80 + 60 * Math.sin(secondAngle * Math.PI / 180)}
            stroke="#E53935"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* نقطه مرکزی */}
          <circle cx="80" cy="80" r="4" fill="#0099CC" />
        </svg>
      </div>
    </div>
  );
}
