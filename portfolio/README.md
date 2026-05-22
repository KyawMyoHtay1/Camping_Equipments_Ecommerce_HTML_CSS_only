# Portfolio — Kyaw Myo Htay

Multi-page **junior web developer** portfolio (Tailwind CSS, light/dark mode).

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` — career focus, strengths |
| Skills | `skills.html` |
| Projects | `projects.html` |
| Project detail | `project.html?id=portal` |
| Education | `education.html` |
| Contact | `contact.html` |

## Preview locally

Open `index.html` in a browser, or run:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080/`

## Customize

- **GitHub links:** `js/main.js` → `PROJECT_LINKS`
- **Project text:** `js/projects-data.js`
- **Profile photo:** `images/profile.jpg`

## Deploy (recommended)

1. Create a GitHub repo (e.g. `kyawmyohtay-portfolio`)
2. Upload the `portfolio/` folder contents
3. Enable **GitHub Pages** → Settings → Pages → branch `main` / folder root
4. Put the live URL on your CV, LinkedIn, and job applications

Alternatives: Netlify, Vercel (drag-and-drop the folder).

## Job applications

- **Portfolio:** English, short, professional (already set up)
- **Company forms (e.g. MTM):** Paste your full Burmese answers in *their* application — do not duplicate long form text on the public site
