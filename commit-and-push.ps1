# Git Commit and Push Script
# Run this script to commit and push changes to GitHub

cd c:\Users\Admin\OneDrive\Desktop\RFX

# Remove lock file if it exists
if (Test-Path .git\index.lock) {
    Write-Host "Removing stale lock file..."
    Remove-Item .git\index.lock -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2
}

# Stage the modified files
Write-Host "Staging changes..."
git add .github/workflows/deploy.yml
git add apps/web/next.config.js
git add apps/web/app/layout.tsx
git add apps/web/components/footer.tsx
git add apps/web/components/sections/hero-section-enhanced.tsx
git add apps/web/components/ui/header-3.tsx
git add apps/web/components/ui/feature-section.tsx
git add apps/web/app/platforms/tradelocker/page.tsx
git add apps/web/lib/base-path.ts

# Check if staging was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "Files staged successfully!" -ForegroundColor Green
    
    # Commit with descriptive message
    Write-Host "Committing changes..."
    git commit -m "fix: resolve all image and asset loading issues on GitHub Pages

- Create basePath utility to handle /RestroFX prefix for static assets
- Update navbar logo to use basePath-aware path
- Update hero section video to use basePath-aware path
- Update footer logo to use basePath-aware path
- Fix all Image components in tradelocker page to use basePath
- Fix FeatureSteps component to use basePath for images
- Set basePath explicitly in next.config.js for production builds
- Add NEXT_PUBLIC_BASE_PATH environment variable to GitHub Actions workflow
- Ensure all static assets (images, videos, CSS) load correctly on GitHub Pages"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Commit successful!" -ForegroundColor Green
        
        # Push to remote
        Write-Host "Pushing to GitHub..."
        git push origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
        } else {
            Write-Host "Push failed. Please check your authentication." -ForegroundColor Red
        }
    } else {
        Write-Host "Commit failed. Please check the error above." -ForegroundColor Red
    }
} else {
    Write-Host "Staging failed. Please close any programs using Git and try again." -ForegroundColor Red
    Write-Host "You may need to close Cursor/VS Code and wait for OneDrive to finish syncing." -ForegroundColor Yellow
}
