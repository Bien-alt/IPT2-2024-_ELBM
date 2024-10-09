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
  const [sortRole, setSortRole] = useState(''); // Sorting state
  const [originalProfileData] = useState([ // Original, unmodified data
    { name: "John Doe", id: 12345, role: "Student" },
    { name: "Jane Smith", id: 12346, role: "Teacher" },
    { name: "Tom Brown", id: 12347, role: "Admin" },
    { name: "Emma Wilson", id: 12348, role: "Student" },
    { name: "Lara Croft", id: 12349, role: "Teacher" }
  ]);

  const [profileData, setProfileData] = useState(originalProfileData); // Displayed data

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

  // Function to handle sorting based on role
  const handleSort = (role) => {
    setSortRole(role);
    if (role) {
      // Filter the profile data based on the selected role
      const sortedData = originalProfileData.filter(profile => profile.role === role);
      setProfileData(sortedData);
    } else {
      // Reset to show all data
      setProfileData(originalProfileData);
    }
  };

  return (
    <div className="home-container">
      {loading && <LoadingScreen />} 
      {isSidebarOpen && <Sidebar activePage={activePage} goToPage={goToPage} handleLogout={handleLogout} />}
      <div className="main-content">
        <TopNavbar toggleSidebar={toggleSidebar} />
        <div className="profile-content">
          <h3>Profile Information</h3>
          <div className="button-group"> {/* Styled with dark blue buttons */}
            <button className={sortRole === 'Student' ? 'active' : ''} onClick={() => handleSort('Student')}>
              Students
            </button>
            <button className={sortRole === 'Teacher' ? 'active' : ''} onClick={() => handleSort('Teacher')}>
              Teachers
            </button>
            <button className={sortRole === 'Admin' ? 'active' : ''} onClick={() => handleSort('Admin')}>
              Admins
            </button>
            <button className={sortRole === '' ? 'active' : ''} onClick={() => handleSort('')}>
              Show All
            </button>
          </div>
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
              {profileData.map((profile, index) => (
                <tr key={index}>
                  <td>{profile.name}</td>
                  <td>{profile.id}</td>
                  <td>{profile.role}</td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
