/**
 * Portfolio — Kyaw Myo Htay
 * Update PROJECT_LINKS with your real GitHub & demo URLs
 */
const PROJECT_LINKS = {
  portal: {
    github: "https://github.com/KyawMyoHtay1",
    demo: "#",
  },
  elitearticles: {
    github: "https://github.com/KyawMyoHtay1",
    demo: "#",
  },
  libraria: {
    github: "https://github.com/KyawMyoHtay1",
    demo: "#",
  },
  smcworld: {
    github: "https://github.com/KyawMyoHtay1",
    demo: "#",
  },
  camping: {
    github: "https://github.com/KyawMyoHtay1",
    demo: "#",
  },
};

const header = document.getElementById("header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const backTop = document.getElementById("backTop");
const yearEl = document.getElementById("year");

if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Mobile menu */
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Header scroll */
window.addEventListener("scroll", () => {
  if (header) header.classList.toggle("scrolled", window.scrollY > 40);
  if (backTop) backTop.classList.toggle("visible", window.scrollY > 500);
});

/* Active nav + scroll spy */
const sections = document.querySelectorAll("section[id]");

function setActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach((section) => {
    const id = section.getAttribute("id");
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) link.classList.add("active");
      });
    }
  });
}

window.addEventListener("scroll", setActiveNav);
setActiveNav();

/* Scroll reveal */
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealEls.forEach((el) => revealObserver.observe(el));

/* Project links */
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
    btn.href = "#";
    btn.classList.add("disabled");
    btn.addEventListener("click", (e) => e.preventDefault());
    btn.title = "Demo coming soon";
  }
});
