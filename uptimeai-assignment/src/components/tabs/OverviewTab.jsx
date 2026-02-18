import React from 'react';
import RepoGrid             from '../repositories/RepoGrid';
import ContributionGraph    from '../contributions/ContributionGraph';
import ActivityOverview     from '../contributions/ActivityOverview';
import ContributionActivity from '../contributions/ContributionActivity';
import { useGitHubRepos }   from '../../hooks/useGitHubRepos';
import { USERNAME }         from '../../constants';
import './OverviewTab.css';

export default function OverviewTab() {
  const { repos, loading } = useGitHubRepos(USERNAME);

  return (
    <div className="overview">

      {/* Popular repositories */}
      <section>
        <div className="section-header">
          <h2 className="section-title">Popular repositories</h2>
          <a href="#" className="section-action">Customize your pins</a>
        </div>
        <RepoGrid repos={repos.slice(0, 6)} loading={loading} />
      </section>

      <ContributionGraph username={USERNAME} />

      {/* Activity panels */}
      <div className="activity-row">
        <ActivityOverview />
        <ContributionActivity />
      </div>

    </div>
  );
}