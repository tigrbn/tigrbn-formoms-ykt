# deploy.ps1
Write-Host "=== Деплой приложения 'Для Мам' на GitHub Pages ===" -ForegroundColor Cyan

# 1. Удаляем папку formoms-app если она есть
if (Test-Path "formoms-app") {
    Write-Host "Удаляю лишнюю папку formoms-app..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force formoms-app -ErrorAction SilentlyContinue
}

# 2. Обновляем package.json
Write-Host "`nОбновляю package.json..." -ForegroundColor Green
$packagePath = "package.json"
$packageContent = Get-Content $packagePath -Raw | ConvertFrom-Json

# Добавляем homepage и скрипты если их нет
if (-not $packageContent.homepage) {
    $packageContent | Add-Member -NotePropertyName "homepage" -NotePropertyValue "https://tigrbn.github.io/formoms-app" -Force
}

if (-not $packageContent.scripts.deploy) {
    $packageContent.scripts | Add-Member -NotePropertyName "predeploy" -NotePropertyValue "npm run build" -Force
    $packageContent.scripts | Add-Member -NotePropertyName "deploy" -NotePropertyValue "gh-pages -d dist" -Force
}

$packageContent | ConvertTo-Json -Depth 10 | Set-Content $packagePath

# 3. Сборка проекта
Write-Host "`nСобираю проект..." -ForegroundColor Green
npm run build

if (-not $?) {
    Write-Host "❌ Ошибка сборки!" -ForegroundColor Red
    exit 1
}

# 4. Деплой
Write-Host "`nЗапускаю деплой на GitHub Pages..." -ForegroundColor Green
npm run deploy

if ($?) {
    Write-Host "`n✅ Деплой успешен!" -ForegroundColor Green
    Write-Host "Ваше приложение доступно по адресу:" -ForegroundColor White
    Write-Host "https://tigrbn.github.io/formoms-app" -ForegroundColor Cyan
    Write-Host "`nОбновите URL в Telegram боте!" -ForegroundColor Yellow
} else {
    Write-Host "❌ Ошибка деплоя!" -ForegroundColor Red
}