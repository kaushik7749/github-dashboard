// ─── API Endpoints ──────────────────────────────────────────────────────────
// GitHub REST API — Get a user
// Docs: https://docs.github.com/en/rest/reference/users#get-a-user
// URL:  https://api.github.com/users/{username}
export const GITHUB_API_BASE = 'https://api.github.com';

// GitHub Contributions API (no auth required)
// URL:  https://gh-contributions-api.vercel.app/{username}/{year}
// Returns: { total: { [year]: number }, contributions: [{ date, count, color }] }
export const CONTRIBUTIONS_API_BASE = 'https://gh-contributions-api.vercel.app';

export const USERNAME = 'shreeramk';

// ─── Tabs ────────────────────────────────────────────────────────────────────
export const TABS = [
  { id: 'overview',     label: 'Overview'               },
  { id: 'repositories', label: 'Repositories'           },
  { id: 'projects',     label: 'Projects'               },
  { id: 'packages',     label: 'Packages',  count: 3    },
  { id: 'stars',        label: 'Stars',     count: 6    },
];

// ─── Language Colors ─────────────────────────────────────────────────────────
export const LANG_COLORS = {
  JavaScript:         '#f1e05a',
  TypeScript:         '#3178c6',
  Python:             '#3572A5',
  Dart:               '#00B4AB',
  Java:               '#b07219',
  CSS:                '#563d7c',
  HTML:               '#e34c26',
  Ruby:               '#701516',
  Go:                 '#00ADD8',
  Rust:               '#dea584',
  'Jupyter Notebook': '#DA5B0B',
  Shell:              '#89e051',
  'C++':              '#f34b7d',
  'C#':               '#178600',
  C:                  '#555555',
};

// ─── Mock Repos (fallback when API rate-limits) ───────────────────────────────
export const MOCK_REPOS = [
  { id: 1, name: 'Complete-Python-3-Bootcamp', full_name: 'shreeramk/Complete-Python-3-Bootcamp', description: 'Course Files for Complete Python 3 Bootcamp Course on Udemy', html_url: '#', fork: true, parent: { full_name: 'Pierian-Data/Complete-Python-3-Bootcamp' }, language: 'Jupyter Notebook', visibility: 'public', stargazers_count: 0, forks_count: 0 },
  { id: 2, name: 'flutter_login_ui',           full_name: 'shreeramk/flutter_login_ui',           description: null,                                                          html_url: '#', fork: true, parent: { full_name: 'MarcusNg/flutter_login_ui' },                language: 'Dart',             visibility: 'public', stargazers_count: 0, forks_count: 0 },
  { id: 3, name: 'gitignore',                  full_name: 'shreeramk/gitignore',                  description: 'A collection of useful .gitignore templates',                 html_url: '#', fork: true, parent: { full_name: 'github/gitignore' },                       language: null,               visibility: 'public', stargazers_count: 0, forks_count: 0 },
  { id: 4, name: 'node-opcua-logger',          full_name: 'shreeramk/node-opcua-logger',          description: 'An OPCua Client for logging data to InfluxDB',                html_url: '#', fork: true, parent: { full_name: 'nicholasmordecai/node-opcua-logger' },    language: null,               visibility: 'public', stargazers_count: 0, forks_count: 0 },
  { id: 5, name: 'kafkajs',                    full_name: 'shreeramk/kafkajs',                    description: 'A modern Apache Kafka client for node.js',                    html_url: '#', fork: true, parent: { full_name: 'tulios/kafkajs' },                         language: 'JavaScript',       visibility: 'public', stargazers_count: 0, forks_count: 0 },
  { id: 6, name: 'node-opcua-1',               full_name: 'shreeramk/node-opcua-1',               description: 'An implementation of a OPC UA stack fully written in javascript and nodejs', html_url: '#', fork: true, parent: { full_name: 'node-opcua/node-opcua' }, language: 'TypeScript',       visibility: 'public', stargazers_count: 0, forks_count: 0 },
];

// ─── Mock PR Activity ─────────────────────────────────────────────────────────
export const MOCK_PR_ACTIVITY = [
  { name: 'UptimeAI/uptime_webapp',       status: 'merged' },
  { name: 'UptimeAI/uptime_ml',           status: 'merged' },
  { name: 'UptimeAI/uptime_scripts',      status: 'merged' },
  { name: 'UptimeAI/uptime_engine',       status: 'merged' },
  { name: 'UptimeAI/uptime_ml_encrypted', status: 'merged' },
];