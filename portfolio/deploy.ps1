# Push portfolio/ folder to GitHub Pages repo (KyawMyoHtay1/portfolio)
# Run: powershell -ExecutionPolicy Bypass -File deploy.ps1

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$RepoUrl = "https://github.com/KyawMyoHtay1/portfolio.git"
$Branch = "portfolio-pages"

Set-Location $Root
Write-Host "Creating branch '$Branch' from portfolio/ ..." -ForegroundColor Cyan
git subtree split --prefix=portfolio -b $Branch

Write-Host "Pushing to $RepoUrl (main) ..." -ForegroundColor Cyan
git push $RepoUrl "${Branch}:main" --force

Write-Host ""
Write-Host "Done. Enable Pages: https://github.com/KyawMyoHtay1/portfolio/settings/pages" -ForegroundColor Green
Write-Host "Live URL (after 1-3 min): https://KyawMyoHtay1.github.io/portfolio/" -ForegroundColor Green
