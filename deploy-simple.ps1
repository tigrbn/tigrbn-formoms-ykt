# deploy-simple.ps1
Write-Host "=== Simple Deploy to GitHub Pages ===" -ForegroundColor Cyan

# 1. Clean up
Write-Host "`n1. Cleaning up..." -ForegroundColor Yellow
if (Test-Path "formoms-app") {
    Remove-Item -Recurse -Force formoms-app
    Write-Host "Removed formoms-app folder" -ForegroundColor Green
}

# 2. Update package.json
Write-Host "`n2. Checking package.json..." -ForegroundColor Yellow
$package = Get-Content package.json -Raw
if ($package -notlike '*"homepage":*') {
    Write-Host "Package.json needs update" -ForegroundColor Red
    exit
}
Write-Host "Package.json is OK" -ForegroundColor Green

# 3. Build
Write-Host "`n3. Building project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit
}
Write-Host "Build successful" -ForegroundColor Green

# 4. Deploy
Write-Host "`n4. Deploying to GitHub Pages..." -ForegroundColor Yellow
npx gh-pages -d dist
if ($LASTEXITCODE -ne 0) {
    Write-Host "Deploy failed!" -ForegroundColor Red
    exit
}

Write-Host "`n=== SUCCESS! ===" -ForegroundColor Green
Write-Host "Your app is available at:" -ForegroundColor White
Write-Host "https://tigrbn.github.io/formoms-app" -ForegroundColor Cyan
Write-Host "`nUpdate Telegram bot with this URL!" -ForegroundColor Yellow