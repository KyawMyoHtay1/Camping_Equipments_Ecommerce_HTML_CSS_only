(function () {
  const stored = localStorage.getItem("portfolio-theme");
  const theme = stored === "light" || stored === "dark" ? stored : "dark";
  document.documentElement.classList.toggle("dark", theme === "dark");
})();
