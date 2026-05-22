document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = PROJECTS[id];

  if (!p) {
    document.getElementById("project-root").innerHTML =
      '<p class="text-slate-400">Project not found. <a href="projects.html" class="text-indigo-400">Back to projects</a></p>';
    return;
  }

  document.title = `${p.title} | Kyaw Myo Htay`;

  const tech = p.tech.map((t) => `<span class="rounded-lg bg-white/10 px-2.5 py-1 text-xs text-slate-300">${t}</span>`).join("");
  const bullets = p.bullets.map((b) => `<li>${b}</li>`).join("");

  let actions = "";
  if (p.github) {
    actions += `<a href="#" data-project="${p.github}" class="project-github rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">GitHub</a>`;
  }
  if (p.demo) {
    actions += `<a href="#" data-project="${p.demo}" class="project-demo rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/5">Live Demo</a>`;
  }

  document.getElementById("project-root").innerHTML = `
    <a href="projects.html" class="inline-flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300">← All projects</a>
    <p class="mt-6 text-sm font-semibold uppercase tracking-widest text-indigo-400">${p.subtitle}</p>
    <h1 class="mt-2 text-3xl font-bold text-white sm:text-4xl">${p.title}</h1>
    <div class="mt-4 flex flex-wrap gap-3 text-sm text-slate-400">
      <span>${p.period}</span>
      <span>·</span>
      <span>${p.role}</span>
      <span>·</span>
      <span>${p.org}</span>
    </div>
    <div class="mt-6 flex flex-wrap gap-2">${tech}</div>
    <ul class="mt-8 list-inside list-disc space-y-3 text-slate-300 leading-relaxed">${bullets}</ul>
    <div class="mt-10 flex flex-wrap gap-3">${actions}</div>`;

  wireProjectLinks();
});
