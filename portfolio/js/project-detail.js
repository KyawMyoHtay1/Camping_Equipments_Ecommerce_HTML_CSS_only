document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = PROJECTS[id];
  const root = document.getElementById("project-root");

  const gradients = {
    portal: "from-cv-navy to-indigo-900",
    elitearticles: "from-indigo-900 to-cv-navy",
    "mhike-android": "from-emerald-800 to-cv-navy",
    "mhike-rn": "from-teal-800 to-cv-navy",
    android: "from-sky-800 to-cv-navy",
    nature: "from-cyan-800 to-cv-navy",
    libraria: "from-teal-800 to-cv-navy",
    smcworld: "from-amber-800 to-cv-navy",
    camping: "from-orange-800 to-cv-navy",
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
        '<p class="text-gray-600">Project not found. <a href="projects.html" class="font-semibold text-cv-navy hover:underline">Back to projects</a></p>';
    }
    return;
  }

  document.title = `${p.title} | Kyaw Myo Htay`;
  const grad = gradients[id] || "from-cv-navy to-slate-800";
  const img = images[id];
  const bannerImg = img ? `<img src="${img}" alt="" class="absolute inset-0 h-full w-full object-cover opacity-35" onerror="this.remove()">` : "";

  const tech = p.tech.map((t) => `<span class="rounded-md border border-cv-beige bg-cv-beige/40 px-2.5 py-1 text-xs font-medium text-gray-700">${t}</span>`).join("");
  const bullets = p.bullets.map((b) => `<li class="text-gray-700">${b}</li>`).join("");

  let actions = "";
  if (p.github) {
    actions += `<a href="#" data-project="${p.github}" class="project-github rounded-xl bg-cv-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-cv-navy/90">GitHub</a>`;
  }
  if (p.demo) {
    actions += `<a href="#" data-project="${p.demo}" class="project-demo rounded-xl border-2 border-cv-navy px-5 py-2.5 text-sm font-semibold text-cv-navy hover:bg-cv-beige/50">Live Demo</a>`;
  }

  root.innerHTML = `
    <a href="projects.html" class="text-sm font-semibold text-cv-navy hover:underline">← All projects</a>
    <div class="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br ${grad} px-8 py-12 text-white shadow-xl">
      ${bannerImg}
      <div class="relative">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-white/80">${p.subtitle}</p>
        <h1 class="mt-2 text-2xl font-bold sm:text-4xl">${p.title}</h1>
        <p class="mt-3 text-sm text-white/85">${p.period}</p>
        <p class="mt-1 text-sm text-white/75">${p.role} · ${p.org}</p>
      </div>
    </div>
    <div class="mt-8 rounded-2xl border-2 border-cv-beige bg-white p-6 sm:p-8">
      <div class="mt-2 flex flex-wrap gap-2">${tech}</div>
      <ul class="mt-8 list-inside list-disc space-y-3 leading-relaxed">${bullets}</ul>
      ${actions ? `<div class="mt-10 flex flex-wrap gap-3">${actions}</div>` : ""}
    </div>`;

  if (window.wireProjectLinks) window.wireProjectLinks();
});
