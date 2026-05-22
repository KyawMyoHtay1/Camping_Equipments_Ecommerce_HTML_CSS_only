# Push portfolio/ to GitHub Pages (KyawMyoHtay1/basic_portfolio)
# Run: powershell -ExecutionPolicy Bypass -File deploy.ps1

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$RepoUrl = "https://github.com/KyawMyoHtay1/basic_portfolio.git"
$Branch = "portfolio-pages"

Set-Location $Root
Write-Host "Creating branch '$Branch' from portfolio/ ..." -ForegroundColor Cyan
git subtree split --prefix=portfolio -b $Branch

Write-Host "Pushing to $RepoUrl (main) ..." -ForegroundColor Cyan
git push $RepoUrl "${Branch}:main" --force

Write-Host ""
Write-Host "Enable Pages: https://github.com/KyawMyoHtay1/basic_portfolio/settings/pages" -ForegroundColor Green
Write-Host "Live URL: https://kyawmyohtay1.github.io/basic_portfolio/" -ForegroundColor Green
Write-Host "Leave Custom domain EMPTY on the Pages settings page." -ForegroundColor Yellow
