/** CV PDF path — place your file at portfolio/documents/Kyaw_Myo_Htay_CV.pdf */
window.CV_CONFIG = {
  path: "documents/Kyaw_Myo_Htay_CV.pdf",
  fileName: "Kyaw_Myo_Htay_CV.pdf",
  viewerPage: "cv.html",
};

function cvDownloadUrl() {
  return window.CV_CONFIG.path;
}

function wireCvButtons() {
  const path = cvDownloadUrl();
  document.querySelectorAll("[data-cv-download]").forEach((el) => {
    el.href = path;
    el.setAttribute("download", window.CV_CONFIG.fileName);
  });
  document.querySelectorAll("[data-cv-view]").forEach((el) => {
    el.href = window.CV_CONFIG.viewerPage;
  });
  document.querySelectorAll("[data-cv-open-tab]").forEach((el) => {
    el.href = path;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
}

async function checkCvAvailable() {
  try {
    const res = await fetch(cvDownloadUrl(), { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}

function showCvMissingUI(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="cv-missing rounded-2xl border border-amber-300 bg-amber-50 p-8 text-center dark:border-amber-500/40 dark:bg-amber-950/30">
      <p class="text-lg font-semibold text-amber-900 dark:text-amber-200">CV PDF not uploaded yet</p>
      <p class="mt-2 text-sm text-amber-800/90 dark:text-amber-200/80">
        Save your résumé as <code class="rounded bg-amber-100 px-1.5 py-0.5 dark:bg-amber-900/50">${window.CV_CONFIG.path}</code>
        then run <code class="rounded bg-amber-100 px-1.5 py-0.5 dark:bg-amber-900/50">deploy.ps1</code> to publish.
      </p>
    </div>`;
}

async function initCvViewer() {
  wireCvButtons();
  const frame = document.getElementById("cvPdfFrame");
  const missingRoot = document.getElementById("cvViewerRoot");
  if (!frame) return;

  const ok = await checkCvAvailable();
  if (!ok) {
    frame.classList.add("hidden");
    showCvMissingUI(missingRoot);
    document.querySelectorAll("[data-cv-download], [data-cv-open-tab]").forEach((el) => {
      el.classList.add("opacity-50", "pointer-events-none");
      el.setAttribute("aria-disabled", "true");
    });
    return;
  }

  frame.src = `${cvDownloadUrl()}#view=FitH`;
  frame.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  wireCvButtons();
  initCvViewer();
});
