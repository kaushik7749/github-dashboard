import React from 'react';
import RepoCard from './RepoCard';
import './RepoGrid.css';

export default function RepoGrid({ repos, loading }) {
  if (loading) {
    return (
      <div className="repo-grid">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="repo-skeleton">
            <div className="skeleton" style={{ height: 16, width: '60%', marginBottom: 8 }} />
            <div className="skeleton" style={{ height: 12, width: '90%', marginBottom: 6 }} />
            <div className="skeleton" style={{ height: 12, width: '70%', marginBottom: 20 }} />
            <div className="skeleton" style={{ height: 12, width: '35%' }} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="repo-grid">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} variant="grid" />
      ))}
    </div>
  );
}