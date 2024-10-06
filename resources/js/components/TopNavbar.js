import React from 'react';
import { FaBars } from 'react-icons/fa';

const TopNavbar = ({ toggleSidebar }) => {
  return (
    <div className="top-navbar">
      <button className="toggle-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <h2>Welcome to the Admin Dashboard</h2>
    </div>
  );
};

export default TopNavbar;
