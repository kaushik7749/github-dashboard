import React, { useState } from 'react';
import Header      from './components/layout/Header';
import Sidebar     from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import { useGitHubUser } from './hooks/useGitHubUser';
import { USERNAME } from './constants';
import './styles/global.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const { user, loading, error }  = useGitHubUser(USERNAME);

  return (
    <div className="app">
      <Header user={user} />
      <div className="app-body">
        <Sidebar user={user} loading={loading} />
        <MainContent user={user} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}