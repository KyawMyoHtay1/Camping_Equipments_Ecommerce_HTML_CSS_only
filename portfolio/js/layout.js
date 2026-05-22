(function () {
  const script = document.currentScript;
  const base = script?.dataset?.base ?? "";
  const page = document.body.dataset.page ?? "";

  const links = [
    { id: "home", href: base + "index.html", label: "Home" },
    { id: "about", href: base + "about.html", label: "About" },
    { id: "skills", href: base + "skills.html", label: "Skills" },
    { id: "projects", href: base + "projects.html", label: "Projects" },
    { id: "education", href: base + "education.html", label: "Education" },
    { id: "contact", href: base + "contact.html", label: "Contact", cta: true },
  ];

  const navItems = links
    .map((l) => {
      const active = page === l.id;
      const cls = l.cta
        ? "rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
        : active
          ? "rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white"
          : "rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white";
      return `<li><a href="${l.href}" class="${cls}">${l.label}</a></li>`;
    })
    .join("");

  const mobileItems = links
    .map((l) => {
      const active = page === l.id;
      const cls = active
        ? "block rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white"
        : "block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5";
      return `<li><a href="${l.href}" class="${cls}">${l.label}</a></li>`;
    })
    .join("");

  const header = `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="${base}index.html" class="text-lg font-bold text-white">Kyaw Myo <span class="text-indigo-400">Htay</span></a>
        <button id="navToggle" type="button" class="rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden" aria-label="Menu">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <ul id="navMenu" class="hidden gap-1 lg:flex">${navItems}</ul>
      </nav>
      <ul id="navMobile" class="hidden border-t border-white/10 px-4 py-3 lg:hidden">${mobileItems}</ul>
    </header>`;

  const footer = `
    <footer class="border-t border-white/10 bg-slate-950 py-10">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p class="text-sm text-slate-500">&copy; <span id="year"></span> Kyaw Myo Htay</p>
        <div class="flex flex-wrap justify-center gap-4 text-sm">
          ${links.filter((l) => !l.cta).map((l) => `<a href="${l.href}" class="text-slate-400 hover:text-indigo-400">${l.label}</a>`).join("")}
        </div>
        <a href="${base}index.html" class="text-sm font-medium text-indigo-400 hover:text-indigo-300">↑ Home</a>
      </div>
    </footer>`;

  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = header;
  if (footerEl) footerEl.innerHTML = footer;

  document.getElementById("year").textContent = new Date().getFullYear();

  const toggle = document.getElementById("navToggle");
  const mobile = document.getElementById("navMobile");
  toggle?.addEventListener("click", () => mobile?.classList.toggle("hidden"));
  mobile?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => mobile.classList.add("hidden"))
  );
})();
