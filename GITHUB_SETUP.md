# Quick GitHub Setup - 3 Simple Steps

## Step 1: Create GitHub Repository (2 minutes)

1. Go to: **https://github.com/new**
2. Repository name: `figma-menu-screen`
3. Set to **Public** (required for free GitHub Pages)
4. **DO NOT** check "Initialize with README"
5. Click **"Create repository"**

## Step 2: Get Personal Access Token (2 minutes)

1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token (classic)"**
3. Name: `figma-menu-screen-deploy`
4. Expiration: Choose your preference
5. Check **`repo`** scope (Full control)
6. Click **"Generate token"**
7. **Copy the token** (starts with `ghp_...`) - you won't see it again!

## Step 3: Run These Commands

Replace `YOUR_USERNAME` with your GitHub username, then run:

```bash
cd /Users/henriquealmeida/figma-menu-screen

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/figma-menu-screen.git

# Push to GitHub (use your token as password when prompted)
git push -u origin main
```

When prompted:
- **Username**: Your GitHub username
- **Password**: Paste your Personal Access Token (not your GitHub password!)

## Step 4: Enable GitHub Pages (1 minute)

1. Go to: **https://github.com/YOUR_USERNAME/figma-menu-screen**
2. Click **"Settings"** tab
3. Click **"Pages"** in left sidebar
4. Under **"Source"**, select **"GitHub Actions"**
5. Click **"Save"**

## Done! 🎉

Wait 1-2 minutes, then your site will be live at:

**https://YOUR_USERNAME.github.io/figma-menu-screen/**

---

## Need Help?

- **Authentication failed?** Make sure you're using the Personal Access Token, not your GitHub password
- **Repository not found?** Make sure you created it in Step 1
- **Workflow not running?** Make sure Pages source is set to "GitHub Actions" in Step 4

