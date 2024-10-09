import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./HomePage/Home"; 
import Registration from "./RegistrationPage/Registration"; 
import Profile from "./ProfilePage/Profile"; 
import Schedule from "./SchedulePage/Schedule"; 
import Login from "./LoginPage/Login"; 
import CourseSelection from "./SchedulePage/CourseSelection"; 

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login is the default route */}
        <Route path="home" element={<Home />} /> {/* Home page after login */}
        <Route path="registration" element={<Registration />} /> {/* Registration page */}
        <Route path="profile" element={<Profile />} /> {/* Profile page */}
        <Route path="schedule" element={<Schedule />} /> {/* Schedule page */}
        <Route path="course-selection" element={<CourseSelection />} /> {/* Course selection page */}
      </Routes>
    </Router>
  );
}

if (document.getElementById("root")) {
  ReactDOM.render(<Routers />, document.getElementById("root"));
}
