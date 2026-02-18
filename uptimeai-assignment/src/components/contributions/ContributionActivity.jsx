import React from 'react';
import { MOCK_PR_ACTIVITY } from '../../constants';
import './ContributionActivity.css';

const STATUS_COLOR = {
  merged: '#a371f7',
  open:   '#3fb950',
  closed: '#f85149',
};

export default function ContributionActivity() {
  return (
    <div className="activity-box">
      <h3 className="activity-title">Contribution activity</h3>

      <span className="period-label">October 2025</span>

      {/* Commits */}
      <div className="ca-item">
        <div className="ca-row">
          <svg className="ca-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" />
          </svg>
          <span>Created <strong>56 commits</strong> in 11 repositories</span>
        </div>
      </div>

      {/* Pull requests */}
      <div className="ca-item">
        <div className="ca-row">
          <svg className="ca-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
          </svg>
          <span>Opened <strong>29 pull requests</strong> in 5 repositories</span>
        </div>

        <ul className="pr-list">
          {MOCK_PR_ACTIVITY.map((pr, i) => (
            <li key={i} className="pr-item">
              <a href="#" className="pr-repo">{pr.name}</a>
              <span
                className="pr-badge"
                style={{
                  background:   STATUS_COLOR[pr.status] + '22',
                  color:        STATUS_COLOR[pr.status],
                  borderColor:  STATUS_COLOR[pr.status] + '55',
                }}
              >
                <span className="badge-dot" style={{ background: STATUS_COLOR[pr.status] }} />
                {pr.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button className="show-more-btn">Show more activity</button>
    </div>
  );
}