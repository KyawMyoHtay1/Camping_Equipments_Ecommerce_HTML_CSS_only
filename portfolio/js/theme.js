window.PortfolioTheme = {
  get() {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  },
  set(theme) {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    document.querySelectorAll("[data-theme-label]").forEach((el) => {
      el.textContent = isDark ? "Light mode" : "Dark mode";
    });
  },
  toggle() {
    this.set(this.get() === "dark" ? "light" : "dark");
  },
  bindToggle(btn) {
    if (!btn || btn.dataset.themeBound) return;
    btn.dataset.themeBound = "1";
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggle();
    });
  },
  init() {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "light" || stored === "dark") {
      this.set(stored);
    } else {
      document.documentElement.style.colorScheme = this.get();
    }
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("#themeToggle");
      if (btn) {
        e.preventDefault();
        this.toggle();
      }
    });
  },
};

PortfolioTheme.init();
