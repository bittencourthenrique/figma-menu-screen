# Quick Deploy - Copy & Paste Commands

## Prerequisites (Do These First)

### 1. Create GitHub Repository
Go to: **https://github.com/new**
- Name: `figma-menu-screen`
- Public: ✅ Yes
- Initialize: ❌ No (don't check anything)
- Click "Create repository"

### 2. Create Personal Access Token
Go to: **https://github.com/settings/tokens**
- Click "Generate new token (classic)"
- Name: `figma-menu-screen`
- Scope: Check `repo`
- Generate and **copy the token** (starts with `ghp_...`)

## Deploy Commands

Replace `YOUR_USERNAME` with your GitHub username, then copy and paste:

```bash
cd /Users/henriquealmeida/figma-menu-screen

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/figma-menu-screen.git

# Push to GitHub (use your token as password when prompted)
git push -u origin main
```

**When prompted:**
- Username: `YOUR_USERNAME`
- Password: `YOUR_PERSONAL_ACCESS_TOKEN` (paste the token you copied)

## Enable GitHub Pages

1. Go to: **https://github.com/YOUR_USERNAME/figma-menu-screen/settings/pages**
2. Under "Source", select **"GitHub Actions"**
3. Click **"Save"**

## Your Site URL

After 1-2 minutes, your site will be live at:

**https://YOUR_USERNAME.github.io/figma-menu-screen/**

---

## Troubleshooting

**Authentication failed?**
- Make sure you're using the Personal Access Token, not your GitHub password
- Token must have `repo` scope

**Repository not found?**
- Make sure you created it in step 1
- Check the repository name matches exactly

**Workflow not running?**
- Make sure Pages source is set to "GitHub Actions" (not "Deploy from a branch")

