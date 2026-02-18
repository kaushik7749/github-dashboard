# Github Dashboard

A pixel-perfect GitHub profile page clone built with React, matching the UI of the shreeramk GitHub profile.

## Features

- ✅ **Live API Integration**: Fetches real user data from `https://api.github.com/users/shreeramk`
- ✅ **Live Repos API**: Fetches real repositories from `https://api.github.com/users/shreeramk/repos`
- ✅ **Contribution Heatmap**: Realistic contribution graph (mock data — GitHub's contribution API requires OAuth token)
- ✅ **Responsive**: Works on mobile, tablet, desktop
- ✅ **Working Tabs**: Overview, Repositories (with search/filter), Projects, Packages, Stars
- ✅ **Sticky Header** with search bar, nav links
- ✅ **Sidebar**: Avatar, name, bio, stats, meta info, achievements, organizations (all from live API)
- ✅ **Activity Overview**: Canvas-based chart showing commit/PR/issue percentages
- ✅ **Contribution Activity**: PRs and commits with status badges

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx / Header.css
│   │   ├── Sidebar.jsx / Sidebar.css
│   │   └── MainContent.jsx / MainContent.css
│   ├── tabs/
│   │   ├── TabNav.jsx / TabNav.css
│   │   ├── OverviewTab.jsx / OverviewTab.css
│   │   ├── RepositoriesTab.jsx / RepositoriesTab.css
│   │   └── EmptyTab.jsx / EmptyTab.css
│   ├── repositories/
│   │   ├── RepoCard.jsx / RepoCard.css
│   │   └── RepoGrid.jsx / RepoGrid.css
│   └── contributions/
│       ├── ContributionGraph.jsx / ContributionGraph.css
│       ├── ActivityOverview.jsx / ActivityOverview.css
│       └── ContributionActivity.jsx / ContributionActivity.css
├── hooks/
│   ├── useGitHubUser.js      ← Fetches https://api.github.com/users/shreeramk
│   ├── useGitHubRepos.js     ← Fetches repos from GitHub API
│   └── useContributions.js   ← Generates contribution data (requires OAuth for real data)
├── constants/
│   └── index.js              ← Mock data, tab definitions, constants
├── utils/
│   └── index.js              ← Color helpers, date grouping utilities
└── styles/
    └── global.css            ← CSS variables, reset, base styles
```

## Setup & Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

## API Notes

### What's Live
- **User Profile** (`/users/shreeramk`): Name, avatar, bio, followers, location, company, etc.
- **Repositories** (`/users/shreeramk/repos`): Real repos with language, description, fork info

### What's Mocked
- **Contribution Graph**: GitHub's contribution API (`/graphql` with `contributionsCollection`) requires a Personal Access Token. The app generates realistic mock data matching the screenshot pattern.
  - To use real data: Add your GitHub token to an `.env` file as `VITE_GITHUB_TOKEN` and update `useContributions.js` to call the GraphQL API.

## Tech Stack
- React 18 + Vite
- Vanilla CSS with CSS variables (dark theme)
- GitHub REST API v3
- Canvas API for the activity chart
- No external UI libraries — pure custom CSS