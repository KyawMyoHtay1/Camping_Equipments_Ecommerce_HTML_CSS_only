(function () {
  const stored = localStorage.getItem("portfolio-theme");
  const theme = stored === "light" || stored === "dark" ? stored : "dark";
  const isDark = theme === "dark";
  const root = document.documentElement;
  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
})();
