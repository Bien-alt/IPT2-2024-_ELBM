import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUserGraduate, FaUser, FaCalendarAlt, FaSignOutAlt, FaBars } from "react-icons/fa";
import "../../../sass/components/_home.scss";
import logo from "../../../images/logo_1.png";

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

export default function Home() {
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

  // Sample data for Recent Activity
  const recentActivities = [
    { name: "John Doe", id: "12345", role: "Student", time: "10:30 AM" },
    { name: "Jane Smith", id: "67890", role: "Admin", time: "11:00 AM" },
  ];

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
          <h2>Welcome to the Admin Dashboard</h2>
        </div>
        <div className="home-content">
          <div className="charts">
            <h3>Total Semester Students</h3>
            <div className="pie-charts">
              <div className="pie-chart-container">
                <h4>Per Year Level</h4>
                <div className="pie-chart year-level-chart"></div>
              </div>
              <div className="pie-chart-container">
                <h4>Per Course</h4>
                <div className="pie-chart course-chart"></div>
              </div>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <table className="recent-activity-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID No</th>
                  <th>Role</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.length === 0 ? (
                  <tr>
                    <td colSpan="4">No recent activity available.</td>
                  </tr>
                ) : (
                  recentActivities.map((activity, index) => (
                    <tr key={index}>
                      <td>{activity.name}</td>
                      <td>{activity.id}</td>
                      <td>{activity.role}</td>
                      <td>{activity.time}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
