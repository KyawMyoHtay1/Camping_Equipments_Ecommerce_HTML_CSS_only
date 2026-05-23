(function () {
  const script = document.currentScript;
  const base = script?.dataset?.base ?? "";
  const page = document.body.dataset.page ?? "";

  const links = [
    { id: "home", href: base + "index.html", label: "Home" },
    { id: "about", href: base + "about.html", label: "About" },
    { id: "skills", href: base + "skills.html", label: "Skills" },
    { id: "projects", href: base + "projects.html", label: "Projects" },
    { id: "cv", href: base + "cv.html", label: "CV" },
    { id: "education", href: base + "education.html", label: "Education" },
    { id: "contact", href: base + "contact.html", label: "Contact" },
  ];

  const navLink = (l, mobile) => {
    const active = page === l.id;
    const baseCls = mobile
      ? "block rounded-lg px-3 py-2 text-sm"
      : "rounded-lg px-3 py-2 text-sm";
    const cls = active
      ? `${baseCls} bg-indigo-100 font-medium text-indigo-700 dark:bg-white/10 dark:text-white`
      : `${baseCls} text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white`;
    return mobile
      ? `<li><a href="${l.href}" class="${cls}">${l.label}</a></li>`
      : `<li><a href="${l.href}" class="${cls}">${l.label}</a></li>`;
  };

  const themeBtn = `
    <button id="themeToggle" type="button" class="inline-flex shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10" aria-label="Toggle theme" title="Toggle light/dark mode">
      <svg data-theme-icon="sun" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
      <svg data-theme-icon="moon" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
    </button>`;

  const header = `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85">
      <nav class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="${base}index.html" class="shrink-0 text-lg font-bold text-gray-900 dark:text-white">Kyaw Myo <span class="text-indigo-600 dark:text-indigo-400">Htay</span></a>
        <div class="flex items-center gap-2 sm:gap-3">
          <ul id="navMenu" class="hidden items-center gap-1 lg:flex">${links.map((l) => navLink(l, false)).join("")}</ul>
          ${themeBtn}
          <button id="navToggle" type="button" class="inline-flex shrink-0 rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden dark:text-slate-300 dark:hover:bg-white/10" aria-label="Menu">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </nav>
      <ul id="navMobile" class="hidden border-t border-gray-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950 lg:hidden">${links.map((l) => navLink(l, true)).join("")}</ul>
    </header>`;

  const footer = `
    <footer class="border-t border-gray-200 bg-white py-10 dark:border-white/10 dark:bg-slate-950">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p class="text-sm text-gray-500 dark:text-slate-500">&copy; <span id="year"></span> Kyaw Myo Htay</p>
        <div class="flex flex-wrap justify-center gap-4 text-sm">
          ${links.map((l) => `<a href="${l.href}" class="text-gray-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">${l.label}</a>`).join("")}
        </div>
        <a href="${base}index.html" class="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">↑ Home</a>
      </div>
    </footer>`;

  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = header;
  if (footerEl) footerEl.innerHTML = footer;

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById("navToggle");
  const navMobile = document.getElementById("navMobile");
  navToggle?.addEventListener("click", () => navMobile?.classList.toggle("hidden"));
  navMobile?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navMobile.classList.add("hidden"))
  );
})();
