# Quick Start Script for Windows PowerShell
# This script will set up and start the development server

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Index 101 Storefront - Quick Start" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exists
if (Test-Path "node_modules") {
    Write-Host "✓ Dependencies already installed" -ForegroundColor Green
} else {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

Write-Host ""

# Check if public/stores directory exists
if (Test-Path "public/stores") {
    Write-Host "✓ Images directory exists" -ForegroundColor Green
} else {
    Write-Host "Creating placeholder images..." -ForegroundColor Yellow
    npm run create-placeholders
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting development server..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "The application will be available at:" -ForegroundColor Yellow
Write-Host "  http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start the development server
npm run dev
