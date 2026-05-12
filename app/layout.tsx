import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "دانش برد",
  description: "سیستم مدیریت دانش",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-inter antialiased">
        {/* کانتینر اصلی صفحه */}
        <div className="w-[95vw] h-[95vh] max-w-[1800px] max-h-[1000px] bg-[#F3F3F3] rounded-[30px] overflow-hidden flex items-start justify-start p-[30px] gap-[25px]">
          {/* سایدبار */}
          <Sidebar />
          
          {/* بخش محتوا - هدر و main */}
          <div className="flex-1 flex flex-col gap-[25px] h-full min-w-0 max-w-[1260px]">
            {/* هدر */}
            <Header />
            
            {/* محتوای اصلی */}
            <main className="flex-1 bg-white rounded-[20px] p-[30px] overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
