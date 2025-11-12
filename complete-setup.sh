#!/bin/bash

# Complete GitHub Pages Deployment Automation
# This script handles everything possible automatically

set -e

echo "🚀 Complete GitHub Pages Deployment Setup"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Step 1: Verify local setup
echo -e "${BLUE}Step 1: Verifying local setup...${NC}"
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Initializing..."
    git init
fi

if ! git diff-index --quiet HEAD -- 2>/dev/null; then
    echo "📝 Committing uncommitted changes..."
    git add .
    git commit -m "Prepare for GitHub Pages deployment" || true
fi

echo -e "${GREEN}✅ Local setup verified${NC}"
echo ""

# Step 2: Check for existing remote
echo -e "${BLUE}Step 2: Checking git remote...${NC}"
if git remote get-url origin &>/dev/null; then
    REMOTE_URL=$(git remote get-url origin)
    echo -e "${GREEN}✅ Remote already configured: $REMOTE_URL${NC}"
    
    # Extract username and repo from URL
    if [[ "$REMOTE_URL" =~ github.com[:/]([^/]+)/([^/]+)\.git ]]; then
        GITHUB_USERNAME="${BASH_REMATCH[1]}"
        REPO_NAME="${BASH_REMATCH[2]}"
        echo -e "${GREEN}✅ Detected: $GITHUB_USERNAME/$REPO_NAME${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  No remote configured${NC}"
    echo ""
    echo "To configure remote, run:"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/figma-menu-screen.git"
    echo ""
    echo "Or use the interactive script:"
    echo "  ./setup-github.sh"
    exit 0
fi

# Step 3: Ensure branch is main
echo -e "${BLUE}Step 3: Ensuring branch is 'main'...${NC}"
git branch -M main 2>/dev/null || true
echo -e "${GREEN}✅ Branch set to 'main'${NC}"
echo ""

# Step 4: Provide push instructions
echo -e "${BLUE}Step 4: Ready to push!${NC}"
echo ""
echo "To push to GitHub, run:"
echo -e "${YELLOW}  git push -u origin main${NC}"
echo ""
echo "When prompted:"
echo "  Username: Your GitHub username"
echo "  Password: Your Personal Access Token (not your password!)"
echo ""
echo "Get a token at: https://github.com/settings/tokens"
echo ""

# Step 5: Post-push instructions
echo -e "${BLUE}Step 5: After pushing, enable GitHub Pages:${NC}"
echo ""
echo "1. Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "2. Click 'Settings' → 'Pages'"
echo "3. Under 'Source', select 'GitHub Actions'"
echo "4. Save settings"
echo ""
echo "Your site will be available at:"
echo -e "${GREEN}  https://$GITHUB_USERNAME.github.io/$REPO_NAME/${NC}"
echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"

