const PROJECT_LINKS = {
  portal: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  elitearticles: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  "mhike-android": { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  "mhike-rn": { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  libraria: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  smcworld: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  camping: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
};

function wireProjectLinks() {
  document.querySelectorAll(".project-github").forEach((btn) => {
    const key = btn.dataset.project;
    const url = PROJECT_LINKS[key]?.github;
    if (url) {
      btn.href = url;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
    }
  });
  document.querySelectorAll(".project-demo").forEach((btn) => {
    const key = btn.dataset.project;
    const url = PROJECT_LINKS[key]?.demo;
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
}

document.addEventListener("DOMContentLoaded", wireProjectLinks);
window.wireProjectLinks = wireProjectLinks;
