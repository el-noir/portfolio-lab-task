# GitHub Pages Deployment Guide

## 🚀 Quick Setup (5 Steps)

### Step 1: Push to GitHub

```bash
cd "d:\Academia\Semester 5\Fullstack\Lab7\lab7"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Add portfolio project with GitHub Pages workflow"

# Add remote (your repo is already created: el-noir/portfolio-lab-task)
git remote add origin https://github.com/el-noir/portfolio-lab-task.git

# Push to main branch
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/el-noir/portfolio-lab-task
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Click **Save**

### Step 3: Wait for Deployment

1. Go to **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Green checkmark = Success! ✅

### Step 4: Access Your Live Site

Your portfolio will be live at:
```
https://el-noir.github.io/portfolio-lab-task/
```

---

## 📋 What Was Created

### `.github/workflows/deploy.yml`
GitHub Actions workflow that:
- ✅ Triggers on every push to `main` branch
- ✅ Installs dependencies
- ✅ Builds the React app
- ✅ Deploys to GitHub Pages automatically

### Updated `vite.config.js`
- ✅ Added `base: '/portfolio-lab-task/'` for correct asset paths on GitHub Pages

---

## 🔄 Making Updates

After the initial setup, every time you push changes to the `main` branch:

```bash
# Make your changes, then:
git add .
git commit -m "Update portfolio"
git push
```

The site will automatically rebuild and redeploy! 🎉

---

## 🛠️ Troubleshooting

### If the workflow fails:

1. **Check the Actions tab** for error messages
2. **Common issues:**
   - Node modules not installed → Already handled in workflow
   - Build errors → Test locally first: `npm run build`
   - Permissions → Make sure Pages is enabled in Settings

### If the site shows 404:

1. Check that Pages is enabled in repository Settings
2. Verify the base path matches your repo name in `vite.config.js`
3. Wait a few minutes after deployment completes

### Test locally before pushing:

```bash
npm run build
npm run preview
```

This builds and previews the production version at http://localhost:4173/

---

## 📱 Share Your Portfolio

Once deployed, share your portfolio:
- **Live URL:** https://el-noir.github.io/portfolio-lab-task/
- **Repository:** https://github.com/el-noir/portfolio-lab-task

---

## ✨ Additional Features (Optional)

### Custom Domain (if you have one):

1. Go to Settings → Pages
2. Add your custom domain
3. Update `vite.config.js`: change base to `'/'`

### Add Build Status Badge:

Add this to your README.md:
```markdown
![Deploy Status](https://github.com/el-noir/portfolio-lab-task/actions/workflows/deploy.yml/badge.svg)
```

---

**You're all set! 🚀**

Your portfolio will automatically deploy whenever you push to GitHub!
