import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TopNavbar from "../TopNavBar"; 
import Sidebar from "../Sidebar"; 
import LoadingScreen from "../LoadingScreen"; 
import "../../../sass/components/_profile.scss";

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
      {loading && <LoadingScreen />} {/* Use the imported LoadingScreen component */}
      {isSidebarOpen && <Sidebar activePage={activePage} goToPage={goToPage} handleLogout={handleLogout} />}
      <div className="main-content">
        <TopNavbar toggleSidebar={toggleSidebar} />
        <div className="profile-content">
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
