# Deploy K Camping World to GitHub Pages

Your live site will be:

**https://kyawmyohtay2004.github.io/Camping_Equipments_Ecommerce_HTML_CSS_only/**

Repository:

**https://github.com/KyawMyoHtay2004/Camping_Equipments_Ecommerce_HTML_CSS_only**

---

## What I already prepared

- Added a root `index.html` so GitHub Pages can open the site correctly
- Added `deploy-camping.ps1` to push your current branch to a dedicated Pages branch

---

## First deployment

Run these commands from this project folder:

```powershell
git add index.html deploy-camping.ps1 DEPLOY_CAMPING.md
git commit -m "Prepare K Camping World for GitHub Pages"
powershell -ExecutionPolicy Bypass -File .\deploy-camping.ps1
```

Then open:

**https://github.com/KyawMyoHtay2004/Camping_Equipments_Ecommerce_HTML_CSS_only/settings/pages**

Use these settings:

- Source: **Deploy from a branch**
- Branch: **`camping-pages`**
- Folder: **`/ (root)`**
- Custom domain: leave it **empty**

Wait 1 to 3 minutes and then open:

**https://kyawmyohtay2004.github.io/Camping_Equipments_Ecommerce_HTML_CSS_only/**

---

## Update the live site later

After you edit the camping website again:

```powershell
git add .
git commit -m "Update camping site"
powershell -ExecutionPolicy Bypass -File .\deploy-camping.ps1
```

---

## If `camping-pages` does not appear in GitHub Pages settings

Refresh the Pages settings page after the script finishes pushing.

---

## If you see a custom domain error

Do not paste the GitHub Pages link into the custom domain box.
That box is only for domains you bought yourself.
