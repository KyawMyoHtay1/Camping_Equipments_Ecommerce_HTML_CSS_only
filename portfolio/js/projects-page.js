const PROJECT_GRADIENTS = {
  portal: "from-indigo-900/60 to-slate-900",
  elitearticles: "from-violet-900/60 to-slate-900",
  "mhike-android": "from-emerald-900/60 to-slate-900",
  "mhike-rn": "from-teal-900/60 to-slate-900",
  android: "from-sky-900/60 to-slate-900",
  nature: "from-cyan-900/60 to-slate-900",
  libraria: "from-teal-900/60 to-slate-900",
  smcworld: "from-amber-900/60 to-slate-900",
  camping: "from-orange-900/60 to-slate-900",
  brightcare: "from-rose-900/60 to-slate-900",
  infinity: "from-violet-900/60 to-slate-900",
  wellcome: "from-red-900/60 to-slate-900",
  geekup: "from-indigo-900/60 to-slate-900",
  gotham: "from-slate-700/60 to-slate-900",
  walmart: "from-blue-900/60 to-slate-900",
  fitness: "from-green-900/60 to-slate-900",
  mcdonalds: "from-yellow-900/60 to-slate-900",
  fordley: "from-gray-700/60 to-slate-900",
  connect4: "from-purple-900/60 to-slate-900",
  computersystems: "from-slate-800/60 to-slate-900",
};

const PROJECT_IMAGES = {
  portal: "images/portal.jpg",
  elitearticles: "images/elitearticles.jpg",
  "mhike-android": "images/mhike.jpg",
  libraria: "images/libraria.jpg",
  smcworld: "images/smcworld.jpg",
  camping: "images/camping.jpg",
};

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const renderCard = (id) => {
    const p = PROJECTS[id];
    if (!p) return "";
    const grad = PROJECT_GRADIENTS[id] || "from-indigo-900/60 to-slate-900";
    const img = PROJECT_IMAGES[id];
    const media = img ? `<img src="${img}" alt="" class="h-full w-full object-cover" onerror="this.remove()">` : "";
    return `
      <a href="project.html?id=${id}" class="card-lift group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-800/40 transition hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10">
        <div class="project-card-media bg-gradient-to-br ${grad}">
          ${media}
          <span class="absolute inset-0 flex items-center justify-center bg-slate-950/30 px-3 text-center text-sm font-bold text-white">${p.title}</span>
        </div>
        <div class="flex flex-1 flex-col p-5">
          <p class="text-xs font-bold uppercase tracking-wider text-indigo-400">${p.subtitle}</p>
          <p class="mt-2 flex-1 text-sm text-slate-400 line-clamp-2">${p.bullets[0]}</p>
          <p class="mt-3 text-xs text-slate-500">${p.period}</p>
          <span class="mt-4 text-sm font-semibold text-indigo-400">View details →</span>
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
        b.classList.remove("bg-indigo-600", "text-white");
        b.classList.add("border", "border-white/20", "text-slate-300");
      });
      btn.classList.add("bg-indigo-600", "text-white");
      btn.classList.remove("border", "border-white/20", "text-slate-300");

      const filter = btn.dataset.filter;
      const ids =
        filter === "all"
          ? Object.keys(PROJECTS)
          : PROJECT_CATEGORIES.find((c) => c.id === filter)?.ids ?? Object.keys(PROJECTS);
      renderGrid(ids);
    });
  });
});
