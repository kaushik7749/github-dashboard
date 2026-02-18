import { useState, useEffect } from 'react';
import { GITHUB_API_BASE } from '../constants';

/**
 * Fetches GitHub user profile via REST API.
 *
 * Endpoint : GET https://api.github.com/users/{username}
 * Docs     : https://docs.github.com/en/rest/reference/users#get-a-user
 *
 * Key response fields used:
 *  - login, name, avatar_url, bio
 *  - company, location, email, blog, twitter_username
 *  - followers, following, public_repos
 */
export function useGitHubUser(username) {
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setError(null);

    fetch(`${GITHUB_API_BASE}/users/${username}`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub user API: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  return { user, loading, error };
}