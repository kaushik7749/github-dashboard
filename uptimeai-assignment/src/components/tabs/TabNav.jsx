import React from 'react';
import { TABS } from '../../constants';
import './TabNav.css';

export default function TabNav({ activeTab, setActiveTab, user }) {
  const tabs = TABS.map((t) =>
    t.id === 'repositories' ? { ...t, count: user?.public_repos } : t
  );

  return (
    <nav className="tab-nav">
      <ul className="tab-list">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon && <span className="tab-icon">{tab.icon}</span>}
              {tab.label}
              {tab.count != null && (
                <span className="tab-count">{tab.count}</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}