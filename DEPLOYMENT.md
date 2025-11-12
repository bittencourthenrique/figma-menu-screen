# GitHub Pages Deployment Guide

This guide will help you deploy your Figma menu screen prototype to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed (already done)
- Repository created on GitHub

## Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Repository name: `figma-menu-screen`
3. Set visibility to **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 2: Get Your GitHub Username

Your GitHub username is the part after `https://github.com/` in your profile URL.

### Step 3: Set Up Authentication

Choose one of the following methods:

#### Option A: Personal Access Token (Recommended for Quick Setup)

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: `figma-menu-screen-deploy`
4. Expiration: Choose your preference
5. Select scope: Check **`repo`** (Full control of private repositories)
6. Click "Generate token"
7. **Copy the token immediately** (starts with `ghp_...`)

#### Option B: SSH Key (More Secure, One-Time Setup)

If you prefer SSH, run these commands to generate a key:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Then add the public key to GitHub:
1. Copy your public key: `cat ~/.ssh/id_ed25519.pub`
2. Go to: https://github.com/settings/keys
3. Click "New SSH key"
4. Paste your key and save

### Step 4: Configure Git Remote

Run these commands, replacing `YOUR_USERNAME` with your GitHub username:

**For HTTPS (using Personal Access Token):**
```bash
cd /Users/henriquealmeida/figma-menu-screen
git remote add origin https://github.com/YOUR_USERNAME/figma-menu-screen.git
```

**For SSH:**
```bash
cd /Users/henriquealmeida/figma-menu-screen
git remote add origin git@github.com:YOUR_USERNAME/figma-menu-screen.git
```

### Step 5: Push to GitHub

**For HTTPS:**
```bash
git branch -M main
git push -u origin main
```
When prompted:
- Username: Your GitHub username
- Password: Your Personal Access Token (not your GitHub password)

**For SSH:**
```bash
git branch -M main
git push -u origin main
```

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **"GitHub Actions"**
5. Save the settings

### Step 7: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait 1-2 minutes for it to complete
4. Once complete, you'll see a green checkmark

### Step 8: Access Your Live Site

Your prototype will be available at:

```
https://YOUR_USERNAME.github.io/figma-menu-screen/
```

You can also find the exact URL in:
- Repository → Settings → Pages
- Or in the Actions tab after deployment completes

## Troubleshooting

### Authentication Failed

If you get authentication errors:

1. **HTTPS**: Make sure you're using a Personal Access Token, not your GitHub password
2. **SSH**: Make sure your SSH key is added to GitHub
3. Try removing and re-adding the remote:
   ```bash
   git remote remove origin
   git remote add origin https://github.com/YOUR_USERNAME/figma-menu-screen.git
   ```

### Workflow Not Running

1. Make sure GitHub Pages source is set to "GitHub Actions" (not "Deploy from a branch")
2. Check the Actions tab for any error messages
3. Ensure your repository is public (required for free GitHub Pages)

### Assets Not Loading

If images or assets don't load:
1. Check that `vite.config.js` has the correct `base` path matching your repository name
2. The base path should be `/figma-menu-screen/` (with trailing slash)
3. Rebuild and redeploy if you changed the base path

## Updating Your Site

Every time you push changes to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site. No manual steps needed!

```bash
git add .
git commit -m "Your commit message"
git push
```

## Need Help?

- Check GitHub Actions logs in the Actions tab
- Verify repository settings → Pages → Source is set to "GitHub Actions"
- Ensure repository is public for free GitHub Pages hosting

