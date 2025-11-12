# 🚀 GitHub Pages Deployment - Complete Guide

Everything is ready! Follow these simple steps to deploy your prototype.

## 📋 What's Already Done

✅ Vite configured for GitHub Pages  
✅ GitHub Actions workflow created  
✅ Git repository initialized  
✅ All files committed  
✅ Deployment scripts ready  

## 🎯 Quick Start (5 Minutes)

### Step 1: Create GitHub Repository (1 min)
1. Open: **https://github.com/new**
2. Repository name: `figma-menu-screen`
3. Set to **Public** ✅
4. **Don't** initialize with README
5. Click **"Create repository"**

### Step 2: Get Personal Access Token (2 min)
1. Open: **https://github.com/settings/tokens**
2. Click **"Generate new token (classic)"**
3. Name: `figma-menu-screen-deploy`
4. Check **`repo`** scope
5. Click **"Generate token"**
6. **Copy the token** (starts with `ghp_...`)

### Step 3: Push to GitHub (1 min)

**Replace `YOUR_USERNAME` with your GitHub username:**

```bash
cd /Users/henriquealmeida/figma-menu-screen

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/figma-menu-screen.git

# Push (use your token as password)
git push -u origin main
```

**When prompted:**
- Username: `YOUR_USERNAME`
- Password: `YOUR_TOKEN` (paste the token from Step 2)

### Step 4: Enable GitHub Pages (1 min)
1. Go to: **https://github.com/YOUR_USERNAME/figma-menu-screen/settings/pages**
2. Under **"Source"**, select **"GitHub Actions"**
3. Click **"Save"**

## 🌐 Your Live Site

Wait 1-2 minutes, then visit:

**https://YOUR_USERNAME.github.io/figma-menu-screen/**

## 📚 Additional Resources

- **Quick reference**: `QUICK_DEPLOY.md` - Copy-paste commands
- **Detailed guide**: `DEPLOYMENT.md` - Complete instructions
- **Interactive script**: `./setup-github.sh` - Guided setup
- **Auto-check**: `./complete-setup.sh` - Verify everything

## 🔄 Updating Your Site

Every time you push changes, your site updates automatically:

```bash
git add .
git commit -m "Your changes"
git push
```

## ❓ Troubleshooting

**Can't push?**
- Make sure you're using Personal Access Token (not password)
- Token needs `repo` scope
- Repository must exist on GitHub

**Workflow not running?**
- Check Settings → Pages → Source is "GitHub Actions"
- Repository must be Public

**Assets not loading?**
- Check `vite.config.js` base path matches repository name
- Should be `/figma-menu-screen/`

## ✅ Everything Ready!

Your project is fully configured. Just follow the 4 steps above and you'll have a live preview link in minutes!

