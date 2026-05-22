document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = PROJECTS[id];
  const root = document.getElementById("project-root");

  const gradients = {
    portal: "from-indigo-900 to-violet-900",
    elitearticles: "from-violet-900 to-indigo-900",
    "mhike-android": "from-emerald-900 to-teal-900",
    "mhike-rn": "from-teal-900 to-cyan-900",
    libraria: "from-teal-900 to-emerald-900",
    smcworld: "from-amber-900 to-orange-900",
    camping: "from-orange-900 to-amber-900",
  };
  const images = {
    portal: "images/portal.jpg",
    elitearticles: "images/elitearticles.jpg",
    "mhike-android": "images/mhike.jpg",
    libraria: "images/libraria.jpg",
    smcworld: "images/smcworld.jpg",
    camping: "images/camping.jpg",
  };

  if (!p || !root) {
    if (root) {
      root.innerHTML =
        '<p class="text-slate-400">Project not found. <a href="projects.html" class="text-indigo-400 hover:underline">Back to projects</a></p>';
    }
    return;
  }

  document.title = `${p.title} | Kyaw Myo Htay`;
  const grad = gradients[id] || "from-indigo-900 to-slate-800";
  const img = images[id];
  const bannerImg = img ? `<img src="${img}" alt="" class="absolute inset-0 h-full w-full object-cover opacity-30" onerror="this.remove()">` : "";

  const tech = p.tech.map((t) => `<span class="rounded-lg bg-indigo-500/15 px-2.5 py-1 text-xs font-medium text-indigo-300">${t}</span>`).join("");
  const bullets = p.bullets.map((b) => `<li class="text-slate-300">${b}</li>`).join("");

  let actions = "";
  if (p.github) {
    actions += `<a href="#" data-project="${p.github}" class="project-github rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">GitHub</a>`;
  }
  if (p.demo) {
    actions += `<a href="#" data-project="${p.demo}" class="project-demo rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-white/5">Live Demo</a>`;
  }

  root.innerHTML = `
    <a href="projects.html" class="text-sm font-medium text-indigo-400 hover:text-indigo-300">← All projects</a>
    <div class="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br ${grad} px-8 py-12 shadow-xl">
      ${bannerImg}
      <div class="relative">
        <p class="text-xs font-semibold uppercase tracking-widest text-indigo-200">${p.subtitle}</p>
        <h1 class="mt-2 text-3xl font-bold text-white sm:text-4xl">${p.title}</h1>
        <p class="mt-3 text-sm text-slate-200">${p.period} · ${p.role}</p>
        <p class="mt-1 text-sm text-slate-300">${p.org}</p>
      </div>
    </div>
    <div class="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-6 sm:p-8">
      <div class="flex flex-wrap gap-2">${tech}</div>
      <ul class="mt-8 list-inside list-disc space-y-3 leading-relaxed">${bullets}</ul>
      ${actions ? `<div class="mt-10 flex flex-wrap gap-3">${actions}</div>` : ""}
    </div>`;

  if (window.wireProjectLinks) window.wireProjectLinks();
});
