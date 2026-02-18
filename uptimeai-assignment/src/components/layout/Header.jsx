import React from 'react';
import './Header.css';

export default function Header({ user }) {
  return (
    <header className="header">
      <div className="header-inner">

        {/* GitHub Logo + username */}
        <div className="header-logo-group">
          <a href="#" className="header-logo" aria-label="GitHub">
            <svg height="28" width="28" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
          </a>
          {user?.login && (
            <span className="header-username">{user.login}</span>
          )}
        </div>

        {/* Search bar */}
        <div className="header-search">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z" />
          </svg>
          <span>Type <kbd>/</kbd> to search</span>
        </div>

        {/* Nav links */}
        <nav className="header-nav">
          <a href="#">Pull requests</a>
          <a href="#">Issues</a>
          <a href="#">Marketplace</a>
          <a href="#">Explore</a>
        </nav>

        {/* Right side controls */}
        <div className="header-right">
          {/* Notifications */}
          <button className="icon-btn" title="Notifications">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Z" />
            </svg>
          </button>

          {/* Create new (+) */}
          <button className="icon-btn" title="Create new">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z" />
            </svg>
          </button>

          {/* Avatar */}
          <div className="header-avatar">
            <img
              src={user?.avatar_url || 'https://github.com/identicons/placeholder.png'}
              alt={user?.login || 'avatar'}
            />
          </div>
        </div>

      </div>
    </header>
  );
}