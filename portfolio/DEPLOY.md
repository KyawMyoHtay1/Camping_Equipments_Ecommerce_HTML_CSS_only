# Deploy portfolio to GitHub Pages

Your live site will be:

**https://kyawmyohtay1.github.io/basic_portfolio/**

(repo name: `basic_portfolio`)

---

## Step 1 — Create an empty repo on GitHub

1. Open https://github.com/new (logged in as **KyawMyoHtay1**)
2. Repository name: **`basic_portfolio`**
3. Public
4. Do **not** add README, .gitignore, or license
5. Click **Create repository**

---

## Step 2 — Push from your PC (PowerShell)

Run these commands **one block at a time** from your assignment folder:

```powershell
Set-Location "c:\Users\USER\OneDrive - KMD Institute\L4 DC 161\Assignments Winter Lvl 4\KyawMyoHtay_P000000_DDW_Winter2023\KYAW MYO HTAY_P00200773_DDW_Winter2023"

git subtree split --prefix=portfolio -b portfolio-pages

git push https://github.com/KyawMyoHtay1/basic_portfolio.git portfolio-pages:main
```

If Git asks you to log in, use your GitHub account (browser or Personal Access Token).

---

## Step 3 — Turn on GitHub Pages

1. Open https://github.com/KyawMyoHtay1/basic_portfolio/settings/pages
2. **Source:** Deploy from a branch
3. **Branch:** `main` → folder **`/ (root)`**
4. **Custom domain:** leave **completely empty** (do not paste the github.io URL here)
5. Save
6. Wait 1–3 minutes — GitHub shows your site URL at the top of the page

### Custom domain mistake (red error)

If you see: *"custom domain kyawmyohtay1.github.io/basic_portfolio/ is not properly formatted"*:

- Clear the **Custom domain** box and click **Save**
- That field is only for domains you bought (e.g. `myportfolio.com`), not for your free GitHub Pages link
- Your public link is automatic: **https://kyawmyohtay1.github.io/basic_portfolio/**

---

## Step 4 — Add link to CV & LinkedIn

Use: **https://kyawmyohtay1.github.io/basic_portfolio/**

---

## Update the site later

After you change files in `portfolio/`:

```powershell
git add portfolio
git commit -m "Update portfolio"
git subtree split --prefix=portfolio -b portfolio-pages
git push https://github.com/KyawMyoHtay1/basic_portfolio.git portfolio-pages:main --force
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `repository not found` | Create the empty `portfolio` repo on GitHub first |
| 404 on Pages | Wait a few minutes; check Pages settings use `main` / root |
| Images broken | Ensure you pushed `images/profile.jpg` |
| Auth failed | GitHub → Settings → Developer settings → Personal access token |
