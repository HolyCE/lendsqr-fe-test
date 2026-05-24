import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FiUsers, 
  FiUserCheck, 
  FiDollarSign, 
  FiPieChart, 
  FiSave, 
  FiFileText, 
  FiStar, 
  FiShield,
  FiHome,
  FiBriefcase,
  FiLayers,
  FiCreditCard,
  FiTrendingUp,
  FiSliders,
  FiSettings,
  FiAlertCircle,
  FiChevronDown
} from 'react-icons/fi';
import './Sidebar.scss';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { section: "CUSTOMERS", items: [
      { name: "Users", path: "/users", icon: <FiUsers /> },
      { name: "Guarantors", path: "#", icon: <FiUserCheck /> },
      { name: "Loans", path: "#", icon: <FiDollarSign /> },
      { name: "Decision Models", path: "#", icon: <FiPieChart /> },
      { name: "Savings", path: "#", icon: <FiSave /> },
      { name: "Loan Requests", path: "#", icon: <FiFileText /> },
      { name: "Whitelist", path: "#", icon: <FiStar /> },
      { name: "Karma", path: "#", icon: <FiShield /> }
    ]},
    { section: "BUSINESSES", items: [
      { name: "Organization", path: "#", icon: <FiBriefcase /> },
      { name: "Loan Products", path: "#", icon: <FiLayers /> },
      { name: "Savings Products", path: "#", icon: <FiCreditCard /> },
      { name: "Fees and Charges", path: "#", icon: <FiDollarSign /> },
      { name: "Transactions", path: "#", icon: <FiTrendingUp /> },
      { name: "Services", path: "#", icon: <FiSliders /> },
      { name: "Service Account", path: "#", icon: <FiSettings /> },
      { name: "Settlements", path: "#", icon: <FiFileText /> },
      { name: "Reports", path: "#", icon: <FiPieChart /> }
    ]},
    { section: "SETTINGS", items: [
      { name: "Preferences", path: "#", icon: <FiSettings /> },
      { name: "Fees and Pricing", path: "#", icon: <FiDollarSign /> },
      { name: "Audit Logs", path: "#", icon: <FiAlertCircle /> }
    ]}
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="switch-org">
          <span>Switch Organization</span>
          <FiChevronDown className="dropdown-icon" />
        </div>
      </div>
      
      <div className="sidebar-menu">
        <div className="dashboard-item" onClick={() => navigate('/dashboard')}>
          <FiHome className="icon" />
          <span>Dashboard</span>
        </div>
        
        {menuItems.map((section, idx) => (
          <div key={idx} className="menu-section">
            <div className="section-title">{section.section}</div>
            {section.items.map((item, itemIdx) => (
              <div 
                key={itemIdx}
                className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => item.path !== '#' && navigate(item.path)}
              >
                <span className="icon">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
