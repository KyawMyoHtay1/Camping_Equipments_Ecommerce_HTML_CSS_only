const PROJECT_GRADIENTS = {
  portal: "from-indigo-300 to-indigo-500 dark:from-indigo-900/60 dark:to-slate-900",
  elitearticles: "from-violet-300 to-violet-500 dark:from-violet-900/60 dark:to-slate-900",
  "mhike-android": "from-emerald-300 to-emerald-600 dark:from-emerald-900/60 dark:to-slate-900",
  "mhike-rn": "from-teal-300 to-teal-600 dark:from-teal-900/60 dark:to-slate-900",
  android: "from-sky-300 to-sky-600 dark:from-sky-900/60 dark:to-slate-900",
  nature: "from-cyan-300 to-cyan-600 dark:from-cyan-900/60 dark:to-slate-900",
  libraria: "from-teal-300 to-teal-600 dark:from-teal-900/60 dark:to-slate-900",
  smcworld: "from-amber-300 to-amber-600 dark:from-amber-900/60 dark:to-slate-900",
  camping: "from-orange-300 to-orange-600 dark:from-orange-900/60 dark:to-slate-900",
  brightcare: "from-rose-300 to-rose-600 dark:from-rose-900/60 dark:to-slate-900",
  infinity: "from-violet-300 to-violet-600 dark:from-violet-900/60 dark:to-slate-900",
  wellcome: "from-red-300 to-red-700 dark:from-red-900/60 dark:to-slate-900",
  geekup: "from-indigo-300 to-indigo-600 dark:from-indigo-900/60 dark:to-slate-900",
  gotham: "from-slate-400 to-slate-600 dark:from-slate-700/60 dark:to-slate-900",
  walmart: "from-blue-300 to-blue-600 dark:from-blue-900/60 dark:to-slate-900",
  fitness: "from-green-300 to-green-600 dark:from-green-900/60 dark:to-slate-900",
  mcdonalds: "from-yellow-300 to-yellow-600 dark:from-yellow-900/60 dark:to-slate-900",
  fordley: "from-gray-400 to-gray-600 dark:from-gray-700/60 dark:to-slate-900",
  connect4: "from-purple-300 to-purple-600 dark:from-purple-900/60 dark:to-slate-900",
  computersystems: "from-slate-400 to-slate-700 dark:from-slate-800/60 dark:to-slate-900",
};

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("projects-grid");
  if (!grid || !window.THEME) return;
  const T = window.THEME;

  const renderCard = (id) => {
    const p = PROJECTS[id];
    if (!p) return "";
    const grad = PROJECT_GRADIENTS[id] || "from-indigo-300 to-indigo-500 dark:from-indigo-900/60 dark:to-slate-900";
    const img = window.PROJECT_IMAGES?.[id];
    const media = img
      ? `<img src="${img}" alt="" class="h-full w-full object-cover">`
      : "";
    const overlay = img
      ? `<div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-3 pb-3 pt-8"><p class="text-sm font-bold leading-snug text-white line-clamp-2">${p.title}</p></div>`
      : `<span class="absolute inset-0 flex items-center justify-center bg-white/20 px-3 text-center text-sm font-bold text-gray-900 dark:bg-slate-950/30 dark:text-white">${p.title}</span>`;
    return `
      <a href="project.html?id=${id}" class="${T.card}">
        <div class="project-card-media bg-gradient-to-br ${grad}">
          ${media}
          ${overlay}
        </div>
        <div class="${T.cardInner}">
          <p class="${T.label}">${p.subtitle}</p>
          <p class="mt-2 flex-1 ${T.textMuted} line-clamp-2">${p.bullets[0]}</p>
          <p class="mt-3 ${T.textSmall}">${p.period}</p>
          <span class="mt-4 ${T.link}">View details →</span>
        </div>
      </a>`;
  };

  const renderGrid = (ids) => {
    grid.innerHTML = ids.map(renderCard).join("");
  };

  renderGrid(Object.keys(PROJECTS));

  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((b) => {
        b.className = T.btnFilter;
      });
      btn.className = T.btnFilterActive;

      const filter = btn.dataset.filter;
      const ids =
        filter === "all"
          ? Object.keys(PROJECTS)
          : PROJECT_CATEGORIES.find((c) => c.id === filter)?.ids ?? Object.keys(PROJECTS);
      renderGrid(ids);
    });
  });
});
