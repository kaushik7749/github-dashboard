import { LANG_COLORS } from '../constants';

export function getLangColor(lang) {
  return LANG_COLORS[lang] || '#8b949e';
}

export function formatNumber(n) {
  if (!n) return 0;
  return n >= 1000 ? (n / 1000).toFixed(1) + 'k' : n;
}

// Convert contribution API response into ECharts heatmap format
// API gives: [{ date: "YYYY-MM-DD", count: number, color: "#hex" }]
// ECharts heatmap needs: [[timestamp_ms, day_of_week, count], ...]
export function formatContributionsForECharts(contributions) {
  return contributions.map((item) => {
    const date = new Date(item.date);
    return [item.date, item.count];
  });
}