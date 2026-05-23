/** GitHub & demo URLs — keys match projects-data.js `github` / `demo` / githubRepos[].key */
const PROJECT_LINKS = {
  portal: {
    github: "https://github.com/KyawMyoHtay1/academic-portal",
    demo: "https://respectful-unity-production-e765.up.railway.app/",
  },
  elitearticles: {
    github: "https://github.com/Group-Project-C2/comp1640-magazine-system",
    demo: null,
  },
  "mhike-android": {
    github: "https://github.com/KyawMyoHtay1/mhike_android_kotlin",
    demo: null,
  },
  "mhike-rn": {
    github: "https://github.com/KyawMyoHtay1/mhike_react_native",
    demo: null,
  },
  libraria: {
    github: "https://github.com/KyawMyoHtay1/Library_Project_With_PHP-Bootstrap-Database",
    demo: null,
  },
  smcworld: {
    github: "https://github.com/KyawMyoHtay1/Social-Media_Campaign",
    demo: "https://social-mediacampaign-production.up.railway.app/",
  },
  camping: {
    github: "https://github.com/KyawMyoHtay1/Camping_Equipments_Ecommerce_HTML_CSS_only",
    demo: null,
  },
  nature: {
    github: "https://github.com/KyawMyoHtay1/nature_explore_Axure_RP11",
    demo: null,
  },
  infinity: {
    github: "https://github.com/KyawMyoHtay1/Infinity_Games_ISA",
    demo: null,
  },
  fitness: {
    github: "https://github.com/KyawMyoHtay1/Fitness_Tracker_C-",
    demo: null,
  },
  "android-contacts": {
    github: "https://github.com/KyawMyoHtay1/contact_database_Android_Kotlin",
    demo: null,
  },
  "android-calculator": {
    github: "https://github.com/KyawMyoHtay1/simple_calculator_Android_Kotlin",
    demo: null,
  },
  "android-imageviewer": {
    github: "https://github.com/KyawMyoHtay1/Image_Viewer_Android_Kotlin",
    demo: null,
  },
};

function wireProjectLinks() {
  document.querySelectorAll(".project-github").forEach((btn) => {
    const key = btn.dataset.project;
    const url = PROJECT_LINKS[key]?.github;
    if (url) {
      btn.href = url;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      btn.classList.remove("opacity-50", "cursor-not-allowed", "pointer-events-none");
    } else {
      btn.replaceWith(
        Object.assign(document.createElement("span"), {
          className: btn.className + " opacity-50 cursor-not-allowed pointer-events-none",
          textContent: btn.textContent,
          title: "Repository not available",
        })
      );
    }
  });

  document.querySelectorAll(".project-demo").forEach((btn) => {
    const key = btn.dataset.project;
    const url = PROJECT_LINKS[key]?.demo;
    if (url) {
      btn.href = url;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
    } else {
      btn.addEventListener("click", (e) => e.preventDefault());
      btn.classList.add("opacity-50", "cursor-not-allowed");
      btn.title = "No live demo";
    }
  });
}

document.addEventListener("DOMContentLoaded", wireProjectLinks);
window.wireProjectLinks = wireProjectLinks;
