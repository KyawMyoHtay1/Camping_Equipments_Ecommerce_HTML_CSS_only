const PROJECT_LINKS = {
  portal: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  elitearticles: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  libraria: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
  smcworld: { github: "https://github.com/KyawMyoHtay1", demo: "#" },
};

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Mobile sidebar */
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.querySelector(".overlay");

function closeMenu() {
  sidebar?.classList.remove("open");
  overlay?.classList.remove("show");
  menuBtn?.setAttribute("aria-expanded", "false");
}

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    overlay?.classList.toggle("show", open);
    menuBtn.setAttribute("aria-expanded", open);
  });
  overlay?.addEventListener("click", closeMenu);
}

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
    btn.classList.add("disabled");
    btn.addEventListener("click", (e) => e.preventDefault());
  }
});
