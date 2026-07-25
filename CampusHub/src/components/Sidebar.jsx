import React from 'react';

export const Sidebar = ({ setCurrentPage }) => {
  const handleNavigate = (page, event) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  return (
    <aside className="sidebar">
      <nav>
        <a href="#dashboard" onClick={(event) => handleNavigate('dashboard', event)}>Dashboard</a>
        <a href="#tasks" onClick={(event) => handleNavigate('tasks', event)}>Tasks</a>
        <a href="#resources" onClick={(event) => handleNavigate('resources', event)}>Resource Library</a>
        <a href="#profile" onClick={(event) => handleNavigate('profile', event)}>Profile</a>
      </nav>
    </aside>
  );
};

export default Sidebar;