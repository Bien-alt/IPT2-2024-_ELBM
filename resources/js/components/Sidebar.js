import React from 'react';
import { FaHome, FaUserGraduate, FaUser, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import logo from "../../../images/logo_1.png"; // Adjust the path as needed

const Sidebar = ({ activePage, goToPage, handleLogout }) => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="logo" />
      <nav className="navbar nav-wrapper">
        <ul className="sidebar-menu navbar-nav">
          {[
            { path: "/home", label: "HOME", icon: <FaHome /> },
            { path: "/registration", label: "REGISTRATION", icon: <FaUserGraduate /> },
            { path: "/profile", label: "PROFILE", icon: <FaUser /> },
            { path: "/schedule", label: "SCHEDULE", icon: <FaCalendarAlt /> },
          ].map(({ path, label, icon }) => (
            <li className="nav-item" key={path}>
              <a onClick={() => goToPage(path)} className={`nav-link ${activePage === path ? "active" : ""}`}>
                {icon}
                <span className="nav-text">{label}</span>
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a onClick={handleLogout} className={`nav-link ${activePage === "/" ? "active" : ""}`}>
              <FaSignOutAlt />
              <span className="nav-text">LOGOUT</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
