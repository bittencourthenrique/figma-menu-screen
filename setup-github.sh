#!/bin/bash

# Complete GitHub Pages Setup Script
# This script automates everything possible for GitHub Pages deployment

set -e

echo "🚀 Complete GitHub Pages Setup"
echo "=============================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Git repository not initialized${NC}"
    exit 1
fi

# Check current remote
if git remote get-url origin &>/dev/null; then
    CURRENT_REMOTE=$(git remote get-url origin)
    echo -e "${GREEN}✅ Git remote already configured:${NC} $CURRENT_REMOTE"
    echo ""
    read -p "Do you want to reconfigure? (y/n): " reconfigure
    if [ "$reconfigure" != "y" ]; then
        echo "Using existing remote..."
        REMOTE_URL="$CURRENT_REMOTE"
        # Extract username and repo from URL
        if [[ "$CURRENT_REMOTE" =~ github.com[:/]([^/]+)/([^/]+)\.git ]]; then
            GITHUB_USERNAME="${BASH_REMATCH[1]}"
            REPO_NAME="${BASH_REMATCH[2]}"
        fi
    else
        git remote remove origin
        REMOTE_URL=""
    fi
fi

# Get GitHub details if not set
if [ -z "$REMOTE_URL" ]; then
    echo ""
    echo "📋 GitHub Repository Setup"
    echo "-------------------------"
    echo ""
    echo "I'll help you set up your GitHub repository."
    echo ""
    
    # Get GitHub username
    read -p "Enter your GitHub username: " GITHUB_USERNAME
    if [ -z "$GITHUB_USERNAME" ]; then
        echo -e "${RED}❌ GitHub username is required${NC}"
        exit 1
    fi
    
    # Repository name
    read -p "Enter repository name (default: figma-menu-screen): " REPO_NAME
    REPO_NAME=${REPO_NAME:-figma-menu-screen}
    
    # Check if repository exists
    echo ""
    echo "Checking if repository exists..."
    if curl -s -o /dev/null -w "%{http_code}" "https://github.com/$GITHUB_USERNAME/$REPO_NAME" | grep -q "200"; then
        echo -e "${GREEN}✅ Repository exists: https://github.com/$GITHUB_USERNAME/$REPO_NAME${NC}"
    else
        echo -e "${YELLOW}⚠️  Repository not found. You'll need to create it.${NC}"
        echo ""
        echo "Please create the repository:"
        echo "1. Go to: https://github.com/new"
        echo "2. Repository name: $REPO_NAME"
        echo "3. Set to PUBLIC (required for free GitHub Pages)"
        echo "4. DO NOT initialize with README, .gitignore, or license"
        echo "5. Click 'Create repository'"
        echo ""
        read -p "Press Enter after you've created the repository..."
    fi
    
    # Authentication method
    echo ""
    echo "Choose authentication method:"
    echo "1) HTTPS with Personal Access Token (recommended)"
    echo "2) SSH"
    read -p "Enter choice (1 or 2): " auth_method
    
    if [ "$auth_method" = "1" ]; then
        REMOTE_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
        echo ""
        echo -e "${YELLOW}📝 You'll need a Personal Access Token${NC}"
        echo ""
        echo "If you don't have one:"
        echo "1. Go to: https://github.com/settings/tokens"
        echo "2. Click 'Generate new token (classic)'"
        echo "3. Name: figma-menu-screen-deploy"
        echo "4. Select scope: repo (Full control)"
        echo "5. Generate and copy the token"
        echo ""
        read -p "Press Enter when ready to push..."
    elif [ "$auth_method" = "2" ]; then
        REMOTE_URL="git@github.com:$GITHUB_USERNAME/$REPO_NAME.git"
        echo ""
        echo -e "${YELLOW}📝 Using SSH. Make sure your SSH key is added to GitHub.${NC}"
    else
        echo -e "${RED}❌ Invalid choice${NC}"
        exit 1
    fi
fi

# Add remote if not exists
if ! git remote get-url origin &>/dev/null; then
    echo ""
    echo "🔗 Adding remote repository..."
    git remote add origin "$REMOTE_URL"
    echo -e "${GREEN}✅ Remote added: $REMOTE_URL${NC}"
fi

# Ensure we're on main branch
echo ""
echo "🌿 Ensuring we're on 'main' branch..."
git branch -M main 2>/dev/null || true

# Check if there are uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo ""
    echo "📝 Staging uncommitted changes..."
    git add .
    git commit -m "Update deployment configuration" || true
fi

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
echo ""
if [ "$auth_method" = "1" ]; then
    echo -e "${YELLOW}When prompted for password, use your Personal Access Token (not your GitHub password)${NC}"
fi
echo ""

if git push -u origin main; then
    echo ""
    echo -e "${GREEN}✅ Code pushed successfully!${NC}"
    echo ""
    echo "📋 Final Steps on GitHub:"
    echo "========================="
    echo ""
    echo "1. Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo "2. Click 'Settings' tab"
    echo "3. Scroll to 'Pages' in left sidebar"
    echo "4. Under 'Source', select 'GitHub Actions'"
    echo "5. Save settings"
    echo ""
    echo "⏳ Wait 1-2 minutes for deployment..."
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
    echo ""
    echo -e "${GREEN}🎉 Setup complete!${NC}"
else
    echo ""
    echo -e "${RED}❌ Push failed${NC}"
    echo ""
    if [ "$auth_method" = "1" ]; then
        echo "Common issues:"
        echo "- Make sure you're using a Personal Access Token (not password)"
        echo "- Token needs 'repo' scope"
        echo "- Get a token at: https://github.com/settings/tokens"
    else
        echo "Common issues:"
        echo "- Make sure your SSH key is added to GitHub"
        echo "- Test connection: ssh -T git@github.com"
    fi
    echo ""
    echo "Try running this script again, or see DEPLOYMENT.md for detailed help."
    exit 1
fi

