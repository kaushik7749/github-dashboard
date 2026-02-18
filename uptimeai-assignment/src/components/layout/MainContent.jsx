import React from 'react';
import TabNav          from '../tabs/TabNav';
import OverviewTab     from '../tabs/OverviewTab';
import RepositoriesTab from '../tabs/RepositoriesTab';
import EmptyTab        from '../tabs/EmptyTab';
import './MainContent.css';

export default function MainContent({ user, activeTab, setActiveTab }) {
  const renderTab = () => {
    switch (activeTab) {
      case 'overview':     return <OverviewTab     user={user} />;
      case 'repositories': return <RepositoriesTab user={user} />;
      case 'projects':     return <EmptyTab label="Projects"  />;
      case 'packages':     return <EmptyTab label="Packages"  />;
      case 'stars':        return <EmptyTab label="Stars"     />;
      default:             return <OverviewTab     user={user} />;
    }
  };

  return (
    <main className="main-content">
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} user={user} />
      <div className="tab-content">{renderTab()}</div>
    </main>
  );
}