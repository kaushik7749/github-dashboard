import React from 'react';
import { getLangColor } from '../../utils';
import './RepoCard.css';

const RepoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z" />
  </svg>
);
const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
  </svg>
);
const ForkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
  </svg>
);

export default function RepoCard({ repo, variant = 'grid' }) {
  const langColor  = getLangColor(repo.language);
  const parentName = repo.parent?.full_name;

  if (variant === 'list') {
    return (
      <div className="repo-list-item">
        <div className="repo-row">
          <RepoIcon />
          <a href={repo.html_url} className="repo-link">{repo.full_name || repo.name}</a>
          <span className="repo-badge">{repo.visibility || 'Public'}</span>
        </div>
        {repo.fork && parentName && (
          <p className="repo-forked">Forked from <a href="#">{parentName}</a></p>
        )}
        {repo.description && <p className="repo-desc-list">{repo.description}</p>}
        <div className="repo-meta">
          {repo.language && (
            <span className="repo-lang">
              <span className="lang-dot" style={{ background: langColor }} />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className="repo-stat"><StarIcon /> {repo.stargazers_count}</span>
          )}
          {repo.forks_count > 0 && (
            <span className="repo-stat"><ForkIcon /> {repo.forks_count}</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="repo-card">
      <div className="repo-row">
        <RepoIcon />
        <a href={repo.html_url} className="repo-link">{repo.name}</a>
        <span className="repo-badge">{repo.visibility || 'Public'}</span>
      </div>
      {repo.fork && parentName && (
        <p className="repo-forked">Forked from <a href="#">{parentName}</a></p>
      )}
      {repo.description && <p className="repo-desc">{repo.description}</p>}
      <div className="repo-card-footer">
        {repo.language && (
          <span className="repo-lang">
            <span className="lang-dot" style={{ background: langColor }} />
            {repo.language}
          </span>
        )}
      </div>
    </div>
  );
}