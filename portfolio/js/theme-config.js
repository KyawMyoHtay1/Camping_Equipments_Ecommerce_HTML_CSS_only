/* Must load AFTER https://cdn.tailwindcss.com — enables class-based dark: variants */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
};
