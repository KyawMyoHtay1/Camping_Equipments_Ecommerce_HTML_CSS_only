window.PortfolioTheme = {
  get() {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  },
  set(theme) {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    document.querySelectorAll("[data-theme-icon]").forEach((el) => {
      el.classList.toggle("hidden", el.dataset.themeIcon !== (isDark ? "moon" : "sun"));
    });
    document.querySelectorAll("[data-theme-label]").forEach((el) => {
      el.textContent = isDark ? "Light mode" : "Dark mode";
    });
  },
  toggle() {
    this.set(this.get() === "dark" ? "light" : "dark");
  },
  bindToggle(btn) {
    if (!btn) return;
    btn.addEventListener("click", () => this.toggle());
  },
};
