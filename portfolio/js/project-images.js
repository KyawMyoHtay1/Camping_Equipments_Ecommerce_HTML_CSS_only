/** Thematic SVG thumbnails for all projects (no external assets required) */
(function () {
  const ICONS = {
    portal: '<path fill="rgba(255,255,255,0.9)" d="M200 72h80v96h-32v-64h-48v64h-32V72zm-48 24h32v72h-32V96zm96 0h32v72h-32V96z"/><rect fill="rgba(255,255,255,0.25)" x="168" y="168" width="144" height="12" rx="4"/>',
    magazine:
      '<rect fill="rgba(255,255,255,0.85)" x="172" y="64" width="96" height="120" rx="6"/><rect fill="rgba(255,255,255,0.35)" x="184" y="80" width="72" height="8" rx="2"/><rect fill="rgba(255,255,255,0.35)" x="184" y="98" width="56" height="6" rx="2"/><rect fill="rgba(255,255,255,0.35)" x="184" y="114" width="64" height="6" rx="2"/>',
    mountain:
      '<path fill="rgba(255,255,255,0.9)" d="M120 160 L200 72 L280 160 Z"/><path fill="rgba(255,255,255,0.5)" d="M168 160 L220 110 L272 160 Z"/><circle fill="rgba(255,255,255,0.7)" cx="248" cy="88" r="18"/>',
    mobile:
      '<rect fill="rgba(255,255,255,0.9)" x="178" y="56" width="84" height="128" rx="12"/><rect fill="rgba(0,0,0,0.15)" x="190" y="72" width="60" height="88" rx="4"/><circle fill="rgba(255,255,255,0.6)" cx="220" cy="168" r="6"/>',
    leaf: '<path fill="rgba(255,255,255,0.9)" d="M200 64c-40 48-32 96 0 112 32-16 40-64 0-112zm0 88c-16-12-20-40 0-72 20 32 16 60 0 72z"/>',
    books:
      '<rect fill="rgba(255,255,255,0.85)" x="160" y="80" width="28" height="88" rx="3"/><rect fill="rgba(255,255,255,0.7)" x="192" y="68" width="28" height="100" rx="3"/><rect fill="rgba(255,255,255,0.85)" x="224" y="88" width="28" height="80" rx="3"/>',
    globe:
      '<circle fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="6" cx="220" cy="112" r="48"/><ellipse fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="4" cx="220" cy="112" rx="20" ry="48"/><path fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="4" d="M172 112h96"/>',
    tent: '<path fill="rgba(255,255,255,0.9)" d="M140 160 L220 72 L300 160 Z"/><rect fill="rgba(255,255,255,0.5)" x="204" y="120" width="32" height="40" rx="2"/>',
    health: '<path fill="rgba(255,255,255,0.9)" d="M200 72c-24 0-40 20-40 44 0 32 40 56 40 56s40-24 40-56c0-24-16-44-40-44z"/>',
    infinity:
      '<path fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="8" stroke-linecap="round" d="M168 112c0-28 24-44 52-44 20 0 36 12 44 28 8-16 24-28 44-28 28 0 52 16 52 44s-24 44-52 44c-20 0-36-12-44-28-8 16-24 28-44 28-28 0-52-16-52-44z"/>',
    pharmacy:
      '<rect fill="rgba(255,255,255,0.9)" x="196" y="64" width="48" height="112" rx="8"/><rect fill="rgba(0,0,0,0.12)" x="212" y="96" width="16" height="48" rx="2"/><rect fill="rgba(0,0,0,0.12)" x="200" y="108" width="40" height="16" rx="2"/>',
    code: '<path fill="rgba(255,255,255,0.9)" d="M168 112l-32-32 24-24 56 56-56 56-24-24 32-32zm104 0l32-32-24-24-56 56 56 56 24-24-32-32z"/>',
    city: '<rect fill="rgba(255,255,255,0.7)" x="152" y="96" width="36" height="64"/><rect fill="rgba(255,255,255,0.85)" x="196" y="72" width="40" height="88"/><rect fill="rgba(255,255,255,0.6)" x="244" y="108" width="32" height="52"/>',
    cart:
      '<circle fill="rgba(255,255,255,0.9)" cx="188" cy="152" r="10"/><circle fill="rgba(255,255,255,0.9)" cx="252" cy="152" r="10"/><path fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="6" stroke-linecap="round" d="M152 72h32l24 80h72"/>',
    fitness:
      '<rect fill="rgba(255,255,255,0.9)" x="152" y="108" width="136" height="12" rx="6"/><rect fill="rgba(255,255,255,0.9)" x="168" y="88" width="16" height="52" rx="4"/><rect fill="rgba(255,255,255,0.9)" x="256" y="88" width="16" height="52" rx="4"/>',
    food: '<path fill="rgba(255,255,255,0.9)" d="M168 160 V88c0-20 16-32 32-16 16-16 32-4 32 16v72"/><path fill="rgba(255,255,255,0.7)" d="M248 88v72h16V96c0-12 8-20 16-8v80h-32"/>',
    car: '<path fill="rgba(255,255,255,0.9)" d="M152 128h136l-20-40H172l-20 40zm12 48a20 20 0 1140 0 20 20 0 01-40 0zm96 0a20 20 0 1140 0 20 20 0 01-40 0z"/>',
    grid: '<g fill="rgba(255,255,255,0.85)"><circle cx="184" cy="88" r="14"/><circle cx="220" cy="88" r="14"/><circle cx="256" cy="88" r="14"/><circle cx="184" cy="124" r="14"/><circle cx="220" cy="124" r="14"/><circle cx="256" cy="124" r="14"/><circle cx="184" cy="160" r="14"/><circle cx="220" cy="160" r="14"/></g>',
    desktop:
      '<rect fill="rgba(255,255,255,0.9)" x="168" y="72" width="104" height="72" rx="6"/><rect fill="rgba(255,255,255,0.5)" x="196" y="152" width="48" height="8" rx="2"/><rect fill="rgba(255,255,255,0.5)" x="180" y="160" width="80" height="8" rx="2"/>',
  };

  const META = {
    portal: { c1: "#4f46e5", c2: "#7c3aed", icon: "portal", tag: "Web · FYP" },
    elitearticles: { c1: "#7c3aed", c2: "#a78bfa", icon: "magazine", tag: "Web · Team" },
    "mhike-android": { c1: "#059669", c2: "#14b8a6", icon: "mountain", tag: "Android" },
    "mhike-rn": { c1: "#0d9488", c2: "#06b6d4", icon: "mobile", tag: "React Native" },
    android: { c1: "#0284c7", c2: "#38bdf8", icon: "mobile", tag: "Android" },
    nature: { c1: "#0891b2", c2: "#22d3ee", icon: "leaf", tag: "UI/UX" },
    libraria: { c1: "#0f766e", c2: "#2dd4bf", icon: "books", tag: "Web" },
    smcworld: { c1: "#d97706", c2: "#fbbf24", icon: "globe", tag: "Web" },
    camping: { c1: "#ea580c", c2: "#fb923c", icon: "tent", tag: "Web" },
    brightcare: { c1: "#e11d48", c2: "#fb7185", icon: "health", tag: "Analysis" },
    infinity: { c1: "#7c3aed", c2: "#c084fc", icon: "infinity", tag: "Analysis" },
    wellcome: { c1: "#dc2626", c2: "#f87171", icon: "pharmacy", tag: "Analysis" },
    geekup: { c1: "#4f46e5", c2: "#818cf8", icon: "code", tag: "Analysis" },
    gotham: { c1: "#475569", c2: "#94a3b8", icon: "city", tag: "Analysis" },
    walmart: { c1: "#2563eb", c2: "#60a5fa", icon: "cart", tag: "Database" },
    fitness: { c1: "#16a34a", c2: "#4ade80", icon: "fitness", tag: "Database" },
    mcdonalds: { c1: "#ca8a04", c2: "#facc15", icon: "food", tag: "Database" },
    fordley: { c1: "#64748b", c2: "#cbd5e1", icon: "car", tag: "Database" },
    connect4: { c1: "#9333ea", c2: "#c084fc", icon: "grid", tag: "Desktop" },
    computersystems: { c1: "#334155", c2: "#64748b", icon: "desktop", tag: "Systems" },
  };

  function buildSvg(meta) {
    const icon = ICONS[meta.icon] || ICONS.code;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${meta.c1}"/>
      <stop offset="100%" stop-color="${meta.c2}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="200" fill="url(#bg)"/>
  <circle cx="340" cy="40" r="70" fill="#fff" fill-opacity="0.08"/>
  <circle cx="60" cy="180" r="50" fill="#fff" fill-opacity="0.06"/>
  <g transform="translate(0,0)">${icon}</g>
  <text x="20" y="186" fill="#fff" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="600" opacity="0.85">${meta.tag}</text>
</svg>`;
  }

  window.PROJECT_IMAGES = {};
  Object.entries(META).forEach(([id, meta]) => {
    window.PROJECT_IMAGES[id] = "data:image/svg+xml," + encodeURIComponent(buildSvg(meta));
  });
})();
