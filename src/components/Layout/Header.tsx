import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBell, FiUser, FiChevronDown, FiMenu, FiSearch } from 'react-icons/fi';
import './Header.scss';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <FiMenu />
        </button>
        <div className="logo">
          <img src="/src/assets/images/Union.png" alt="Logo" className="logo-icon" />
          <span>lendsqr</span>
        </div>
      </div>
      
      <div className="header-search">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for anything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <FiSearch />
          </button>
        </form>
      </div>
      
      <div className="header-right">
        <a href="#" className="docs-link">Docs</a>
        <div className="notification-bell">
          <FiBell />
        </div>
        <div className="user-profile">
          <div className="user-avatar">
            <FiUser />
          </div>
          <span className="username">Adedeji</span>
          <FiChevronDown className="dropdown" />
        </div>
      </div>
    </header>
  );
};

export default Header;
