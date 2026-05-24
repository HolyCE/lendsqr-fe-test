import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { fetchUsers } from '../../services/api';
import './Dashboard.scss';

interface UserStats {
  totalUsers: number;
  activeUsers: number;
  usersWithLoans: number;
  usersWithSavings: number;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<UserStats>({
    totalUsers: 0,
    activeUsers: 0,
    usersWithLoans: 0,
    usersWithSavings: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      setLoading(true);
      const users = await fetchUsers();
      
      // Calculate real stats from actual user data
      const totalUsers = users.length;
      const activeUsers = users.filter(user => user.status === 'Active').length;
      
      // Users with loans (users who have balance > 0 or loan-related logic)
      const usersWithLoans = users.filter(user => user.balance > 10000).length;
      
      // Users with savings (users with tier > 1 or savings logic)
      const usersWithSavings = users.filter(user => user.tier >= 2).length;
      
      setStats({
        totalUsers,
        activeUsers,
        usersWithLoans,
        usersWithSavings
      });
      setLoading(false);
    };
    
    loadStats();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="dashboard-content">
          <h1 className="page-title">Users</h1>
          <div className="stats-grid">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="stat-card loading-card">
                <div className="stat-icon"></div>
                <div className="loading-line"></div>
                <div className="loading-line wide"></div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="dashboard-content">
        <h1 className="page-title">Users</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon users-icon"></div>
            <p className="stat-label">USERS</p>
            <h2 className="stat-value">{stats.totalUsers.toLocaleString()}</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon active-users-icon"></div>
            <p className="stat-label">ACTIVE USERS</p>
            <h2 className="stat-value">{stats.activeUsers.toLocaleString()}</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon loans-icon"></div>
            <p className="stat-label">USERS WITH LOANS</p>
            <h2 className="stat-value">{stats.usersWithLoans.toLocaleString()}</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon savings-icon"></div>
            <p className="stat-label">USERS WITH SAVINGS</p>
            <h2 className="stat-value">{stats.usersWithSavings.toLocaleString()}</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
