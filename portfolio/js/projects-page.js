document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const renderCard = (id) => {
    const p = PROJECTS[id];
    if (!p) return "";
    const tech = p.tech.slice(0, 4).map((t) => `<span class="text-xs text-slate-500">${t}</span>`).join(" · ");
    return `
      <a href="project.html?id=${id}" class="group flex flex-col rounded-2xl border border-white/10 bg-slate-800/50 p-6 transition hover:border-indigo-500/40 hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-500/10">
        <p class="text-xs font-medium uppercase tracking-wider text-indigo-400">${p.subtitle}</p>
        <h3 class="mt-2 text-lg font-bold text-white group-hover:text-indigo-300">${p.title}</h3>
        <p class="mt-2 flex-1 text-sm text-slate-400 line-clamp-2">${p.bullets[0]}</p>
        <p class="mt-3 text-xs text-slate-500">${p.period}</p>
        <p class="mt-2 text-xs text-slate-600">${tech}</p>
        <span class="mt-4 text-sm font-medium text-indigo-400">View details →</span>
      </a>`;
  };

  grid.innerHTML = Object.keys(PROJECTS).map(renderCard).join("");

  const analysisEl = document.getElementById("analysis-list");
  if (analysisEl) {
    analysisEl.innerHTML = ANALYSIS_PROJECTS.map(
      (a) => `
      <div class="rounded-xl border border-white/10 bg-slate-800/40 p-5">
        <h3 class="font-semibold text-white">${a.title}</h3>
        <p class="mt-1 text-xs text-indigo-400">${a.period}</p>
        <p class="mt-2 text-sm text-slate-400">${a.desc}</p>
      </div>`
    ).join("");
  }

  const otherEl = document.getElementById("other-list");
  if (otherEl) {
    otherEl.innerHTML = OTHER_PROJECTS.map(
      (o) => `
      <div class="rounded-lg border border-white/10 bg-slate-800/30 px-4 py-3">
        <p class="font-medium text-slate-200">${o.title}</p>
        <p class="mt-1 text-sm text-slate-500">${o.desc}</p>
      </div>`
    ).join("");
  }

  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((b) => {
        b.classList.remove("bg-indigo-600", "text-white");
        b.classList.add("text-slate-400", "hover:bg-white/5");
      });
      btn.classList.add("bg-indigo-600", "text-white");
      btn.classList.remove("text-slate-400");

      const filter = btn.dataset.filter;
      const ids =
        filter === "all"
          ? Object.keys(PROJECTS)
          : PROJECT_CATEGORIES.find((c) => c.id === filter)?.ids ?? Object.keys(PROJECTS);
      grid.innerHTML = ids.map(renderCard).join("");
    });
  });
});
