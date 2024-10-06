import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUserGraduate, FaUser, FaCalendarAlt, FaSignOutAlt, FaBars } from "react-icons/fa";
import logo from "../../../images/logo_1.png";
import "../../../sass/components/_profile.scss";

const LoadingScreen = () => (
  <div className="loading-screen">
    <img src={logo} alt="Logo" className="loading-logo" />
    <div className="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  </div>
);

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const goToPage = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 1000);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="home-container">
      {loading && <LoadingScreen />}
      {isSidebarOpen && (
        <div className="sidebar">
          <img src={logo} alt="Logo" className="logo" />
          <nav className="navbar nav-wrapper">
            <ul className="sidebar-menu navbar-nav">
              <li className="nav-item">
                <a onClick={() => goToPage("/home")} className={`nav-link ${activePage === "/home" ? "active" : ""}`}>
                  <FaHome />
                  <span className="nav-text">HOME</span>
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => goToPage("/registration")} className={`nav-link ${activePage === "/registration" ? "active" : ""}`}>
                  <FaUserGraduate />
                  <span className="nav-text">REGISTRATION</span>
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => goToPage("/profile")} className={`nav-link ${activePage === "/profile" ? "active" : ""}`}>
                  <FaUser />
                  <span className="nav-text">PROFILE</span>
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => goToPage("/schedule")} className={`nav-link ${activePage === "/schedule" ? "active" : ""}`}>
                  <FaCalendarAlt />
                  <span className="nav-text">SCHEDULE</span>
                </a>
              </li>
              <li className="nav-item">
                <a onClick={handleLogout} className={`nav-link ${activePage === "/" ? "active" : ""}`}>
                  <FaSignOutAlt />
                  <span className="nav-text">LOGOUT</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="main-content">
        <div className="top-navbar">
          <button className="toggle-button" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <h2>Profile Page</h2>
        </div>
        <div className="profile-content">
          {/* Your profile-related elements go here */}
          <h3>Profile Informations</h3>
          <table className="profile-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID Number</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr>
                <td>John Doe</td>
                <td>12345</td>
                <td>Student</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
