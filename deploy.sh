#!/bin/bash

# GitHub Pages Deployment Helper Script
# This script helps you push your code to GitHub and deploy to GitHub Pages

set -e

echo "🚀 GitHub Pages Deployment Helper"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Please run: git init"
    exit 1
fi

# Check if remote exists
if git remote get-url origin &>/dev/null; then
    echo "✅ Git remote 'origin' is already configured"
    REMOTE_URL=$(git remote get-url origin)
    echo "   Current remote: $REMOTE_URL"
    echo ""
    read -p "Do you want to use this remote? (y/n): " use_existing
    if [ "$use_existing" != "y" ]; then
        echo "Removing existing remote..."
        git remote remove origin
    else
        echo "Using existing remote..."
        git branch -M main 2>/dev/null || true
        echo ""
        echo "📤 Pushing to GitHub..."
        git push -u origin main || {
            echo ""
            echo "❌ Push failed. This is usually an authentication issue."
            echo ""
            echo "For HTTPS: Use a Personal Access Token as your password"
            echo "For SSH: Make sure your SSH key is added to GitHub"
            echo ""
            echo "See DEPLOYMENT.md for detailed instructions."
            exit 1
        }
        echo ""
        echo "✅ Code pushed successfully!"
        echo ""
        echo "📋 Next steps:"
        echo "1. Go to your repository on GitHub"
        echo "2. Settings → Pages → Source: Select 'GitHub Actions'"
        echo "3. Wait for the deployment workflow to complete (1-2 minutes)"
        echo "4. Your site will be available at: https://YOUR_USERNAME.github.io/figma-menu-screen/"
        exit 0
    fi
fi

# Get GitHub username
echo "Enter your GitHub username:"
read -r GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

# Ask for repository name
echo "Enter repository name (default: figma-menu-screen):"
read -r REPO_NAME
REPO_NAME=${REPO_NAME:-figma-menu-screen}

# Ask for authentication method
echo ""
echo "Choose authentication method:"
echo "1) HTTPS (Personal Access Token)"
echo "2) SSH"
read -p "Enter choice (1 or 2): " auth_method

if [ "$auth_method" = "1" ]; then
    REMOTE_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    echo ""
    echo "📝 Using HTTPS. You'll need a Personal Access Token when pushing."
    echo "   Get one at: https://github.com/settings/tokens"
elif [ "$auth_method" = "2" ]; then
    REMOTE_URL="git@github.com:$GITHUB_USERNAME/$REPO_NAME.git"
    echo ""
    echo "📝 Using SSH. Make sure your SSH key is added to GitHub."
else
    echo "❌ Invalid choice"
    exit 1
fi

# Add remote
echo ""
echo "🔗 Adding remote repository..."
git remote add origin "$REMOTE_URL" || {
    echo "❌ Failed to add remote. It might already exist."
    exit 1
}

echo "✅ Remote added: $REMOTE_URL"

# Ensure we're on main branch
echo ""
echo "🌿 Setting branch to 'main'..."
git branch -M main 2>/dev/null || true

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
echo "   (If prompted, use your Personal Access Token for HTTPS, or your SSH key for SSH)"
echo ""

git push -u origin main || {
    echo ""
    echo "❌ Push failed. Common issues:"
    echo ""
    if [ "$auth_method" = "1" ]; then
        echo "   - Make sure you're using a Personal Access Token (not your GitHub password)"
        echo "   - Get a token at: https://github.com/settings/tokens"
        echo "   - Token needs 'repo' scope"
    else
        echo "   - Make sure your SSH key is added to GitHub"
        echo "   - Test SSH connection: ssh -T git@github.com"
    fi
    echo ""
    echo "See DEPLOYMENT.md for detailed troubleshooting."
    exit 1
}

echo ""
echo "✅ Code pushed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "2. Click 'Settings' → 'Pages'"
echo "3. Under 'Source', select 'GitHub Actions'"
echo "4. Wait 1-2 minutes for deployment to complete"
echo "5. Your site will be available at:"
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "🎉 Deployment setup complete!"

