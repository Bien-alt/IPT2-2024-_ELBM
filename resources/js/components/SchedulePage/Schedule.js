import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUserGraduate, FaUser, FaCalendarAlt, FaSignOutAlt, FaBars } from "react-icons/fa";
import logo from "../../../images/logo_1.png";
import "../../../sass/components/_schedule.scss"; // Adjust the path as needed

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

export default function Schedule() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState(location.pathname);
  const [schedule, setSchedule] = useState([]);
  const [formData, setFormData] = useState({
    day: "",
    time: "",
    subject: "",
    room: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSchedule((prevSchedule) => [...prevSchedule, formData]);
    setFormData({
      day: "",
      time: "",
      subject: "",
      room: "",
    });
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
          <h2>Schedule Page</h2>
        </div>
        <div className="schedule-content">
          <h3>Add Schedule Information</h3>
          <form onSubmit={handleSubmit} className="schedule-form">
            <div>
              <label>Day:</label>
              <select name="day" value={formData.day} onChange={handleInputChange} required>
                <option value="">Select a day</option>
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="scheduleTime">Select Time:</label>
              <input
                type="time"
                id="scheduleTime"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="subject">Subject Name:</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="room">Room:</label>
              <input
                type="text"
                name="room"
                value={formData.room}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit">Add Schedule</button>
            </div>
          </form>

          <h3>Current Schedule</h3>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Subject</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              {schedule.length > 0 ? (
                schedule.map((item, index) => (
                  <tr key={index}>
                    <td>{item.day}</td>
                    <td>{item.time}</td>
                    <td>{item.subject}</td>
                    <td>{item.room}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>No schedule available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
