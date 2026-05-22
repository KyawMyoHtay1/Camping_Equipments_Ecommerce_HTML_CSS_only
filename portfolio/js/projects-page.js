const PROJECT_GRADIENTS = {
  portal: "from-cv-navy to-indigo-900",
  elitearticles: "from-indigo-900 to-cv-navy",
  "mhike-android": "from-emerald-800 to-cv-navy",
  "mhike-rn": "from-teal-800 to-cv-navy",
  android: "from-sky-800 to-cv-navy",
  nature: "from-cyan-800 to-cv-navy",
  libraria: "from-teal-800 to-cv-navy",
  smcworld: "from-amber-800 to-cv-navy",
  camping: "from-orange-800 to-cv-navy",
  brightcare: "from-rose-800 to-cv-navy",
  infinity: "from-violet-800 to-cv-navy",
  wellcome: "from-red-900 to-cv-navy",
  geekup: "from-indigo-800 to-cv-navy",
  gotham: "from-slate-700 to-cv-navy",
  walmart: "from-blue-800 to-cv-navy",
  fitness: "from-green-800 to-cv-navy",
  mcdonalds: "from-yellow-800 to-cv-navy",
  fordley: "from-gray-700 to-cv-navy",
  connect4: "from-purple-800 to-cv-navy",
  computersystems: "from-cv-navy to-slate-800",
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
    const grad = PROJECT_GRADIENTS[id] || "from-cv-navy to-cv-navy/80";
    const img = PROJECT_IMAGES[id];
    const media = img ? `<img src="${img}" alt="" class="h-full w-full object-cover" onerror="this.remove()">` : "";
    return `
      <a href="project.html?id=${id}" class="card-lift group flex flex-col overflow-hidden rounded-2xl border-2 border-cv-beige bg-white hover:border-cv-navy">
        <div class="project-card-media bg-gradient-to-br ${grad}">
          ${media}
          <span class="absolute inset-0 flex items-center justify-center bg-cv-navy/25 px-3 text-center text-sm font-bold text-white">${p.title}</span>
        </div>
        <div class="flex flex-1 flex-col p-5">
          <p class="text-xs font-bold uppercase tracking-wider text-cv-navy">${p.subtitle}</p>
          <p class="mt-2 flex-1 text-sm text-gray-600 line-clamp-2">${p.bullets[0]}</p>
          <p class="mt-3 text-xs text-gray-500">${p.period}</p>
          <span class="mt-4 text-sm font-semibold text-cv-navy">View details →</span>
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
        b.classList.remove("bg-cv-navy", "text-white", "shadow-md");
        b.classList.add("border-2", "border-cv-beige", "bg-white", "text-gray-700");
      });
      btn.classList.add("bg-cv-navy", "text-white", "shadow-md");
      btn.classList.remove("border-2", "border-cv-beige", "bg-white", "text-gray-700");

      const filter = btn.dataset.filter;
      const ids =
        filter === "all"
          ? Object.keys(PROJECTS)
          : PROJECT_CATEGORIES.find((c) => c.id === filter)?.ids ?? Object.keys(PROJECTS);
      renderGrid(ids);
    });
  });
});
