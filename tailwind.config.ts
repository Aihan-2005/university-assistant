/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0099CC",         
        sidebarBg: "#FFFFFF",
        activeBg: "#0099CC",
        inactiveText: "#000000",
        divider: "#E0E0E2",
      },
      spacing: {
        sidebar: "380px",
        sidebarItem: "340px",
        sidebarItemHeight: "60px",
      },
      borderRadius: {
        sidebar: "20px",
        sidebarItem: "16px",
      },
    },
  },
  plugins: [],
};
