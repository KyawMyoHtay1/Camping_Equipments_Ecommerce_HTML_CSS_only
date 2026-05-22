const PROJECT_LINKS = {
  portal: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  elitearticles: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  libraria: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  smcworld: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  camping: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
};

document.getElementById("year").textContent = new Date().getFullYear();

/* Mobile nav */
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

navToggle?.addEventListener("click", () => {
  navMobile?.classList.toggle("hidden");
});

navMobile?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => navMobile.classList.add("hidden"));
});

/* Project links */
document.querySelectorAll(".project-github").forEach((btn) => {
  const url = PROJECT_LINKS[btn.dataset.project]?.github;
  if (url) {
    btn.href = url;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  }
});

document.querySelectorAll(".project-demo").forEach((btn) => {
  const url = PROJECT_LINKS[btn.dataset.project]?.demo;
  if (url && url !== "#") {
    btn.href = url;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  } else {
    btn.addEventListener("click", (e) => e.preventDefault());
    btn.classList.add("opacity-50", "cursor-not-allowed");
    btn.title = "Demo coming soon";
  }
});
