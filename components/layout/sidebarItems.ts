export type SidebarLink = {
  title: string;
  href: string;
  icon: string;
};

export const servicesItems: SidebarLink[] = [
  { title: "داشبورد", href: "/dashboard", icon: "/icons/dashboard.svg" },
  { title: "مدیریت اساتید", href: "/professors", icon: "/icons/professors.svg" },
  { title: "مدیریت دروس", href: "/courses", icon: "/icons/courses.svg" },
  { title: "مدیریت کلاس‌ها", href: "/classrooms", icon: "/icons/classrooms.svg" },
  { title: "برنامه هفتگی", href: "/schedule", icon: "/icons/schedule.svg" },
  { title: "مدیریت محدودیت‌های حضور", href: "/restrictions", icon: "/icons/restrictions.svg" },
];

export const accountItems: SidebarLink[] = [
  { title: "حساب من", href: "/account", icon: "/icons/account.svg" },
  { title: "اعلانات", href: "/notifications", icon: "/icons/notifications.svg" },
];

export const getPageTitle = (pathname: string) => {
  const allItems = [...servicesItems, ...accountItems];
  const item = allItems.find((i) => i.href === pathname);
  return item ? item.title : "داشبورد";
};
