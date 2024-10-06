import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./HomePage/Home"; // Home component
import Registration from "./RegistrationPage/Registration"; // Registration component
import Profile from "./ProfilePage/Profile"; // Profile component
import Schedule from "./SchedulePage/Schedule"; // Schedule component
import Login from "./LoginPage/Login"; // Login component

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login is the default route */}
        <Route path="home" element={<Home />} /> {/* Home page after login */}
        <Route path="registration" element={<Registration />} /> {/* Registration page */}
        <Route path="profile" element={<Profile />} /> {/* Profile page */}
        <Route path="schedule" element={<Schedule />} /> {/* Schedule page */}
      </Routes>
    </Router>
  );
}

if (document.getElementById("root")) {
  ReactDOM.render(<Routers />, document.getElementById("root"));
}
