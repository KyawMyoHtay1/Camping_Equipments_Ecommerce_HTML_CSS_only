// Project links — UPDATE these URLs when you have GitHub repos and live demos
const PROJECT_LINKS = {
  libraria: {
    github: "https://github.com/KyawMyoHtay1",
    demo: "#",
  },
  smcworld: {
    github: "https://github.com/KyawMyoHtay1",
    demo: "#",
  },
  portal: {
    github: "https://github.com/KyawMyoHtay1",
    demo: "#",
  },
  camping: {
    github: "https://github.com/KyawMyoHtay1",
    demo: "#",
  },
  elitearticles: {
    github: "https://github.com/KyawMyoHtay1",
    demo: "#",
  },
};

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Apply project links from config
document.querySelectorAll(".project-github").forEach((btn) => {
  const key = btn.dataset.project;
  const url = PROJECT_LINKS[key]?.github;
  if (url) {
    btn.href = url;
    btn.target = "_blank";
    btn.rel = "noopener";
  }
});

document.querySelectorAll(".project-demo").forEach((btn) => {
  const key = btn.dataset.project;
  const url = PROJECT_LINKS[key]?.demo;
  if (url && url !== "#") {
    btn.href = url;
    btn.target = "_blank";
    btn.rel = "noopener";
  } else {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
    });
    btn.style.opacity = "0.6";
    btn.title = "Add live demo URL in js/main.js";
  }
});
