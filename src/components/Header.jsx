import React from 'react';
import { Search, Bell, UserCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-search">
        <Search size={18} color="var(--text-muted)" />
        <input type="text" placeholder="Query AI assistant or search metrics..." />
      </div>
      <div className="header-actions">
        <div className="action-btn">
          <Bell size={18} />
          <span className="notification-badge"></span>
        </div>
        <div className="action-btn">
          <UserCircle size={18} />
        </div>
      </div>
    </header>
  );
};

export default Header;
