import React from 'react';

export const Navbar = ({ user, onLogout }) => {
  return (
    <header className="navbar">
      <h2>CampusHub</h2>
      {user && (
        <div>
          <span style={{ marginRight: '15px' }}>Logged in: {user.name}</span>
          <button className="btn btn-danger" onClick={onLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};