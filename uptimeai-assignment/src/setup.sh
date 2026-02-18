#!/bin/bash

# Run this from Git Bash
# Place this file inside: D:/Git Practice/github-dashboard/uptimeai-assignment/src
# Then run: bash setup.sh

BASE="$(cd "$(dirname "$0")" && pwd)"

echo ""
echo "Creating project structure in:"
echo "$BASE"
echo ""

# ── FOLDERS ──────────────────────────────────────────────────
mkdir -p "$BASE/components/layout"
mkdir -p "$BASE/components/profile"
mkdir -p "$BASE/components/repositories"
mkdir -p "$BASE/components/contributions"
mkdir -p "$BASE/components/tabs"
mkdir -p "$BASE/hooks"
mkdir -p "$BASE/utils"
mkdir -p "$BASE/constants"
mkdir -p "$BASE/styles"

# ── FILES ─────────────────────────────────────────────────────

# App entry
touch "$BASE/App.jsx"
touch "$BASE/main.jsx"

# Styles
touch "$BASE/styles/global.css"

# Constants
touch "$BASE/constants/index.js"

# Utils
touch "$BASE/utils/index.js"

# Hooks
touch "$BASE/hooks/useGitHubUser.js"
touch "$BASE/hooks/useGitHubRepos.js"
touch "$BASE/hooks/useContributions.js"

# Layout components
touch "$BASE/components/layout/Header.jsx"
touch "$BASE/components/layout/Header.css"
touch "$BASE/components/layout/Sidebar.jsx"
touch "$BASE/components/layout/Sidebar.css"
touch "$BASE/components/layout/MainContent.jsx"
touch "$BASE/components/layout/MainContent.css"

# Profile components
touch "$BASE/components/profile/Avatar.jsx"
touch "$BASE/components/profile/Avatar.css"
touch "$BASE/components/profile/UserInfo.jsx"
touch "$BASE/components/profile/UserInfo.css"
touch "$BASE/components/profile/UserStats.jsx"
touch "$BASE/components/profile/UserStats.css"

# Repositories components
touch "$BASE/components/repositories/RepoCard.jsx"
touch "$BASE/components/repositories/RepoCard.css"
touch "$BASE/components/repositories/RepoGrid.jsx"
touch "$BASE/components/repositories/RepoGrid.css"

# Contributions components
touch "$BASE/components/contributions/ContributionGraph.jsx"
touch "$BASE/components/contributions/ContributionGraph.css"
touch "$BASE/components/contributions/ActivityOverview.jsx"
touch "$BASE/components/contributions/ActivityOverview.css"
touch "$BASE/components/contributions/ContributionActivity.jsx"
touch "$BASE/components/contributions/ContributionActivity.css"

# Tabs components
touch "$BASE/components/tabs/TabNav.jsx"
touch "$BASE/components/tabs/TabNav.css"
touch "$BASE/components/tabs/OverviewTab.jsx"
touch "$BASE/components/tabs/OverviewTab.css"
touch "$BASE/components/tabs/RepositoriesTab.jsx"
touch "$BASE/components/tabs/RepositoriesTab.css"
touch "$BASE/components/tabs/EmptyTab.jsx"
touch "$BASE/components/tabs/EmptyTab.css"

# ── PRINT TREE ────────────────────────────────────────────────
echo "Done! Here is your structure:"
echo ""
find "$BASE" -not -path "*/node_modules/*" | sort | sed "s|$BASE||" | sed 's|/[^/]*$|&|' | awk -F'/' '{
  depth = NF - 2
  name = $NF
  prefix = ""
  for (i = 0; i < depth; i++) prefix = prefix "│   "
  if (depth >= 0 && name != "") print prefix "├── " name
}'
echo ""
echo "All files created. Open in VS Code and start pasting content!"