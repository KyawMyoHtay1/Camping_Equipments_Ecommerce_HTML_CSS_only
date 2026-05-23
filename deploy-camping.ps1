$ErrorActionPreference = "Stop"

$Root = $PSScriptRoot
$DeployBranch = "camping-pages"
$PagesSettingsUrl = "https://github.com/KyawMyoHtay2004/Camping_Equipments_Ecommerce_HTML_CSS_only/settings/pages"
$LiveUrl = "https://kyawmyohtay2004.github.io/Camping_Equipments_Ecommerce_HTML_CSS_only/"

Set-Location $Root

$Status = git status --short
if ($Status) {
    Write-Host "You have uncommitted changes." -ForegroundColor Yellow
    Write-Host "Commit your latest work first, then run this script again." -ForegroundColor Yellow
    exit 1
}

Write-Host "Pushing current HEAD to origin/$DeployBranch ..." -ForegroundColor Cyan
git push origin "HEAD:${DeployBranch}" --force

Write-Host ""
Write-Host "If this is your first deployment, enable GitHub Pages here:" -ForegroundColor Green
Write-Host $PagesSettingsUrl -ForegroundColor Green
Write-Host "Source: Deploy from a branch" -ForegroundColor Green
Write-Host "Branch: $DeployBranch / (root)" -ForegroundColor Green
Write-Host "Leave Custom domain empty." -ForegroundColor Yellow
Write-Host "Live URL: $LiveUrl" -ForegroundColor Green
