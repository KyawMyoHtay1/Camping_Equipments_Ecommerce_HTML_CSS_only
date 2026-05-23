$ErrorActionPreference = "Stop"

$Root = $PSScriptRoot
$DeployBranch = "camping-pages"

Set-Location $Root

$OriginUrl = (git remote get-url origin).Trim()

if (-not $OriginUrl) {
    Write-Host "No origin remote is configured for this repository." -ForegroundColor Red
    exit 1
}

if ($OriginUrl -notmatch 'github\.com[:/](?<owner>[^/]+)/(?<repo>[^/.]+)(?:\.git)?$') {
    Write-Host "Origin does not look like a GitHub repository URL: $OriginUrl" -ForegroundColor Red
    exit 1
}

$Owner = $Matches.owner
$Repo = $Matches.repo
$PagesSettingsUrl = "https://github.com/$Owner/$Repo/settings/pages"
$LiveUrl = "https://$($Owner.ToLower()).github.io/$Repo/"

$Status = git status --short
if ($LASTEXITCODE -ne 0) {
    throw "git status failed."
}

if ($Status) {
    Write-Host "You have uncommitted changes." -ForegroundColor Yellow
    Write-Host "Commit your latest work first, then run this script again." -ForegroundColor Yellow
    exit 1
}

Write-Host "Pushing current HEAD to origin/$DeployBranch ..." -ForegroundColor Cyan
git push origin "HEAD:${DeployBranch}" --force
if ($LASTEXITCODE -ne 0) {
    throw "git push failed."
}

Write-Host ""
Write-Host "If this is your first deployment, enable GitHub Pages here:" -ForegroundColor Green
Write-Host $PagesSettingsUrl -ForegroundColor Green
Write-Host "Source: Deploy from a branch" -ForegroundColor Green
Write-Host "Branch: $DeployBranch / (root)" -ForegroundColor Green
Write-Host "Leave Custom domain empty." -ForegroundColor Yellow
Write-Host "Live URL: $LiveUrl" -ForegroundColor Green
