import React from 'react';
import './EmptyTab.css';

export default function EmptyTab({ label }) {
  return (
    <div className="empty-tab">
      <div className="empty-icon">
        <svg width="48" height="48" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25ZM3.75 1.5a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 8.75 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688Z" />
        </svg>
      </div>
      <h3 className="empty-title">{label}</h3>
      <p className="empty-desc">No {label.toLowerCase()} to display yet.</p>
    </div>
  );
}