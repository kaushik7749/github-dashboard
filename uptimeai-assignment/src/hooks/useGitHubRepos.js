import { useState, useEffect } from 'react';
import { GITHUB_API_BASE, MOCK_REPOS } from '../constants';

/**
 * Fetches public repos for a GitHub user.
 *
 * Endpoint : GET https://api.github.com/users/{username}/repos
 * Docs     : https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
 *
 * Falls back to MOCK_REPOS if the API rate-limits (403) or fails.
 */
export function useGitHubRepos(username) {
  const [repos,   setRepos]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setError(null);

    fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?per_page=30&sort=pushed&direction=desc`,
      { headers: { Accept: 'application/vnd.github+json' } }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub repos API: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Repos API failed, using mock data:', err.message);
        setRepos(MOCK_REPOS);
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  return { repos, loading, error };
}