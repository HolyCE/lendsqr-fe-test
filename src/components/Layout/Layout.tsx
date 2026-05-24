import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="layout">
      <Header onMenuClick={toggleSidebar} />
      <div className="layout-body">
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        <main className="layout-content" onClick={() => sidebarOpen && closeSidebar()}>
          {children}
        </main>
      </div>
      {sidebarOpen && <div className="mobile-overlay" onClick={closeSidebar}></div>}
    </div>
  );
};

export default Layout;
