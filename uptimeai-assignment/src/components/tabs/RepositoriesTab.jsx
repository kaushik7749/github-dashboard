import React, { useState } from 'react';
import RepoCard            from '../repositories/RepoCard';
import { useGitHubRepos } from '../../hooks/useGitHubRepos';
import { USERNAME }       from '../../constants';
import './RepositoriesTab.css';

export default function RepositoriesTab() {
  const { repos, loading } = useGitHubRepos(USERNAME);
  const [search, setSearch] = useState('');
  const [type,   setType]   = useState('all');
  const [lang,   setLang]   = useState('all');

  const languages = [...new Set(repos.map((r) => r.language).filter(Boolean))];

  const filtered = repos.filter((r) => {
    const ms = r.name.toLowerCase().includes(search.toLowerCase());
    const mt = type === 'all' || (type === 'forks' && r.fork) || (type === 'sources' && !r.fork);
    const ml = lang === 'all' || r.language === lang;
    return ms && mt && ml;
  });

  return (
    <div className="repos-tab">
      <div className="repos-filters">
        <input
          className="repos-search"
          type="text"
          placeholder="Find a repository..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-row">
          <select className="filter-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="all">Type: All</option>
            <option value="sources">Sources</option>
            <option value="forks">Forks</option>
          </select>
          <select className="filter-select" value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="all">Language: All</option>
            {languages.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>

      {loading
        ? [...Array(6)].map((_, i) => (
            <div key={i} className="repo-list-skeleton">
              <div className="skeleton" style={{ height: 18, width: '40%', marginBottom: 8 }} />
              <div className="skeleton" style={{ height: 14, width: '70%', marginBottom: 16 }} />
              <div className="skeleton" style={{ height: 12, width: '20%' }} />
            </div>
          ))
        : filtered.length === 0
          ? <p className="repos-empty">No repositories match.</p>
          : filtered.map((repo) => <RepoCard key={repo.id} repo={repo} variant="list" />)
      }
    </div>
  );
}