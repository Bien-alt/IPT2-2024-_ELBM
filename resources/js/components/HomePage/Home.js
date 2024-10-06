import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../sass/components/HomePage/_home.scss";
import TopNavbar from "../TopNavBar"; 
import Sidebar from "../Sidebar";      
import LoadingScreen from "../LoadingScreen"; 


// Sample data for Recent Activity
const recentActivities = [
  { name: "John Doe", id: "12345", role: "Student", time: "10:30 AM" },
  { name: "Jane Smith", id: "67890", role: "Admin", time: "11:00 AM" },
];

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

  return (
    <div className="home-container">
      {loading && <LoadingScreen />}
      {isSidebarOpen && <Sidebar activePage={activePage} goToPage={goToPage} handleLogout={handleLogout} />}
      <div className="main-content">
        <TopNavbar toggleSidebar={toggleSidebar} />
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
