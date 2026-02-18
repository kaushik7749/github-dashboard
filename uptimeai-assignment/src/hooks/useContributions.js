import { useState, useEffect } from 'react';

// API docs: https://github-contributions-api.jogruber.de/
// GET /v4/:username?y=YYYY
// Response shape:
// {
//   total: { "2024": 1753, "2023": 942, ... },
//   contributions: [
//     { date: "2024-01-01", count: 3, color: "#26a641", level: 2 },
//     ...
//   ]
// }

const API_BASE = 'https://github-contributions-api.jogruber.de/v4';

export function useContributions(username, year = new Date().getFullYear()) {
  const [contributions, setContributions] = useState([]);
  const [total,         setTotal]         = useState(0);
  const [loading,       setLoading]       = useState(true);
  const [error,         setError]         = useState(null);

  useEffect(() => {
    if (!username) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/${username}?y=${year}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;

        // data.contributions is [{ date, count, color, level }]
        // ECharts calendar heatmap needs [["YYYY-MM-DD", count], ...]
        const formatted = (data.contributions ?? []).map(({ date, count }) => [date, count]);

        // data.total is { "2024": 1753 } — key is a string
        const yearTotal =
          data.total?.[String(year)] ??
          formatted.reduce((sum, [, c]) => sum + c, 0);

        setContributions(formatted);
        setTotal(yearTotal);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Contributions API failed:', err.message);
        setError(err.message);
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, [username, year]);

  return { contributions, total, loading, error };
}