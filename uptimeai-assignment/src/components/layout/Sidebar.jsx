import React from 'react';
import './Sidebar.css';

/* ── SVG Icons ──────────────────────────────────────────────── */
const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v5.5h1.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2Zm1-1.5h8.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25ZM11 14.5a.5.5 0 0 0 .5.5h1.25a.5.5 0 0 0 .5-.5V9.5a.5.5 0 0 0-.5-.5H11ZM3 3.75A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 3 3.75Zm0 3A.75.75 0 0 1 3.75 6h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 3 6.75Zm0 3A.75.75 0 0 1 3.75 9h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 3 9.75Z" />
  </svg>
);
const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
  </svg>
);
const LinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 2 2 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a2.002 2.002 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 2 2 0 0 0-2.83 0l-2.5 2.5a2.002 2.002 0 0 0 0 2.83Z" />
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z" />
  </svg>
);
const PeopleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.57 4.151.75.75 0 0 1-1.488.18 3.51 3.51 0 0 0-2.372-2.853A3.001 3.001 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M7.547 1.31a.75.75 0 0 1 .904 0l6.75 5.025a.75.75 0 0 1 .048 1.153l-.25.25A.746.746 0 0 1 14.25 8H14v4.5h.25a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5H2V8h-.25a.75.75 0 0 1-.498-1.311l6.296-4.688Z" />
  </svg>
);

/* ── Skeleton ───────────────────────────────────────────────── */
function SidebarSkeleton() {
  return (
    <div>
      <div className="skeleton" style={{ width: '100%', aspectRatio: '1', borderRadius: '50%', marginBottom: 16 }} />
      <div className="skeleton" style={{ width: '70%', height: 22, marginBottom: 8 }} />
      <div className="skeleton" style={{ width: '50%', height: 18, marginBottom: 16 }} />
      <div className="skeleton" style={{ width: '100%', height: 14, marginBottom: 6 }} />
      <div className="skeleton" style={{ width: '80%',  height: 14, marginBottom: 6 }} />
      <div className="skeleton" style={{ width: '60%',  height: 14 }} />
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export default function Sidebar({ user, loading }) {
  return (
    <aside className="sidebar">
      {loading ? (
        <SidebarSkeleton />
      ) : (
        <>
          {/* Avatar — from API: user.avatar_url */}
          <div className="avatar-wrap">
            <img
              src={user?.avatar_url || `https://github.com/identicons/${user?.login}.png`}
              alt={user?.name || user?.login}
              className="avatar"
            />
          </div>

          {/* Name & login — from API: user.name, user.login */}
          <h1 className="user-name">{user?.name  || 'Shreeram Kushwaha'}</h1>
          <p className="user-login">{user?.login || 'shreeramk'}</p>

          {/* Bio — from API: user.bio */}
          {user?.bio && <p className="user-bio">{user.bio}</p>}

          <button className="btn-edit">Edit profile</button>

          {/* Followers / Following — from API: user.followers, user.following */}
          <div className="user-stats">
            <a
              href={`https://github.com/${user?.login}?tab=followers`}
              className="stat-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PeopleIcon />
              <strong>{user?.followers ?? 0}</strong>
              <span>followers</span>
            </a>
            <span className="sep">·</span>
            <a
              href={`https://github.com/${user?.login}?tab=following`}
              className="stat-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{user?.following ?? 0}</strong>
              <span>following</span>
            </a>
          </div>

          {/* Meta list — all fields from GitHub user API */}
          <ul className="meta-list">
            {/* user.company */}
            {user?.company && (
              <li>
                <BuildingIcon />
                <span>@{user.company.replace('@', '')}</span>
              </li>
            )}
            {/* user.location */}
            {user?.location && (
              <li>
                <LocationIcon />
                <span>{user.location}</span>
              </li>
            )}
            {/* user.blog */}
            {user?.blog && (
              <li>
                <LinkIcon />
                <a href={user.blog} target="_blank" rel="noopener noreferrer">
                  {user.blog.replace(/^https?:\/\//, '')}
                </a>
              </li>
            )}
            {/* user.email */}
            {user?.email && (
              <li>
                <MailIcon />
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </li>
            )}
            {/* user.twitter_username */}
            {user?.twitter_username && (
              <li>
                <TwitterIcon />
                <a
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{user.twitter_username}
                </a>
              </li>
            )}
          </ul>

          {/* Achievements (mock — GitHub does not expose these via REST API) */}
          <div className="sidebar-section">
            <h2 className="section-title">Achievements</h2>
            <div className="achievements">
              {['⚡', '🦅', '🦈'].map((badge, i) => (
                <div key={i} className="badge" title="Achievement">{badge}</div>
              ))}
            </div>
          </div>

          {/* Organizations (mock — requires auth for org membership) */}
          <div className="sidebar-section">
            <h2 className="section-title">Organizations</h2>
            <div className="orgs">
              <div className="org-avatar" title="UptimeAI">
                <img
                  src="https://avatars.githubusercontent.com/UptimeAI"
                  alt="UptimeAI"
                  onError={(e) => { e.target.src = 'https://github.com/identicons/UptimeAI.png'; }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}