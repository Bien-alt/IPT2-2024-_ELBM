import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUserGraduate, FaEnvelope, FaSignOutAlt, FaBars, FaUser, FaCalendarAlt } from "react-icons/fa"; // Added icons for new buttons
import "../../../sass/components/_home.scss"; // Import the SCSS file for Home styles

// Import local logo from resources/images
import logo from "../../../images/logo_1.png"; // Adjust the path as needed

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
  const location = useLocation(); // Hook to get the current location
  const [loading, setLoading] = useState(false); // State to manage loading screen visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for toggling sidebar

  // State to keep track of the current active page
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    console.log("Current active page: ", location.pathname); // Log current path
    setActivePage(location.pathname); // Update active page when location changes
  }, [location.pathname]);

  // Function to handle navigation to other pages
  const goToPage = (path) => {
    setLoading(true); // Show loading screen
    setTimeout(() => {
      navigate(path); // Navigate after a short delay to simulate loading
      setLoading(false); // Hide loading screen
    }, 1000); // Adjust the timeout as needed
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoading(true); // Show loading screen
    setTimeout(() => {
      navigate("/"); // Navigate back to the Login page
      setLoading(false); // Hide loading screen
    }, 1000); // Adjust the timeout as needed
  };

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="home-container">
      {loading && <LoadingScreen />} {/* Show loading screen if loading is true */}
      {isSidebarOpen && (
        <div className="sidebar">
          <img src={logo} alt="Logo" className="logo" />
          <nav className="navbar nav-wrapper">
            <ul className="sidebar-menu navbar-nav">
              <li className="nav-item">
                <a
                  onClick={() => goToPage("/home")}
                  className={`nav-link ${activePage === "/home" ? "active" : ""}`}
                >
                  <FaHome />
                  <span className="nav-text">HOME</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => goToPage("/registration")}
                  className={`nav-link ${activePage === "/registration" ? "active" : ""}`}
                >
                  <FaUserGraduate />
                  <span className="nav-text">REGISTRATION</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => goToPage("/profile")}
                  className={`nav-link ${activePage === "/profile" ? "active" : ""}`}
                >
                  <FaUser />
                  <span className="nav-text">PROFILE</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => goToPage("/schedule")}
                  className={`nav-link ${activePage === "/schedule" ? "active" : ""}`}
                >
                  <FaCalendarAlt />
                  <span className="nav-text">SCHEDULE</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={handleLogout}
                  className={`nav-link ${activePage === "/" ? "active" : ""}`}
                >
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
          {/* Main content goes here */}
        </div>
      </div>
    </div>
  );
}
